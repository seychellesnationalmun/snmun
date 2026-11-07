# SNMUN Management Portal Specification — Baseline

SNMUN is a programme of the Tyler Nicholas Foundation. One private Management Portal will serve the Chairperson, Deputy Chairperson and Secretary, with TNF oversight only through explicitly approved authorization. There are no delegate or public visitor accounts.

## Main screens
- Overview: website status, task queue, drafts, enquiries, recent actions.
- Website Builder: reorder hero, rich text, image, news, events and CTA blocks with preview.
- Pages & Content: create, edit, duplicate, archive, schedule, restore.
- Announcements: public alert bars with priority, activation, expiration and approval.
- Annual Sessions: year, title, operational status, separate public visibility, committees, country allocations, documents and awards.
- Events: calendar, registration status, details and postponement.
- News & Media: stories, statements, releases, speeches, galleries.
- Forms & Submissions: six existing Google Forms links and protected submission imports.
- Institutions: institution profiles, participation and contacts.
- Delegates & Records: restricted information, eligibility and statuses.
- Partners: internal registers and approved public acknowledgements.
- Media & Documents: classified public and private storage.
- Enquiries & Email: correspondence queue, assignments and templates.
- Analytics & Reports: privacy-aware reporting and authorised exports.
- Staff & Permissions: approved staff identity, MFA and per-action grants.
- Audit & History: trace changes, content revisions, restorations.
- Website Settings: identity, menus, social links, contact, SEO, maintenance.
- Backups & Maintenance: controlled restoration and emergency operations.

## Security gates
- Anonymous visitors can read published public content only.
- Internal drafts, unconfirmed sessions and restricted applicant data must not be exposed through public API, pages, previews, metadata, or storage URLs.
- Every exposed table uses RLS. A logged-in identity alone does not confer staff access.
- MFA is required for all administrators. Server-side permission checks are mandatory on all reads and writes; visual controls are not authorization.
- Content flow: Draft → Review → Approval → Published/Scheduled → Archived.
- Approved content changes require renewed review. All administrative mutations are auditable.
- The Inaugural Session 2027 remains hidden until formally approved.
- Sensitive records require retention, deletion and export permissions.
- No active database, login or confidential data storage is included in the current scaffold.

## Proposed initial data domains
CMS: pages, page_versions, page_blocks, navigation_menus, site_settings, announcements, redirects.
Programmes: annual_sessions, session_committees, countries, institutions, delegations, delegate_records, events.
Editorial: news_posts, media_assets, documents, partners.
Operations: forms, submissions, contact_enquiries.
Security: staff_profiles, staff_permissions, publication_approvals, audit_logs.

## Required before production
Provision Supabase environment; verify SQL migrations and RLS; implement invite-only staff provisioning and MFA; validate role matrix; enable audited CMS publishing; test anonymous visibility and draft suppression; set backups and restoration procedures; test accessible responsive UI and deploy only after authorized approval.
