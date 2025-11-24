import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, helperText, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            "w-full rounded-2xl border bg-white px-4 py-2.5 text-sm",
            "text-navy placeholder:text-muted",
            "transition-all duration-300",
            "focus:ring-primary focus:border-transparent focus:ring-2 focus:outline-none",
            error ? "border-error" : "border-subtle",
            className
          )}
          {...props}
        />
        {helperText && <p className="text-error mt-2 text-sm">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
