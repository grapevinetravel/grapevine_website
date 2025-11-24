import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  helperText?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ error, helperText, className, children, ...props }, ref) => {
    return (
      <div className="w-full">
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              "w-full appearance-none rounded-2xl border bg-white px-4 py-2.5 pr-10 text-sm",
              "text-navy placeholder:text-muted",
              "transition-all duration-300",
              "focus:ring-primary focus:border-transparent focus:ring-2 focus:outline-none",
              error ? "border-error" : "border-subtle",
              className
            )}
            {...props}
          >
            {children}
          </select>
          <ChevronDown
            className="text-navy pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 transition-transform duration-200"
            size={20}
          />
        </div>
        {helperText && <p className="text-error mt-1 text-sm">{helperText}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
