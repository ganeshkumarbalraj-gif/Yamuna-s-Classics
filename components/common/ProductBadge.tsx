import clsx from "clsx";
import { ReactNode } from "react";

interface ProductBadgeProps {
  children: ReactNode;

  variant?:
    | "default"
    | "success"
    | "warning"
    | "info";

  className?: string;
}

export default function ProductBadge({
  children,
  variant = "default",
  className = "",
}: ProductBadgeProps) {
  const styles = {
    default:
      "bg-gradient-to-r from-pink-500 to-rose-500 text-white",

    success:
      "bg-gradient-to-r from-emerald-600 to-green-600 text-white",

    warning:
      "bg-gradient-to-r from-amber-500 to-orange-500 text-white",

    info:
      "bg-gradient-to-r from-sky-500 to-cyan-500 text-white",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center",
        "rounded-full",
        "px-4 py-2",
        "text-xs",
        "font-bold",
        "uppercase",
        "tracking-wide",
        "shadow-lg",
        "transition-all",
        "duration-300",
        "hover:-translate-y-0.5",
        "hover:scale-105",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}