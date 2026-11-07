"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/lib/brand";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#programmes", label: "Programmes" },
  { href: "/#participation", label: "Participation" },
  { href: "/#updates", label: "News & Updates" },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <>
    <div className="topline"><div className="container topline-inner"><span>A programme of the <a href={brand.foundationUrl} target="_blank" rel="noopener noreferrer">Tyler Nicholas Foundation</a></span><span className="jurisdiction">REPUBLIC OF SEYCHELLES · YOUTH DIPLOMACY</span></div></div>
    <header className="site-header"><div className="container header-inner">
      <Link href="/" className="identity" aria-label="Seychelles National Model United Nations — Home"><img src="/assets/snmun-emblem.png" width="55" height="55" alt="" /><span className="wordmark"><strong>SEYCHELLES</strong><small>MODEL UNITED NATIONS</small></span></Link>
      <button className="nav-toggle" aria-label="Toggle navigation" aria-controls="primary-nav" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
      <nav className={`primary-nav ${open ? "is-open" : ""}`} id="primary-nav" aria-label="Primary navigation">
        {links.map((link) => <Link key={link.label} href={link.href} className={pathname === link.href ? "active" : ""} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}
      </nav>
      <Link className="header-cta" href="/contact">Contact Secretariat <span aria-hidden="true">↗</span></Link>
    </div></header>
  </>;
}
