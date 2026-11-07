import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brand } from "@/lib/brand";
export const metadata: Metadata = { title: "Contact" };
export default function Contact(){return <><Header/><main><section className="page-hero"><div className="container"><p className="section-index">OFFICIAL CORRESPONDENCE</p><h1>Contact the<br/><em>Secretariat.</em></h1><p>For official enquiries concerning Seychelles National Model United Nations.</p></div></section><section className="section"><div className="container article-grid"><aside><p className="section-index">CONTACT INFORMATION</p></aside><div className="contact-panel"><h2>General enquiries</h2><p>Please direct institutional correspondence and general questions to the official SNMUN email address.</p><p><a href={`mailto:${brand.email}`}>{brand.email}</a></p><p>Republic of Seychelles</p><p>SNMUN is a programme of the <a href={brand.foundationUrl} target="_blank" rel="noopener noreferrer">Tyler Nicholas Foundation</a>.</p></div></div></section></main><Footer/></>}
