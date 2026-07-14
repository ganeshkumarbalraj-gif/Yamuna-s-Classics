"use client";

import { Heart, Share2, Copy } from "lucide-react";

export default function ProductActions() {
  const copyLink = async () => {
    await navigator.clipboard.writeText(
      window.location.href
    );

    alert("Product link copied.");
  };

  const share = async () => {
    if (navigator.share) {
      await navigator.share({
        title: document.title,
        url: window.location.href,
      });
    } else {
      copyLink();
    }
  };

  return (
    <div className="flex gap-3">

      <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border p-3 hover:bg-pink-50">
        <Heart size={20} />

        Wishlist
      </button>

      <button
        onClick={share}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl border p-3 hover:bg-pink-50"
      >
        <Share2 size={20} />

        Share
      </button>

      <button
        onClick={copyLink}
        className="rounded-xl border p-3 hover:bg-pink-50"
      >
        <Copy size={20} />
      </button>

    </div>
  );
}