import Link from "next/link";

interface GradientButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function GradientButton({
  href,
  children,
}: GradientButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      {children}
    </Link>
  );
}