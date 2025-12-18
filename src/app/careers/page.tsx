"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { AnimatedSection, AnimatedCard, StaggerContainer, StaggerItem } from "@/components/AnimatedComponents";
import {
  Heart,
  GraduationCap,
  Clock,
  Users,
  Dumbbell,
  Plane,
  ArrowRight,
  MapPin,
  Briefcase,
  Building,
} from "lucide-react";

const benefits = [
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health insurance for you and your family, plus wellness programs." },
  { icon: GraduationCap, title: "Learning & Development", description: "Continuous learning opportunities, training programs, and career growth paths." },
  { icon: Clock, title: "Work-Life Balance", description: "Flexible working hours, remote work options, and generous leave policies." },
  { icon: Users, title: "Great Culture", description: "Collaborative environment, team events, and a supportive community." },
  { icon: Dumbbell, title: "Fitness Benefits", description: "Gym memberships, fitness challenges, and wellness allowances." },
  { icon: Plane, title: "Travel Perks", description: "Travel allowances, company trips, and relocation assistance." },
];

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Senior Logistics Manager",
    content: "Working at Navi Logistics has been an incredible journey. The growth opportunities and supportive team make it a great place to build a career.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    years: "4 years at Navi",
  },
  {
    name: "Anita Sharma",
    role: "Operations Coordinator",
    content: "The work-life balance here is exceptional. I love how the company invests in employee development and values our contributions.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    years: "2 years at Navi",
  },
  {
    name: "Vikram Singh",
    role: "Fleet Manager",
    content: "The technology and innovation here keep me motivated. Every day brings new challenges and opportunities to learn.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    years: "5 years at Navi",
  },
];

const positions = [
  { title: "Senior Logistics Manager", department: "Operations", location: "Howrah, WB", type: "Full-time" },
  { title: "Fleet Operations Coordinator", department: "Fleet Management", location: "Mumbai, MH", type: "Full-time" },
  { title: "Warehouse Supervisor", department: "Warehousing", location: "Delhi, NCR", type: "Full-time" },
  { title: "Customer Success Manager", department: "Customer Service", location: "Bangalore, KA", type: "Full-time" },
  { title: "Software Engineer", department: "Technology", location: "Remote", type: "Full-time" },
  { title: "Data Analyst", department: "Analytics", location: "Howrah, WB", type: "Full-time" },
];

const stats = [
  { value: 1000, suffix: "+", label: "Employees" },
  { value: 50, suffix: "+", label: "Cities" },
  { value: 4.8, suffix: "/5", label: "Employee Rating" },
  { value: 95, suffix: "%", label: "Retention Rate" },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=600&fit=crop"
            alt="Careers at Navi Logistics"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <Badge className="mb-6 bg-accent/20 text-accent hover:bg-accent/30 border-0">
                Careers
              </Badge>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Join Our Growing Team
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-white/80">
                Build your career with India&apos;s most innovative logistics company. 
                We&apos;re looking for passionate individuals who want to make a difference.
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

      {/* Benefits Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Work With Us
            </h2>
            <p className="text-muted-foreground">
              We believe in taking care of our team. Here&apos;s what you can expect when you join Navi Logistics.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="h-full">
                  <Card className="h-full p-6 border-2 hover:border-accent/50 transition-colors">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Life at Navi Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <Badge className="mb-4">Life at Navi</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                More Than Just a Job
              </h2>
              <p className="text-muted-foreground mb-6">
                At Navi Logistics, we&apos;re building more than a company—we&apos;re building a community. 
                Our team members come from diverse backgrounds, bringing unique perspectives and 
                skills that make us stronger together.
              </p>
              <p className="text-muted-foreground mb-8">
                We celebrate achievements, support each other through challenges, and create an 
                environment where everyone can thrive and grow. Join us and be part of something special.
              </p>
              <Button size="lg" asChild>
                <Link href="#positions">
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop"
                    alt="Team collaboration"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
                    alt="Team meeting"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden -mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop"
                    alt="Office environment"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop"
                    alt="Team celebration"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hear From Our Team
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="h-full">
                  <Card className="h-full p-6 bg-muted/30 border-0">
                    <CardContent className="p-0 h-full flex flex-col">
                      <p className="text-lg mb-6 flex-1">&ldquo;{testimonial.content}&rdquo;</p>
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          <div className="text-xs text-accent">{testimonial.years}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Open Positions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Current Opportunities
            </h2>
            <p className="text-muted-foreground">
              Find your perfect role and take the next step in your career.
            </p>
          </AnimatedSection>

          <StaggerContainer className="space-y-4 max-w-4xl mx-auto" staggerDelay={0.1}>
            {positions.map((position, index) => (
              <StaggerItem key={index}>
                <AnimatedCard>
                  <Card className="p-6 border-2 hover:border-accent/50 transition-colors">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold mb-1">{position.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Building className="h-4 w-4" />
                              {position.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {position.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              {position.type}
                            </span>
                          </div>
                        </div>
                        <Button asChild>
                          <Link href="/contact">
                            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
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
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=600&fit=crop"
            alt="Join our team"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Don&apos;t See the Right Role?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              We&apos;re always looking for talented individuals. Send us your resume 
              and we&apos;ll keep you in mind for future opportunities.
            </p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg">
              <Link href="/contact">
                Submit Your Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
