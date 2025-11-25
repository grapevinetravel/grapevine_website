import { Metadata } from "next";
import HeroPlatform from "@/components/hero-platform";
import AlternatingContent from "@/components/alternating-content";
import StepSection from "@/components/step-section";
import MarketplaceOverview from "@/components/marketplace-overview";
import CtaSection from "@/components/cta-section";
import JsonLd from "@/components/json-ld";
import { generateSoftwareSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Discover the Grapevine AI-native platform built for business travel. A vertically integrated Customer Data Platform powering an intelligent ancillary marketplace.",
  keywords: [
    "travel platform",
    "AI travel assistant",
    "customer data platform",
    "travel marketplace",
    "business travel technology",
  ],
  alternates: {
    canonical: "/product",
  }
};

export default function ProductsPage() {
  const softwareSchema = generateSoftwareSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Product" },
  ]);

  return (
    <>
      <JsonLd data={softwareSchema} />
      <JsonLd data={breadcrumbSchema} />
      <HeroPlatform
        title={
          <>
            The AI-native platform
            <br />
            built for business travel.
          </>
        }
        subtitle="A vertically integrated, real-time, zero-trust Customer Data Platform powering an intelligent ancillary marketplace."
        platformTitle={
          <>
            Grapevine Core Platform.
            <br />
            <span className="text-primary">Data</span> in,{" "}
            <span className="text-primary">Intelligence</span> out.
          </>
        }
        platformSubtitle="Grapevine unites trip data, supplier content, and conversational AI to deliver personalised, in-policy traveller experiences - all within a secure walled garden that combines the intelligence of public LLMs with the context, control, and compliance of an enterprise environment."
        layers={[
          {
            icon: "send",
            title: "Data Layer",
            description: "Real-time ingestion from GDS, OBT, mid- and back-office feeds.",
          },
          {
            icon: "messages-square",
            title: "Context Layer",
            description: "Traveller profiles, preferences, and historical booking data.",
          },
          {
            icon: "sparkles",
            title: "Assistant Layer",
            description: "Secure, multi-channel conversational AI.",
          },
          {
            icon: "shopping-cart",
            title: "Marketplace Layer",
            description: "Hotels and full ancillary inventory",
          },
          {
            icon: "bar-chart-3",
            title: "Insight Layer",
            description: "Dashboards tracking spend, compliance, and engagement",
          },
        ]}
      />
      <AlternatingContent
        title="How Grapevine works"
        sections={[
          {
            title: "Detect",
            icon: "plane",
            subtitle: "Spot what's missing the moment a trip is booked",
            items: [
              {
                text: "Identify gaps such as hotel, transfer, parking, lounge, or fast track",
              },
              {
                text: "Flag incomplete itineraries to trigger right-time follow-up",
              },
              {
                text: "Detect traveller and corporate context (who they work for, where they're going, policy tier)",
              },
            ],
            image: "/images/features/detect.png",
          },
          {
            title: "Engage",
            icon: "send",
            subtitle:
              "Right-time, right-channel messages that drive in-policy bookings automatically.",
            items: [
              {
                text: "Send branded, personalised prompts across email, SMS, WhatsApp, Slack, Teams, and voice",
              },
              {
                text: "Pair traveller context with historical and corporate data to surface relevant hotel and transport options",
              },
              {
                text: "Highlight hotels with negotiated rates and properties previously booked by the traveller or their colleagues",
              },
              {
                text: "Log engagement behaviour to optimise future communications",
              },
            ],
            image: "/images/features/engage.png",
          },
          {
            title: "Support",
            icon: "headset",
            subtitle: "24-hour conversational AI assistance, available on any channel.",
            items: [
              {
                text: "Multi-channel and multi-modal: chat or voice on SMS, WhatsApp, Slack, Teams, and email",
              },
              {
                text: "Delivers all the functionality of public LLMs within a secure walled garden, preventing data leakage",
              },
              {
                text: "Fully integrated with booking and expense systems for seamless updates and cost savings",
              },
              {
                text: `Learns traveller preferences (e.g., "likes sushi restaurants") to provide smarter recommendations over time`,
              },
            ],
            image: "/images/features/support.png",
          },
          {
            title: "Report",
            icon: "line-chart",
            subtitle: "Real-time visibility that closes the loop for TMCs and corporates.",
            items: [
              {
                text: "Unified dashboards for attach rate, spend, compliance, and engagement",
              },
              {
                text: "AI-generated insights on traveller behaviour and supplier performance",
              },
              {
                text: "Exportable reports for duty of care, finance, and procurement",
              },
            ],
            image: "/images/features/report.png",
          },
        ]}
        headerAlign="center"
      />
      <StepSection
        subtitle="Hassle free activation"
        title="Seamless integration. Zero disruption."
        description="Grapevine is designed to fit within your existing TMC environment - no rebuilds, no new tools, no change to how travellers book."
        steps={[
          {
            label: "STEP 1",
            title: "Map to your data",
            description: "Connect securely to your booking, mid, and back-office systems.",
          },
          {
            label: "STEP 2",
            title: "Integrate your suppliers",
            description: "Sync hotel and ancillary content from your preferred partners.",
          },
          {
            label: "STEP 3",
            title: "White-label, test, and launch",
            description: "We brand Grapevine to your agency, run end-to-end testing, and go live.",
          },
        ]}
        footerText="The entire process takes less than four hours of your team's time - simple, secure, and proven."
      />
      <MarketplaceOverview
        title={
          <>
            The <span className="text-primary">Grapevine</span> Marketplace
          </>
        }
        subtitle="Everything a traveller needs, connected through one secure ecosystem."
        centerIcon="messages-square"
        surroundingIcons={[
          "university",
          "car",
          "parking-circle",
          "plane",
          "chart-no-axes-combined",
          "shield-check",
          "map-pinned",
          "coffee",
        ]}
        mainTitle="Everything a traveller needs, connected through one secure ecosystem."
        features={[
          {
            text: "Pulls live, bookable content from trusted suppliers into the assistant",
          },
          {
            text: "Presents options aligned with traveller preferences and company policy",
          },
          {
            text: "Routes every ancillary booking back through TMC systems for full visibility and control",
          },
        ]}
        contentLabel="Total trip content"
        contentItems={[
          { icon: "bed", label: "Hotels" },
          { icon: "car", label: "Transfers" },
          { icon: "parking-circle", label: "Parking" },
          { icon: "coffee", label: "Lounge" },
          { icon: "rewind", label: "Fast Track" },
          { icon: "utensils", label: "Restaurant" },
          { icon: "radio-tower", label: "Activities" },
          { icon: "map-pinned", label: "Destination Advice" },
          { icon: "triangle-alert", label: "Travel Risk" },
        ]}
        uspTitle="Why it matters"
        uspCards={[
          {
            icon: "alert-circle",
            description:
              "Policy adherence is harder than ever as public AI tools and consumer channels multiply.",
          },
          {
            icon: "shield-check",
            description:
              "Grapevine gives travellers the convenience they expect within a secure, compliant, fully integrated ecosystem.",
          },
          {
            icon: "line-chart",
            description:
              "Corporates save time and reduce cost, while TMCs increase attach revenue and strengthen loyalty.",
          },
        ]}
      />
      <CtaSection
        variant="primary"
        title="Ready to see Grapevine in action?"
        description="Book a demo today and discover how Grapevine transforms business travel."
        buttonText="Book a demo"
        buttonHref="/contact"
      />
    </>
  );
}
