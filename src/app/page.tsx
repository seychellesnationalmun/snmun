import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brand } from "@/lib/brand";

const programmes = [
  { num: "01", title: "SNMUN Academy", desc: "Learning and preparation in international affairs, research, procedure and diplomacy." },
  { num: "02", title: "Conference Programme", desc: "Structured Model United Nations simulations, negotiation and committee debate." },
  { num: "03", title: "School Network", desc: "Connecting institutions and young people through a coordinated national programme." },
  { num: "04", title: "Diplomatic Activities", desc: "Year-round dialogue, civic education and international understanding initiatives." },
];
export default function Home() {
  return <><Header /><main id="main">
    <section className="hero" aria-labelledby="hero-title"><div className="container"><div className="hero-inner"><div>
      <div className="eyebrow">The national platform for youth diplomacy</div><h1 id="hero-title">Diplomacy<br /><em>Begins Here.</em></h1><p className="hero-summary">Cultivating a generation of informed, confident and principled young leaders through diplomacy, dialogue and international cooperation.</p>
      <div className="button-row"><Link className="btn btn-white" href="/about">Discover SNMUN <span aria-hidden="true">↗</span></Link><a className="btn btn-outline" href="#programmes">Explore our programmes <span aria-hidden="true">↓</span></a></div><div className="hero-slogan">{brand.slogan}</div>
      </div><div className="hero-visual" aria-hidden="true"><div className="hero-ring"><img src="/assets/snmun-emblem.png" alt="" /></div><span className="hero-visual-note">SEYCHELLES NATIONAL MODEL UNITED NATIONS</span></div></div></div></section>
    <section className="section" id="about"><div className="container intro-layout"><div className="section-index">01 / WHO WE ARE</div><div><h2 className="display">A national vision.<br /><span className="muted">A global perspective.</span></h2><div className="intro-columns"><p>Seychelles National Model United Nations (SNMUN) is a national youth diplomacy and leadership education programme of the Tyler Nicholas Foundation.</p><p>Through realistic international simulations, participants develop critical thinking, research, communication, negotiation and respect for different perspectives.</p></div><Link className="subtle-link" href="/about">Explore our mission <span aria-hidden="true">↗</span></Link></div></div></section>
    <section className="section programmes" id="programmes"><div className="container"><div className="section-heading-row"><div><p className="section-index">02 / OUR PROGRAMMES</p><h2 className="display">Education through<br /><span className="muted">the practice of diplomacy.</span></h2></div><p>Four connected components support learning, participation and diplomatic engagement throughout the year.</p></div><div className="cards">{programmes.map(p => <article className="card" key={p.num}><span className="card-num">{p.num} / SNMUN</span><div><h3>{p.title}</h3><p>{p.desc}</p></div><span className="card-arrow" aria-hidden="true">↗</span></article>)}</div></div></section>
    <section className="values"><div className="container values-layout"><div><p className="section-index">OUR GUIDING PRINCIPLES</p><p className="values-statement">Dialogue. <em>Respect.</em><br />Cooperation.</p></div><div className="values-text"><p>SNMUN is committed to non-partisanship, academic independence and respectful engagement across differing perspectives.</p><small>Developing the voices of tomorrow.</small></div></div></section>
    <section className="section" id="participation"><div className="container"><div className="participation-shell"><div><p className="section-index">03 / PARTICIPATION</p><h2>Be part of the conversation.</h2><p>Official information on delegate participation, institutional engagement and programme opportunities will be published here when authorised and available.</p><Link className="btn btn-dark" href="/contact">Contact the Secretariat <span aria-hidden="true">↗</span></Link></div><img className="participation-mark" src="/assets/snmun-emblem.png" alt="" aria-hidden="true" /></div></div></section>
    <section className="section" id="updates"><div className="container news-row"><div><p className="section-index">04 / OFFICIAL COMMUNICATIONS</p><h2 className="display">Stay informed.</h2><p>Official announcements, programme developments and public information will be available through the SNMUN website as they are released.</p></div><Link className="subtle-link" href="/contact">Enquiries &amp; correspondence <span aria-hidden="true">↗</span></Link></div></section>
  </main><Footer /></>;
}
