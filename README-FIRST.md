# Seychelles National Model United Nations — Management Portal v1.0

## What's included

- `/admin/index.html` — official staff login and responsive management dashboard
- `/admin/assets/portal.css` — full blue/white institutional styles
- `/admin/assets/portal.js` — Supabase Auth (password + authenticator MFA), secure RPC integration, drafts and editors
- `/admin/assets/snmun-emblem.png` and `snmun-wordmark.png` — identity assets
- `STAFF-ACTIVATION.sql` — administrator-reviewed steps to assign an APPROVED existing Supabase Auth account to an existing role

## Install

1. Upload the *admin folder* to the public website root (so your site serves `https://snmun.online/admin/`). Use HTTPS.
2. The database-side RPC `public.snmun_portal(text,text,jsonb)` has already been installed on Supabase project `yavigljdyiazssyhgsqz` (SNMUN WEBSITE).
3. Ensure you control the existing Supabase Auth email identity and that it is verified. Never enter your password into chat.
4. In Supabase Dashboard > Authentication > Users, confirm which user is the **authorised** Chairperson account. Do **not** automatically grant administrator access based solely on an email resembling a staff name.
5. Review `STAFF-ACTIVATION.sql`, replace the placeholder with the verified, authorised user UUID and run it once in Supabase SQL Editor. This is a privileged administrative action.
6. In the portal, sign in using your Supabase Auth password and enrol/verify an authenticator app if requested. You will be denied access until your MFA assurance level is AAL2.
7. For additional staff, use the existing `deputy_chairperson` and `secretary` role codes only after the required approval and invitation workflows.
8. In Supabase Auth settings, enable leaked-password protection, and configure appropriate password policies, MFA and sign-in protections.

## Current implementation

**Connected to live Supabase**: sign-in, TOTP MFA, private staff identity and permissions, dashboard counters, listings, page drafts and block editor, announcements, articles, event drafts, session planning, forms link editor, CMS setting edits, internal CMS page approval/publication (where permission allows), and admin audit listings. These actions communicate via a narrow `public.snmun_portal` function that uses the existing restricted schemas and RLS.

**Restricted / read-only in this version**: detailed staff provisioning, partner/institution creation, media uploads, safeguarding, delegate confidential data, enrolments, approvals for non-page content, analytics, redirects, automatic backups, external email sending, complex forms, bulk imports. These require additional audited workflows, not fake in-browser controls.

**Public-site integration still needed**: publishing a CMS page changes its database status but will not update static HTML until a vetted public content feed and the static public frontend are wired together. This package is **the management portal**, not a replacement for the public website.

**No active staff provisioned automatically**: the project had an Auth user but zero `administration.staff_profiles` entries when inspected. Do not confuse a successful Auth password login with authorisation. A verified owner/admin must complete the setup before this portal will grant access.

**Session caution**: Inaugural Session 2027 is draft/hidden. This portal cannot confirm it or publish it from the basic planning editor.

## Deployment and security

- Public browser code contains only a legacy public `anon` key, not a service-role secret. RLS and the RPC enforce row and action-level authorisation. Consider replacing it with the project's modern publishable key as part of deployment.
- The `admin/` HTML is public for delivery but the dashboard/data are not. No secrets should live in browser source.
- CDN loaded for `@supabase/supabase-js@2.86.0` (version-pinned). Test connectivity to jsDelivr in your target environment; for maximum reliability host audited dependencies locally or bundle them at deployment.
- Set a strict CSP, security headers, site-wide HTTPS and proper cache policies on the web host before production.
- Authorise and test each staff permission, MFA challenge, CMS draft, publication workflow and RLS policy in a staging environment.
- Do not use browser code to store PII, credentials, OAuth secrets, service keys, or session backups.

## Notes on release 1

Some advanced sidebar modules are deliberately read-only, and the public CMS feed remains a separate integration. The portal is usable for initial authenticated website management only after staff activation.
