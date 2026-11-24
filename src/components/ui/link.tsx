"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost";
  asChild?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant = "primary", asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "a";

    const variants = {
      primary:
        "text-primary hover:text-cyan transition-colors underline-offset-4 focus-visible:outline-none focus-visible:underline",
      secondary:
        "text-white hover:text-cyan transition-colors underline-offset-4 focus-visible:outline-none focus-visible:underline",
      ghost:
        "text-muted hover:text-white transition-colors underline-offset-4 focus-visible:outline-none focus-visible:underline",
    };

    return (
      <Comp
        ref={ref}
        className={cn("inline-block", variants[variant], className)}
        {...props}
      />
    );
  },
);

Link.displayName = "Link";

export default Link;
