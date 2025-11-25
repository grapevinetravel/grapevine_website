"use client";

import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import XIcon from "./icons/x";
import Link from "next/link";
import LinkedInIcon from "./icons/linkedin";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const platformLinks = [
    { label: "Corporate", href: "/corporate" },
    { label: "TMCs", href: "/tmcs" },
    { label: "Product", href: "/product" },
  ];

  const companyLinks = [
    { label: "About us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/policy/privacy" },
    { label: "Cookies Policy", href: "/policy/cookies" },
  ];

  return (
    <footer className="bg-navy py-12 md:py-16 lg:py-18">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-3 md:mb-10 md:gap-10 lg:mb-12 lg:grid-cols-5 lg:gap-12">
          {/* Brand Section */}
          <div className="pb-6 sm:col-span-3 md:pb-8 lg:col-span-2 lg:pb-0">
            <div className="mb-5 md:mb-6 lg:mb-6">
              <Link href="/" aria-label="Go to homepage">
                <Image
                  src="/logo.svg"
                  alt="Grapevine"
                  width={177}
                  height={46}
                  className="h-[36px] w-auto md:h-[42px] lg:h-[46px]"
                />
              </Link>
            </div>
            <p className="text-light mb-8 text-sm leading-[140%] md:mb-[46px] md:text-base">
              The Smart Communications Platform for Business Travel
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@grapevine.travel"
                className="text-light hover:text-primary flex items-center gap-2 text-sm transition-colors"
              >
                <Mail className="text-primary shrink-0" size={16} />
                info@grapevine.travel
              </a>
              <div className="text-light flex items-start gap-2 text-sm">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>
                  Soho Works White City, 17 Top Wood
                  <br />
                  Lane, London, W12 7RR
                </span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-primary mb-4 text-base font-semibold">Platform</h3>
            <ul className="flex flex-col gap-3">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-light hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-primary mb-4 text-base font-semibold">Company</h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-light hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-primary mb-4 text-base font-semibold">Legal</h3>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-light hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-border-navy-subtle flex flex-col items-start justify-between gap-6 border-t pt-6 md:flex-row md:items-center md:gap-4 md:pt-8">
          <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row md:items-center md:gap-6">
            <p className="text-light text-xs md:text-sm">© 2025 Grapevine - All rights reserved</p>
            <div className="flex items-center gap-4 md:gap-6">
              <Link
                href="/policy/terms"
                className="text-light hover:text-primary text-xs whitespace-nowrap transition-colors md:text-sm"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/policy/privacy"
                className="text-light hover:text-primary text-xs whitespace-nowrap transition-colors md:text-sm"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/grapevinetravel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon width={20} height={20} />
            </a>
            <a
              href="https://x.com/grapevine_trvl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <XIcon width={20} height={20} />
            </a>
          </div>
        </div>

        {/* Sources Section - Only show on home page */}
        {isHomePage && (
          <div className="border-border-navy-subtle mt-8 border-t pt-6 md:mt-10 md:pt-8">
            <p className="text-light/70 text-[10px] leading-relaxed md:text-xs">
              <sup>1</sup> GBTA/Phocuswright Corporate Travel Leakage Report (2023) <sup>2</sup> Deloitte & Phocuswright Global Business Travel Market (2024) <sup>3</sup> Expedia/Statista AI in Travel (2024) <sup>4</sup> Deloitte AI in Travel & Hospitality (2024)
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}
