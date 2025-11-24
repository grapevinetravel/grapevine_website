import { Metadata } from "next";
import AlternatingContent from "@/components/alternating-content";
import Features from "@/components/features";
import Hero from "@/components/hero";
import { featureSteps, pillars } from "@/data/features";
import StatsHighlight from "@/components/stats-highlight";
import TrustBuilder from "@/components/trust-builder";
import CtaSection from "@/components/cta-section";
import JsonLd from "@/components/json-ld";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "TMCs",
  description:
    "Grow hotel and ancillary revenue with Grapevine. Our AI-native platform helps TMCs capture missed bookings, automate post-booking follow-up, and deliver modern traveller experiences.",
  keywords: [
    "TMC software",
    "travel management company",
    "hotel attachment",
    "ancillary revenue",
    "travel technology",
  ],
  alternates: {
    canonical: "/tmcs",
  },
  openGraph: {
    title: "Grapevine - TMCs",
    description:
      "Capture missed bookings, automate post-booking follow-up, and deliver modern traveller experiences with Grapevine.",
  },
};

export default function TMCS() {
  const serviceSchema = generateServiceSchema(
    "Grapevine for TMCs",
    "AI-native platform helping TMCs Capture missed hotel and ancillary bookings to drive revenue, automate post-booking follow-up, and deliver modern traveller experiences.",
    "/tmcs",
    "Travel Management Software"
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "For TMCs" },
  ]);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Hero
        title="Grow hotel and ancillary revenue."
        subtitle="Delight your clients and their travellers. Maximise revenue per trip."
        buttonText="Partner with us"
        buttonHref="/contact"
      />
      <AlternatingContent
        title={
          <>
            <span className="text-primary">Reclaim</span> Lost Revenue.{" "}
            <span className="text-primary">Deliver</span> Modern Traveller Experiences.
          </>
        }
        subtitle="Travellers are booking hotels, taxis, and parking - just not through you. It's time that changed."
        sections={[
          {
            title: (
              <>
                Grapevine changes that.
                <br />
                <span className="text-primary">Set up in under 4 hours</span>, our AI-native
                platform helps TMCs:
              </>
            ),
            items: [
              {
                text: (
                  <>
                    <strong>Capture</strong> hotel and ancillary revenue as airline margins shrink.
                  </>
                ),
                icon: "flask-round",
              },
              {
                text: (
                  <>
                    <strong>Automate</strong> post-booking follow-up with zero consultant workload.
                  </>
                ),
                icon: "zap",
              },
              {
                text: (
                  <>
                    <strong>Enhance</strong> your brand with a white-label AI assistant.
                  </>
                ),
                icon: "sparkles",
              },
              {
                text: (
                  <>
                    <strong>Free Up</strong> consultants for higher-value client work
                  </>
                ),
                icon: "user-round-check",
              },
            ],
            image: "/images/why-choose-us/why-choose-us-04.png",
          },
        ]}
        headerAlign="left"
      />
      <StatsHighlight
        subtitle="Why now?"
        title="Airline margins are falling, and traveller expectations are rising."
        description="To stay competitive, TMCs need to capture more of the trip and offer a modern, connected experience. Grapevine's technology offers:"
        stats={[
          { value: "+31%", label: "uplift in revenue per-trip" },
          { value: "+110%", label: "uplift profit per-trip" },
          { value: "< 4 hours", label: "to go live" },
        ]}
      />
      <Features
        subtitle="How it works"
        title="Automated traveller engagement and 24/7 support, fully white-labelled to you."
        description=""
        steps={featureSteps}
        ctaText="Book a demo"
        ctaHref="/contact"
        ctaDescription={
          <>
            <strong>The result:</strong> a seamless traveller experience and measurable ROI for
            every partner.
          </>
        }
        pillarsTitle="3 Pillars, 1 Platform"
        pillars={pillars}
      />
      <TrustBuilder
        featureSubtitle="Why Grapevine?"
        featureIcon="zap"
        featureTitle="Easy to integrate. Fast to launch."
        featureDescription={
          <>
            Grapevine connects directly to your existing data and supplier systems - no extra
            platforms or disruption. We handle everything: data mapping, supplier integration, and
            branded testing, with your team involved for less than four hours.
            <br />
            <br />
            <strong>Live in less than 4 hours of your time</strong> - fully secure, fully
            white-labelled, and already proven with leading TMCs.
          </>
        }
        testimonialsTitle="Driving measurable impact"
        testimonials={[
          {
            quote:
              "Grapevine's technology has delivered more than £3m in incremental hotel bookings for Gray Dawes, and we've just getting started",
            author: "David Bishop, COO, Gray Dawes Travel",
          },
          {
            quote:
              "Delivering a personalised retailing experience and maximizing revenues per trip has never been more important for a TMC",
            author: "Vinod George, CTO, Omega World Travel",
          },
        ]}
      />
      <CtaSection
        title={
          <>
            Reclaim lost revenue.
            <br />
            Strengthen client relationships.
          </>
        }
        description="Deliver the traveller experience your competitors can't."
        buttonText="Partner with us"
        buttonHref="/contact"
      />
    </>
  );
}
