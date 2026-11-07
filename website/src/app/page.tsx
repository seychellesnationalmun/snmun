import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { BRAND, asset } from "@/lib/branding";

const programmes = [
  { number: "01", title: "SNMUN Academy", description: "Learning, preparation and practical training in diplomacy, research and international affairs." },
  { number: "02", title: "Conference Programme", description: "Structured Model United Nations simulations that develop negotiation and public speaking." },
  { number: "03", title: "School Network", description: "Connecting educational institutions through a coordinated national diplomacy programme." },
  { number: "04", title: "Diplomatic Activities", description: "Year-round educational activities, dialogue and opportunities for international understanding." },
];

export default function Home() {
  return <>
    <SiteHeader />
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-art" style={{ backgroundImage: `linear-gradient(95deg, rgba(3, 20, 48, .95) 4%, rgba(6, 38, 83, .88) 50%, rgba(6, 45, 101, .58) 100%), url('${asset("snmun-banner.png")}')` }} />
        <div className="hero-sheen" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-eyebrow"><span className="eyebrow-rule" />THE NATIONAL PLATFORM FOR YOUTH DIPLOMACY</div>
          <h1 id="hero-title">Diplomacy<br /><em>Begins Here.</em></h1>
          <p className="hero-text">Cultivating a generation of informed, confident and principled young leaders through diplomacy, dialogue and international cooperation.</p>
          <div className="hero-actions"><Link className="button button-light" href="/about">Discover SNMUN <span aria-hidden="true">↗</span></Link><a className="button button-ghost" href="#programmes">Explore Our Programmes <span aria-hidden="true">↓</span></a></div>
          <div className="hero-footnote"><span className="hero-footline" />{BRAND.slogan}</div>
        </div>
        <div className="hero-side-label" aria-hidden="true">SEYCHELLES NATIONAL MODEL UNITED NATIONS</div>
      </section>

      <section className="intro-section section-spacing"><div className="container intro-grid">
        <div className="section-kicker">01 / WHO WE ARE</div>
        <div><h2 className="editorial-heading">A national vision.<br /><span>A global perspective.</span></h2><div className="intro-copy"><p>Seychelles National Model United Nations (SNMUN) is a national youth diplomacy and leadership education programme of the Tyler Nicholas Foundation.</p><p>Through the practice of multilateral diplomacy, participants build understanding of international issues while strengthening research, critical thinking, dialogue and cooperation.</p></div><Link className="text-link" href="/about">Learn about our mission <span aria-hidden="true">↗</span></Link></div>
      </div></section>

      <section className="programmes-section section-spacing" id="programmes"><div className="container"><div className="section-header"><div><p className="section-kicker">02 / WHAT WE DO</p><h2 className="editorial-heading">Education through<br /><span>the practice of diplomacy.</span></h2></div><p className="section-lead">An integrated approach to diplomatic education, institutional participation and experiential learning.</p></div><div className="programme-grid">{programmes.map(item => <article className="programme-card" key={item.number}><span className="programme-index">{item.number} / SNMUN</span><div><h3>{item.title}</h3><p>{item.description}</p></div><span className="programme-arrow" aria-hidden="true">↗</span></article>)}</div></div></section>

      <section className="principles-section"><div className="container principles-grid"><div className="principles-quote"><span className="section-kicker">OUR GUIDING PRINCIPLES</span><p>Dialogue. <em>Respect.</em><br />Cooperation.</p></div><div className="principles-text"><p>SNMUN is guided by non-partisanship, academic independence and a commitment to respectful engagement across perspectives.</p><span>Developing the voices of tomorrow.</span></div></div></section>

      <section className="participation-section section-spacing" id="participation"><div className="container participation-panel"><div><span className="section-kicker">03 / PARTICIPATION</span><h2>Be part of the conversation.</h2><p>Information about participation, institutional engagement and upcoming programme opportunities will be published through SNMUN's official channels.</p><a href={`mailto:${BRAND.email}?subject=SNMUN%20Participation%20Enquiry`} className="button button-dark">Contact the Secretariat <span aria-hidden="true">↗</span></a></div><div className="participation-monogram" aria-hidden="true"><img src={asset("snmun-emblem.png")} alt="" /></div></div></section>

      <section className="updates-section section-spacing" id="updates"><div className="container updates-row"><div><p className="section-kicker">04 / OFFICIAL COMMUNICATIONS</p><h2 className="editorial-heading">Stay informed.</h2><p>Official announcements, programme developments and public information will appear here as they are released.</p></div><a className="text-link" href={`mailto:${BRAND.email}`}>Enquiries & correspondence <span aria-hidden="true">↗</span></a></div></section>
    </main>
    <SiteFooter />
  </>;
}
