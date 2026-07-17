import { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea({
  className = "",
  ...props
}: Props) {
  return (
    <textarea
      {...props}
      className={`min-h-36 w-full rounded-xl border border-gray-300 bg-white p-4 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-200 ${className}`}
    />
  );
}