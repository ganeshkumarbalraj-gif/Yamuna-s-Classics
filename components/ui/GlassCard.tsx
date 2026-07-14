"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl",
        "border border-white/40",
        "bg-white/70",
        "backdrop-blur-xl",
        "shadow-xl",
        "transition-all duration-300",
        "hover:shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}