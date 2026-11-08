-- SNMUN Management Portal: APPROVED STAFF ACTIVATION
-- Run ONLY after confirming ownership of the Auth account and authorising its staff role.
-- Replace the placeholder UUID. Never grant a role based on an unchecked email match.
-- Must be executed by a Supabase database administrator, not by a browser client.
BEGIN;
DO $activate$
DECLARE
 v_user uuid := '00000000-0000-0000-0000-000000000000'; -- REPLACE with verified authorised auth.users.id
 v_staff uuid;
 v_role uuid;
BEGIN
 IF v_user = '00000000-0000-0000-0000-000000000000'::uuid THEN
   RAISE EXCEPTION 'Stop: replace the placeholder with the verified, approved Auth user UUID';
 END IF;
 IF NOT EXISTS (SELECT 1 FROM auth.users u WHERE u.id=v_user AND u.email_confirmed_at IS NOT NULL) THEN
   RAISE EXCEPTION 'This Auth user does not exist or has not verified their email';
 END IF;
 SELECT id INTO v_role FROM administration.staff_roles WHERE code='chairperson' AND is_enabled;
 IF v_role IS NULL THEN RAISE EXCEPTION 'Chairperson role not installed'; END IF;
 INSERT INTO administration.staff_profiles(user_id,display_name,email,position_title,status)
 SELECT u.id,'SNMUN Chairperson',u.email,'Chairperson','active' FROM auth.users u WHERE u.id=v_user
 ON CONFLICT(user_id) DO UPDATE SET status='active',updated_at=now()
 RETURNING id INTO v_staff;
 INSERT INTO administration.staff_role_assignments(staff_id,role_id)
 VALUES(v_staff,v_role)
 ON CONFLICT(staff_id,role_id) DO UPDATE SET revoked_at=NULL;
END $activate$;
COMMIT;
-- After activation, sign in with your approved Supabase Auth credentials.
-- Set up and verify an authenticator factor; database access requires AAL2.
