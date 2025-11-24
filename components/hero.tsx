import AnimateOnScroll from "./animations/animate-on-scroll";
import Image from "next/image";
import Button from "./primitives/button";

export interface HeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  showDecoration?: boolean;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  buttonText,
  buttonHref,
  showDecoration = true,
  className = "bg-navy relative overflow-hidden",
}: HeroProps) {
  return (
    <div className={className}>
      {showDecoration && (
        <AnimateOnScroll animation="fade-left" duration={1.2} delay={0.3}>
          <div className="pointer-events-none absolute top-0 right-0 origin-top-right rotate-[-0.44deg] opacity-100">
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
      <div className="container mx-auto px-6 py-16 md:px-12 md:py-20 lg:py-24 xl:py-30">
        <div className="mx-auto flex max-w-[800px] flex-col gap-6 text-center">
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
          {buttonText && buttonHref && (
            <AnimateOnScroll animation="fade-up" delay={0.4}>
              <Button as="link" href={buttonHref} variant="pill" size="md">
                {buttonText}
              </Button>
            </AnimateOnScroll>
          )}
        </div>
      </div>
    </div>
  );
}
