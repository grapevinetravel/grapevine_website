import { Metadata } from "next";
import AlternatingContent from "@/components/alternating-content";
import Features from "@/components/features";
import Hero from "@/components/hero";
import { featureSteps, pillars } from "@/data/features";
import Usp from "@/components/usp";
import TrustBuilder from "@/components/trust-builder";
import CtaSection from "@/components/cta-section";
import JsonLd from "@/components/json-ld";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Corporate",
  description:
    "Keep travellers compliant, supported, and in-policy with Grapevine. Reduce leakage, improve compliance, and deliver a better employee travel experience.",
  keywords: [
    "corporate travel management",
    "travel policy compliance",
    "duty of care",
    "business travel",
    "travel programme",
  ],
  alternates: {
    canonical: "/corporate",
  },
  openGraph: {
    title: "Grapevine - Corporate",
    description:
      "Reduce leakage, improve compliance, and deliver a better employee travel experience with Grapevine.",
  },
};

export default function CorporatePage() {
  const serviceSchema = generateServiceSchema(
    "Grapevine for Corporates",
    "AI-native assistant helping corporates keep travellers compliant, supported, and in-policy while reducing leakage and improving duty of care.",
    "/corporate",
    "Corporate Travel Management"
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "For Corporates" },
  ]);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Hero
        title="Keep travellers compliant, supported, and in-policy"
        subtitle="Empower employees to make the right booking decisions - automatically and with confidence."
        buttonText="Book a demo"
        buttonHref="/contact"
      />
      <AlternatingContent
        title={
          <>
            <span className="text-primary">Reduce</span> Leakage.{" "}
            <span className="text-primary">Improve</span> Compliance.
            <br />
            <span className="text-primary">Support</span> Travellers.
          </>
        }
        subtitle="Travellers are booking across more channels than ever, often outside policy. That means reduced visibility, increased risk, and a heavier admin load for your teams."
        sections={[
          {
            title: (
              <>
                Grapevine changes that. <span className="text-primary">Working seamlessly</span>{" "}
                through your existing TMC, our AI-native assistant helps corporates:
              </>
            ),
            items: [
              {
                text: (
                  <>
                    <strong>Improve</strong> compliance without restricting choice.
                  </>
                ),
                icon: "flask-round",
              },
              {
                text: (
                  <>
                    <strong>Strengthen</strong> duty of care and visibility across every trip.
                  </>
                ),
                icon: "zap",
              },
              {
                text: (
                  <>
                    <strong>Reduce</strong> manual admin with automated post-booking processes.
                  </>
                ),
                icon: "sparkles",
              },
              {
                text: (
                  <>
                    <strong>Deliver</strong> a better employee experience, supported 24/7.
                  </>
                ),
                icon: "user-round-check",
              },
            ],
            image: "/images/why-choose-us/why-choose-us-05.png",
            footer:
              "With Grapevine, travellers stay compliant, informed, and supported, while your organisation gains greater control, visibility, and peace of mind.",
          },
        ]}
        headerAlign="left"
      />
      <Usp
        subtitle="Why now?"
        title="Modern travel is making policy adherence harder than ever."
        description="With the rise of public AI tools and consumer booking channels, travellers have more options - and fewer reasons to stay in-policy. Without action, leakage will only grow. Grapevine can help to:"
        items={[
          {
            icon: "clipboard-check",
            title: "Simplify compliance",
            description:
              "Proactively guide travellers back to approved channels before they book elsewhere.",
          },
          {
            icon: "shield-check",
            title: "Secure automation",
            description: "Protect programme data and maintain visibility across every trip.",
          },
          {
            icon: "users",
            title: "Empower travellers",
            description: "Deliver a modern, AI-enabled experience through your existing TMC.",
          },
        ]}
      />
      <Features
        subtitle="How it works"
        title="Proactive, in-policy communications and 24/7 AI support - built into your travel programme."
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
        featureSubtitle="Hassle free activation"
        featureIcon="zap"
        featureTitle="Grapevine works through your TMC "
        featureDescription="No new systems or integration time required. Just tell your TMC you'd like to activate Grapevine, and we'll do the rest."
        testimonialsTitle="Driving measurable impact"
        testimonials={[
          {
            quote:
              "Grapevine fills the gaps our booking tools miss, and makes sure our travellers always have the right support.",
            author: "Global Travel Manager",
          },
          {
            quote: "Finally, a travel tool that actually feels like a personal assistant.",
            author: "Frequent Business Traveller",
          },
          {
            quote:
              "With Grapevine, we've finally found a solution that bridges the gap between convenience and compliance. It gives our travellers flexibility while ensuring every booking meets policy standards.",
            author: "Operations Manager",
          },
        ]}
      />
      <CtaSection
        title="Keep your travellers compliant, supported, and confident, without new systems or added workload."
        description="Deliver the traveller experience your competitors can't."
        buttonText="Partner with us"
        buttonHref="/contact"
      />
    </>
  );
}
