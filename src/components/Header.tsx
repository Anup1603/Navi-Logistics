"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, Truck, Phone } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "News", href: "/news" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="rounded-xl overflow-hidden group-hover:scale-110 transition-transform">
              <Image 
                src="/Navi Logistics.jpeg" 
                alt="Navi Logistics Logo" 
                width={40} 
                height={40}
                className="w-10 h-10 sm:w-[50px] sm:h-[50px]"
              />
            </div>
            <div className="flex flex-col">
              <div>
                <span className="text-sm sm:text-lg md:text-xl font-bold text-foreground">Navi</span>
                <span className="text-sm sm:text-lg md:text-xl font-bold text-gradient"> Logistics</span>
              </div>
              <span className="text-[8px] sm:text-[10px] md:text-xs font-medium text-muted-foreground tracking-wider uppercase">
                Logistics Made Simple
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="tel:+919830032732" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">+91 98300 32732</span>
            </Link>
            <Button asChild className="bg-accent hover:bg-accent/90 text-black font-semibold">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" className="border-foreground/20 bg-background/50 shrink-0">
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0 overflow-y-auto">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>Main navigation links for Navi Logistics</SheetDescription>
              </VisuallyHidden>
              <div className="flex flex-col h-full p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                    <div className="rounded-xl overflow-hidden">
                      <Image 
                        src="/Navi Logistics.jpeg" 
                        alt="Navi Logistics Logo" 
                        width={40} 
                        height={40}
                        className="w-10 h-10"
                      />
                    </div>
                    <span className="text-base sm:text-lg font-bold">Navi Logistics</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-1 flex-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                        isActive(item.href)
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="pt-4 border-t space-y-3">
                  <Link 
                    href="tel:+919830032732" 
                    className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="text-sm">+91 98300 32732</span>
                  </Link>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-black font-semibold">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
