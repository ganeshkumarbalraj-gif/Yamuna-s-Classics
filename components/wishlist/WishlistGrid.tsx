"use client";

import { useEffect, useState } from "react";

import ProductCard from "@/components/products/ProductCard";

import WishlistService from "@/services/WishlistService";
import ProductService from "@/services/ProductService";

export default function WishlistGrid() {
  const loadProducts = () =>
    ProductService.getAll().filter((product) =>
      WishlistService.getItems().includes(product.id)
    );

  const [products, setProducts] =
    useState(loadProducts);

  useEffect(() => {
    const refresh = () => {
      setProducts(loadProducts());
    };

    window.addEventListener(
      WishlistService.eventName(),
      refresh
    );

    window.addEventListener(
      "storage",
      refresh
    );

    return () => {
      window.removeEventListener(
        WishlistService.eventName(),
        refresh
      );

      window.removeEventListener(
        "storage",
        refresh
      );
    };
  }, []);

  if (products.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-pink-200 bg-pink-50 py-20 text-center">

        <h2 className="text-3xl font-bold">
          Your Wishlist is Empty
        </h2>

        <p className="mt-4 text-gray-600">
          Save your favourite handmade creations here.
        </p>

      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}