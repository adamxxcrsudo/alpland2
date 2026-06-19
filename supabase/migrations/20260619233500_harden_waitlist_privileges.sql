/*
# Harden waitlist table privileges

RLS policies define row access, but table privileges are another useful guardrail.
This keeps public browser roles insert-only for waitlist signups.
*/

REVOKE SELECT, UPDATE, DELETE ON TABLE waitlist FROM anon, authenticated;
GRANT INSERT ON TABLE waitlist TO anon, authenticated;

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE waitlist FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_waitlist" ON waitlist;
DROP POLICY IF EXISTS "anon_update_waitlist" ON waitlist;
DROP POLICY IF EXISTS "anon_delete_waitlist" ON waitlist;

DROP POLICY IF EXISTS "anon_insert_waitlist" ON waitlist;
CREATE POLICY "anon_insert_waitlist" ON waitlist FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    email = lower(trim(email))
    AND email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
    AND (rider_type IS NULL OR rider_type IN ('skier', 'snowboarder'))
  );
