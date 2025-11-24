import PartnerCarousel from "./partner-carousel";
import Image from "next/image";
import AnimateOnScroll from "./animations/animate-on-scroll";
import Button from "./primitives/button";

interface HeroButton {
  text: string;
  href: string;
}

export interface HeroPartnersProps {
  title?: React.ReactNode;
  subtitle?: string;
  buttons?: HeroButton[];
  partnerText?: string;
  showPartners?: boolean;
  showDecoration?: boolean;
  className?: string;
}

export default function HeroPartners({
  title = (
    <>
      Drive in-platform bookings with <span className="text-primary">AI-powered</span> traveller
      communications.
    </>
  ),
  subtitle = "Grapevine detects gaps in itineraries and sends personalised prompts that help travellers make compliant, right-channel bookings every time.",
  buttons = [
    { text: "I'm a TMC", href: "/tmcs" },
    { text: "I'm a Corporate", href: "/corporate" },
  ],
  partnerText = "Trusted by leading TMCs and integrated with global suppliers",
  showPartners = true,
  showDecoration = true,
  className = "bg-navy relative overflow-hidden",
}: HeroPartnersProps) {
  return (
    <div className={className}>
      {showDecoration && (
        <AnimateOnScroll animation="fade-left" duration={1.2} delay={0.3}>
          <div className="absolute top-0 right-0 origin-top-right rotate-[-0.44deg] opacity-100">
            <Image
              src="/images/hero-decoration.svg"
              alt=""
              width={694}
              height={965}
              className="h-full w-full"
            />
          </div>
        </AnimateOnScroll>
      )}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="flex max-w-[778px] flex-col gap-6 py-12 md:gap-[29px] md:py-30">
          <AnimateOnScroll animation="fade-up" duration={0.6}>
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
          </AnimateOnScroll>
          {subtitle && (
            <AnimateOnScroll animation="fade-up" delay={0.2} duration={0.6}>
              <p className="text-subtle text-lg md:text-xl lg:text-2xl">{subtitle}</p>
            </AnimateOnScroll>
          )}
          {buttons.length > 0 && (
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              {buttons.map((button, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={0.4 + index * 0.1}>
                  <Button
                    as="link"
                    href={button.href}
                    variant="pill"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    {button.text}
                  </Button>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>
        {showPartners && (
          <AnimateOnScroll animation="fade-up" delay={0.1}>
            <div className="pt-8 md:pt-[11px]">
              {partnerText && (
                <div className="text-primary px-4 text-center text-sm font-semibold md:text-base">
                  {partnerText}
                </div>
              )}
              <div className="pt-8 pb-12 md:pt-[53px] md:pb-18">
                <PartnerCarousel />
              </div>
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </div>
  );
}
