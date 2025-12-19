import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopProgressBar } from "@/components/TopProgressBar";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://navilogistics.in"),
  title: {
    default: "Navi Logistics - Freight Shipping & Logistics Services in Howrah, Kolkata | West Bengal",
    template: "%s | Navi Logistics - Logistics Company in India",
  },
  icons: {
    icon: '/Navi Logistics.jpeg',
    shortcut: '/Navi Logistics.jpeg',
    apple: '/Navi Logistics.jpeg',
  },
  description:
    "Navi Logistics - Leading logistics company in Howrah, West Bengal offering freight shipping, warehousing, supply chain management & express delivery across Kolkata, Asansol, Durgapur, Siliguri, Bihar, Jharkhand, Odisha, Delhi NCR & Pan India. Call +91 98300 32732.",
  keywords: [
    // Brand Keywords
    "Navi Logistics",
    "Navi Logistics Howrah",
    "Navi Logistics Kolkata",
    
    // Service Keywords
    "logistics company",
    "freight shipping",
    "freight services",
    "warehousing services",
    "supply chain management",
    "transportation services",
    "express delivery",
    "cargo services",
    "truck transport",
    "air freight",
    "ocean freight",
    "last mile delivery",
    
    // West Bengal Locations
    "logistics in Howrah",
    "logistics in Kolkata",
    "logistics in Shibpur",
    "transport company Howrah",
    "freight services Kolkata",
    "logistics Asansol",
    "logistics Durgapur",
    "logistics Bardhaman",
    "logistics 24 Parganas",
    "logistics Hooghly",
    "logistics Siliguri",
    "logistics Kharagpur",
    "West Bengal logistics",
    "West Bengal transport",
    
    // Eastern India
    "logistics Bihar",
    "logistics Patna",
    "logistics Jharkhand",
    "logistics Ranchi",
    "logistics Jamshedpur",
    "logistics Odisha",
    "logistics Bhubaneswar",
    "logistics Cuttack",
    "logistics Assam",
    "logistics Guwahati",
    "logistics Sikkim",
    "logistics Gangtok",
    
    // North India
    "logistics Delhi",
    "logistics Delhi NCR",
    "logistics Gurugram",
    "logistics Noida",
    "logistics Uttar Pradesh",
    "logistics Lucknow",
    "logistics Kanpur",
    "logistics Varanasi",
    "logistics Haryana",
    
    // Central India
    "logistics Madhya Pradesh",
    "logistics Bhopal",
    "logistics Indore",
    "logistics Chhattisgarh",
    "logistics Raipur",
    
    // General
    "logistics company India",
    "best logistics company",
    "reliable logistics partner",
    "affordable freight services",
    "same day delivery",
    "pan India logistics",
  ],
  authors: [{ name: "Navi Logistics" }],
  creator: "Navi Logistics",
  publisher: "Navi Logistics Pvt Ltd",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://navilogistics.in",
    siteName: "Navi Logistics",
    title: "Navi Logistics - Best Logistics & Freight Company in Howrah, Kolkata",
    description:
      "Trusted logistics partner for freight shipping, warehousing & supply chain in West Bengal, Bihar, Jharkhand, Odisha, Delhi NCR & across India. Get a free quote today!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Navi Logistics - Your Trusted Logistics Partner in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navi Logistics - Freight & Logistics Services | Howrah, Kolkata",
    description:
      "Leading logistics company offering freight, warehousing & delivery services across India. Contact: +91 98300 32732",
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
  alternates: {
    canonical: "https://navilogistics.in",
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
  category: "Logistics & Transportation",
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Howrah, West Bengal",
    "geo.position": "22.5718;88.3339",
    "ICBM": "22.5718, 88.3339",
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
