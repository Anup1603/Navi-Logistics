import { MetadataRoute } from "next";
import { siteData } from "@/content/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteData.seo.siteUrl;

  const sitemapEntries: MetadataRoute.Sitemap = [
    ...siteData.routes.main.map((item) => ({
      url: `${baseUrl}${item.route}`,
      lastModified: new Date(),
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    })),
    ...siteData.routes.serviceAnchors.map((anchor) => ({
      url: `${baseUrl}${anchor}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return sitemapEntries;
}
