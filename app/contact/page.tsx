import { Metadata } from "next";
import Hero from "@/components/hero";
import ContactForm from "@/components/contact-form";
import JsonLd from "@/components/json-ld";
import { generateContactPageSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a discovery call with Grapevine. Let's discuss how our AI-powered travel assistant can help your TMC or corporate travel programme.",
  alternates: {
    canonical: "/contact",
  }
};

export default function Contact() {
  const contactSchema = generateContactPageSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact" },
  ]);

  return (
    <>
      <JsonLd data={contactSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Hero
        title={
          <>
            Let&apos;s start with a<br />
            discovery call.
          </>
        }
        subtitle="Every travel programme is different. We'll use this first conversation to understand your challenges and goals, then line up a tailored demo with the right people from both sides."
      />
      <ContactForm />
    </>
  );
}
