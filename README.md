# Alpline Landing Page

## Public deployment

Email addresses are stored only in Supabase, not in this GitHub repository or in browser storage. Keep real Supabase values out of git and provide them as deployment environment variables:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

The Supabase anon key is safe to expose in the browser only when Row Level Security is enabled. The waitlist migrations allow public inserts but do not allow public reads, updates, or deletes of collected emails. The final hardening migration also revokes public table privileges except `INSERT`.

For an existing Supabase project, apply all migrations in `supabase/migrations` so the corrective security migrations remove any old public read policy and keep browser roles insert-only.

See `DB_SETUP.md` for the full ordered database setup guide.
