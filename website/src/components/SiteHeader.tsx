import Link from "next/link";
import { BRAND, asset } from "@/lib/branding";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#programmes", label: "Programmes" },
  { href: "/#participation", label: "Participation" },
  { href: "/#updates", label: "Updates" },
];
export default function SiteHeader() {
  return <>
    <div className="foundation-strip">
      <div className="container foundation-strip-inner">
        <span className="foundation-identity">A programme of the <a href={BRAND.foundationUrl} target="_blank" rel="noopener noreferrer">Tyler Nicholas Foundation</a></span>
        <span className="foundation-caption">Seychelles · Youth Diplomacy & Leadership</span>
      </div>
    </div>
    <header className="site-header">
      <div className="container header-row">
        <Link className="brand-lockup" href="/" aria-label="SNMUN Home">
          <img className="brand-mark" src={asset("snmun-emblem.png")} width="55" height="55" alt="" />
          <span><strong>SEYCHELLES</strong><small>MODEL UNITED NATIONS</small></span>
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">{links.map(link => <Link key={link.label} href={link.href}>{link.label}</Link>)}</nav>
        <a href={`mailto:${BRAND.email}`} className="header-contact">Contact Secretariat <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  </>;
}
