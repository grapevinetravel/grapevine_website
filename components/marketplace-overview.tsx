"use client";

import AnimateOnScroll from "./animations/animate-on-scroll";
import Icon from "./icon";
import { Section, Container } from "./primitives";
import { IconName } from "lucide-react/dynamic";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface ContentItem {
  icon: IconName;
  label: string;
}

interface Feature {
  text: string;
}

interface UspCard {
  icon: IconName;
  title?: string;
  description: string;
}

export interface MarketplaceOverviewProps {
  title: React.ReactNode;
  subtitle?: string;
  centerIcon: IconName;
  surroundingIcons: IconName[];
  mainTitle: string;
  features: Feature[];
  contentLabel?: string;
  contentItems: ContentItem[];
  uspTitle?: string;
  uspCards: UspCard[];
  className?: string;
}

export default function MarketplaceOverview({
  title,
  subtitle,
  centerIcon,
  surroundingIcons,
  mainTitle,
  features,
  contentLabel = "Total trip content",
  contentItems,
  uspTitle = "Why it matters",
  uspCards,
  className = "bg-white py-12 md:py-20 lg:py-30",
}: MarketplaceOverviewProps) {
  return (
    <Section variant="white" spacing="md" className={className}>
      <Container>
        {/* Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="mx-auto mb-12 max-w-[800px] text-center md:mb-16 lg:mb-20">
            <h2 className="mb-3 text-3xl font-bold sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
              {title}
            </h2>
            {subtitle && (
              <p className="text-body text-base md:text-[17px] lg:text-[20px]">{subtitle}</p>
            )}
          </div>
        </AnimateOnScroll>

        {/* Main Content - Two Columns */}
        <div className="mb-12 grid grid-cols-1 items-center gap-12 md:mb-16 md:gap-16 lg:mb-20 lg:grid-cols-2 lg:gap-20">
          {/* Left: Circular Diagram */}
          <AnimateOnScroll animation="fade-up" delay={0.1}>
            <div className="relative flex items-center justify-center">
              {/* Center Circle with Image */}
              <div className="relative h-[280px] w-[280px] md:h-[320px] md:w-[320px] lg:h-[360px] lg:w-[360px]">
                {/* Dotted Circle Border */}
                <motion.div
                  className="border-primary/30 absolute inset-0 rounded-full border-2 border-dashed"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Center Icon Circle */}
                <motion.div
                  className="bg-primary absolute inset-[20%] flex items-center justify-center rounded-full shadow-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1,
                    ease: "easeOut",
                  }}
                >
                  <Icon
                    name={centerIcon}
                    size={80}
                    className="text-white md:h-24 md:w-24 lg:h-28 lg:w-28"
                  />
                </motion.div>

                {/* Surrounding Icons - Positioned around the circle */}
                {surroundingIcons.slice(0, 8).map((iconName, index) => {
                  const angle = (index * 360) / 8;
                  const radius = 50; // percentage
                  const x = 50 + radius * Math.cos(((angle - 90) * Math.PI) / 180);
                  const y = 50 + radius * Math.sin(((angle - 90) * Math.PI) / 180);

                  return (
                    <motion.div
                      key={index}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + index * 0.05,
                        ease: "easeOut",
                      }}
                    >
                      <motion.div
                        className="relative h-10 w-10 md:h-12 md:w-12"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* White background to hide the dotted line */}
                        <div className="absolute inset-0 rounded-full bg-white"></div>
                        {/* Icon container with primary background */}
                        <motion.div
                          className="bg-primary/10 relative flex h-full w-full items-center justify-center rounded-full"
                          whileHover={{ backgroundColor: "rgba(25, 128, 239, 0.2)" }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon name={iconName} size={20} className="text-primary md:h-6 md:w-6" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Features */}
          <AnimateOnScroll animation="fade-up" delay={0.2}>
            <div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl lg:text-[28px]">
                {mainTitle}
              </h3>
              <ul className="flex flex-col gap-3 md:gap-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="text-body group flex items-start gap-2.5 text-base leading-normal md:gap-3 md:text-[17px] lg:text-[20px]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                      <Check
                        size={18}
                        className="text-primary mt-0.5 shrink-0 md:h-5 md:w-5 lg:h-6 lg:w-6"
                      />
                    </motion.div>
                    <motion.span
                      className="text-body"
                      whileHover={{ color: "var(--color-navy)" }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.text}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Content Items Grid */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <AnimateOnScroll animation="fade-up" delay={0.3}>
            <p className="text-body mb-6 text-left text-sm font-semibold md:mb-8 md:text-base lg:text-[20px]">
              {contentLabel}
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-3 gap-6 md:grid-cols-5 md:gap-8 lg:grid-cols-9">
            {contentItems.map((item, index) => (
              <motion.div
                key={index}
                className="group flex cursor-default flex-col items-center gap-2 md:gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.05,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  className="flex h-10 w-10 items-center justify-center md:h-12 md:w-12"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon name={item.icon} size={20} className="text-primary md:h-6 md:w-6" />
                </motion.div>
                <motion.span
                  className="text-body text-center text-xs md:text-sm"
                  whileHover={{ color: "var(--color-navy)" }}
                  transition={{ duration: 0.3 }}
                >
                  {item.label}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* USP Section */}
        <div>
          <AnimateOnScroll animation="fade-up">
            <h3 className="mb-8 text-center text-xl font-bold md:mb-12 md:text-2xl lg:text-[28px]">
              {uspTitle}
            </h3>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {uspCards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-primary/5 rounded-lg p-6 text-center md:p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              >
                <div className="mx-auto mb-4 flex items-center justify-center md:mb-5">
                  <Icon name={card.icon} size={48} className="text-primary" />
                </div>
                {card.title && (
                  <h4 className="mb-2 text-base font-bold md:mb-3 md:text-lg">{card.title}</h4>
                )}
                <p className="text-body text-sm leading-normal md:text-base">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
