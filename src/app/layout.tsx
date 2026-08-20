import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { site } from "@/lib/epk";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.artistFull} — Electronic Press Kit`,
    template: `%s · ${site.artistFull}`,
  },
  description: `${site.tagline} Electronic press kit and technical rider for ${site.artistFull}, ${site.role.toLowerCase()} & live band. Bookings: ${site.manager} — ${site.managerPhone}.`,
  keywords: [
    "Abir Biswas",
    "Abir Biswas Live",
    "sound engineer",
    "live band",
    "electronic press kit",
    "technical rider",
    "India",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-zinc-950 text-zinc-50">
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
