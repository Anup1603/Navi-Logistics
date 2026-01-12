import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://navilogistics.in";

  // Main routes with priorities
  const mainRoutes = [
    { route: "", priority: 1.0, changeFreq: "weekly" as const },
    { route: "/about", priority: 0.9, changeFreq: "monthly" as const },
    { route: "/services", priority: 0.95, changeFreq: "weekly" as const },
    { route: "/careers", priority: 0.7, changeFreq: "weekly" as const },
    { route: "/contact", priority: 0.85, changeFreq: "monthly" as const },
    { route: "/news", priority: 0.6, changeFreq: "weekly" as const },
    { route: "/blog", priority: 0.6, changeFreq: "weekly" as const },
  ];

  // Service-specific anchors for better indexing
  const serviceAnchors = [
    "/services#3pl",
    "/services#express",
    "/services#warehousing",
    "/services#ftl",
    "/services#ptl",
    "/services#speed-trucking",
    "/services#air-freight",
    "/services#rail",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [
    // Main pages
    ...mainRoutes.map((item) => ({
      url: `${baseUrl}${item.route}`,
      lastModified: new Date(),
      changeFrequency: item.changeFreq,
      priority: item.priority,
    })),
    // Service anchors
    ...serviceAnchors.map((anchor) => ({
      url: `${baseUrl}${anchor}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return sitemapEntries;
}
