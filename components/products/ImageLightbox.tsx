"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  images: string[];
  productName: string;
  selectedImage: number;
  open: boolean;
  onClose: () => void;
  onChange: (index: number) => void;
}

export default function ImageLightbox({
  images,
  productName,
  selectedImage,
  open,
  onClose,
  onChange,
}: ImageLightboxProps) {
  if (!open) return null;

  const previous = () =>
    onChange((selectedImage - 1 + images.length) % images.length);

  const next = () =>
    onChange((selectedImage + 1) % images.length);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90">

      <button
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full bg-white p-3 shadow-lg"
      >
        <X size={22} />
      </button>

      {images.length > 1 && (
        <button
          onClick={previous}
          className="absolute left-6 rounded-full bg-white p-3 shadow-lg"
        >
          <ChevronLeft />
        </button>
      )}

      <div className="relative h-[80vh] w-[90vw] max-w-5xl">

        <Image
          src={images[selectedImage]}
          alt={productName}
          fill
          className="object-contain"
        />

      </div>

      {images.length > 1 && (
        <button
          onClick={next}
          className="absolute right-6 rounded-full bg-white p-3 shadow-lg"
        >
          <ChevronRight />
        </button>
      )}

    </div>
  );
}