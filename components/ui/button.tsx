"use client";

import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center",
    "rounded-xl",
    "px-6 py-3",
    "font-semibold",
    "transition-all duration-300",
    "hover:-translate-y-1",
    "hover:shadow-xl",

    {
      // White → Blue
      "border border-gray-300 bg-white text-gray-800 hover:border-blue-600 hover:bg-blue-600 hover:text-white":
        variant === "primary",

      // Transparent → Blue
      "border border-gray-300 bg-transparent text-gray-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white":
        variant === "secondary",

      // White Outline
      "border-2 border-gray-400 bg-white text-gray-800 hover:border-blue-600 hover:bg-blue-600 hover:text-white":
        variant === "outline",
    },

    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}