import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditorialDetail } from "@/components/EditorialDetail";
import {
  getNewsArticleBySlug,
  newsArticles,
  siteData,
} from "@/content/siteData";

type NewsArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const url = `${siteData.seo.siteUrl}/news/${article.slug}`;

  return {
    title: `${article.title} | ${siteData.brand.name} News`,
    description: article.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description: article.excerpt,
      siteName: siteData.brand.name,
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function NewsArticlePage({
  params,
}: NewsArticlePageProps) {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedItems = newsArticles
    .filter((candidate) => candidate.slug !== article.slug)
    .slice(0, 3);

  return (
    <EditorialDetail
      item={article}
      eyebrow="News Article"
      collectionHref="/news"
      collectionLabel="News"
      relatedHeading="More News"
      relatedItems={relatedItems}
    />
  );
}
