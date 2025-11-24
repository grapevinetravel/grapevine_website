import AnimateOnScroll from "./animations/animate-on-scroll";
import { Section, Container } from "./primitives";

interface Stat {
  value: string;
  label: string;
}

export interface StatsHighlightProps {
  subtitle?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  stats: Stat[];
  className?: string;
}

export default function StatsHighlight({
  subtitle,
  title,
  description,
  stats,
  className,
}: StatsHighlightProps) {
  return (
    <Section variant="navy" spacing="sm" className={className}>
      <Container>
        {/* Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="mb-8 max-w-[664px] md:mb-12 lg:mb-16">
            {subtitle && (
              <h2 className="text-primary mb-2 text-lg font-bold md:mb-3 md:text-xl lg:text-2xl">
                {subtitle}
              </h2>
            )}
            <div className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl">{title}</div>
            {description && (
              <div className="text-base leading-snug text-white md:text-lg lg:text-xl">
                {description}
              </div>
            )}
          </div>
        </AnimateOnScroll>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {stats.map((stat, index) => (
            <AnimateOnScroll
              key={index}
              animation="scale"
              delay={index * 0.15}
              className="rounded-lg bg-linear-to-b from-[rgba(52,69,87,0.14)] to-[rgba(52,69,87,0.014)] p-6 text-center md:p-8"
            >
              <div className="text-primary mb-2 text-[40px] leading-[100%] font-black md:mb-2 md:text-[44px] lg:text-[52px]">
                {stat.value}
              </div>
              <p className="text-muted text-sm leading-normal md:text-base">{stat.label}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
