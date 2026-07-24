"use client";

import { ShoppingCart } from "lucide-react";

import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";

interface CartButtonProps {
  product: Product;
  className?: string;
}

export default function CartButton({
  product,
  className = "",
}: CartButtonProps) {
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart(product);
  };

  return (
    <Button
      type="button"
      onClick={handleClick}
      className={className}
    >
      <ShoppingCart className="mr-2 h-5 w-5" />
      Add to Cart
    </Button>
  );
}