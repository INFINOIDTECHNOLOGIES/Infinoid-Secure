import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.infinoidsecure.com"),
  title: {
    default: "Infinoid Secure | Enterprise CCTV and Security Solutions",
    template: "%s | Infinoid Secure",
  },
  description: "Infinoid Secure delivers enterprise CCTV, access control, attendance, AI surveillance, and video analytics solutions.",
  openGraph: {
    title: "Infinoid Secure",
    description: "Enterprise CCTV, access control, attendance, and AI surveillance solutions.",
    url: "/",
    siteName: "Infinoid Secure",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinoid Secure",
    description: "Enterprise CCTV, access control, attendance, and AI surveillance solutions.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}