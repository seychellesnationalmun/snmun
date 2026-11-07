import Link from "next/link";
import { brand } from "@/lib/brand";
export const metadata = { title: "Management Portal (Restricted)", robots: { index: false, follow: false } };
/** CLOSED BY DESIGN: no data, no admin login, no accounts until Supabase authorization is implemented. */
export default function Admin(){return <main className="admin-cover"><div className="admin-cover-card"><p className="section-index">SNMUN / RESTRICTED ACCESS</p><h1>Management Portal</h1><p>This restricted area is being prepared for authorised programme personnel. Administrative access will only be enabled after identity verification, multifactor authentication, and permission policies have been implemented and tested.</p><p>For administrative enquiries, contact <a href={`mailto:${brand.email}`}>{brand.email}</a>.</p><Link href="/">Return to public website ↗</Link></div></main>}
