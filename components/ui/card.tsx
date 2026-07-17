import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-[32px]",
        "border border-gray-100",
        "bg-white",
        "shadow-md",
        "transition-all duration-500",
        "hover:-translate-y-2",
        "hover:shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}