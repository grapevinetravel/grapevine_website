import { Metadata } from "next";
import Hero from "@/components/hero";
import Usp from "@/components/usp";
import TeamSection from "@/components/team-section";
import TrustPartners from "@/components/trust-partners";
import CtaSection from "@/components/cta-section";
import JsonLd from "@/components/json-ld";
import { generateAboutPageSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind Grapevine - the AI-native assistant that keeps business travellers compliant, supported, and in-policy. Learn about our mission to transform corporate travel.",
  alternates: {
    canonical: "/about",
  }
};

export default function About() {
  const aboutSchema = generateAboutPageSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About" },
  ]);

  return (
    <>
      <JsonLd data={aboutSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Hero
        title="Building the future of business travel, together."
        subtitle="Grapevine is the AI-native assistant that keeps business travellers compliant, supported, and in-policy - always available at their fingertips."
      />
      <Usp
        variant="light"
        subtitle="Our mission is simple"
        title="To help TMCs and corporates support travellers 24/7 like a personal assistant, at a fraction of the cost"
        description="Combining proactive outreach to keep every booking in-platform and in-policy, and being there for travellers throughout their trips, at the touch of a button."
        items={[
          {
            icon: "shield-check",
            title: "Improve safety",
            description: "Travellers feel safer, happier, and more productive.",
          },
          {
            icon: "target",
            title: "Reduce risk",
            description: "Corporates reduce risk, cost, and complexity.",
          },
          {
            icon: "trending-up",
            title: "Unlock revenue",
            description: "TMCs unlock new revenue and deliver standout service.",
          },
        ]}
      />
      <TeamSection
        // title="Our mission is simple."
        // description={
        //     <>
        //         To help TMCs deliver world-class support to business travellers as a personal assistant would, using proactive outreach to keep every booking in-platform and in-policy, and being there for travellers throughout their trips, at the touch of a button.
        //         <br /><br />
        //         What began as smart hotel nudges has evolved into a secure, AI-powered assistant that supports every part of the journey, helping travellers stay compliant, informed, and cared for, while ensuring every booking remains visible within the TMC ecosystem.
        //     </>
        // }
        groups={[
          {
            title: "Meet the core team",
            members: [
              {
                name: "Jack Dow",
                role: "Founder",
                description:
                  "Award-winning founder with 8 years of experience in travel following 14 years in global real estate investment.",
                image: "/images/team-members/jack-dow.png",
              },
              {
                name: "Derek Hyland",
                role: "CTPO",
                description:
                  "Former Director of Product at Travelport and senior roles at Deem, Booking.com and Boxever (CDP).",
                image: "/images/team-members/derek-hyland.png",
              },
              {
                name: "Catalin Istrate",
                role: "Senior Product Engineer",
                description: "Senior Product Engineer with deep experience in Travel and Data.",
                image: "/images/team-members/catalin-istrate.png",
              },
              {
                name: "Rob Dinsey",
                role: "Product Lead, Customers, Data and Insights",
                description:
                  "14+ years experience in startups, business travel, product management and AI.",
                image: "/images/team-members/rob-dinsey.png",
              },
            ],
          },
          {
            title: "Advisors",
            members: [
              {
                name: "Annicka Lofstrand",
                role: "Advisor",
                description: "Former VP Sales at KDS Neo, Amex GBT and Microsoft.",
                image: "/images/team-members/annicka-lofstrand.png",
              },
              {
                name: "Landry Holl",
                role: "Advisor",
                description: "Former Head of Innovation at Amadeus and CEO of Fairval.",
                image: "/images/team-members/landry-holl.png",
              },
              {
                name: "Will Phillipson",
                role: "Advisor",
                description: "Former co-founder of Silverrail.",
                image: "/images/team-members/will-phillipson.png",
              },
            ],
          },
        ]}
      />
      <TrustPartners
        title="Trusted by leaders in travel and technology."
        description="We're proud to be backed by investors, advisors, and travel partners who share our vision of reimagining business travel through AI."
        valueSectionTitle="What drives us?"
        valueCards={[
          {
            icon: "lightbulb",
            title: "Relentless curiosity",
            description: "We ask questions until we truly understand.",
          },
          {
            icon: "heart",
            title: "Passion & proactiveness",
            description: "We bring energy and solutions, positively.",
          },
          {
            icon: "messages-square",
            title: "Communication",
            description: "Clear, transparent, inclusive at every step.",
          },
          {
            icon: "target",
            title: "Impact",
            description: "Measured by the value we deliver to all stakeholders.",
          },
        ]}
      />
      <CtaSection
        title="Want to join us on the journey?"
        description="Whether you're a corporate buyer, a TMC partner, or an investor - we'd love to talk."
        buttonText="Book a demo"
        buttonHref="/contact"
      />
    </>
  );
}
