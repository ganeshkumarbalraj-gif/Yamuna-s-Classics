"use client";

import { Heart } from "lucide-react";
import useWishlist from "@/hooks/useWishlist";

interface WishlistButtonProps {
  productId: string;
  className?: string;
}

export default function WishlistButton({
  productId,
  className = "",
}: WishlistButtonProps) {
  const { saved, toggle } = useWishlist(productId);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        saved
          ? "Remove from wishlist"
          : "Add to wishlist"
      }
      title={
        saved
          ? "Remove from Wishlist"
          : "Add to Wishlist"
      }
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md ${className}`}
    >
      <Heart
        size={22}
        className={`transition-colors duration-300 ${
          saved
            ? "fill-pink-500 text-pink-500"
            : "text-gray-500"
        }`}
      />
    </button>
  );
}