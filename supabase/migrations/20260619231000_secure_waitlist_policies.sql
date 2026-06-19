/*
# Secure existing waitlist policies

This migration is intentionally corrective: projects that already ran the first
waitlist migration need an additional migration to remove public email reads.
*/

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE waitlist FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_waitlist" ON waitlist;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'waitlist_rider_type_check'
      AND conrelid = 'waitlist'::regclass
  ) THEN
    ALTER TABLE waitlist
      ADD CONSTRAINT waitlist_rider_type_check
      CHECK (rider_type IS NULL OR rider_type IN ('skier', 'snowboarder'));
  END IF;
END $$;

DROP POLICY IF EXISTS "anon_insert_waitlist" ON waitlist;
CREATE POLICY "anon_insert_waitlist" ON waitlist FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    email = lower(trim(email))
    AND email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
    AND (rider_type IS NULL OR rider_type IN ('skier', 'snowboarder'))
  );
