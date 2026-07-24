"use client";

import Image from "next/image";

import { GalleryItem } from "@/types";

interface GalleryLightboxProps {
  cart: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function GalleryLightbox({
  cart,
  currentIndex,
  isOpen,
  onClose,
  onPrevious,
  onNext,
}: GalleryLightboxProps) {
  if (!isOpen || cart.length === 0) {
    return null;
  }

  const item = cart[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6">

      <button
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full bg-white px-4 py-2 font-semibold"
      >
        ✕
      </button>

      <button
        onClick={onPrevious}
        className="absolute left-6 rounded-full bg-white p-3 text-xl"
      >
        ‹
      </button>

      <div className="mx-auto max-w-5xl">

        <div className="relative aspect-[4/3] w-[80vw]">

          <Image
            src={item.image}
            alt={item.name ?? ""}
            fill
            className="object-contain"
            sizes="100vw"
          />

        </div>

        <div className="mt-6 text-center">

          <h2 className="text-2xl font-bold text-white">
            {item.name}
          </h2>

          {item.description && (
            <p className="mt-3 text-gray-300">
              {item.description}
            </p>
          )}

        </div>

      </div>

      <button
        onClick={onNext}
        className="absolute right-6 rounded-full bg-white p-3 text-xl"
      >
        ›
      </button>

    </div>
  );
}