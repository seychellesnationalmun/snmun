import Link from "next/link";
import { BRAND, asset } from "@/lib/branding";
export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div>
        <img src={asset("snmun-emblem.png")} alt="" width="62" height="62" className="footer-emblem" />
        <p className="footer-title">{BRAND.name}</p>
        <p className="footer-slogan">{BRAND.slogan}</p>
      </div>
      <div className="footer-links"><span>Explore</span><Link href="/">Home</Link><Link href="/about">About SNMUN</Link><Link href="/#programmes">Programmes</Link><Link href="/#participation">Participation</Link></div>
      <div className="footer-links"><span>Correspondence</span><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a><span className="footer-country">Republic of Seychelles</span></div>
      <div className="footer-foundation"><span>Institutional affiliation</span><a href={BRAND.foundationUrl} target="_blank" rel="noopener noreferrer"><strong>Tyler Nicholas Foundation</strong><span>For the Youth. For the Islands. For Tomorrow.</span></a></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved. A programme of the <a href={BRAND.foundationUrl} target="_blank" rel="noopener noreferrer">{BRAND.foundationName}</a>.</span><span>Official institutional website</span></div>
  </footer>;
}
