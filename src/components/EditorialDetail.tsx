import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost, ContentSection, NewsArticle } from "@/content/siteData";

type EditorialItem = NewsArticle | BlogPost;

type RelatedItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

type EditorialDetailProps = {
  item: EditorialItem;
  eyebrow: string;
  collectionHref: "/news" | "/blog";
  collectionLabel: string;
  relatedHeading: string;
  relatedItems: RelatedItem[];
};

const hasAuthor = (
  item: EditorialItem,
): item is BlogPost & { content: ContentSection[] } =>
  "author" in item;

export function EditorialDetail({
  item,
  eyebrow,
  collectionHref,
  collectionLabel,
  relatedHeading,
  relatedItems,
}: EditorialDetailProps) {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden gradient-hero py-18 text-white lg:py-24">
        <div className="absolute inset-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/45" />
        <div className="container relative z-10 mx-auto">
          <Button asChild variant="outline" className="mb-8 border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white">
            <Link href={collectionHref}>
              <ArrowLeft className="h-4 w-4" />
              Back to {collectionLabel}
            </Link>
          </Button>

          <div className="max-w-4xl space-y-6">
            <Badge className="bg-accent text-accent-foreground">{eyebrow}</Badge>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {item.title}
            </h1>
            <p className="max-w-3xl text-lg text-white/85 md:text-xl">
              {item.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {item.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {item.readTime}
              </span>
              <Badge variant="secondary" className="bg-white/15 text-white">
                {item.category}
              </Badge>
            </div>

            {hasAuthor(item) ? (
              <div className="w-fit rounded-full bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
                <span className="text-white/70">Written by </span>
                <span className="font-medium text-white">{item.author}</span>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="space-y-10">
            {item.content.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-8 text-muted-foreground md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="space-y-3 rounded-2xl border bg-muted/30 p-6 text-sm text-muted-foreground md:text-base">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>

          <aside className="space-y-6">
            <Card className="border-2">
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-semibold">Quick Snapshot</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Category:</span>{" "}
                    {item.category}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Published:</span>{" "}
                    {item.date}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Read time:</span>{" "}
                    {item.readTime}
                  </p>
                  {hasAuthor(item) ? (
                    <p>
                      <span className="font-medium text-foreground">Author:</span>{" "}
                      {item.author}
                    </p>
                  ) : null}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-muted/25">
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-semibold">Keep Exploring</h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  Browse more {collectionLabel.toLowerCase()} from Navi Logistics.
                </p>
                <Button asChild className="w-full">
                  <Link href={collectionHref}>View all {collectionLabel}</Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">{relatedHeading}</h2>
            <p className="text-muted-foreground">
              A few more items from the same section.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedItems.map((relatedItem) => (
              <Card
                key={relatedItem.slug}
                className="touch-feedback touch-card overflow-hidden border-2 transition-colors hover:border-accent/50"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={relatedItem.image}
                    alt={relatedItem.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute left-3 top-3 bg-primary/90 text-primary-foreground">
                    {relatedItem.category}
                  </Badge>
                </div>
                <CardContent className="space-y-4 p-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {relatedItem.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {relatedItem.readTime}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="line-clamp-2 text-lg font-semibold">
                      {relatedItem.title}
                    </h3>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      {relatedItem.excerpt}
                    </p>
                  </div>
                  <Link
                    href={`${collectionHref}/${relatedItem.slug}`}
                    className="touch-feedback touch-link inline-flex items-center text-sm font-medium text-accent hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
