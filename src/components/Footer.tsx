import Link from "next/link";
import { Truck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "News & Updates", href: "/news" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  { name: "Freight Shipping", href: "/services#freight" },
  { name: "Warehousing", href: "/services#warehousing" },
  { name: "Supply Chain", href: "/services#supply-chain" },
  { name: "Last Mile Delivery", href: "/services#last-mile" },
  { name: "Express Shipping", href: "/services#express" },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/srslogistics9/", icon: Linkedin },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="rounded-xl overflow-hidden group-hover:scale-110 transition-transform">
                <Image 
                  src="/Navi Logistics.jpeg" 
                  alt="Navi Logistics Logo" 
                  width={50} 
                  height={50}
                  className="w-auto h-auto"
                />
              </div>
              <div>
                <span className="text-xl font-bold">Navi</span>
                <span className="text-xl font-bold text-accent"> Logistics</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner in global logistics and supply chain solutions. 
              We deliver excellence across borders with speed, reliability, and care.
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
              {quickLinks.map((link) => (
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
              {services.map((service) => (
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
                <span className="text-primary-foreground/80">
                  146 Foreshore Road, Shibpur,
                  <br />
                  Howrah (West Bengal) - 711102
                </span>
              </li>
              <li>
                <Link
                  href="tel:+919830032732"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  +91 98300 32732
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+918337091474"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  +91 83370 91474
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:contact@navilogistics.in"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5 text-accent" />
                  contact@navilogistics.in
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Navi Logistics. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-accent transition-colors">
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
