import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function NotFound(){return <><Header/><main className="page-hero"><div className="container"><p className="section-index">PAGE UNAVAILABLE</p><h1>404 — Page not found.</h1><p>This page does not exist or is not available to public visitors.</p><Link className="btn btn-white" href="/">Return to homepage ↗</Link></div></main><Footer/></>}
