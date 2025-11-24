import AnimateOnScroll from "./animations/animate-on-scroll";
import PartnerCarousel from "./partner-carousel";
import Icon from "./icon";
import { IconName } from "lucide-react/dynamic";
import { Section, Container } from "./primitives";

interface ValueCard {
  icon: IconName;
  title: string;
  description: string;
}

export interface TrustPartnersProps {
  title: React.ReactNode;
  description: React.ReactNode;
  valueSectionTitle?: string;
  valueCards: ValueCard[];
  className?: string;
}

export default function TrustPartners({
  title,
  description,
  valueSectionTitle,
  valueCards,
  className,
}: TrustPartnersProps) {
  return (
    <Section variant="navy" spacing="sm" className={className}>
      <Container>
        {/* Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="mb-12 max-w-[664px] md:mb-16 lg:mb-20">
            <h2 className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl">{title}</h2>
            <div className="mb-4 text-base leading-snug text-white md:text-lg lg:text-xl">
              {description}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Partner Carousel */}
        <AnimateOnScroll animation="fade-up" delay={0.1}>
          <div className="mb-12 md:mb-16 lg:mb-20">
            <PartnerCarousel />
          </div>
        </AnimateOnScroll>

        {/* Divider */}
        <div className="border-light/10 mb-12 border-t md:mb-16 lg:mb-20" />

        {/* Value Section Title */}
        {valueSectionTitle && (
          <AnimateOnScroll animation="fade-up" delay={0.2}>
            <div className="mb-8 text-center md:mb-12">
              <p className="text-primary text-sm font-semibold md:text-base">{valueSectionTitle}</p>
            </div>
          </AnimateOnScroll>
        )}

        {/* Value Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-12">
          {valueCards.map((card, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={0.3 + index * 0.1}>
              <div className="flex flex-col gap-3 md:gap-4">
                <Icon name={card.icon} size={40} className="text-primary" />
                <h3 className="text-lg font-bold text-white md:text-xl">{card.title}</h3>
                <p className="text-muted text-sm leading-normal md:text-base">{card.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
