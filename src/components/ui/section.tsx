"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLSectionElement> {
  padding?: "sm" | "md" | "lg" | "xl";
  center?: boolean;
}

const Section = React.forwardRef<HTMLSectionElement, SectionProps>(
  ({ className, padding = "lg", center = false, children, ...props }, ref) => {
    const paddings = {
      sm: "py-12 px-4",
      md: "py-16 px-6",
      lg: "py-20 px-6",
      xl: "py-24 px-6",
    };

    return (
      <section
        ref={ref}
        className={cn("relative", paddings[padding], center && "text-center", className)}
        {...props}
      >
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, maxWidth = "xl", children, ...props }, ref) => {
    const widths = {
      sm: "max-w-2xl",
      md: "max-w-4xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "max-w-full",
    };

    return (
      <div
        ref={ref}
        className={cn("mx-auto w-full", widths[maxWidth], className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";

export { Section, Container };
