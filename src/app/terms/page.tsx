"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedComponents";
import Image from "next/image";
import {
  FileText,
  Truck,
  UserCheck,
  Shield,
  CreditCard,
  XCircle,
  Scale,
  RefreshCw,
  Phone,
} from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "1. Acceptance of Terms",
    content:
      'By accessing and using the services provided by Navi Logistics ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
  },
  {
    icon: Truck,
    title: "2. Our Services",
    content:
      "Navi Logistics provides comprehensive logistics and transportation services including:",
    list: [
      "Freight shipping (Full Truck Load & Less Than Truck Load)",
      "Warehousing and storage solutions",
      "Supply chain management",
      "Express delivery services",
      "Air and rail freight",
      "Last mile delivery",
    ],
  },
  {
    icon: UserCheck,
    title: "3. User Responsibilities",
    content: "When using our services, you agree to:",
    list: [
      "Provide accurate and complete information for shipments",
      "Properly package and label all goods as per guidelines",
      "Comply with all applicable laws and regulations",
      "Not ship prohibited or restricted items",
      "Pay all applicable fees and charges on time",
      "Maintain valid contact information for delivery updates",
    ],
  },
  {
    icon: Shield,
    title: "4. Liability & Insurance",
    content:
      "While we take utmost care in handling your shipments, our liability is limited as per industry standards and applicable laws. We strongly recommend customers obtain appropriate insurance coverage for valuable shipments. Claims must be filed within 7 days of delivery for visible damage and 14 days for concealed damage.",
  },
  {
    icon: CreditCard,
    title: "5. Payment Terms",
    content:
      "Payment terms are agreed upon at the time of service booking. We accept various payment methods including bank transfer, credit cards, and UPI. Invoices are due within 30 days unless otherwise agreed. Late payments may incur additional charges at 1.5% per month.",
  },
  {
    icon: XCircle,
    title: "6. Cancellation Policy",
    content:
      "Cancellation policies vary based on the type of service booked. For standard shipments, cancellation before pickup is free of charge. Cancellation after pickup may incur fees based on distance covered. Express services may have different terms. Please contact our customer service team for specific cancellation terms.",
  },
  {
    icon: Scale,
    title: "7. Dispute Resolution",
    content:
      "Any disputes arising from these terms or our services shall be resolved through arbitration in Howrah, West Bengal, India, in accordance with the Arbitration and Conciliation Act, 1996. The language of arbitration shall be English. Courts in Howrah shall have exclusive jurisdiction.",
  },
  {
    icon: RefreshCw,
    title: "8. Changes to Terms",
    content:
      "We reserve the right to modify these terms at any time. Material changes will be notified via email or website announcement. Continued use of our services after changes constitutes acceptance of the modified terms. We encourage you to review these terms periodically.",
  },
];

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=600&fit=crop"
            alt="Terms of Service"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <Badge className="mb-6 bg-accent/20 text-accent hover:bg-accent/30 border-0">
                Legal
              </Badge>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Terms of Service
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-white/80">
                Please read these terms carefully before using our logistics
                services.
              </p>
              <p className="text-sm text-white/60 mt-4">
                Last updated: December 2024
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-5xl">
          <StaggerContainer className="space-y-8" staggerDelay={0.1}>
            {sections.map((section, index) => (
              <StaggerItem key={index}>
                <Card className="p-6 md:p-8 border-2 hover:border-accent/50 transition-colors">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <section.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">
                          {section.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                          {section.content}
                        </p>
                        {section.list && (
                          <ul className="mt-4 space-y-2">
                            {section.list.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-muted-foreground"
                              >
                                <span className="text-accent mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}

            {/* Contact Section */}
            <StaggerItem>
              <Card className="p-6 md:p-8 border-2 bg-primary/5 border-primary/20">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-4">
                        9. Contact Information
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        For questions about these Terms of Service, please
                        contact us at:
                      </p>
                      <div className="bg-background p-4 rounded-lg">
                        <p className="font-semibold text-lg">Navi Logistics</p>
                        <p className="text-muted-foreground">
                          146 Foreshore Road, Shibpur
                        </p>
                        <p className="text-muted-foreground">
                          Howrah, West Bengal - 711101
                        </p>
                        <p className="text-muted-foreground mt-2">
                          Phone:{" "}
                          <span className="text-foreground">
                            +91 98300 32732
                          </span>
                        </p>
                        <p className="text-muted-foreground">
                          Email:{" "}
                          <span className="text-foreground">
                            contact@navilogistics.in
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
