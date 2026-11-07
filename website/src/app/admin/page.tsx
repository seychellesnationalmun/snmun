import Link from "next/link";
import { BRAND } from "@/lib/branding";
export const metadata = { title: "Private Management Portal", robots: { index: false, follow: false } };
export default function AdminEntry() {
 return <main className="admin-locked"><section className="admin-locked-panel"><p className="section-kicker">SNMUN / RESTRICTED ACCESS</p><h1>Management Portal</h1><p>Restricted to authorised programme personnel. The management environment remains closed until institutional authentication, multifactor verification and staff permissions are configured.</p><p>For access arrangements, contact the Secretariat at <a href={"mailto:"+BRAND.email}>{BRAND.email}</a>.</p><Link href="/">Return to public website</Link></section></main>;
}
