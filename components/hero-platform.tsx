import AnimateOnScroll from "./animations/animate-on-scroll";
import Icon from "./icon";
import { IconName } from "lucide-react/dynamic";
import Image from "next/image";
import CorePlatformGraphic from "./graphics/core-platform";

interface PlatformLayer {
  icon: IconName;
  title: string;
  description: string;
}

export interface HeroPlatformProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  platformTitle: React.ReactNode;
  platformSubtitle: React.ReactNode;
  layers: PlatformLayer[];
  showDecoration?: boolean;
  className?: string;
}

export default function HeroPlatform({
  title,
  subtitle,
  platformTitle,
  platformSubtitle,
  layers,
  showDecoration = true,
  className = "bg-navy relative overflow-hidden",
}: HeroPlatformProps) {
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
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 py-16 md:px-12 md:py-20 lg:py-24 xl:py-30">
        <div className="mx-auto max-w-[800px] text-center">
          <AnimateOnScroll animation="fade-up" delay={0.1}>
            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
              {title}
            </h1>
          </AnimateOnScroll>
          {subtitle && (
            <AnimateOnScroll animation="fade-up" delay={0.25}>
              <p className="text-subtle text-base leading-snug md:text-lg lg:text-xl">{subtitle}</p>
            </AnimateOnScroll>
          )}
        </div>
      </div>

      {/* Platform Architecture Section */}
      <div className="container mx-auto px-6 pb-16 md:px-12 md:pb-20 lg:pb-24">
        <div className="mb-8 md:mb-12 lg:mb-16">
          <AnimateOnScroll animation="fade-up" delay={0.4}>
            <h2 className="mb-2 text-2xl font-bold text-white md:mb-3 md:text-[28px] lg:text-3xl">
              {platformTitle}
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={0.55}>
            <p className="text-subtle mt-3 max-w-[900px] text-sm md:mt-4 md:text-base">
              {platformSubtitle}
            </p>
          </AnimateOnScroll>
        </div>

        {/* Platform Architecture Diagram */}
        <div className="relative -mx-6 mb-12 overflow-hidden md:-mx-12 md:mb-16 lg:mb-20">
          {/* Wave Background - Full Width with Animation */}
          <AnimateOnScroll animation="fade" delay={0.1} duration={1.5}>
            <div className="pointer-events-none absolute inset-0 w-full">
              <Image
                src="/images/wave.png"
                alt=""
                fill
                className="object-contain opacity-50"
                priority
              />
              {/* Fade out gradients on left and right */}
              <div className="from-navy to-navy absolute inset-0 bg-gradient-to-r via-transparent"></div>
            </div>
          </AnimateOnScroll>

          {/* Architecture Visualization - SVG */}
          <AnimateOnScroll animation="fade-up" delay={0.2}>
            <div className="relative z-10 container mx-auto px-6 md:px-12">
              <CorePlatformGraphic />
            </div>
          </AnimateOnScroll>
        </div>

        {/* Platform Layers */}
        <div className="relative">
          {/* Connecting Line - Hidden on mobile, visible on desktop */}
          <div className="absolute top-0 right-0 left-0 hidden h-[1px] overflow-hidden lg:block">
            {/* Dashed line - full width with animation */}
            <AnimateOnScroll animation="fade-right" duration={1.5} delay={0.3}>
              <div className="border-primary/40 absolute inset-0 border-t-2 border-dashed"></div>
            </AnimateOnScroll>
          </div>

          {/* Layers Grid */}
          <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-3 md:gap-8 lg:grid-cols-5 lg:gap-10 lg:pt-12">
            {layers.map((layer, index) => (
              <div key={layer.title} className="relative">
                {/* Dot positioned at the left, centered on the line - fades in with line */}
                <AnimateOnScroll animation="fade" delay={0.5 + index * 0.1} duration={0.5}>
                  <div
                    className="bg-primary absolute left-0 hidden h-3 w-3 rounded-full border border-[#F3F7FC] lg:block"
                    style={{
                      top: "-52.5px",
                      boxShadow: "0px 0px 0px 1px #1980EF40, 0px 0px 0px 3px #1980EF26",
                    }}
                  ></div>
                </AnimateOnScroll>

                {/* Layer content - fades up */}
                <AnimateOnScroll animation="fade-up" delay={0.1 * (index + 1)}>
                  <div className="flex flex-col items-start text-left">
                    <div className="mb-4 md:mb-5">
                      <Icon name={layer.icon} size={32} className="text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-white md:mb-3 md:text-xl">
                      {layer.title}
                    </h3>
                    <p className="text-muted text-sm leading-normal md:text-base">
                      {layer.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
