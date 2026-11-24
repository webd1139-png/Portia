"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "success" | "outline";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default:
        "bg-primary text-white px-2.5 py-0.5 rounded-full text-xs font-medium",
      secondary:
        "bg-surface text-white px-2.5 py-0.5 rounded-full text-xs font-medium border border-border",
      success:
        "bg-cyan text-black px-2.5 py-0.5 rounded-full text-xs font-medium",
      outline:
        "border border-border text-muted px-2.5 py-0.5 rounded-full text-xs font-medium",
    };

    return (
      <span
        ref={ref}
        className={cn("inline-flex items-center", variants[variant], className)}
        {...props}
      />
    );
  },
);

Badge.displayName = "Badge";

export default Badge;
