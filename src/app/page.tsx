import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  AnimatedSection,
  AnimatedCard,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedComponents";
import { siteData } from "@/content/siteData";
import type { Metadata } from "next";
import {
  Globe,
  ArrowRight,
  Package,
  CheckCircle,
  Star,
  Users,
} from "lucide-react";

const services = siteData.home.services;
const stats = siteData.home.stats;
const features = siteData.home.features;
const testimonials = siteData.home.testimonials;

export const metadata: Metadata = {
  alternates: {
    canonical: siteData.seo.siteUrl,
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop"
            alt="Logistics Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500" />

        <div className="container mx-auto py-20 relative z-10">
          <div className="max-w-4xl">
            <AnimatedSection delay={0}>
              <Badge className="mb-6 bg-accent/20 text-accent hover:bg-accent/30 border-0 px-4 py-2 text-sm">
                🚚 Trusted by 500+ Businesses Across India
              </Badge>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Delivering Excellence
                <span className="block text-gradient">Across India</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
                Your trusted partner in logistics solutions across 23+ states in
                India. We provide reliable, efficient, and cost-effective
                transportation and supply chain services since 2016.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
                >
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/30 text-black hover:bg-white/10 px-8 py-6 text-lg"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute right-10 lg:right-20 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <AnimatedSection delay={0.5} direction="right">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 animate-float">
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <feature.icon className="h-8 w-8 text-accent mb-2" />
                      <span className="text-xs text-white/80">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From local deliveries to global supply chain management, we offer
              a complete range of logistics services to meet your business
              requirements.
            </p>
          </AnimatedSection>

          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.1}
          >
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="h-full">
                  <Card className="group h-full overflow-hidden border-2 hover:border-accent/50 transition-colors">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                          <service.icon className="h-6 w-6 text-accent-foreground" />
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        {service.description}
                      </CardDescription>
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-sm font-medium text-accent hover:gap-2 transition-all"
                      >
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.5} className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <Badge className="mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Success is Our
                <span className="text-gradient"> Priority</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With over 9 years of experience in the logistics industry since
                2016, we understand what it takes to deliver exceptional
                service. Our commitment to quality, reliability, and innovation
                sets us apart.
              </p>
              <ul className="space-y-4">
                {[
                  "Advanced real-time tracking technology",
                  "Dedicated account managers for personalized service",
                  "Flexible solutions tailored to your needs",
                  "Competitive pricing with no hidden fees",
                  "ISO certified operations and processes",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button size="lg" asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=800&fit=crop"
                    alt="Logistics Operations"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Stats cards - smaller on mobile, normal on lg+ */}
                <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-4 lg:-bottom-8 lg:-left-8 grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                  <AnimatedCard
                    delay={0.2}
                    className="p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl bg-white shadow-lg sm:shadow-xl"
                  >
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-primary mb-1 sm:mb-2 lg:mb-3" />
                    <div className="text-base sm:text-xl lg:text-2xl font-bold">
                      <AnimatedCounter end={500} suffix="+" />
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      Happy Clients
                    </div>
                  </AnimatedCard>
                  <AnimatedCard
                    delay={0.3}
                    className="p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl bg-white shadow-lg sm:shadow-xl"
                  >
                    <Package className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-accent mb-1 sm:mb-2 lg:mb-3" />
                    <div className="text-base sm:text-xl lg:text-2xl font-bold">
                      <AnimatedCounter end={1} suffix="M+" />
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      Packages Delivered
                    </div>
                  </AnimatedCard>
                </div>
                <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 lg:-top-8 lg:-right-8 grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                  <AnimatedCard
                    delay={0.4}
                    className="p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl bg-white shadow-lg sm:shadow-xl"
                  >
                    <Globe className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-primary mb-1 sm:mb-2 lg:mb-3" />
                    <div className="text-base sm:text-xl lg:text-2xl font-bold">
                      <AnimatedCounter end={23} suffix="+" />
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      States Covered
                    </div>
                  </AnimatedCard>
                  <AnimatedCard
                    delay={0.5}
                    className="p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl bg-white shadow-lg sm:shadow-xl"
                  >
                    <Star className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-accent mb-1 sm:mb-2 lg:mb-3" />
                    <div className="text-base sm:text-xl lg:text-2xl font-bold">
                      4.9
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      Customer Rating
                    </div>
                  </AnimatedCard>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

       {/* Testimonials Section */}
      <section className="bg-muted/20 py-20 lg:py-28">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don&apos;t just take our word for it. Here&apos;s what our valued
              clients have to say about our services.
            </p>
          </AnimatedSection>

          <StaggerContainer
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            staggerDelay={0.15}
          >
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="h-full">
                  <Card className="h-full overflow-hidden rounded-3xl border border-border/70 bg-background shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-xl">
                    <CardContent className="flex h-full flex-col p-8">
                      <div className="mb-5 flex items-center justify-between gap-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-accent text-accent"
                          />
                        ))}
                        <span className="text-4xl leading-none text-accent/25">
                          &rdquo;
                        </span>
                      </div>
                      <p className="flex-1 text-base leading-8 text-foreground/85 md:text-lg">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>

                      <div className="mt-6 border-t border-border/60 pt-5">
                        {/*
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        */}
                        <div className="font-semibold tracking-tight text-primary">
                          {testimonial.name}
                        </div>
                        {/*
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                        */}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&h=600&fit=crop"
            alt="CTA Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Streamline Your Logistics?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Get in touch with our team today and discover how Navi Logistics
              can transform your supply chain operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
              >
                <Link href="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/30 text-black hover:bg-white/10 px-8 py-6 text-lg"
              >
                <Link href="tel:+919830032732">Call +91 98300 32732</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
