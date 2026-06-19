# Database Setup Guide

This project stores waitlist signups in Supabase. The GitHub repository should never contain real email data, service-role keys, or a committed `.env` file.

## 1. Create a Supabase project

1. Sign in to Supabase and create a new project.
2. Save the project password somewhere private.
3. Wait for the project database to finish provisioning.

## 2. Find your public browser credentials

In Supabase, open **Project Settings > API** and copy:

- **Project URL**
- **anon public key**

These are the only Supabase values the frontend needs.

Do not use or publish the `service_role` key. The service-role key bypasses Row Level Security and must stay server-side only.

## 3. Configure local environment variables

Create a local `.env` file from the template:

```bash
cp .env.example .env
```

On Windows PowerShell, you can create it manually:

```powershell
Copy-Item .env.example .env
```

Then fill in:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

The `.env` file is ignored by git. Do not commit it.

## 4. Apply the database migrations

The required SQL files are in `supabase/migrations`:

1. `20260619215737_create_waitlist_table.sql`
2. `20260619231000_secure_waitlist_policies.sql`
3. `20260619233500_harden_waitlist_privileges.sql`

Apply all files in order.

### Option A: Supabase SQL editor

1. Open your Supabase project.
2. Go to **SQL Editor**.
3. Open each migration file from `supabase/migrations` in timestamp order.
4. Paste the full SQL into the editor and run it.
5. Continue until all three migrations above have run successfully.

### Option B: Supabase CLI

If you use the Supabase CLI, link the project and push migrations:

```bash
supabase link --project-ref your-project-ref
supabase db push
```

## 5. Confirm the table exists

In Supabase, go to **Table Editor** and confirm there is a `waitlist` table with these columns:

- `id`
- `email`
- `rider_type`
- `created_at`

## 6. Confirm Row Level Security is protecting emails

In Supabase, open **Authentication > Policies** or the table policy view for `waitlist`.

Expected result:

- Row Level Security is enabled.
- Public/anon users can `INSERT` waitlist rows.
- Public/anon users cannot `SELECT` waitlist rows.
- Public/anon users cannot `UPDATE` or `DELETE` waitlist rows.

The migrations intentionally drop `anon_select_waitlist`. That is what hides collected emails from public browser/API reads.

You can also verify policies in SQL Editor:

```sql
select policyname, cmd, roles
from pg_policies
where schemaname = 'public'
  and tablename = 'waitlist';
```

Expected policy result: an `INSERT` policy for public browser roles, and no `SELECT`, `UPDATE`, or `DELETE` policy.

## 7. Confirm table privileges are insert-only for browser roles

Run this in Supabase SQL Editor:

```sql
select grantee, privilege_type
from information_schema.role_table_grants
where table_schema = 'public'
  and table_name = 'waitlist'
  and grantee in ('anon', 'authenticated')
order by grantee, privilege_type;
```

Expected privilege result: `INSERT` only for `anon` and `authenticated`.

## 8. Test an insert from the website

Run the site locally:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, enter a test email, and submit the waitlist form.

Then check Supabase **Table Editor > waitlist** to confirm the row was created.

## 9. Test that public reads are blocked

A public select using the anon key should fail because there is no public select policy and no select table grant.

The app itself does not need read access. Duplicate emails are handled by the database `UNIQUE` constraint on `email`.

## 10. Configure GitHub/public deployment

Set these as deployment environment variables in your hosting provider:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

For GitHub Pages or another static host, these values are baked into the built JavaScript at build time. That is normal for the anon key, as long as Row Level Security stays enabled and the public policies remain insert-only.

## 11. Final public-repo checklist

Before uploading or publishing the repo publicly, confirm:

- `.env` is not committed.
- No `service_role` key appears anywhere in the repo.
- No exported email CSV or database dump is committed.
- `.bolt` is not present.
- All migrations in `supabase/migrations` have been applied to the live Supabase project.
- The site builds successfully with `npm run build`.

## Security model

The frontend can only use a public anon key. Email privacy comes from Supabase Row Level Security and table privileges, not from hiding the anon key.

Current intended policy:

- Anyone can submit an email to join the waitlist.
- Nobody using the public anon key can list, read, edit, or delete submitted emails.
- The website does not store emails in local storage, session storage, cookies, files, or GitHub.
- Admin access to emails should happen only inside Supabase with an authenticated project owner account.
