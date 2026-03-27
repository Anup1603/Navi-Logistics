"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { AnimatedSection, AnimatedCard, StaggerContainer, StaggerItem } from "@/components/AnimatedComponents";
import { Calendar, ArrowRight, Clock, Search } from "lucide-react";
import { siteData } from "@/content/siteData";

const categories = siteData.newsPage.categories;
const featuredNews = siteData.newsPage.featuredNews;
const news = siteData.newsPage.news;

export default function NewsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&h=600&fit=crop"
            alt="News Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <Badge className="mb-6 bg-accent/20 text-accent hover:bg-accent/30 border-0">
                News & Updates
              </Badge>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Latest from Navi Logistics
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-white/80">
                Stay updated with our latest news, industry insights, and company announcements.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-8 bg-muted/50 sticky top-20 z-30 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Badge
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search news..." className="pl-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="container mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Stories</h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
            {featuredNews.map((item, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="h-full">
                  <Card className="h-full overflow-hidden group border-2 hover:border-accent/50 transition-colors">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                        {item.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {item.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {item.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                      <Link
                        href={`/news/${item.slug}`}
                        className="inline-flex items-center text-sm font-medium text-accent hover:gap-2 transition-all"
                      >
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* All News */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Recent Updates</h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {news.map((item, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="h-full">
                  <Card className="h-full overflow-hidden group border-2 hover:border-accent/50 transition-colors">
                    <div className="relative aspect-16/10 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {item.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {item.readTime}
                        </span>
                      </div>
                      <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{item.excerpt}</p>
                      <Link
                        href={`/news/${item.slug}`}
                        className="inline-flex items-center text-sm font-medium text-accent hover:gap-2 transition-all"
                      >
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.5} className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More News
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-28 gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&h=600&fit=crop"
            alt="Newsletter Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Subscribe to our newsletter to receive the latest news, industry insights, 
              and exclusive updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
