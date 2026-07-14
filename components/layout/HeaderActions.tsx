"use client";

import Link from "next/link";
import { Heart, Search } from "lucide-react";

export default function HeaderActions() {
  return (
    <div className="hidden items-center gap-3 lg:flex">

      <Link
        href="/search"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50"
      >
        <Search size={18} />
      </Link>

      <Link
        href="/wishlist"
        className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-50"
      >
        <Heart size={18} />

        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 text-[10px] font-bold text-white">
          0
        </span>
      </Link>

      <Link
        href="/contact"
        className="rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        Enquire Now
      </Link>

    </div>
  );
}