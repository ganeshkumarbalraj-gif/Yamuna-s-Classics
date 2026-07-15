"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

import Button from "@/components/ui/Button";
import useCart from "@/hooks/useCart";
import { CartItem as CartItemType } from "@/types/cart";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({
  item,
}: CartItemProps) {
  const {
    increase,
    decrease,
    remove,
  } = useCart();

  const product = item.product;

  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:flex-row">
      {/* Product Image */}
      <div className="relative h-36 w-36 overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={product.images[0] || "/images/placeholder.webp"}
          alt={product.name}
          fill
          sizes="144px"
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {product.name}
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            {product.category}
          </p>

          <p className="mt-3 text-lg font-semibold text-emerald-600">
  {product.price
    ? `₹${product.price.toLocaleString()}`
    : "Price on Request"}
</p>
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          {/* Quantity */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => decrease(product.id)}
              className="rounded-full border p-2 transition hover:bg-gray-100"
              aria-label="Decrease quantity"
            >
              <Minus size={18} />
            </button>

            <span className="min-w-[40px] text-center text-lg font-semibold">
              {item.quantity}
            </span>

            <button
              type="button"
              onClick={() => increase(product.id)}
              className="rounded-full border p-2 transition hover:bg-gray-100"
              aria-label="Increase quantity"
            >
              <Plus size={18} />
            </button>
          </div>

          {/* Total */}
          <div className="text-right">
  <p className="text-sm text-gray-500">
    Total
  </p>

  <p className="text-2xl font-bold text-emerald-600">
    {product.price
      ? `₹${(
          product.price * item.quantity
        ).toLocaleString()}`
      : "Enquire"}
  </p>
</div>

          {/* Remove */}
          <Button
            type="button"
            variant="secondary"
            onClick={() => remove(product.id)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}