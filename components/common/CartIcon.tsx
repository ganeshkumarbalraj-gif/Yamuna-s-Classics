"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import useCart from "@/hooks/useCart";

export default function CartIcon() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center justify-center rounded-full p-2 transition hover:bg-emerald-50"
      aria-label="Shopping Cart"
    >
      <ShoppingCart className="h-6 w-6" />

      {totalItems > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-pink-600 px-1 text-xs font-bold text-white">
          {totalItems}
        </span>
      )}
    </Link>
  );
}