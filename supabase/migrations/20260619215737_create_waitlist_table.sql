/*
# Create waitlist table for Alpline pre-launch landing page

1. New Tables
- `waitlist`
  - `id` (uuid, primary key)
  - `email` (text, not null, unique) - the email address of the person joining the waitlist
  - `rider_type` (text) - optional: 'skier' or 'snowboarder'
  - `created_at` (timestamp)
2. Security
- Enable RLS on `waitlist`.
- Allow public users to insert a valid waitlist signup.
- Do not allow public reads, updates, or deletes of collected emails.
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  rider_type text CHECK (rider_type IS NULL OR rider_type IN ('skier', 'snowboarder')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE waitlist FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_waitlist" ON waitlist;

DROP POLICY IF EXISTS "anon_insert_waitlist" ON waitlist;
CREATE POLICY "anon_insert_waitlist" ON waitlist FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    email = lower(trim(email))
    AND email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
    AND (rider_type IS NULL OR rider_type IN ('skier', 'snowboarder'))
  );
