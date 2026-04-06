import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedComponents";
import Image from "next/image";
import { siteData } from "@/content/siteData";
import { createPageMetadata } from "@/lib/seo";
import { Phone } from "lucide-react";

const sections = siteData.privacyPage.sections;

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read the Navi Logistics privacy policy to understand how we collect, use, and protect customer and business information.",
  path: "/privacy",
  keywords: ["privacy policy", "data protection", "Navi Logistics privacy"],
});

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&h=600&fit=crop"
            alt="Privacy Policy"
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
                Privacy Policy
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-white/80">
                Your privacy is important to us. Learn how we collect, use, and
                protect your information.
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
                        {"list" in section && section.list && (
                          <ul className="mt-4 space-y-2">
                            {section.list.map((item: string, i: number) => (
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
                        {"note" in section && section.note && (
                          <p className="mt-4 text-sm font-medium text-accent italic">
                            {section.note}
                          </p>
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
                        8. Contact Us
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        If you have any questions about this Privacy Policy or
                        wish to exercise your data rights, please contact us:
                      </p>
                      <div className="bg-background p-4 rounded-lg">
                        <p className="font-semibold text-lg">Navi Logistics</p>
                        <p className="text-muted-foreground">
                          Data Protection Officer
                        </p>
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
