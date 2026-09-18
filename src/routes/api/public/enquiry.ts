import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { notifyTeamOfEnquiry } from "@/lib/enquiry.server";

/**
 * Public enquiry intake.
 *
 * `/api/public/*` bypasses site auth on published sites, so everything the
 * caller sends is validated here before it touches the database or the inbox.
 * `company` is a honeypot: real visitors never fill it in, bots usually do.
 */
const enquirySchema = z.object({
  name: z.string().trim().min(2).max(120),
  contact: z.string().trim().min(3).max(160),
  postcode: z.string().trim().max(12).optional(),
  service: z.string().trim().min(2).max(60),
  notes: z.string().trim().max(2000).optional(),
  company: z.string().max(0).optional(),
});

const GENERIC_FAILURE = "We couldn't send that just now — please try again or email us.";

function json(body: unknown, status = 200) {
  return Response.json(body, { status });
}

async function insertBookingRequest(row: Record<string, unknown>) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  const client = supabaseAdmin as unknown as {
    from: (table: "booking_requests") => {
      insert: (values: Record<string, unknown>) => Promise<{ error: { message: string } | null }>;
    };
  };

  const { error } = await client.from("booking_requests").insert(row);
  return error;
}

export const Route = createFileRoute("/api/public/enquiry")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const origin = request.headers.get("origin");
        const host = request.headers.get("host");
        if (origin && host && !origin.startsWith(`http://${host}`) && !origin.startsWith(`https://${host}`)) {
          return json({ error: GENERIC_FAILURE }, 403);
        }

        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return json({ error: GENERIC_FAILURE }, 400);
        }

        const parsed = enquirySchema.safeParse(payload);
        if (!parsed.success) {
          return json({ error: GENERIC_FAILURE }, 400);
        }

        const { company, ...values } = parsed.data;
        if (company) {
          // Honeypot tripped: pretend it worked so the bot learns nothing.
          return json({ ok: true });
        }

        const insertError = await insertBookingRequest(values);
        if (insertError) {
          console.error("[enquiry] insert failed:", insertError.message);
          return json({ error: GENERIC_FAILURE }, 500);
        }

        // The request is safe in the database either way, so a delivery problem
        // must not turn into a lost booking for the client.
        const delivery = await notifyTeamOfEnquiry(values);
        if (!delivery.sent) {
          console.warn("[enquiry] team notification not sent:", delivery.reason);
        }

        return json({ ok: true, emailed: delivery.sent });
      },
    },
  },
});
