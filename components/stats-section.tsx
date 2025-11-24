import AnimateOnScroll from "./animations/animate-on-scroll";
import { cn } from "@/lib/utils";
import { Section, Container } from "./primitives";

interface Stat {
  value: string;
  description: string;
}

export interface StatsSectionProps {
  subtitle?: string;
  title?: React.ReactNode;
  description?: string;
  stats?: Stat[];
  className?: string;
}

export default function StatsSection({
  subtitle = "Why now?",
  title = (
    <>
      Because corporate travel is changing.
      <br className="hidden sm:block" />
      <span className="sm:hidden"> </span>So are traveller expectations.
    </>
  ),
  description = "TMCs need to grow margins. Corporates need to keep travellers engaged and booking in-platform. Yet public LLMs put both at risk of losing bookings, data, and visibility. The data tells the story:",
  stats = [
    { value: "70%", description: "of hotel bookings are made outside managed channels¹" },
    { value: "$300bn", description: "lost annually in off-platform hotel & ancillary revenue²" },
    { value: "72%", description: "of travellers use AI tools when planning or booking³" },
    { value: "80%", description: "of corporates cite data privacy as a top concern⁴" },
  ],
  className,
}: StatsSectionProps) {
  const hasHeader = subtitle || title || description;

  return (
    <Section variant="light" spacing="lg" className={className}>
      <Container>
        {hasHeader && (
          <AnimateOnScroll animation="fade-up">
            <div className={cn(stats.length > 0 && "mb-8 md:mb-10 lg:mb-12")}>
              {subtitle && (
                <h2 className="text-primary mb-3 text-lg font-bold md:mb-4 md:text-xl lg:text-2xl">
                  {subtitle}
                </h2>
              )}
              {title && (
                <h3 className="text-navy mb-4 text-2xl font-bold md:mb-5 md:text-3xl lg:mb-6">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-body text-sm leading-normal md:text-base">{description}</p>
              )}
            </div>
          </AnimateOnScroll>
        )}

        {stats.length > 0 && (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-0">
            {stats.map((stat, index) => (
              <AnimateOnScroll
                key={index}
                animation="fade-up"
                delay={index * 0.1}
                className="relative text-center lg:px-4"
              >
                <div className="py-6 lg:py-0">
                  <div className="text-primary mb-3 text-[40px] leading-[100%] font-semibold md:mb-4 md:text-5xl lg:mb-4 lg:text-5xl xl:text-[52px]">
                    {stat.value}
                  </div>
                  <p className="text-body mx-auto max-w-[280px] text-sm leading-normal md:text-base lg:text-base">
                    {stat.description}
                  </p>
                </div>
                {/* Vertical divider - only on desktop */}
                {index < stats.length - 1 && (
                  <div className="bg-border-muted absolute top-0 right-0 hidden h-full w-px translate-x-1/2 lg:block" />
                )}
              </AnimateOnScroll>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
