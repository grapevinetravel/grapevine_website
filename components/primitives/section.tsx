import React from "react";
import { cn } from "@/lib/utils";

export type SectionVariant = "default" | "navy" | "light" | "white" | "slate";
export type SectionSpacing = "none" | "sm" | "md" | "lg" | "xl";

export interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  variant?: SectionVariant;
  spacing?: SectionSpacing;
}

const variantClasses: Record<SectionVariant, string> = {
  default: "",
  navy: "bg-navy text-white",
  light: "bg-light text-navy",
  white: "bg-white text-navy",
  slate: "bg-slate text-navy",
};

const spacingClasses: Record<SectionSpacing, string> = {
  none: "",
  sm: "py-12 md:py-16 lg:py-20",
  md: "py-12 md:py-20 lg:py-30",
  lg: "py-16 md:py-24 lg:py-30",
  xl: "py-20 md:py-30 lg:py-36",
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ variant = "default", spacing = "md", className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(variantClasses[variant], spacingClasses[spacing], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
