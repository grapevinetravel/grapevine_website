"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Button from "@/components/primitives/button";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const menuItems = [
    { label: "TMCs", href: "/tmcs" },
    { label: "Corporate", href: "/corporate" },
    { label: "Product", href: "/product" },
    { label: "About", href: "/about" },
    // { label: "Resources", href: "/resources" },
  ];

  return (
    <>
      <header
        className={cn(
          "bg-navy fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          isScrolled && "bg-navy/95 shadow-lg backdrop-blur-md",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="container mx-auto px-6 md:px-12">
          <div className="flex h-[80px] items-center justify-between md:h-[88px] lg:h-[104px]">
            <Link href="/" className="relative z-50 flex items-center">
              <Image
                src="/logo.svg"
                alt="Grapevine"
                width={177}
                height={46}
                className="h-[36px] w-auto md:h-[42px] lg:h-[46px]"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 lg:flex">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "hover:text-primary text-lg leading-5 font-semibold text-white transition-all duration-300",
                      isActive && "bg-light/10 rounded px-3 py-2.5"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <Button as="link" href="/contact" variant="primary" size="md">
                Book a demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="relative z-120 p-3 text-white lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative flex h-6 w-6 flex-col items-center justify-center">
                <span
                  className={cn(
                    "absolute block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out",
                    mobileMenuOpen ? "rotate-45" : "-translate-y-2"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out",
                    mobileMenuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out",
                    mobileMenuOpen ? "-rotate-45" : "translate-y-2"
                  )}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={cn(
          "fixed top-20 right-0 bottom-0 left-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          mobileMenuOpen ? "z-30 opacity-100" : "pointer-events-none -z-10 opacity-0"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "bg-navy fixed top-20 right-0 bottom-0 z-40 w-[280px] overflow-y-auto transition-transform duration-300 ease-out lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex min-h-full flex-col px-6 pt-6 pb-8">
          {/* Menu Items */}
          <nav className="flex flex-col gap-2">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "hover:text-primary rounded-lg px-4 py-3 text-lg font-semibold text-white transition-all duration-200 hover:bg-white/5",
                    mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0",
                    isActive && "bg-light/10"
                  )}
                  style={{ transition: `all 0.3s ease-out ${index * 0.05}s` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div
            className={cn(
              "mt-8 transition-all delay-[250ms] duration-300 ease-out",
              mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            )}
          >
            <Button
              as="link"
              href="/contact"
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a demo
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
