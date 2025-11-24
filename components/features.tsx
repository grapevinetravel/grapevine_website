"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import AnimateOnScroll from "./animations/animate-on-scroll";
import Button from "./primitives/button";
import { cn } from "@/lib/utils";
import Icon from "./icon";
import { IconName } from "lucide-react/dynamic";

interface FeatureStep {
  title: string;
  description: string;
  image: string;
  icon: IconName;
}

interface Pillar {
  title: string;
  description: string;
  icon: IconName;
}

export interface FeaturesProps {
  subtitle?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  footer?: React.ReactNode;
  steps: FeatureStep[];
  ctaText?: string;
  ctaHref?: string;
  ctaDescription?: React.ReactNode;
  pillarsTitle?: string;
  pillars?: Pillar[];
  className?: string;
  autoPlayInterval?: number;
}

export default function Features({
  subtitle,
  title,
  description,
  footer,
  steps,
  ctaText,
  ctaHref,
  ctaDescription,
  pillarsTitle,
  pillars,
  className = "bg-light py-12 md:py-16 lg:py-20",
  autoPlayInterval = 4000,
}: FeaturesProps) {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleFeatureClick = (index: number) => {
    setActiveFeatureIndex(index);
    setIsPaused(true);

    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
    }
    autoPlayTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView || isPaused || steps.length <= 1) return;

    const interval = setInterval(() => {
      setActiveFeatureIndex((current) => (current === steps.length - 1 ? 0 : current + 1));
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isInView, isPaused, steps.length, autoPlayInterval]);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeFeatureIndex < steps.length - 1) {
      handleFeatureClick(activeFeatureIndex + 1);
    }
    if (isRightSwipe && activeFeatureIndex > 0) {
      handleFeatureClick(activeFeatureIndex - 1);
    }
  };

  useEffect(() => {
    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current);
      }
    };
  }, []);

  return (
    <div className={className} ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up">
          <div className="mb-8 max-w-[778px] md:mb-12 lg:mb-16">
            {subtitle && (
              <h2 className="text-primary mb-2 text-lg font-bold md:mb-3 md:text-xl lg:text-2xl">
                {subtitle}
              </h2>
            )}
            <div className="mb-3 text-2xl font-bold md:mb-4 md:text-[28px] lg:text-[32px]">
              {title}
            </div>
            <div className="text-body text-base leading-[130%] md:text-lg lg:text-xl">
              {description}
            </div>
            {footer && (
              <div className="text-body mt-3 text-base leading-[130%] md:mt-4 md:text-lg lg:text-xl">
                {footer}
              </div>
            )}
          </div>
        </AnimateOnScroll>

        {/* Mobile: Swipeable Carousel */}
        <div className="lg:hidden">
          <div
            ref={carouselRef}
            className="relative overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${activeFeatureIndex * 100}%)` }}
            >
              {steps.map((step) => {
                return (
                  <div key={step.title} className="w-full shrink-0 px-1">
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                      {/* Image */}
                      <div className="relative mb-6 h-[280px] w-full overflow-hidden rounded-xl bg-white">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>

                      {/* Content */}
                      <div className="mb-4 flex items-center gap-3">
                        <div className="bg-primary/10 rounded-full p-3">
                          <Icon name={step.icon} size={24} className="text-primary" />
                        </div>
                        <h3 className="text-primary text-2xl leading-[110%] font-bold">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-body text-base leading-normal">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleFeatureClick(index)}
                className={cn(
                  "h-2 rounded transition-all duration-300",
                  activeFeatureIndex === index ? "bg-primary w-8" : "bg-border-muted w-2"
                )}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA Section - Mobile */}
          {(ctaText || ctaDescription) && (
            <div className="mt-8">
              <div className="flex flex-col gap-4">
                {ctaDescription && (
                  <div className="text-primary text-center text-sm leading-[140%]">
                    {ctaDescription}
                  </div>
                )}
                {ctaText && ctaHref && (
                  <Button as="link" href={ctaHref}>
                    {ctaText}
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Desktop: Original Layout */}
        <div className="hidden grid-cols-1 items-center gap-4 lg:grid lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            {steps.map((step, index) => {
              const isActive = activeFeatureIndex === index;
              return (
                <AnimateOnScroll key={step.title} animation="fade-up" delay={index * 0.1}>
                  <div
                    className={cn(
                      "flex cursor-pointer flex-col border-l-4 pr-5 transition-all",
                      isActive
                        ? ["border-l-primary rounded-r-xl bg-white py-4 pl-5 opacity-100"]
                        : ["border-l-transparent bg-transparent py-0 pl-0 opacity-50"]
                    )}
                    onClick={() => handleFeatureClick(index)}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <Icon
                        name={step.icon}
                        size={28}
                        className={cn(isActive ? "text-primary" : "text-navy")}
                      />
                      <h3
                        className={cn(
                          "text-2xl leading-[100%] font-semibold",
                          isActive ? "text-primary" : "text-navy"
                        )}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-body text-base leading-[100%]">{step.description}</p>
                  </div>
                </AnimateOnScroll>
              );
            })}

            {(ctaText || ctaDescription) && (
              <AnimateOnScroll animation="fade-up" delay={0.4}>
                <div className="flex items-center gap-4">
                  {ctaText && ctaHref && (
                    <Button as="link" href={ctaHref} className="shrink-0">
                      {ctaText}
                    </Button>
                  )}
                  {ctaDescription && (
                    <div className="text-primary border-l-border-muted border-l py-1 pl-[17px] text-base leading-5">
                      {ctaDescription}
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            )}
          </div>

          <AnimateOnScroll animation="fade-up" delay={0.2}>
            <div className="relative h-[500px] w-full">
              {steps.map((step, stepIndex) => {
                const isActive = activeFeatureIndex === stepIndex;
                return (
                  <div
                    key={step.title}
                    className={cn(
                      "absolute inset-0",
                      isActive
                        ? "pointer-events-auto translate-y-0 opacity-100 transition-all duration-700 ease-out"
                        : "pointer-events-none translate-y-8 opacity-0"
                    )}
                  >
                    <Image src={step.image} alt={step.title} fill className="object-contain" />
                  </div>
                );
              })}
            </div>
          </AnimateOnScroll>
        </div>

        {/* Pillars Section */}
        {pillars && pillars.length > 0 && (
          <div className="py-12 md:py-16 lg:py-18">
            {pillarsTitle && (
              <AnimateOnScroll animation="fade-up">
                <div className="mb-8 text-center text-2xl font-bold md:mb-12 md:text-[28px] lg:mb-[52px] lg:text-[32px]">
                  {pillarsTitle}
                </div>
              </AnimateOnScroll>
            )}
            <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-6 lg:gap-[30px]">
              {pillars.map((pillar, index) => {
                return (
                  <AnimateOnScroll
                    key={pillar.title}
                    animation="fade-up"
                    delay={0.1 * (index + 1)}
                    className="flex flex-col items-center justify-center gap-3 px-4 md:gap-4"
                  >
                    <Icon name={pillar.icon} size={32} className="text-primary md:h-10 md:w-10" />
                    <div className="text-center text-xl font-semibold md:text-[22px] lg:text-2xl">
                      {pillar.title}
                    </div>
                    <div className="text-body text-center text-sm md:text-[15px] lg:text-base">
                      {pillar.description}
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
