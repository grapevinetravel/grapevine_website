import { Metadata } from "next";

export const siteConfig = {
  name: "Grapevine",
  description:
    "Drive in-platform bookings with AI-powered traveller communications. Grapevine helps TMCs and corporates increase hotel attachment rates and traveller satisfaction.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://grapevine.travel",
  ogImage: "/images/og-image.png",
  xHandle: "grapevine_trvl",
  linkedInUrl: "https://www.linkedin.com/company/grapevinetravel",
  locale: "en_GB",
  keywords: [
    "travel management",
    "TMC software",
    "corporate travel",
    "AI travel assistant",
    "hotel booking",
    "travel technology",
    "business travel",
    "travel automation",
    "duty of care",
    "travel policy compliance",
  ],
};

interface PageMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  pathname?: string;
}

export function generateMetadata({
  title,
  description,
  keywords,
  image,
  noIndex = false,
  pathname = "",
}: PageMetadataProps): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const pageDescription = description || siteConfig.description;
  const pageImage = image || siteConfig.ogImage;
  const pageKeywords = keywords ? [...siteConfig.keywords, ...keywords] : siteConfig.keywords;
  const canonicalUrl = `${siteConfig.url}${pathname}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonicalUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      ...(siteConfig.xHandle && { creator: `@${siteConfig.xHandle}` }),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs?: string[];
  contactPoint?: {
    "@type": "ContactPoint";
    contactType: string;
    email?: string;
    url?: string;
  };
}

export interface WebPageSchema {
  "@context": "https://schema.org";
  "@type": "WebPage";
  name: string;
  description: string;
  url: string;
  isPartOf: {
    "@type": "WebSite";
    name: string;
    url: string;
  };
}

export interface FAQSchema {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: {
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }[];
}

export interface SoftwareApplicationSchema {
  "@context": "https://schema.org";
  "@type": "SoftwareApplication";
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  offers?: {
    "@type": "Offer";
    price: string;
    priceCurrency: string;
  };
}

export interface BreadcrumbSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: {
    "@type": "ListItem";
    position: number;
    name: string;
    item?: string;
  }[];
}

export function generateOrganizationSchema(): OrganizationSchema {
  const schema: OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: `${siteConfig.url}/contact`,
    },
  };

  const socialLinks = [
    siteConfig.linkedInUrl,
    siteConfig.xHandle ? `https://x.com/${siteConfig.xHandle}` : ""
  ].filter(Boolean);

  if (socialLinks.length > 0) {
    schema.sameAs = socialLinks;
  }

  return schema;
}

export function generateWebPageSchema(
  name: string,
  description: string,
  pathname: string
): WebPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${siteConfig.url}${pathname}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function generateSoftwareSchema(): SoftwareApplicationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Grapevine Travel Assistant",
    description:
      "AI-powered travel assistant that helps TMCs and corporates drive in-platform bookings and improve traveller satisfaction.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based",
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; path?: string }[]
): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path && index < items.length - 1 ? { item: `${siteConfig.url}${item.path}` } : {}),
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]): FAQSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function generateServiceSchema(
  name: string,
  description: string,
  pathname: string,
  serviceType: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${pathname}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType,
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
  };
}

export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Grapevine",
    description:
      "Book a discovery call with Grapevine to discuss how our AI-powered travel assistant can help your travel programme.",
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: `${siteConfig.url}/contact`,
      },
    },
  };
}

export function generateAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Grapevine",
    description:
      "Learn about the team behind Grapevine and our mission to transform business travel with AI-powered assistance.",
    url: `${siteConfig.url}/about`,
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      founders: [
        {
          "@type": "Person",
          name: "Jack Dow",
          jobTitle: "Founder",
        },
      ],
    },
  };
}
