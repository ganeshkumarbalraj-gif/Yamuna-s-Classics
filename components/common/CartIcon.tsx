"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import useCart from "@/hooks/useCart";

export default function CartIcon() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center justify-center rounded-full p-2 transition hover:bg-gray-100"
      aria-label="Shopping Cart"
    >
      <ShoppingCart className="h-6 w-6 text-gray-700" />

      {totalItems > 0 && (
        <span
          className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-pink-600 text-xs font-bold text-white"
        >
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </Link>
  );
}