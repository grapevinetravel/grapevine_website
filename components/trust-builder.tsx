import AnimateOnScroll from "./animations/animate-on-scroll";
import Icon from "./icon";
import { IconName } from "lucide-react/dynamic";
import { cn } from "@/lib/utils";
import { Section, Container } from "./primitives";

interface Testimonial {
  quote: string;
  author: string;
}

export interface TrustBuilderProps {
  featureSubtitle?: string;
  featureIcon?: IconName;
  featureTitle: React.ReactNode;
  featureDescription: React.ReactNode;
  testimonialsTitle: React.ReactNode;
  testimonials: Testimonial[];
  className?: string;
}

export default function TrustBuilder({
  featureSubtitle,
  featureIcon,
  featureTitle,
  featureDescription,
  testimonialsTitle,
  testimonials,
  className,
}: TrustBuilderProps) {
  const testimonialCount = testimonials.length;

  // Determine grid layout based on testimonial count
  const getGridClasses = () => {
    if (testimonialCount === 1) {
      return "grid grid-cols-1";
    } else if (testimonialCount === 2 || testimonialCount === 3) {
      return cn(
        "grid gap-4 md:gap-6",
        testimonialCount === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"
      );
    } else {
      // Masonry layout for 4+ testimonials
      return "columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6";
    }
  };

  return (
    <Section variant="navy" spacing="sm" className={className}>
      <Container>
        {/* Feature Callout Card */}
        <AnimateOnScroll animation="fade-up">
          <div className="bg-light mb-12 rounded-2xl p-6 md:mb-16 md:p-8 lg:mb-20 lg:p-10">
            {featureSubtitle && (
              <div className="mb-3 flex items-center gap-2 md:mb-4">
                {featureIcon && <Icon name={featureIcon} size={20} className="text-primary" />}
                <h3 className="text-primary text-base font-bold md:text-lg">{featureSubtitle}</h3>
              </div>
            )}
            <h2 className="text-navy mb-3 text-xl font-bold md:mb-4 md:text-2xl lg:text-[28px]">
              {featureTitle}
            </h2>
            <div className="text-body text-sm leading-normal md:text-base">
              {featureDescription}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Testimonials Section */}
        {testimonialCount > 0 && (
          <>
            <AnimateOnScroll animation="fade-up">
              <div className="mb-10 text-center md:mb-12 lg:mb-14">
                <h2 className="text-2xl font-bold text-white sm:text-[36px] md:text-[40px] lg:text-5xl">
                  {testimonialsTitle}
                </h2>
              </div>
            </AnimateOnScroll>

            {/* Testimonials Grid/Masonry */}
            <div className={getGridClasses()}>
              {testimonials.map((testimonial, index) => (
                <AnimateOnScroll
                  key={index}
                  animation="fade-up"
                  delay={index * 0.08}
                  className={cn(
                    "rounded-lg bg-[rgba(243,247,252,0.03)] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] md:p-6",
                    testimonialCount > 3 && "mb-4 break-inside-avoid md:mb-6"
                  )}
                >
                  <p className="mb-3 text-sm leading-normal text-white md:mb-4 md:text-base lg:text-base">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="text-muted text-[13px] leading-normal md:text-sm">
                    {testimonial.author}
                  </p>
                </AnimateOnScroll>
              ))}
            </div>
          </>
        )}
      </Container>
    </Section>
  );
}
