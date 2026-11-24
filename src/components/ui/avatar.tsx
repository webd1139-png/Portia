"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, src, alt, size = "md", ...props }, ref) => {
    const sizes = {
      sm: "w-8 h-8",
      md: "w-12 h-12",
      lg: "w-16 h-16",
      xl: "w-24 h-24",
    };

    return (
      <Image
        ref={ref}
        src={src}
        alt={alt}
        fill
        sizes={size === "xl" ? "240px" : size === "lg" ? "160px" : size === "md" ? "96px" : "64px"}
        className={cn(
          "rounded-full object-cover",
          sizes[size],
          className,
        )}
        priority={size === "xl" || size === "lg"}
        {...props}
      />
    );
  },
);

Avatar.displayName = "Avatar";

export default Avatar;
