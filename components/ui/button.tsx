"use client";

import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  external = false,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center",
    "rounded-xl",
    "px-7 py-3",
    "font-semibold",
    "transition-all duration-300",
    "hover:-translate-y-1",
    "hover:shadow-xl",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "focus:ring-rose-300",

    {
      // Primary

      "bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600":
        variant === "primary",

      // Secondary

      "border border-rose-500 bg-white text-rose-600 hover:bg-rose-500 hover:text-white":
        variant === "secondary",

      // Outline

      "border-2 border-rose-500 bg-transparent text-rose-600 hover:bg-rose-500 hover:text-white":
        variant === "outline",
    },

    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}