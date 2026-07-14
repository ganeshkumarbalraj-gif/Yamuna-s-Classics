"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedButton({
  href,
  children,
  className = "",
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      <Link
        href={href}
        className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-3 font-semibold text-white shadow-lg transition-all ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}