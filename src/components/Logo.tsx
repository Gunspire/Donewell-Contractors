 "use client";

import React from "react";

import { cn } from "../lib/cn";
import { COMPANY } from "../config/company";

type LogoProps = {
  className?: string;
  alt?: string;
  variant?: "default" | "inverse";
};

export function Logo({ className, alt = COMPANY.name, variant = "default" }: LogoProps) {
  const src = "/Untitled.jpg";
  const shouldInvert = variant === "inverse" && src.endsWith(".svg");

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "h-12 w-auto",
        shouldInvert ? "brightness-0 invert" : undefined,
        className
      )}
      loading="eager"
      decoding="async"
    />
  );
}


