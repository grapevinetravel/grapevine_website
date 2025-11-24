import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

interface BaseButtonProps {
  variant?: "primary" | "secondary" | "outline" | "pill" | "inverted";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    as?: "button";
  };

type ButtonAsLink = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    as: "link";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-50";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-hover rounded-full",
    secondary:
      "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white rounded-full",
    outline:
      "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white rounded-full",
    pill: "bg-primary/20 text-white border border-primary ring-1 ring-primary hover:bg-primary/30 rounded-full",
    inverted: "bg-white text-primary hover:bg-white/90 rounded-full",
  };

  const sizeClasses = {
    sm: "px-4 py-2.5 text-sm leading-5",
    md: "px-4 py-3.5 text-base leading-5",
    lg: "px-8 py-4 text-base leading-5",
  };

  const widthClasses = fullWidth ? "w-full" : "";

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClasses} ${className}`;

  if (props.as === "link") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, ...linkProps } = props;
    return (
      <Link {...linkProps} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as, ...buttonProps } = props;
  return (
    <button {...buttonProps} className={combinedClasses}>
      {children}
    </button>
  );
}
