"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { AnimatedSection, AnimatedCard, StaggerContainer, StaggerItem } from "@/components/AnimatedComponents";
import { Calendar, ArrowRight, Clock, User, Search } from "lucide-react";

const categories = [
  "All Posts",
  "Supply Chain",
  "Technology",
  "Industry Trends",
  "Best Practices",
  "Case Studies",
];

const featuredPosts = [
  {
    title: "The Future of Logistics: AI and Machine Learning in Supply Chain",
    excerpt: "Discover how artificial intelligence and machine learning are revolutionizing logistics operations, from predictive analytics to autonomous vehicles.",
    date: "December 12, 2024",
    author: "Rajiv Sharma",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
    readTime: "8 min read",
  },
  {
    title: "Sustainable Logistics: Building a Greener Supply Chain",
    excerpt: "Learn about the latest strategies for reducing carbon footprint in logistics and how companies are achieving sustainability goals.",
    date: "December 8, 2024",
    author: "Priya Patel",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=500&fit=crop",
    readTime: "6 min read",
  },
];

const posts = [
  {
    title: "10 Ways to Optimize Your Warehouse Operations",
    excerpt: "Practical tips and strategies for improving warehouse efficiency and reducing operational costs.",
    date: "December 5, 2024",
    author: "Amit Kumar",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    category: "Best Practices",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
    readTime: "5 min read",
  },
  {
    title: "Last Mile Delivery: Challenges and Solutions",
    excerpt: "Exploring the complexities of last-mile delivery and innovative solutions that are transforming the industry.",
    date: "December 1, 2024",
    author: "Sneha Gupta",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    category: "Supply Chain",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop",
    readTime: "7 min read",
  },
  {
    title: "E-Commerce Logistics: Meeting Customer Expectations",
    excerpt: "How logistics providers are adapting to meet the rising demands of e-commerce consumers.",
    date: "November 28, 2024",
    author: "Rajiv Sharma",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    readTime: "6 min read",
  },
  {
    title: "Cold Chain Logistics: Ensuring Product Integrity",
    excerpt: "Understanding the importance of temperature-controlled logistics for perishable goods.",
    date: "November 25, 2024",
    author: "Priya Patel",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    category: "Best Practices",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    readTime: "5 min read",
  },
  {
    title: "Case Study: Transforming Supply Chain for a Major Retailer",
    excerpt: "How Navi Logistics helped a leading retailer reduce delivery times by 40% and cut costs by 25%.",
    date: "November 22, 2024",
    author: "Amit Kumar",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    category: "Case Studies",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop",
    readTime: "10 min read",
  },
  {
    title: "The Role of IoT in Modern Logistics",
    excerpt: "Exploring how Internet of Things technology is enabling smarter, more connected supply chains.",
    date: "November 18, 2024",
    author: "Sneha Gupta",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=600&fit=crop"
            alt="Blog Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <Badge className="mb-6 bg-accent/20 text-accent hover:bg-accent/30 border-0">
                Blog
              </Badge>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Insights & Expertise
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-white/80">
                Explore our blog for industry insights, best practices, and thought leadership 
                in logistics and supply chain management.
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
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Articles</h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
            {featuredPosts.map((post, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="h-full">
                  <Card className="h-full overflow-hidden group border-2 hover:border-accent/50 transition-colors">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative w-8 h-8 rounded-full overflow-hidden">
                            <Image
                              src={post.authorImage}
                              alt={post.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-sm font-medium">{post.author}</span>
                        </div>
                        <Link
                          href="#"
                          className="inline-flex items-center text-sm font-medium text-accent hover:gap-2 transition-all"
                        >
                          Read <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {posts.map((post, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="h-full">
                  <Card className="h-full overflow-hidden group border-2 hover:border-accent/50 transition-colors">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="relative w-6 h-6 rounded-full overflow-hidden">
                            <Image
                              src={post.authorImage}
                              alt={post.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-xs">{post.author}</span>
                        </div>
                        <Link
                          href="#"
                          className="inline-flex items-center text-xs font-medium text-accent"
                        >
                          Read <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.5} className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
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
              Never Miss an Update
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Subscribe to our newsletter for the latest insights, industry trends, 
              and expert advice delivered to your inbox.
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
