import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
export default function NotFound(){return <><SiteHeader/><main className="interior-hero"><div className="container"><p className="section-kicker">PAGE NOT FOUND</p><h1>404 — Page unavailable.</h1><p>The page requested does not exist or is not publicly available.</p><Link className="button button-light" href="/">Return to homepage ↗</Link></div></main><SiteFooter/></>}
