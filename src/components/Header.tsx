"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { ArrowRight, MapPin, Menu, Phone, Truck } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { siteData } from "@/content/siteData";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { brand, company, navigation } = siteData;
  const primaryActions = [
    {
      label: "Call Us",
      href: `tel:${company.phonePrimary.replace(/\s+/g, "")}`,
      icon: Phone,
    },
    {
      label: "Get a Quote",
      href: "/contact",
      icon: ArrowRight,
    },
  ];

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

  const closeMenu = () => {
    setIsOpen(false);
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
                src={brand.logo} 
                alt={`${brand.name} Logo`} 
                width={40} 
                height={40}
                className="w-10 h-10 sm:w-[50px] sm:h-[50px]"
              />
            </div>
            <div className="flex flex-col">
              <div>
                <span className="text-sm sm:text-lg md:text-xl font-bold text-foreground">
                  {brand.name.split(" ")[0]}
                </span>
                <span className="text-sm sm:text-lg md:text-xl font-bold text-gradient">
                  {" "}
                  {brand.name.split(" ").slice(1).join(" ")}
                </span>
              </div>
              <span className="text-[8px] sm:text-[10px] md:text-xs font-medium text-muted-foreground tracking-wider uppercase">
                {brand.tagline}
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
            <Link href={`tel:${company.phonePrimary.replace(/\s+/g, "")}`} className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{company.phonePrimary}</span>
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
            <SheetContent
              side="right"
              className="w-[340px] max-w-[92vw] border-l border-border/70 bg-background/98 p-0 overflow-y-auto sm:w-[380px] md:w-[420px]"
            >
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>Main navigation links for Navi Logistics</SheetDescription>
              </VisuallyHidden>
              <div className="flex min-h-full flex-col">
                <div className="border-b bg-muted/30 px-5 pb-5 pt-10 sm:px-6">
                  <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
                    <div className="rounded-xl overflow-hidden border border-border/60 bg-background p-1 shadow-sm">
                      <Image 
                        src={brand.logo} 
                        alt={`${brand.name} Logo`} 
                        width={40} 
                        height={40}
                        className="w-10 h-10"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <span className="text-base font-bold text-foreground">
                          {brand.name.split(" ")[0]}
                        </span>
                        <span className="text-base font-bold text-gradient">
                          {" "}
                          {brand.name.split(" ").slice(1).join(" ")}
                        </span>
                      </div>
                      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        {brand.tagline}
                      </span>
                    </div>
                  </Link>

                  <div className="mt-5 rounded-2xl border border-border/70 bg-background p-4 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-accent/15 p-2 text-accent">
                        <Truck className="h-5 w-5" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-foreground">
                          Freight support on the go
                        </p>
                        <p className="text-sm leading-6 text-muted-foreground">
                          Open the menu, jump to any section, or contact our team directly without hunting for the right page.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span className="rounded-full bg-muted px-3 py-1">
                        Pan India
                      </span>
                      <span className="rounded-full bg-muted px-3 py-1">
                        Warehousing
                      </span>
                      <span className="rounded-full bg-muted px-3 py-1">
                        Express Delivery
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-5 py-5 sm:px-6">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Navigate
                  </div>
                  <nav className="flex flex-col gap-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className={`group flex items-center justify-between rounded-2xl border px-4 py-3.5 text-base font-medium transition-all ${
                          isActive(item.href)
                            ? "border-primary bg-primary text-primary-foreground shadow-sm"
                            : "border-border/70 bg-background hover:border-accent/40 hover:bg-muted"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ArrowRight
                          className={`h-4 w-4 transition-transform ${
                            isActive(item.href)
                              ? "translate-x-0"
                              : "text-muted-foreground group-hover:translate-x-1"
                          }`}
                        />
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-6 rounded-2xl border border-border/70 bg-muted/25 p-4">
                    <div className="mb-3 flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 text-accent" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          Based in Howrah, serving across India
                        </p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {company.addressLine1}, {company.addressLine2}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`tel:${company.phonePrimary.replace(/\s+/g, "")}`}
                      onClick={closeMenu}
                      className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                    >
                      <Phone className="h-4 w-4" />
                      {company.phonePrimary}
                    </Link>
                  </div>

                  <div className="mt-auto border-t pt-5">
                    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      Quick Actions
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {primaryActions.map((action) => (
                        <Button
                          key={action.label}
                          asChild
                          variant={action.label === "Get a Quote" ? "default" : "outline"}
                          className={
                            action.label === "Get a Quote"
                              ? "bg-accent text-black font-semibold hover:bg-accent/90"
                              : "font-semibold"
                          }
                        >
                          <Link href={action.href} onClick={closeMenu}>
                            <action.icon className="h-4 w-4" />
                            {action.label}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
