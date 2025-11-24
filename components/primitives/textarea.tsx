import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, helperText, className, style, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          ref={ref}
          className={cn(
            "border-subtle w-full resize-none rounded-2xl border bg-white px-4 py-2.5 text-sm",
            "text-navy placeholder:text-muted",
            "focus:ring-primary focus:border-transparent focus:ring-2 focus:outline-none",
            className
          )}
          style={style}
          {...props}
        />
        {helperText && <p className="text-error mt-1 text-sm">{helperText}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
