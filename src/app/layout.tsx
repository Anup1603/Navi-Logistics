import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopProgressBar } from "@/components/TopProgressBar";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://navilogistics.in"),
  title: {
    default: "Navi Logistics - Your Trusted Logistics Partner",
    template: "%s | Navi Logistics",
  },
  description:
    "Navi Logistics offers comprehensive logistics solutions including freight shipping, warehousing, supply chain management, and last-mile delivery services worldwide.",
  keywords: [
    "logistics",
    "freight shipping",
    "warehousing",
    "supply chain",
    "delivery",
    "transportation",
    "Navi Logistics",
  ],
  authors: [{ name: "Navi Logistics" }],
  creator: "Navi Logistics",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://navilogistics.in",
    siteName: "Navi Logistics",
    title: "Navi Logistics - Your Trusted Logistics Partner",
    description:
      "Comprehensive logistics solutions including freight shipping, warehousing, supply chain management, and last-mile delivery services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Navi Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navi Logistics - Your Trusted Logistics Partner",
    description:
      "Comprehensive logistics solutions including freight shipping, warehousing, and supply chain management.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
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
