import type { Metadata, Viewport } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import { introHeadScript } from "./_components/intro-script";
import "./globals.css";
import { asset } from "./asset";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shizuka Luxury | Sell your luxury pieces privately in Dubai",
  description:
    "Get cash for your handbags, watches and jewellery within 72 hours. Shizuka collects, authenticates, and gathers private offers on your behalf.",
  openGraph: {
    title: "Shizuka Luxury",
    description:
      "A private way to sell your handbags, watches and jewellery in Dubai. Cash within 72 hours.",
    images: [{ url: asset("/images/hero.jpg"), width: 2560, height: 1600, alt: "A woven leather handbag beside a hand wearing a diamond ring and gold watch" }],
    locale: "en_GB",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The head script adds intro classes to <html> before hydration, so React must not reconcile them.
    <html lang="en-GB" className={`${newsreader.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introHeadScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
