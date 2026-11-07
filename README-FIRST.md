# SNMUN Official Website — Homepage Delivery

**Homepage version 1.0 — 7 November 2026**

This package is the new **Home page only** with the approved institutional navigation/footer, actual cinematic hero video and six agreed homepage sections. Supporting navigation destinations are simple **in-preparation placeholders**, NOT approved page content. The 2027 draft session is not published or linked.

## Start here

**Option A — Quick preview without installing anything:** Open `index.html` in Chrome/Edge/Firefox. CSS, images and video use relative paths. Local links to pages are automatically converted from clean URLs to folder `index.html` paths, if JavaScript is enabled. Live Supabase content might not load from the local file protocol in some browsers; this does not affect the design.

**Option B — Recommended real-site preview:** With Python installed, from inside the `SNMUN-Homepage/` folder run `python -m http.server 8080` and browse to `http://localhost:8080/`. This tests genuine `/about/` URLs without `.html` in the address bar.

**Option C — Upload to GitHub Pages or a static host:** Upload the CONTENTS of `SNMUN-Homepage/` to the web root. `about/index.html` appears at `/about/` (hosting must resolve directory indexes). When deploying to a GitHub Pages project subpath rather than your own domain, configure a proper base path or custom domain; this package assumes the site is hosted at `/`.

### What's included

- `index.html` — complete homepage
- `assets/video/snmun-homepage-hero.mp4` — exact supplied 28-second 1920×720 video
- `assets/video/snmun-homepage-mobile.mp4` — optimised smaller mobile version
- `assets/images/` — transparent logos extracted from your previous website package plus still frames from your supplied video
- `assets/css/site.css`, `assets/js/site.js`, `assets/js/config.js` — responsive style, navigation, safe Supabase public feed and social URLs
- `about/index.html`, `programmes/index.html`, etc. — clearly marked **placeholder pages** for navigation testing
- `supabase/01_OPTIONAL_PUBLIC_HOMEPAGE_FEED.sql` — read-only publishing-filtered RPC to serve approved news, events and announcements
- `PAGES-AND-ROUTES.md` — complete included routes

## Supabase connection

The `assets/js/config.js` file includes the **public anon key** and API hostname you supplied. Public/anon keys are intentionally usable in browser code; never put a `service_role` key, secret API key, database password or access token in public files.

Your source tables are currently in private schemas and protected by RLS. The browser **cannot and must not** query them directly. To enable live approved-content on the homepage, run `supabase/01_OPTIONAL_PUBLIC_HOMEPAGE_FEED.sql` once in the project's SQL Editor. This adds a **public read-only RPC** returning only fields from published and eligible records. It changes no existing source-table permissions and performs no insert/update/delete. Do **not** expose `cms`, `confidential`, `administration`, `programme`, `editorial`, or `relations` schemas to the anonymous API.

Until that RPC exists, the homepage still works and displays accurate, editorially appropriate empty states. It is **not** an error if the homepage currently shows no news or events: none are approved for public display yet.

**Important security:** This is a narrow SECURITY DEFINER function, intentionally callable by anonymous visitors to read *published*, whitelisted content. Review the code before installing; do not add private fields to the returned JSON. Public content approval and data-entry workflows are still to be built in the Management Portal.

## Social accounts

Open `assets/js/config.js` and paste each verified **full HTTPS official profile URL** under `socialAccounts`. Until then, circles appear as non-clickable design placeholders; they never link to incorrect or unverified accounts.

## Other notes

- The public contact email has been corrected to **info@snmun.online**.
- The Tyler Nicholas Foundation link is https://tyler-nicholas-foundation.online.
- The hero video has no sound in this presentation; site playback is muted, inline and looped, with image fallback for reduced motion, low-data and blocked autoplay.
- This preview deliberately sets `noindex,nofollow` on pages. Remove this before public launch after validating all content, privacy/legal copy and route completion.
- The final site's social URLs, legal documents, individual subpages and user-visible publishing flows will be completed in later stages; they are not misrepresented as finished.
- We did not make changes to your live Supabase project in preparing this website ZIP.

## Quick mobile QA checklist

Test widths 320, 375, 390, 430, 768, 1024, 1280, 1440. No document-level horizontal overflow or horizontal 'white-screen' swiping is intended. Mobile navigation expands vertically and scrolls internally. Video scales to viewport and uses poster when autoplay is unavailable.
