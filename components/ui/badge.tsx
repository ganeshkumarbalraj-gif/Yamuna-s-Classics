import clsx from "clsx";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;

  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "info"
    | "outline";

  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  const styles = {
    primary:
      "bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 border border-pink-200",

    secondary:
      "bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 border border-purple-200",

    success:
      "bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border border-emerald-200",

    warning:
      "bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 border border-amber-200",

    info:
      "bg-gradient-to-r from-sky-100 to-cyan-100 text-sky-700 border border-sky-200",

    outline:
      "border border-gray-300 bg-white text-gray-700",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full",
        "px-4 py-2",
        "text-xs font-semibold uppercase tracking-wide",
        "shadow-sm",
        "transition-all duration-300",
        "hover:-translate-y-0.5",
        "hover:shadow-md",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}