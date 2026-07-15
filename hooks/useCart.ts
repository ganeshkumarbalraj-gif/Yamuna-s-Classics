"use client";

import { useCallback, useEffect, useState } from "react";

import CartService from "@/services/CartService";
import { Product } from "@/types";
import { CartSummary } from "@/types/cart";

export default function useCart() {
  const [summary, setSummary] = useState<CartSummary>(() =>
    CartService.getSummary()
  );

  const refresh = useCallback(() => {
    setSummary(CartService.getSummary());
  }, []);

  useEffect(() => {
    const eventName = CartService.getEventName();

    window.addEventListener(eventName, refresh);

    return () => {
      window.removeEventListener(eventName, refresh);
    };
  }, [refresh]);

  const add = (product: Product) => {
    CartService.add(product);
    refresh();
  };

  const remove = (productId: string) => {
    CartService.remove(productId);
    refresh();
  };

  const increase = (productId: string) => {
    CartService.increase(productId);
    refresh();
  };

  const decrease = (productId: string) => {
    CartService.decrease(productId);
    refresh();
  };

  const clear = () => {
    CartService.clear();
    refresh();
  };

  return {
    summary,
    items: summary.items,
    totalItems: summary.totalItems,
    subtotal: summary.subtotal,
    shipping: summary.shipping,
    total: summary.total,

    add,
    remove,
    increase,
    decrease,
    clear,
    refresh,
  };
}