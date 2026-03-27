import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { siteData } from "@/content/siteData";

export function Footer() {
  const { brand, company, footer, socialLinks } = siteData;
  const serviceAreaEntries = Object.entries(footer.serviceAreas);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-3xl border border-white/[0.12] bg-white/[0.06] p-6 backdrop-blur-sm lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent/90">
                Ready To Ship Smarter?
              </p>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Let&apos;s plan your next freight movement with a team that
                knows the lane.
              </h2>
              <p className="text-sm leading-7 text-primary-foreground/75 md:text-base">
                Get in touch for a quote, service consultation, or support with
                a custom logistics requirement.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="bg-accent font-semibold text-black hover:bg-accent/90"
              >
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={`tel:${company.phonePrimary.replace(/\s+/g, "")}`}>
                  Call Now
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1fr]">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-0.5">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  width={50}
                  height={50}
                  className="h-20 w-20"
                />
              </div>
              <div className="space-y-1">
                <div>
                  <span className="text-lg font-bold text-primary-foreground">
                    {brand.name.split(" ")[0]}
                  </span>
                  <span className="text-lg font-bold text-gradient">
                    {" "}
                    {brand.name.split(" ").slice(1).join(" ")}
                  </span>
                </div>
                <span className="text-[11px] font-medium uppercase tracking-wider text-primary-foreground/70">
                  {brand.tagline}
                </span>
              </div>
            </Link>
            <p className="max-w-md leading-relaxed text-primary-foreground/80">
              {company.description}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground/80 transition-all duration-200 hover:border-accent hover:bg-accent hover:text-black"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                  <span>{social.name}</span>
                </Link>
              ))}
            </div>
            <p className="text-sm leading-7 text-primary-foreground/65">
              Serving businesses across India with freight movement,
              warehousing, and supply chain support tailored to operational
              realities.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {footer.services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <address className="not-italic text-primary-foreground/80">
                  {company.addressLine1},
                  <br />
                  {company.addressLine2}
                </address>
              </div>
              <div>
                <Link
                  href={`tel:${company.phonePrimary.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  {company.phonePrimary}
                </Link>
              </div>
              <div>
                <Link
                  href={`tel:${company.phoneSecondary.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  {company.phoneSecondary}
                </Link>
              </div>
              <div>
                <Link
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  <Mail className="h-5 w-5 text-accent" />
                  {company.email}
                </Link>
              </div>
              <Button
                asChild
                variant="outline"
                className="w-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/contact">Request Logistics Support</Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/20" />

        <div className="mb-10">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-lg font-semibold">Service Areas</h3>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-primary-foreground/65">
                {company.serviceAreasSummary}
              </p>
            </div>
            <Link
              href="/contact"
              className="text-sm font-medium text-accent transition-colors hover:text-accent/90"
            >
              Ask about your route
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {serviceAreaEntries.map(([region, cities]) => (
              <div
                key={region}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent/90">
                  {region}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cities.slice(0, 4).map((city) => (
                    <span
                      key={city}
                      className="rounded-full bg-white/[0.08] px-3 py-1 text-xs text-primary-foreground/75"
                    >
                      {city}
                    </span>
                  ))}
                  {cities.length > 4 ? (
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-primary-foreground/60">
                      +{cities.length - 4} more
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="mb-10 bg-primary-foreground/20" />

        <div className="flex flex-col gap-4 text-sm text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/privacy"
              className="text-accent transition-colors hover:text-accent/90"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-accent transition-colors hover:text-accent/90"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
