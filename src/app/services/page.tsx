"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { AnimatedSection, AnimatedCard, StaggerContainer, StaggerItem } from "@/components/AnimatedComponents";
import {
  Truck,
  Warehouse,
  Globe,
  Clock,
  Plane,
  Ship,
  ArrowRight,
  CheckCircle,
  Package,
  Zap,
  Shield,
  Settings,
  Building,
  ShoppingCart,
  Pill,
  Car,
  Laptop,
  Utensils,
} from "lucide-react";

const services = [
  {
    id: "freight",
    icon: Truck,
    title: "Freight Shipping",
    description: "Comprehensive ground transportation solutions for businesses of all sizes.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
    features: [
      "Full Truck Load (FTL) services",
      "Less Than Truck Load (LTL) options",
      "Temperature-controlled transport",
      "GPS tracking for all shipments",
      "Dedicated fleet management",
      "Cross-docking capabilities",
    ],
    details: "Our freight shipping services cover the entire nation with a modern fleet of vehicles. Whether you need to ship a single pallet or require full truck loads, we have flexible solutions to meet your requirements.",
  },
  {
    id: "warehousing",
    icon: Warehouse,
    title: "Warehousing & Storage",
    description: "State-of-the-art warehousing facilities with advanced inventory management.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop",
    features: [
      "1 million+ sq ft storage space",
      "Climate-controlled zones",
      "Real-time inventory tracking",
      "Pick and pack services",
      "Cross-docking solutions",
      "Kitting and assembly",
    ],
    details: "Our warehousing solutions are designed to optimize your supply chain. With strategically located facilities and advanced WMS, we ensure your inventory is always where you need it.",
  },
  {
    id: "supply-chain",
    icon: Globe,
    title: "Supply Chain Management",
    description: "End-to-end supply chain solutions for seamless operations.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=500&fit=crop",
    features: [
      "Vendor management",
      "Procurement optimization",
      "Demand forecasting",
      "Distribution planning",
      "Performance analytics",
      "Cost optimization",
    ],
    details: "Our supply chain experts work with you to design and implement strategies that reduce costs, improve efficiency, and enhance customer satisfaction.",
  },
  {
    id: "express",
    icon: Clock,
    title: "Express Delivery",
    description: "Time-critical deliveries with guaranteed speed and reliability.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=500&fit=crop",
    features: [
      "Same-day delivery options",
      "Next-day guaranteed service",
      "Time-definite deliveries",
      "Priority handling",
      "Real-time updates",
      "Proof of delivery",
    ],
    details: "When time is of the essence, our express delivery service ensures your shipments reach their destination with speed and precision.",
  },
  {
    id: "air-freight",
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable air cargo services for domestic and international shipments.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop",
    features: [
      "Global airport coverage",
      "Charter services available",
      "Dangerous goods handling",
      "Temperature-sensitive cargo",
      "Customs clearance support",
      "Door-to-door service",
    ],
    details: "Our air freight solutions connect you to markets worldwide with speed and reliability. We handle everything from documentation to delivery.",
  },
  {
    id: "ocean-freight",
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective sea shipping for large-scale international cargo.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=500&fit=crop",
    features: [
      "FCL and LCL options",
      "All major ports covered",
      "Reefer container services",
      "Project cargo handling",
      "Customs brokerage",
      "Insurance coverage",
    ],
    details: "For large shipments and cost-effective international transport, our ocean freight services provide reliable solutions across all major trade routes.",
  },
];

const process = [
  { step: "01", title: "Consult", description: "Discuss your logistics needs with our experts" },
  { step: "02", title: "Plan", description: "Develop a customized logistics strategy" },
  { step: "03", title: "Execute", description: "Implement the solution with precision" },
  { step: "04", title: "Monitor", description: "Track and optimize performance continuously" },
];

const industries = [
  { icon: ShoppingCart, name: "E-Commerce", description: "Fast fulfillment for online retailers" },
  { icon: Pill, name: "Healthcare", description: "Temperature-controlled pharma logistics" },
  { icon: Car, name: "Automotive", description: "Just-in-time delivery for manufacturers" },
  { icon: Laptop, name: "Technology", description: "Secure handling for electronics" },
  { icon: Utensils, name: "Food & Beverage", description: "Cold chain logistics solutions" },
  { icon: Building, name: "Manufacturing", description: "Industrial supply chain solutions" },
];

const stats = [
  { value: 50, suffix: "K+", label: "Deliveries Monthly" },
  { value: 200, suffix: "+", label: "Cities Covered" },
  { value: 99.5, suffix: "%", label: "On-Time Rate" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&h=600&fit=crop"
            alt="Our Services"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <Badge className="mb-6 bg-accent/20 text-accent hover:bg-accent/30 border-0">
                Our Services
              </Badge>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Comprehensive Logistics Solutions
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-white/80">
                From warehousing to last-mile delivery, we offer end-to-end logistics 
                services designed to meet your unique business requirements.
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

      {/* Services Detail Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">What We Offer</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Services Tailored for Your Success
            </h2>
            <p className="text-muted-foreground">
              Explore our comprehensive range of logistics solutions designed to 
              optimize your supply chain and drive business growth.
            </p>
          </AnimatedSection>

          <div className="space-y-20">
            {services.map((service, index) => (
              <AnimatedSection 
                key={service.id} 
                direction={index % 2 === 0 ? "left" : "right"}
                delay={0.1}
              >
                <div id={service.id} className="scroll-mt-24">
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}>
                    <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                      <AnimatedCard>
                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          <div className="absolute bottom-6 left-6">
                            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                              <service.icon className="h-7 w-7 text-accent-foreground" />
                            </div>
                          </div>
                        </div>
                      </AnimatedCard>
                    </div>
                    <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                      <Badge className="mb-4">{`0${index + 1}`}</Badge>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.details}</p>
                      <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild>
                        <Link href="/contact">
                          Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Work
            </h2>
            <p className="text-muted-foreground">
              A simple, streamlined approach to delivering exceptional logistics solutions.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
            {process.map((step, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="h-full">
                  <Card className="h-full text-center p-6 border-2 hover:border-accent/50 transition-colors">
                    <CardContent className="p-0">
                      <div className="text-5xl font-bold text-primary/20 mb-4">{step.step}</div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Industries We Serve</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Specialized Solutions for Every Sector
            </h2>
            <p className="text-muted-foreground">
              We understand the unique logistics requirements of different industries.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {industries.map((industry, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="h-full">
                  <Card className="h-full p-6 border-2 hover:border-accent/50 transition-colors">
                    <CardContent className="p-0 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <industry.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{industry.name}</h3>
                        <p className="text-muted-foreground text-sm">{industry.description}</p>
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
              Need a Custom Logistics Solution?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Our team of experts is ready to design a tailored solution for your 
              unique business requirements.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-black font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
                <Link href="tel:+919830032732">Call +91 98300 32732</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
