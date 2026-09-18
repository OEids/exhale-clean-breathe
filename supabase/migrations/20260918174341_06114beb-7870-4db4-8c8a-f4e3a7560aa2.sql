CREATE TABLE public.booking_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  contact text NOT NULL,
  postcode text,
  service text NOT NULL DEFAULT 'Regular home clean',
  notes text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.booking_requests TO anon;
GRANT SELECT ON public.booking_requests TO authenticated;
GRANT ALL ON public.booking_requests TO service_role;

ALTER TABLE public.booking_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Visitors can send a booking request" ON public.booking_requests
  FOR INSERT TO anon
  WITH CHECK (
    char_length(name) BETWEEN 1 AND 200
    AND char_length(contact) BETWEEN 1 AND 200
    AND char_length(service) BETWEEN 1 AND 120
    AND (postcode IS NULL OR char_length(postcode) <= 20)
    AND (notes IS NULL OR char_length(notes) <= 2000)
  );

CREATE POLICY "Signed-in team can read booking requests" ON public.booking_requests
  FOR SELECT TO authenticated
  USING (true);