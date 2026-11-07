-- SNMUN PUBLIC HOMEPAGE FEED — OPTIONAL, ADDITIVE, READ-ONLY API
-- Run ONCE in Supabase SQL Editor after checking existing project and policies.
-- Creates ONE carefully curated RPC; does not expose confidential schemas or
-- grant anonymous SELECT to any private table. No news/announcements/events
-- appear unless explicitly published with valid publishing timestamps.
-- This intentionally uses SECURITY DEFINER with fixed schema-qualified reads,
-- zero caller-controlled parameters, and a restricted JSON return structure.
BEGIN;
CREATE OR REPLACE FUNCTION public.snmun_homepage_feed()
RETURNS jsonb
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $function$
 SELECT pg_catalog.jsonb_build_object(
   'announcements',COALESCE((
     SELECT pg_catalog.jsonb_agg(pg_catalog.jsonb_build_object(
       'message',a.message,
       'style',a.style,
       'button_label',a.button_label,
       'button_url',a.button_url
     )) FROM (
       SELECT message,style,button_label,button_url
       FROM cms.announcements
       WHERE status = 'published'
         AND audience = 'public'
         AND approved_by IS NOT NULL
         AND (starts_at IS NULL OR starts_at <= pg_catalog.now())
         AND (ends_at IS NULL OR ends_at > pg_catalog.now())
       ORDER BY priority DESC, created_at DESC LIMIT 3
     ) a
   ), '[]'::jsonb),
   'news',COALESCE((
     SELECT pg_catalog.jsonb_agg(pg_catalog.jsonb_build_object(
       'title',p.title,
       'slug',p.slug,
       'excerpt',p.excerpt,
       'content_type',p.content_type,
       'published_at',p.published_at
     )) FROM (
       SELECT title,slug,excerpt,content_type,published_at
       FROM editorial.editorial_posts
       WHERE publication_status = 'published'
         AND published_at IS NOT NULL
         AND published_at <= pg_catalog.now()
       ORDER BY published_at DESC, created_at DESC LIMIT 3
     ) p
   ), '[]'::jsonb),
   'events',COALESCE((
     SELECT pg_catalog.jsonb_agg(pg_catalog.jsonb_build_object(
       'title',e.title,
       'starts_at',e.starts_at
     )) FROM (
       SELECT ev.title, pg_catalog.min(o.starts_at) AS starts_at
       FROM programme.events ev
       JOIN programme.event_occurrences o ON o.event_id = ev.id
       WHERE ev.publication_status = 'published'
         AND ev.published_at IS NOT NULL
         AND ev.published_at <= pg_catalog.now()
         AND o.is_cancelled = false
         AND o.starts_at >= pg_catalog.now()
         AND (ev.session_id IS NULL OR EXISTS (
             SELECT 1 FROM programme.annual_sessions s
             WHERE s.id = ev.session_id AND s.publication_status='published'
               AND s.published_at IS NOT NULL AND s.published_at <= pg_catalog.now()
         ))
       GROUP BY ev.id,ev.title
       ORDER BY pg_catalog.min(o.starts_at) ASC LIMIT 3
     ) e
   ), '[]'::jsonb)
 );
$function$;
REVOKE ALL ON FUNCTION public.snmun_homepage_feed() FROM PUBLIC;
GRANT USAGE ON SCHEMA public TO anon,authenticated;
GRANT EXECUTE ON FUNCTION public.snmun_homepage_feed() TO anon,authenticated;
COMMIT;

-- Confirm the public function produces an object with three arrays:
SELECT public.snmun_homepage_feed() AS homepage_feed;
