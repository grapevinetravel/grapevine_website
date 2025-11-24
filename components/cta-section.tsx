import AnimateOnScroll from "./animations/animate-on-scroll";
import Button from "./primitives/button";
import { Section, Container } from "./primitives";
import { cn } from "@/lib/utils";

export interface CtaSectionProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonText: string;
  buttonHref: string;
  variant?: "default" | "primary";
  className?: string;
}

export default function CtaSection({
  title,
  description,
  buttonText,
  buttonHref,
  variant = "default",
  className,
}: CtaSectionProps) {
  const isPrimary = variant === "primary";

  return (
    <Section
      variant={isPrimary ? "default" : "white"}
      spacing="lg"
      className={cn(isPrimary && "bg-primary", className)}
    >
      <Container>
        <AnimateOnScroll animation="scale">
          <div className="mx-auto text-center">
            <h2
              className={cn(
                "mb-3 text-2xl font-bold md:mb-4 md:text-3xl",
                isPrimary && "text-white"
              )}
            >
              {title}
            </h2>
            {description && (
              <p
                className={cn("text-body mb-4 text-lg md:mb-5 lg:mb-6", isPrimary && "text-white")}
              >
                {description}
              </p>
            )}
            <Button
              as="link"
              href={buttonHref}
              size="lg"
              variant={isPrimary ? "inverted" : "primary"}
            >
              {buttonText}
            </Button>
          </div>
        </AnimateOnScroll>
      </Container>
    </Section>
  );
}
