"use client";

import { useState, FormEvent } from "react";
import AnimateOnScroll from "./animations/animate-on-scroll";
import Button from "./primitives/button";
import { Section, Container, Input } from "./primitives";

export interface NewsletterSignupProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function NewsletterSignup({
  title = "Get the latest insights direct to your inbox.",
  description = "Sign up to receive updates on AI in travel, new Grapevine features, and exclusive reports.",
  className = "bg-light py-12 md:py-16 lg:py-20",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Newsletter signup email:", email);
    setEmail("");
  };

  return (
    <Section variant="light" spacing="sm" className={className}>
      <Container>
        <AnimateOnScroll animation="fade-up">
          <div className="mx-auto text-center">
            <h2 className="text-navy mb-3 text-2xl font-bold md:mb-4 md:text-3xl">{title}</h2>
            <p className="text-body mb-6 text-base leading-snug md:mb-8 md:text-lg">
              {description}
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-[540px] flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                required
                className="flex-1 rounded-2xl border-gray-300 text-base"
              />
              <Button type="submit" variant="primary" size="md">
                Subscribe
              </Button>
            </form>
          </div>
        </AnimateOnScroll>
      </Container>
    </Section>
  );
}
