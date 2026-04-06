import { MetadataRoute } from "next";
import { blogPosts, newsArticles, siteData } from "@/content/siteData";
import { parseContentDate } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteData.seo.siteUrl;
  const generatedAt = new Date();

  const sitemapEntries: MetadataRoute.Sitemap = [
    ...siteData.routes.main.map((item) => ({
      url: `${baseUrl}${item.route}`,
      lastModified: generatedAt,
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    })),
    ...siteData.routes.serviceAnchors.map((anchor) => ({
      url: `${baseUrl}${anchor}`,
      lastModified: generatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: parseContentDate(post.date) ?? generatedAt.toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...newsArticles.map((article) => ({
      url: `${baseUrl}/news/${article.slug}`,
      lastModified:
        parseContentDate(article.date) ?? generatedAt.toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return sitemapEntries;
}
