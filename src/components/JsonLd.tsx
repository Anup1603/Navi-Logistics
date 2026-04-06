import { siteData } from "@/content/siteData";
import StructuredData from "@/components/StructuredData";

export default function JsonLd() {
  const { brand, company, seo, servicesPage } = siteData;
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${seo.siteUrl}/#organization`,
    name: brand.name,
    alternateName: seo.jsonLd.alternateName,
    description: seo.jsonLd.description,
    url: seo.siteUrl,
    logo: `${seo.siteUrl}${brand.logo}`,
    image: `${seo.siteUrl}${brand.logo}`,
    telephone: company.phonePrimary,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.streetAddress,
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.geo.latitude,
      longitude: company.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Howrah" },
      { "@type": "City", name: "Kolkata" },
      { "@type": "City", name: "Patna" },
      { "@type": "City", name: "Ranchi" },
      { "@type": "City", name: "Bhubaneswar" },
      { "@type": "City", name: "Guwahati" },
      { "@type": "State", name: "West Bengal" },
      { "@type": "State", name: "Bihar" },
      { "@type": "State", name: "Jharkhand" },
      { "@type": "State", name: "Odisha" },
      { "@type": "Country", name: "India" },
    ],
    priceRange: seo.jsonLd.priceRange,
    currenciesAccepted: seo.jsonLd.currenciesAccepted,
    paymentAccepted: seo.jsonLd.paymentAccepted,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Logistics Services",
      itemListElement: servicesPage.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
    sameAs: seo.jsonLd.sameAs,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand.name,
    url: seo.siteUrl,
  };

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={websiteSchema} />
    </>
  );
}
