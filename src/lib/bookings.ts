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
 * Saves a booking request. The generated Database types module does not list the
 * table yet, so the call goes through a narrow typed shim rather than `any`.
 */
export async function submitBookingRequest(
  values: BookingRequestValues,
): Promise<BookingResult> {
  if (!values.name || !values.contact) {
    return { error: "Please add your name and a way to reach you." };
  }

  const client = supabase as unknown as {
    from: (table: "booking_requests") => {
      insert: (row: BookingRequestValues) => Promise<{ error: { message: string } | null }>;
    };
  };

  try {
    const { error } = await client.from("booking_requests").insert(values);
    if (error) return { error: GENERIC_FAILURE };
    return { error: null };
  } catch {
    return { error: GENERIC_FAILURE };
  }
}
