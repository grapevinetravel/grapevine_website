import AnimateOnScroll from "./animations/animate-on-scroll";
import { cn } from "@/lib/utils";
import { Section, Container } from "./primitives";

interface Testimonial {
  quote: string;
  author: string;
}

interface ImpactStat {
  value: string;
  label: string;
}

export interface ProofPointsProps {
  title?: React.ReactNode;
  impactStats?: ImpactStat[];
  testimonialsCta?: string;
  testimonials?: Testimonial[];
  className?: string;
}

export default function ProofPoints({
  title = (
    <>
      Delivering measurable impact
      <br className="hidden sm:block" />
      <span className="sm:hidden"> </span>for leading travel partners.
    </>
  ),
  impactStats = [],
  testimonialsCta = "See what our customers say...",
  testimonials = [],
  className,
}: ProofPointsProps) {
  return (
    <Section variant="navy" spacing="md" className={className}>
      <Container>
        {/* Header */}
        {title && (
          <AnimateOnScroll animation="fade-up">
            <div className="mb-10 px-4 text-center md:mb-12 lg:mb-14">
              <h2 className="text-3xl leading-snug font-bold sm:text-4xl md:text-5xl">{title}</h2>
            </div>
          </AnimateOnScroll>
        )}

        {/* Impact Stats */}
        {impactStats.length > 0 && (
          <div
            className={cn(
              "grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8",
              testimonials.length > 0 && "mb-12 md:mb-16 lg:mb-[84px]"
            )}
          >
            {impactStats.map((stat, index) => (
              <AnimateOnScroll
                key={index}
                animation="scale"
                delay={index * 0.15}
                className="rounded-lg bg-linear-to-b from-[rgba(52,69,87,0.14)] to-[rgba(52,69,87,0.014)] p-6 text-center md:p-8"
              >
                <div className="text-primary mb-2 text-[40px] leading-[100%] font-black md:mb-2 md:text-5xl lg:text-[52px]">
                  {stat.value}
                </div>
                <p className="text-muted text-sm leading-normal md:text-base">{stat.label}</p>
              </AnimateOnScroll>
            ))}
          </div>
        )}

        {/* Testimonials Section */}
        {testimonials.length > 0 && (
          <>
            {/* CTA */}
            <AnimateOnScroll animation="fade">
              <div className="mb-10 text-center md:mb-12">
                <a
                  href="#testimonials"
                  className="text-primary text-sm leading-[140%] font-semibold hover:underline md:text-base"
                >
                  {testimonialsCta}
                </a>
              </div>
            </AnimateOnScroll>

            {/* Testimonials Grid */}
            <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
              {testimonials.map((testimonial, index) => (
                <AnimateOnScroll
                  key={index}
                  animation="fade-up"
                  delay={index * 0.08}
                  className="mb-4 break-inside-avoid rounded-lg bg-[rgba(243,247,252,0.03)] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] md:mb-4 md:p-6"
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
