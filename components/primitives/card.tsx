import React from "react";
import { cn } from "@/lib/utils";

export type CardVariant = "solid" | "glass" | "outline";
export type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  variant?: CardVariant;
  padding?: CardPadding;
  as?: React.ElementType;
}

const variantClasses: Record<CardVariant, string> = {
  solid: "bg-white shadow-card",
  glass: "bg-white/80 backdrop-blur-sm border border-border-light",
  outline: "bg-transparent border border-border",
};

const paddingClasses: Record<CardPadding, string> = {
  none: "",
  sm: "p-4 md:p-5",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-10 lg:p-12",
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { variant = "solid", padding = "md", as: Component = "div", className, children, ...props },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "duration-base rounded-2xl transition-shadow",
          variantClasses[variant],
          paddingClasses[padding],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = "Card";
