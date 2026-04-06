import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopProgressBar } from "@/components/TopProgressBar";
import JsonLd from "@/components/JsonLd";
import { siteData } from "@/content/siteData";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.seo.siteUrl),
  title: siteData.seo.title,
  icons: {
    icon: siteData.brand.circularLogo,
    shortcut: siteData.brand.circularLogo,
    apple: siteData.brand.circularLogo,
  },
  description: siteData.seo.description,
  keywords: [...siteData.seo.keywords],
  authors: [{ name: siteData.brand.name }],
  creator: siteData.brand.name,
  publisher: siteData.brand.legalName,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteData.seo.siteUrl,
    siteName: siteData.brand.name,
    title: siteData.seo.openGraph.title,
    description: siteData.seo.openGraph.description,
    images: [
      {
        url: siteData.brand.ogImage,
        width: 1200,
        height: 630,
        alt: siteData.seo.openGraph.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seo.twitter.title,
    description: siteData.seo.twitter.description,
    images: [siteData.brand.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
  category: "Logistics & Transportation",
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Howrah, West Bengal",
    "geo.position": siteData.company.geo.position,
    ICBM: siteData.company.geo.icbm,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <JsonLd />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Suspense fallback={null}>
          <TopProgressBar />
        </Suspense>
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
