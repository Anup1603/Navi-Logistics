"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { AnimatedSection, AnimatedCard, StaggerContainer, StaggerItem } from "@/components/AnimatedComponents";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  Truck,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Handshake,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every shipment, every interaction, and every solution we deliver.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honesty and transparency are the foundations of our relationships with clients and partners.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "We work together with our clients, understanding their needs to deliver tailored solutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously improving our processes and technology to stay ahead of industry trends.",
  },
];

const milestones = [
  { year: "2009", title: "Company Founded", description: "Started with a small fleet of 5 trucks in Howrah." },
  { year: "2012", title: "Regional Expansion", description: "Expanded operations across West Bengal and Eastern India." },
  { year: "2015", title: "Warehousing Launch", description: "Opened our first 50,000 sq ft warehousing facility." },
  { year: "2018", title: "Technology Upgrade", description: "Implemented real-time tracking and modern fleet management." },
  { year: "2021", title: "Pan-India Network", description: "Established presence in all major Indian cities." },
  { year: "2024", title: "Going Global", description: "Launched international shipping services to 50+ countries." },
];

const team = [
  {
    name: "Rajiv Sharma",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Priya Patel",
    role: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Amit Kumar",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sneha Gupta",
    role: "Head of Customer Success",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
];

const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 1000, suffix: "+", label: "Employees" },
  { value: 50, suffix: "+", label: "Countries Served" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=600&fit=crop"
            alt="About Navi Logistics"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <Badge className="mb-6 bg-accent/20 text-accent hover:bg-accent/30 border-0">
                About Us
              </Badge>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Delivering Excellence Since 2009
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-white/80">
                The story of Navi Logistics began with a simple mission: to make logistics 
                reliable, efficient, and accessible to businesses of all sizes.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
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

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop"
                    alt="Our Journey"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl">
                  <div className="text-4xl font-bold">
                    <AnimatedCounter end={15} suffix="+" />
                  </div>
                  <div className="text-sm">Years of Trust</div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <Badge className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From a Small Fleet to a 
                <span className="text-gradient"> Global Network</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2009 in Howrah, West Bengal, Navi Logistics started with just 
                5 trucks and a vision to transform the logistics industry. What began as 
                a local delivery service has grown into a comprehensive logistics provider 
                serving clients across India and internationally.
              </p>
              <p className="text-muted-foreground mb-8">
                Today, we operate a modern fleet of over 500 vehicles, manage 1 million+ 
                square feet of warehousing space, and serve 500+ satisfied clients. Our 
                journey is a testament to our commitment to excellence and customer satisfaction.
              </p>
              <ul className="space-y-3">
                {[
                  "Modern fleet with GPS tracking",
                  "Pan-India delivery network",
                  "State-of-the-art warehousing",
                  "24/7 customer support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <AnimatedCard className="h-full">
                <Card className="h-full p-8 border-2 hover:border-accent/50 transition-colors">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To provide reliable, efficient, and cost-effective logistics solutions 
                      that empower businesses to grow. We are committed to delivering every 
                      shipment on time, every time, while maintaining the highest standards 
                      of safety and customer service.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>
            <StaggerItem>
              <AnimatedCard className="h-full">
                <Card className="h-full p-8 border-2 hover:border-accent/50 transition-colors">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                      <Eye className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be India&apos;s most trusted and innovative logistics partner, setting 
                      new standards in the industry through technology, sustainability, and 
                      customer-centric solutions. We envision a future where every business 
                      has access to world-class logistics services.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground">
              Our core values guide every decision we make and every service we deliver.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="h-full">
                  <Card className="h-full text-center p-6 border-2 hover:border-accent/50 transition-colors">
                    <CardContent className="p-0">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Milestones</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Milestones Along the Way
            </h2>
            <p className="text-muted-foreground">
              Key moments that have shaped our journey and defined our success.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line - centered on md+, left-aligned on mobile */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-1 bg-primary/20" />
              
              <StaggerContainer className="space-y-12" staggerDelay={0.15}>
                {milestones.map((milestone, index) => (
                  <StaggerItem key={index}>
                    <AnimatedCard 
                      delay={index * 0.1}
                      className={`relative flex items-center ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Content - full width on mobile, half on md+ */}
                      <div className={`w-full pl-12 md:pl-0 md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                        <Card className="p-6 border-2 hover:border-accent/50 hover:shadow-lg transition-all">
                          <CardContent className="p-0">
                            <div className="text-accent font-bold text-xl mb-2">{milestone.year}</div>
                            <h3 className="font-bold text-lg mb-2">{milestone.title}</h3>
                            <p className="text-muted-foreground text-sm">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      {/* Circle - left-aligned on mobile, centered on md+ */}
                      <div className="absolute left-4 md:static md:w-2/12 flex md:justify-center">
                        <div className="w-6 h-6 rounded-full bg-accent border-4 border-background shadow-lg z-10" />
                      </div>
                      
                      {/* Spacer - hidden on mobile */}
                      <div className="hidden md:block md:w-5/12" />
                    </AnimatedCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Leadership Team
            </h2>
            <p className="text-muted-foreground">
              Meet the experienced professionals driving our success and innovation.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="h-full">
                  <Card className="h-full overflow-hidden group border-2 hover:border-accent/50 transition-colors">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-muted-foreground text-sm">{member.role}</p>
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
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Join hundreds of businesses that trust Navi Logistics for their 
              logistics and supply chain needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/30 text-black hover:bg-white/10 px-8 py-6 text-lg">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
