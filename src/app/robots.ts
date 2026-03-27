import { MetadataRoute } from "next";
import { siteData } from "@/content/siteData";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: `${siteData.seo.siteUrl}/sitemap.xml`,
  };
}
