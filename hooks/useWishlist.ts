"use client";

import { useCallback, useEffect, useState } from "react";

import WishlistService from "@/services/WishlistService";

export default function useWishlist(productId: string) {
  const [saved, setSaved] = useState(() =>
    WishlistService.isSaved(productId)
  );

  const refresh = useCallback(() => {
    setSaved(WishlistService.isSaved(productId));
  }, [productId]);

  useEffect(() => {
    const eventName = WishlistService.eventName();

    window.addEventListener(eventName, refresh);

    return () => {
      window.removeEventListener(eventName, refresh);
    };
  }, [refresh]);

  const toggle = () => {
    WishlistService.toggle(productId);
    refresh();
  };

  return {
    saved,
    toggle,
  };
}