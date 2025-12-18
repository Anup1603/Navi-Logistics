"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedCard, StaggerContainer, StaggerItem } from "@/components/AnimatedComponents";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["146 Foreshore Road, Shibpur", "Howrah (West Bengal) - 711102"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98300 32732", "+91 83370 91474"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["contact@navilogistics.in"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 1:00 PM"],
  },
];

const faqs = [
  {
    question: "How can I track my shipment?",
    answer: "You can track your shipment using the tracking number provided in your confirmation email through our online tracking portal.",
  },
  {
    question: "What areas do you service?",
    answer: "We provide services across India and have international shipping capabilities to over 50 countries worldwide.",
  },
  {
    question: "How do I get a quote?",
    answer: "Fill out the contact form above or call us directly. Our team will provide a customized quote within 24 hours.",
  },
  {
    question: "Do you offer insurance for shipments?",
    answer: "Yes, we offer comprehensive cargo insurance options for all shipments. Ask our team for details.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=600&fit=crop"
            alt="Contact Navi Logistics"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <Badge className="mb-6 bg-accent/20 text-accent hover:bg-accent/30 border-0">
                Contact Us
              </Badge>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get in Touch With Us
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-white/80">
                Have questions or need a quote? Our team is ready to help you with 
                all your logistics needs.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <Card className="p-6 md:p-8 border-2">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    {status === "success" ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                        <p className="text-muted-foreground mb-6">
                          Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                        </p>
                        <Button onClick={() => setStatus("idle")}>Send Another Message</Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              required
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91 98300 32732"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company">Company Name</Label>
                            <Input
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Your Company"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Interested In</Label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-input rounded-md bg-background"
                          >
                            <option value="">Select a service</option>
                            <option value="freight">Freight Shipping</option>
                            <option value="warehousing">Warehousing</option>
                            <option value="supply-chain">Supply Chain Management</option>
                            <option value="express">Express Delivery</option>
                            <option value="air-freight">Air Freight</option>
                            <option value="ocean-freight">Ocean Freight</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your logistics needs..."
                            rows={5}
                            required
                          />
                        </div>

                        {status === "error" && (
                          <div className="flex items-center gap-2 text-destructive">
                            <AlertCircle className="h-5 w-5" />
                            <span>{errorMessage}</span>
                          </div>
                        )}

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full md:w-auto"
                          disabled={status === "loading"}
                        >
                          {status === "loading" ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div>
              <StaggerContainer className="space-y-6" staggerDelay={0.1}>
                {contactInfo.map((info, index) => (
                  <StaggerItem key={index}>
                    <AnimatedCard>
                      <Card className="p-6 border-2 hover:border-accent/50 transition-colors">
                        <CardContent className="p-0">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                              <info.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold mb-2">{info.title}</h3>
                              {info.details.map((detail, i) => (
                                <p key={i} className="text-muted-foreground text-sm">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="aspect-[21/9] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1455078659915!2d88.33394987471196!3d22.571872234048775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a1f0000001%3A0x3d4e9c7f0b0b1c8b!2s146%2C%20Foreshore%20Rd%2C%20Shibpur%2C%20Howrah%2C%20West%20Bengal%20711102!5e0!3m2!1sen!2sin!4v1702893600000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Navi Logistics Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="h-full">
                  <Card className="h-full p-6 border-2 hover:border-accent/50 transition-colors">
                    <CardContent className="p-0">
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
