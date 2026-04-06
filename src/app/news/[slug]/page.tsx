import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StructuredData from "@/components/StructuredData";
import { EditorialDetail } from "@/components/EditorialDetail";
import {
  getNewsArticleBySlug,
  newsArticles,
} from "@/content/siteData";
import {
  createBreadcrumbSchema,
  createEditorialMetadata,
  createEditorialSchema,
} from "@/lib/seo";

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

  return createEditorialMetadata({
    article,
    path: `/news/${article.slug}`,
    section: "News",
  });
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
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: article.title, path: `/news/${article.slug}` },
  ]);
  const articleSchema = createEditorialSchema({
    article,
    path: `/news/${article.slug}`,
    type: "NewsArticle",
  });

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={articleSchema} />
      <EditorialDetail
        item={article}
        eyebrow="News Article"
        collectionHref="/news"
        collectionLabel="News"
        relatedHeading="More to Explore"
        relatedItems={relatedItems}
      />
    </>
  );
}
