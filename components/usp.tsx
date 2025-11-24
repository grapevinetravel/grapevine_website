import AnimateOnScroll from "./animations/animate-on-scroll";
import Icon from "./icon";
import { IconName } from "lucide-react/dynamic";
import { cn } from "@/lib/utils";
import { Section, Container } from "./primitives";

interface UspItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface UspProps {
  subtitle?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  items: UspItem[];
  variant?: "default" | "light";
  className?: string;
}

export default function Usp({
  subtitle,
  title,
  description,
  items,
  variant = "default",
  className,
}: UspProps) {
  const isLight = variant === "light";

  return (
    <Section variant={isLight ? "white" : "navy"} spacing="sm" className={className}>
      <Container>
        {/* Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="mb-8 max-w-[664px] md:mb-12 lg:mb-16">
            {subtitle && (
              <h2 className="text-primary mb-2 text-lg font-bold md:mb-3 md:text-xl lg:text-2xl">
                {subtitle}
              </h2>
            )}
            <div
              className={cn(
                "mb-3 text-2xl font-bold md:mb-4 md:text-3xl",
                isLight ? "text-navy" : "text-white"
              )}
            >
              {title}
            </div>
            {description && (
              <div
                className={cn(
                  "text-base leading-snug md:text-lg lg:text-xl",
                  isLight ? "text-body" : "text-white"
                )}
              >
                {description}
              </div>
            )}
          </div>
        </AnimateOnScroll>

        {/* USP Items */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 lg:gap-12">
          {items.map((item, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 0.15}>
              <div className="flex flex-col gap-3 md:gap-4">
                <Icon name={item.icon} size={40} className="text-primary md:h-12 md:w-12" />
                <h3
                  className={cn(
                    "text-xl font-bold md:text-[22px] lg:text-2xl",
                    isLight ? "text-navy" : "text-white"
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "text-sm leading-normal md:text-base lg:text-base",
                    isLight ? "text-body" : "text-muted"
                  )}
                >
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
