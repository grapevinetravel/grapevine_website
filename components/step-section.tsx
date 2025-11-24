import AnimateOnScroll from "./animations/animate-on-scroll";
import Icon from "./icon";
import { IconName } from "lucide-react/dynamic";
import { Section, Container } from "./primitives";

interface Step {
  icon?: IconName;
  label: string;
  title: string;
  description: string;
}

export interface StepSectionProps {
  subtitle?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  steps: Step[];
  footerText?: React.ReactNode;
  className?: string;
}

export default function StepSection({
  subtitle,
  title,
  description,
  steps,
  footerText,
  className,
}: StepSectionProps) {
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

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 lg:gap-12">
          {steps.map((step, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 0.15}>
              <div className="flex flex-col gap-3 md:gap-4">
                {/* Step Label */}
                <div className="bg-primary/10 border-primary inline-block self-start rounded-full border px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase">
                  {step.label}
                </div>

                {/* Step Icon */}
                {step.icon && (
                  <Icon name={step.icon} size={40} className="text-primary md:h-12 md:w-12" />
                )}

                {/* Step Title */}
                <h3 className="text-xl font-bold text-white md:text-[22px] lg:text-2xl">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-muted text-sm leading-normal md:text-base">{step.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Footer Text */}
        {footerText && (
          <AnimateOnScroll animation="fade-up" delay={0.5}>
            <div className="mt-8 md:mt-12 lg:mt-16">
              <p className="text-primary text-center text-sm font-medium md:text-base lg:text-lg">
                {footerText}
              </p>
            </div>
          </AnimateOnScroll>
        )}
      </Container>
    </Section>
  );
}
