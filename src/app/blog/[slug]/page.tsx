import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditorialDetail } from "@/components/EditorialDetail";
import {
  blogPosts,
  getBlogPostBySlug,
  siteData,
} from "@/content/siteData";

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

  const url = `${siteData.seo.siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | ${siteData.brand.name} Blog`,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      siteName: siteData.brand.name,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
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

  return (
    <EditorialDetail
      item={post}
      eyebrow="Blog Post"
      collectionHref="/blog"
      collectionLabel="Blog"
      relatedHeading="More to Explore"
      relatedItems={relatedItems}
    />
  );
}
