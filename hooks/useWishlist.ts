"use client";

import { useState } from "react";
import WishlistService from "@/services/WishlistService";

export default function useWishlist(productId: string) {
  const [saved, setSaved] = useState(() =>
    WishlistService.isSaved(productId)
  );

  const toggle = () => {
    WishlistService.toggle(productId);

    setSaved(WishlistService.isSaved(productId));
  };

  return {
    saved,
    toggle,
  };
}