import { supabase } from "@/integrations/supabase/client";

export type BookingRequestValues = {
  name: string;
  contact: string;
  postcode?: string | undefined;
  service: string;
  notes?: string | undefined;
};

export type BookingResult = { error: string | null };

const GENERIC_FAILURE = "We couldn't send that just now — please try again or email us.";

/**
 * Sends an enquiry to the business: the request is validated, saved and
 * forwarded to the team's inbox by the server route behind this call.
 */
export async function submitBookingRequest(
  values: BookingRequestValues,
): Promise<BookingResult> {
  if (!values.name || !values.contact) {
    return { error: "Please add your name and a way to reach you." };
  }

  try {
    const response = await fetch("/api/public/enquiry", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) return { error: GENERIC_FAILURE };
    return { error: null };
  } catch {
    return { error: GENERIC_FAILURE };
  }
}
