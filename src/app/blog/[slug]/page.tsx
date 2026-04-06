import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StructuredData from "@/components/StructuredData";
import { EditorialDetail } from "@/components/EditorialDetail";
import {
  blogPosts,
  getBlogPostBySlug,
} from "@/content/siteData";
import {
  createBreadcrumbSchema,
  createEditorialMetadata,
  createEditorialSchema,
} from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return createEditorialMetadata({
    article: post,
    path: `/blog/${post.slug}`,
    section: "Blog",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedItems = blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .slice(0, 3);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);
  const articleSchema = createEditorialSchema({
    article: post,
    path: `/blog/${post.slug}`,
    type: "BlogPosting",
  });

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={articleSchema} />
      <EditorialDetail
        item={post}
        eyebrow="Blog Post"
        collectionHref="/blog"
        collectionLabel="Blog"
        relatedHeading="More to Explore"
        relatedItems={relatedItems}
      />
    </>
  );
}
