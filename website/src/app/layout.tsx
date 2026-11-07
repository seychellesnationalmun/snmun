import type { Metadata } from "next";
import "./globals.css";
import { BRAND, asset } from "@/lib/branding";

export const metadata: Metadata = {
  title: { default: "Home: Seychelles National Model United Nations", template: "%s | SNMUN" },
  description: "The official website of Seychelles National Model United Nations, a programme of the Tyler Nicholas Foundation.",
  icons: { icon: asset("snmun-emblem.png"), apple: asset("snmun-emblem.png") },
  openGraph: { title: BRAND.name, description: BRAND.slogan, images: [{ url: asset("snmun-banner.png") }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
