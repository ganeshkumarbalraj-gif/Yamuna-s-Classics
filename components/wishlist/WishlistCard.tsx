"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

import Button from "@/components/ui/Button";
import useCart from "@/hooks/useCart";
import WishlistService from "@/services/WishlistService";
import { Product } from "@/types";

interface WishlistCardProps {
  product: Product;
  onRemove?: () => void;
}

export default function WishlistCard({
  product,
  onRemove,
}: WishlistCardProps) {
  const { add } = useCart();

  const handleRemove = () => {
    WishlistService.remove(product.id);

    if (onRemove) {
      onRemove();
    }
  };

  const handleMoveToCart = () => {
    add(product);
    WishlistService.remove(product.id);

    if (onRemove) {
      onRemove();
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.images[0] || "/images/placeholder.webp"}
            alt={product.name}
            fill
            sizes="(max-width:768px) 100vw, 400px"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {product.name}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {product.category}
            </p>
          </div>

          <Heart
            className="h-6 w-6 fill-pink-500 text-pink-500"
          />
        </div>

        <p className="mb-6 text-2xl font-bold text-emerald-600">
          {product.price
            ? `₹${product.price.toLocaleString()}`
            : "Price on Request"}
        </p>

        <div className="space-y-3">
          <Button
            type="button"
            className="w-full"
            onClick={handleMoveToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Move to Cart
          </Button>

          <Link href={`/products/${product.slug}`}>
            <Button
              type="button"
              variant="outline"
              className="w-full"
            >
              View Product
            </Button>
          </Link>

          <Button
            type="button"
            variant="secondary"
            className="w-full"
            onClick={handleRemove}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}