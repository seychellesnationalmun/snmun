# SNMUN Website Development

This folder contains the initial Next.js public website foundation. The existing repository-root index.html remains the active maintenance site. Do not deploy this development folder until approved.

Run locally: install Node.js 22+, then npm install, npm run dev. The URL is http://localhost:3000.

The homepage and About page are currently static content with reusable components. Official assets are temporarily read from the existing repository assets directory via the raw GitHub URL configured in src/lib/branding.ts. Move them to local public/assets before launching.

The private portal entry at /admin is intentionally locked; /admin/overview returns 404. No Supabase project is connected and no confidential storage or authentication is active. Never upload personal records to this scaffold.

Next development milestone: Supabase environments, staff-only authentication with MFA, audited RLS policies, CMS tables, approved publication workflows, and admin permission checks. The Inaugural Session 2027 remains unconfirmed and unpublished.
