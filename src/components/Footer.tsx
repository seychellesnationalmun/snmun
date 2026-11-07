import Link from "next/link";
import { brand } from "@/lib/brand";
export default function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div><img src="/assets/snmun-emblem.png" className="footer-emblem" alt="" width="60" height="60" /><p className="footer-title">Seychelles National<br />Model United Nations</p><p className="footer-slogan">{brand.slogan}</p></div>
    <div className="footer-col"><span className="footer-heading">Explore</span><Link href="/">Home</Link><Link href="/about">About SNMUN</Link><Link href="/#programmes">Programmes</Link><Link href="/#participation">Participation</Link></div>
    <div className="footer-col"><span className="footer-heading">Correspondence</span><a href={`mailto:${brand.email}`}>{brand.email}</a><span>Republic of Seychelles</span></div>
    <div className="footer-col"><span className="footer-heading">Institutional affiliation</span><a className="footer-foundation" target="_blank" rel="noopener noreferrer" href={brand.foundationUrl}>Tyler Nicholas Foundation<span>For the Youth. For the Islands. For Tomorrow.</span></a></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {brand.title}. All rights reserved. A programme of the <a target="_blank" rel="noopener noreferrer" href={brand.foundationUrl}>Tyler Nicholas Foundation</a>.</span><span>Official institutional website</span></div></footer>;
}
