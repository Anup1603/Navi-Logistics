export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://navilogistics.in/#organization",
    name: "Navi Logistics",
    alternateName: "Navi Logistics Pvt Ltd",
    description:
      "Leading logistics and freight shipping company providing warehousing, supply chain management, and transportation services across India including West Bengal, Bihar, Jharkhand, Odisha, Assam, Delhi NCR, and more.",
    url: "https://navilogistics.in",
    logo: "https://navilogistics.in/Navi Logistics.jpeg",
    image: "https://navilogistics.in/Navi Logistics.jpeg",
    telephone: "+91-98300-32732",
    email: "contact@navilogistics.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "146 Foreshore Road, Shibpur",
      addressLocality: "Howrah",
      addressRegion: "West Bengal",
      postalCode: "711102",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.5718",
      longitude: "88.3339",
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
      // West Bengal
      { "@type": "City", name: "Howrah" },
      { "@type": "City", name: "Kolkata" },
      { "@type": "City", name: "Shibpur" },
      { "@type": "City", name: "Asansol" },
      { "@type": "City", name: "Durgapur" },
      { "@type": "City", name: "Bardhaman" },
      { "@type": "City", name: "Siliguri" },
      { "@type": "City", name: "Kharagpur" },
      { "@type": "AdministrativeArea", name: "24 Parganas" },
      { "@type": "AdministrativeArea", name: "Hooghly" },
      { "@type": "State", name: "West Bengal" },
      // Bihar
      { "@type": "City", name: "Patna" },
      { "@type": "City", name: "Gaya" },
      { "@type": "City", name: "Muzaffarpur" },
      { "@type": "State", name: "Bihar" },
      // Jharkhand
      { "@type": "City", name: "Ranchi" },
      { "@type": "City", name: "Jamshedpur" },
      { "@type": "City", name: "Dhanbad" },
      { "@type": "State", name: "Jharkhand" },
      // Odisha
      { "@type": "City", name: "Bhubaneswar" },
      { "@type": "City", name: "Cuttack" },
      { "@type": "City", name: "Rourkela" },
      { "@type": "State", name: "Odisha" },
      // Assam & Northeast
      { "@type": "City", name: "Guwahati" },
      { "@type": "State", name: "Assam" },
      { "@type": "City", name: "Gangtok" },
      { "@type": "State", name: "Sikkim" },
      // North India
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "New Delhi" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Faridabad" },
      { "@type": "State", name: "Haryana" },
      // Uttar Pradesh
      { "@type": "City", name: "Lucknow" },
      { "@type": "City", name: "Kanpur" },
      { "@type": "City", name: "Varanasi" },
      { "@type": "City", name: "Agra" },
      { "@type": "State", name: "Uttar Pradesh" },
      // Central India
      { "@type": "City", name: "Bhopal" },
      { "@type": "City", name: "Indore" },
      { "@type": "State", name: "Madhya Pradesh" },
      { "@type": "City", name: "Raipur" },
      { "@type": "State", name: "Chhattisgarh" },
      // Country
      { "@type": "Country", name: "India" },
    ],
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Logistics Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Freight Shipping",
            description: "Full truck load and less than truck load shipping services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Warehousing",
            description: "State-of-the-art storage and inventory management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Supply Chain Management",
            description: "End-to-end supply chain optimization",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Express Delivery",
            description: "Same-day and next-day delivery services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Air Freight",
            description: "Fast air cargo services domestic and international",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ocean Freight",
            description: "Cost-effective sea shipping solutions",
          },
        },
      ],
    },
    sameAs: [
      "https://www.linkedin.com/company/navilogistics",
      "https://www.facebook.com/navilogistics",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Navi Logistics",
    url: "https://navilogistics.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://navilogistics.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
