import React from "react";
import clsx from "clsx";

type InputProps =
  React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className,
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={clsx(
        "w-full rounded-xl border border-gray-300 bg-white px-4 py-3",
        "transition-all duration-300",
        "hover:border-emerald-500",
        "hover:shadow-md",
        "focus:outline-none",
        "focus:border-pink-500",
        "focus:ring-2",
        "focus:ring-pink-200",
        className
      )}
    />
  );
}