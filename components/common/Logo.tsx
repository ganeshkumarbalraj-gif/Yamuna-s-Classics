"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-4"
    >
      {/* Logo */}

      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-white/70
          bg-white/90
          p-2
          shadow-lg
          backdrop-blur
          transition-all
          duration-500
          group-hover:-translate-y-1
          group-hover:rotate-1
          group-hover:scale-105
          group-hover:shadow-2xl
          group-hover:shadow-emerald-200/60
        "
      >
        <Image
          src="/logo/yamunas-classics-logo.png"
          alt="Yamuna's Classics"
          width={72}
          height={72}
          priority
          className="
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* Text */}

      <div className="hidden sm:block">

        <h1
className="
text-2xl
tracking-tight
font-bold
font-body
text-gray-900
"
>
Yamuna&apos;s Classics
</h1>

        <p
          className="
            mt-1
            text-xs
            font-semibold
            uppercase
            tracking-[0.35em]
            text-emerald-600
          "
        >
          Handmade with Love
        </p>

      </div>
    </Link>
  );
}