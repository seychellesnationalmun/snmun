# SNMUN Private Management Portal — Initial Engineering Specification

This document translates the approved Master Plan v2.0 into the initial implementation boundaries. It is a work-in-progress specification, not an implemented dashboard.

## Roles

- Chairperson — designated content/publication approval and programme oversight authority, subject to TNF governance.
- Deputy Chairperson — operational editing and delegated approvals where explicitly authorised.
- Secretary — content drafting, records maintenance and routine administrative workflows within defined permissions.
- TNF oversight access — only if separately approved and assigned; never automatically unrestricted.

All permissions must be enforced on the server/database, not just hidden in the interface. MFA and immediate role revocation are required.

## Required module screens

| Menu | Screen purpose | Core controls |
| --- | --- | --- |
| Dashboard | Administrative summary | Published status, drafts, pending approvals, enquiries, tasks, event overview |
| Website Builder | Controlled component-based editor | Section library, reorder, draft, preview, publish |
| Pages & Content | Site structure | Create, edit, duplicate, archive, redirect, version history |
| Announcements | Global communication | Priority, audience, style, dates, active toggle, approval |
| Annual Sessions | Multi-year programme | Year, operational state, visibility, schedules, committees, documents |
| Events & Activities | Scheduling | Event creation, venue, dates, cancellation/postponement |
| News & Media | Editorial system | Articles, releases, statements, speeches, galleries |
| Forms & Submissions | Application management | Six approved Google Forms links, open/closed, owner, optional secure import |
| Institutions | School and institution records | Contacts, participation status, delegation links |
| Delegates & Records | Personal participant records | Restricted status, eligibility, document references, retention |
| Partners | Internal and public recognition | Partner status, approved public acknowledgement |
| Media & Documents | Assets and file classification | Upload, private/public, replacements, revisions |
| Enquiries & Email | Correspondence | Status, assignments, reply history |
| Analytics & Reports | Management reporting | Website metrics and authorised exports |
| Staff & Permissions | Account administration | Invite, revoke, MFA, role grants |
| Audit & History | Accountability | Actor, action, object, timestamp, revisions |
| Settings | Global website identity | Branding, menus, footer, SEO, social links |
| Backups & Maintenance | Recovery and emergency controls | Maintenance mode, backup status, restore testing |

## Publication workflow

Draft → Review → Approval → Scheduled/Published → Archived. Revisions to approved material must reset approval. No unconfirmed session details may leak into public pages, sitemaps, metadata, forms, documents or search.

## Data boundaries

- Public: explicitly published pages, announcements, public events, approved partner profiles, media and downloadable resources.
- Internal: drafts, unpublished plans, institutional correspondence, unconfirmed annual sessions.
- Restricted personal: applications, DOB, documents, safeguarding-related records, evaluations and contact information.

Use Supabase Row Level Security on all exposed tables and restrict Storage buckets appropriately. `authenticated` alone must never allow broad access. Publishing permissions should be action-specific, with auditable server mutations and stable approval records.

## 2027 annual session

Start as internal and **unconfirmed**; operational status and public visibility must be separate fields. The public site should not provide `/sessions/2027` until authorised approval and publication.

## Development phases

1. Foundation and static public content — prototype included in this ZIP.
2. Supabase provisioning, staff identities, MFA, RLS and audit.
3. Dynamic CMS, navigation, website builder and publishing.
4. Institutional content and remaining public pages.
5. Dynamic annual sessions and announcements.
6. Operations: forms, institutions, delegates, partners, documents and enquiries.
7. Analytics, reporting and automations.
8. Accessibility, performance, security and recovery testing.
9. Controlled official deployment.

For complete requirements, consult `SNMUN-Website-Master-Plan-v2.txt`.
