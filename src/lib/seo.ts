import type { Metadata } from "next";
import { siteData, type BlogPost, type NewsArticle } from "@/content/siteData";

type SeoImage = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  images?: SeoImage[];
  type?: "website" | "article";
};

type EditorialMetadataOptions = {
  article: BlogPost | NewsArticle;
  path: string;
  section: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const defaultImage = {
  url: siteData.brand.ogImage,
  alt: siteData.seo.openGraph.imageAlt,
  width: 1200,
  height: 630,
} satisfies SeoImage;

const dedupeKeywords = (keywords: string[] = []) =>
  Array.from(new Set([...siteData.seo.keywords, ...keywords]));

const normalizeImages = (images?: SeoImage[]) => {
  const items = images && images.length > 0 ? images : [defaultImage];

  return items.map((image) => ({
    url: image.url,
    alt: image.alt,
    ...(image.width ? { width: image.width } : {}),
    ...(image.height ? { height: image.height } : {}),
  }));
};

export const absoluteUrl = (path = "/") =>
  new URL(path, siteData.seo.siteUrl).toString();

export const parseContentDate = (dateString: string) => {
  const date = new Date(dateString);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  images,
  type = "website",
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const openGraphImages = normalizeImages(images);

  return {
    title,
    description,
    keywords: dedupeKeywords(keywords),
    alternates: {
      canonical,
    },
    openGraph: {
      type,
      locale: "en_IN",
      url: canonical,
      siteName: siteData.brand.name,
      title,
      description,
      images: openGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: openGraphImages.map((image) => image.url),
    },
  };
}

export function createEditorialMetadata({
  article,
  path,
  section,
}: EditorialMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const publishedTime = parseContentDate(article.date);
  const authors = "author" in article ? [article.author] : [siteData.brand.name];
  const image = {
    url: article.image,
    alt: article.title,
  };

  return {
    title: article.title,
    description: article.excerpt,
    keywords: dedupeKeywords([
      article.category,
      section,
      siteData.brand.name,
      "logistics",
      "supply chain",
    ]),
    authors: authors.map((name) => ({ name })),
    category: article.category,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      locale: "en_IN",
      url: canonical,
      siteName: siteData.brand.name,
      title: article.title,
      description: article.excerpt,
      images: normalizeImages([image]),
      authors,
      ...(publishedTime ? { publishedTime } : {}),
      section: article.category,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export const createBreadcrumbSchema = (items: ReadonlyArray<BreadcrumbItem>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const createEditorialSchema = ({
  article,
  path,
  type,
}: {
  article: BlogPost | NewsArticle;
  path: string;
  type: "BlogPosting" | "NewsArticle";
}) => {
  const publishedTime = parseContentDate(article.date);
  const author =
    "author" in article
      ? {
          "@type": "Person",
          name: article.author,
        }
      : {
          "@type": "Organization",
          name: siteData.brand.name,
        };

  return {
    "@context": "https://schema.org",
    "@type": type,
    headline: article.title,
    description: article.excerpt,
    image: [article.image],
    mainEntityOfPage: absoluteUrl(path),
    url: absoluteUrl(path),
    articleSection: article.category,
    author,
    publisher: {
      "@type": "Organization",
      name: siteData.brand.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteData.brand.logo),
      },
    },
    ...(publishedTime ? { datePublished: publishedTime, dateModified: publishedTime } : {}),
  };
};

export const createFaqSchema = (faqs: ReadonlyArray<FaqItem>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
