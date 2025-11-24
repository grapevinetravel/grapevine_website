import Image from "next/image";
import AnimateOnScroll from "./animations/animate-on-scroll";
import { Section, Container } from "./primitives";
import Button from "./primitives/button";
import { cn } from "@/lib/utils";
import Icon from "./icon";
import { IconName } from "lucide-react/dynamic";

export interface AlternatingContentItem {
  text: React.ReactNode;
  icon?: IconName;
}

export interface AlternatingContentSection {
  icon?: IconName;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  items: AlternatingContentItem[];
  image: string;
  footer?: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
}

export interface AlternatingContentProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  sections: AlternatingContentSection[];
  className?: string;
  headerAlign?: "left" | "center" | "right";
  imageStartPosition?: "left" | "right";
}

export default function AlternatingContent({
  title,
  subtitle,
  sections,
  className = "bg-white py-12 md:py-20 lg:py-30",
  headerAlign = "center",
  imageStartPosition = "left",
}: AlternatingContentProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  return (
    <Section variant="white" spacing="md" className={className}>
      <Container>
        {(title || subtitle) && (
          <AnimateOnScroll animation="fade-up">
            <div
              className={cn(
                "mb-12 md:mb-16 lg:mb-18",
                headerAlign === "center" ? "mx-auto max-w-[844px]" : "max-w-[930px]",
                alignmentClasses[headerAlign]
              )}
            >
              {title && (
                <h2 className="mb-3 text-2xl font-bold sm:text-[28px] md:mb-4 md:text-3xl lg:text-[36px]">
                  {title}
                </h2>
              )}
              {subtitle && <p className="text-body text-lg">{subtitle}</p>}
            </div>
          </AnimateOnScroll>
        )}

        <div className="flex flex-col gap-16 md:gap-20 lg:gap-[116px]">
          {sections.map((section, index) => {
            const isEven = index % 2 === 0;
            const imageOnLeft = imageStartPosition === "left" ? isEven : !isEven;
            return (
              <div
                key={index}
                className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-18"
              >
                {/* Text Content */}
                <div className={imageOnLeft ? "lg:order-2" : "lg:order-1"}>
                  <AnimateOnScroll animation="fade-up">
                    <div>
                      <div className="inline-flex gap-4">
                        {section.icon && (
                          <div className="mb-4 md:mb-5">
                            <Icon name={section.icon} size={32} className="text-primary" />
                          </div>
                        )}
                        <h3 className="mb-5 text-[18px] leading-[120%] font-semibold sm:text-[28px] md:mb-6 md:text-[30px] lg:mb-6 lg:text-3xl">
                          {section.title}
                        </h3>
                      </div>
                      {section.subtitle && (
                        <p className="text-body mb-5 text-sm leading-normal md:mb-6 md:text-base">
                          {section.subtitle}
                        </p>
                      )}
                      <ul className="flex flex-col gap-3 md:gap-4 lg:gap-4">
                        {section.items.map((item, itemIndex) => {
                          const iconName = item.icon || "check";
                          return (
                            <li
                              key={itemIndex}
                              className="text-body flex items-start gap-2.5 text-sm leading-[140%] md:gap-3 md:text-base lg:text-base"
                            >
                              <Icon
                                name={iconName}
                                size={18}
                                className="text-primary mt-0.5 shrink-0 md:h-5 md:w-5"
                              />
                              <span>{item.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                      {section.footer && (
                        <div className="text-primary mt-4 text-sm md:mt-5 md:text-base lg:mt-6 lg:text-base">
                          {section.footer}
                        </div>
                      )}
                      {section.buttonHref && section.buttonText && (
                        <div className="mt-6 md:mt-7 lg:mt-8">
                          <Button
                            as="link"
                            href={section.buttonHref}
                            size="sm"
                            className="w-full sm:w-auto"
                          >
                            {section.buttonText}
                          </Button>
                        </div>
                      )}
                    </div>
                  </AnimateOnScroll>
                </div>

                {/* Image */}
                <div className={imageOnLeft ? "lg:order-1" : "lg:order-2"}>
                  <AnimateOnScroll animation="fade-up" delay={0.2}>
                    <div className="relative w-full overflow-hidden rounded-lg">
                      <Image
                        src={section.image}
                        alt={section.title?.toString() || ""}
                        width={612}
                        height={500}
                        className="h-auto w-full"
                      />
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
