"use client";

import { useCallback, useEffect, useState } from "react";

import WishlistCard from "./WishlistCard";

import WishlistService from "@/services/WishlistService";
import { products } from "@/data/products";
import { Product } from "@/types";

export default function WishlistGrid() {
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>(() => {
    const ids = WishlistService.getItems();

    return products.filter((product) =>
      ids.includes(product.id)
    );
  });

  const loadWishlist = useCallback(() => {
    const ids = WishlistService.getItems();

    const savedProducts = products.filter((product) =>
      ids.includes(product.id)
    );

    setWishlistProducts(savedProducts);
  }, []);

  useEffect(() => {
    const eventName = WishlistService.eventName();

    window.addEventListener(eventName, loadWishlist);

    return () => {
      window.removeEventListener(eventName, loadWishlist);
    };
  }, [loadWishlist]);

  if (wishlistProducts.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-16 text-center shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800">
          Your Wishlist is Empty ❤️
        </h2>

        <p className="mt-4 text-gray-600">
          Save your favourite handmade creations here so you can easily find
          them later.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {wishlistProducts.map((product) => (
        <WishlistCard
          key={product.id}
          product={product}
          onRemove={loadWishlist}
        />
      ))}
    </div>
  );
}