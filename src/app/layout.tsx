import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Home: Seychelles National Model United Nations", template: "%s | SNMUN" },
  description: `${brand.title} — a national youth diplomacy and leadership education programme of the Tyler Nicholas Foundation.`,
  icons: { icon: "/assets/snmun-emblem.png", apple: "/assets/snmun-emblem.png" },
  openGraph: { title: brand.title, description: brand.slogan, images: ["/assets/snmun-banner.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
