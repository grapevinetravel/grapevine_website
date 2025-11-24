import React from "react";
import { cn } from "@/lib/utils";

export type ContainerSize = "default" | "sm" | "lg" | "full";

export interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  size?: ContainerSize;
  as?: React.ElementType;
}

const sizeClasses: Record<ContainerSize, string> = {
  default: "max-w-[1280px]",
  sm: "max-w-[960px]",
  lg: "max-w-[1440px]",
  full: "max-w-full",
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = "default", as: Component = "div", className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("container mx-auto px-6 md:px-12", sizeClasses[size], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";
