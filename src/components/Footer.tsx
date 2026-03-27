import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { siteData } from "@/content/siteData";

export function Footer() {
  const { brand, company, footer, socialLinks } = siteData;
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="rounded-xl overflow-hidden group-hover:scale-110 transition-transform">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  width={50}
                  height={50}
                  className="w-auto h-auto"
                />
              </div>
              <div className="flex flex-col">
                <div>
                  <span className="text-xl font-bold">
                    {brand.name.split(" ")[0]}
                  </span>
                  <span className="text-xl font-bold text-accent">
                    {" "}
                    {brand.name.split(" ").slice(1).join(" ")}
                  </span>
                </div>
                <span className="text-[10px] font-medium text-primary-foreground/70 tracking-wider uppercase">
                  {brand.tagline}
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              {company.description}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-black transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {footer.services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                <address className="text-primary-foreground/80 not-italic">
                  {company.addressLine1},
                  <br />
                  {company.addressLine2}
                </address>
              </li>
              <li>
                <Link
                  href={`tel:${company.phonePrimary.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  {company.phonePrimary}
                </Link>
              </li>
              <li>
                <Link
                  href={`tel:${company.phoneSecondary.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  {company.phoneSecondary}
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5 text-accent" />
                  {company.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas Section - SEO */}
        <Separator className="my-10 bg-primary-foreground/20" />

        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-6">Service Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(footer.serviceAreas).map(([region, cities]) => (
              <div key={region}>
                <h4 className="text-accent font-medium mb-2">{region}</h4>
                <ul className="space-y-1">
                  {cities.map((city) => (
                    <li
                      key={city}
                      className="text-primary-foreground/70 text-sm"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-primary-foreground/60 text-sm mt-4">
            {company.serviceAreasSummary}
          </p>
        </div>

        <Separator className="mb-10 bg-primary-foreground/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} Navi Logistics. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
