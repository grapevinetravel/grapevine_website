import { Metadata } from "next";
import Hero from "@/components/hero";
import FeaturedResources from "@/components/featured-resources";
import NewsletterSignup from "@/components/newsletter-signup";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Explore insights for smarter business travel. Access reports, case studies, and thought leadership for corporates, TMCs, and the travel community.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Grapevine Resources - Insights for Smarter Business Travel",
    description:
      "Explore reports, case studies, and thought leadership for corporates, TMCs, and the travel community.",
  },
};

export default function Resources() {
  return (
    <>
      <Hero
        title="Insights for smarter business travel."
        subtitle="Explore our latest reports, case studies, and thought leadership - built for corporates, TMCs, and the wider travel community."
      />
      <FeaturedResources
        resources={[
          {
            type: "Case Study",
            title: "How Grapevine increased hotel attachment by 30%",
            description:
              "Real-world example of revenue growth through proactive communications and AI-native support.",
            image: "/images/resources/resource-01.png",
            downloadLink: "#download-case-study",
          },
          {
            type: "Report",
            title: "The Future of AI in Business Travel: 2025 Outlook",
            description:
              "Deep dive into emerging trends and opportunities in AI-powered travel management...",
            image: "/images/resources/resource-02.png",
            downloadLink: "#download-report",
          },
          {
            type: "Guide",
            title: "5 Ways to Reduce Out-of-Policy Spend",
            description:
              "Practical strategies for travel managers to improve compliance while supporting travellers...",
            image: "/images/resources/resource-03.png",
            downloadLink: "#download-guide",
          },
          {
            type: "Guide",
            title: "5 Ways to Reduce Out-of-Policy Spend",
            description:
              "Practical strategies for travel managers to improve compliance while supporting travellers...",
            image: "/images/resources/resource-01.png",
            downloadLink: "#download-guide-2",
          },
          {
            type: "Report",
            title: "The Future of AI in Business Travel: 2025 Outlook",
            description:
              "Deep dive into emerging trends and opportunities in AI-powered travel management...",
            image: "/images/resources/resource-02.png",
            downloadLink: "#download-report-2",
          },
          {
            type: "Case Study",
            title: "How Grapevine increased hotel attachment by 30%",
            description:
              "Real-world example of revenue growth through proactive communications and AI-native support.",
            image: "/images/resources/resource-03.png",
            downloadLink: "#download-case-study-2",
          },
        ]}
      />
      <NewsletterSignup />
    </>
  );
}
