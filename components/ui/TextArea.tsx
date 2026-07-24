import { TextareaHTMLAttributes } from "react";
import clsx from "clsx";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea({
  className = "",
  ...props
}: Props) {
  return (
    <textarea
      {...props}
      className={clsx(
        "w-full rounded-xl border border-gray-300 bg-white p-4",
        "transition-all duration-300",
        "focus:border-pink-500",
        "focus:ring-2",
        "focus:ring-pink-200",
        "hover:border-emerald-500",
        "hover:shadow-md",
        "focus:outline-none",
        className
      )}
    />
  );
}