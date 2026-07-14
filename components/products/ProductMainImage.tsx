"use client";

import Image from "next/image";

interface ProductMainImageProps {
  image: string;
  productName: string;
  onClick: () => void;
}

export default function ProductMainImage({
  image,
  productName,
  onClick,
}: ProductMainImageProps) {
  return (
    <div
      onClick={onClick}
      className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
    >
      <Image
        src={image}
        alt={productName}
        fill
        priority
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute bottom-5 right-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-700 shadow-lg backdrop-blur">
        🔍 Click to enlarge
      </div>
    </div>
  );
}