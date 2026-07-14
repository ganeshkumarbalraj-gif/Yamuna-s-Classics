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
      "bg-pink-100 text-pink-700",

    secondary:
      "bg-purple-100 text-purple-700",

    success:
      "bg-emerald-100 text-emerald-700",

    warning:
      "bg-amber-100 text-amber-700",

    info:
      "bg-sky-100 text-sky-700",

    outline:
      "border border-gray-300 bg-white text-gray-700",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}