import { Metadata } from "next";
import AlternatingContent, { AlternatingContentSection } from "@/components/alternating-content";
import CtaSection from "@/components/cta-section";
import Features from "@/components/features";
import HeroPartners from "@/components/hero-partners";
import ProofPoints from "@/components/proof-points";
import StatsSection from "@/components/stats-section";
import JsonLd from "@/components/json-ld";
import { generateWebSiteSchema } from "@/lib/seo";
import { featureSteps, pillars } from "@/data/features";

export const metadata: Metadata = {
  title: "Grapevine - AI Powered Traveller Communications",
  description:
    "Drive in-platform bookings with AI-powered traveller communications. Grapevine helps TMCs increase hotel attachment rates by 20% and achieve 95% traveller satisfaction.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Grapevine - AI Powered Traveller Communications",
    description:
      "Drive in-platform bookings with AI-powered traveller communications. Increase hotel attachment rates and traveller satisfaction.",
  },
};

export default function Home() {
  const websiteSchema = generateWebSiteSchema();

  const sections: AlternatingContentSection[] = [
    {
      title: "Why TMCs Work With Us",
      items: [
        { text: "Capture missed hotel and ancillary bookings.", icon: "house" },
        { text: "Automate post-booking follow-up with zero consultant workload.", icon: "cog" },
        { text: "White-label assistant that strengthens your brand", icon: "sparkles" },
        { text: "Go live in under 4 hours of your team's time", icon: "rocket" },
      ],
      image: "/images/why-choose-us/why-choose-us-01.png",
      buttonText: "See TMC Benefits",
      buttonHref: "/tmcs",
    },
    {
      title: "Why Corporates Work With Us",
      items: [
        { text: "Reduce out-of-policy spend across trips", icon: "wallet-minimal" },
        { text: "Strengthen duty of care and programme control", icon: "shield-check" },
        { text: "Real-time reporting & insights in one place", icon: "bar-chart-3" },
        { text: "Happier, supported travellers", icon: "smile" },
      ],
      image: "/images/why-choose-us/why-choose-us-02.png",
      buttonText: "See Corporate Benefits",
      buttonHref: "/corporate",
    },
    {
      title: "Why EAs & Bookers Love Us",
      items: [
        { text: "One place to view trips and make changes for executives/teams", icon: "map-plus" },
        { text: "Fast booking for hotels, transfers, and parking", icon: "zap" },
        { text: "Ask questions via chat or voice; get instant answers", icon: "messages-square" },
        { text: "Less back-and-forth and fewer manual tasks", icon: "recycle" },
      ],
      image: "/images/why-choose-us/why-choose-us-03.png",
    },
    {
      title: "Why Travellers Love Us",
      items: [
        { text: "24/7 trip info and assistance, wherever they are", icon: "earth" },
        { text: "Book the extras in seconds, in approved channels", icon: "clock-9" },
        { text: "Less expense admin and fewer receipts", icon: "receipt-text" },
        { text: "Smart AI help in secure, approved channels", icon: "cloudy" },
      ],
      image: "/images/why-choose-us/why-choose-us-04.png",
    },
  ];

  return (
    <>
      <JsonLd data={websiteSchema} />
      <HeroPartners />
      <Features
        subtitle="How it works"
        title="Grapevine is a secure, AI-native travel assistant."
        description="We help travellers book in-platform, improving duty of care for corporates and increasing revenue per trip for TMCs."
        footer="Our process follows four key steps:"
        steps={featureSteps}
        ctaText="Book a demo"
        ctaHref="/contact"
        ctaDescription={
          <>
            <strong>The result:</strong> a seamless traveller experience and measurable ROI for
            every partner.
          </>
        }
        pillarsTitle="3 Pillars, 1 Assistant"
        pillars={pillars}
      />
      <AlternatingContent
        title={
          <>
            Delivering value for <span className="text-primary">all stakeholders</span>
            <br />
            in the travel journey
          </>
        }
        sections={sections}
      />
      <StatsSection />
      <ProofPoints
        impactStats={[
          { value: "+20%", label: "hotel attachment rate" },
          { value: "95%", label: "traveller satisfaction" },
          { value: "100%", label: "in-policy bookings" },
        ]}
        // testimonials={[
        //   {
        //     quote: "Grapevine fills the gaps our booking tools miss, and makes sure our travellers always have the right support.",
        //     author: "Global Travel Manager"
        //   },
        //   {
        //     quote: "Finally, a travel tool that actually feels like a personal assistant.",
        //     author: "Frequent Business Traveller"
        //   },
        //   {
        //     quote: "The automation and insights from Grapevine have saved our team countless hours each week.",
        //     author: "Head of Travel Operations"
        //   },
        //   {
        //     quote: "Since integrating Grapevine, our hotel attachment has risen by 30%.",
        //     author: "TMC Executive"
        //   },
        //   {
        //     quote: "Our travellers love the personalised recommendations — it feels like every trip is tailored just for them. From hotel options to in-trip support, Grapevine delivers an experience that's both smart and human. It's made travel feel less like logistics and more like care.",
        //     author: "Corporate Travel Coordinator"
        //   },
        //   {
        //     quote: "With Grapevine, we've finally found a solution that bridges the gap between convenience and compliance. It gives our travellers flexibility while ensuring every booking meets policy standards.",
        //     author: "Operations Manager"
        //   },
        //   {
        //     quote: "We've seen a clear uplift in ancillary sales since partnering with Grapevine — it's a no-brainer for any TMC looking to drive growth while improving traveller satisfaction.",
        //     author: "Travel Procurement Lead"
        //   }
        // ]}
      />
      <CtaSection
        title="Ready to transform how your travellers are supported?"
        description="Book a demo today and see Grapevine in action."
        buttonText="Book a demo"
        buttonHref="/contact"
      />
    </>
  );
}
