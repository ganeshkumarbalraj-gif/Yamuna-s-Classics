"use client";

import Image from "next/image";
import clsx from "clsx";

interface ProductThumbnailsProps {
  images: string[];
  productName: string;
  selectedImage: number;
  onSelect: (index: number) => void;
}

export default function ProductThumbnails({
  images,
  productName,
  selectedImage,
  onSelect,
}: ProductThumbnailsProps) {
  return (
    <div className="grid grid-cols-4 gap-4">

      {images.map((image, index) => (

        <button
          key={index}
          type="button"
          onClick={() => onSelect(index)}
          className={clsx(
            "relative aspect-square overflow-hidden rounded-2xl border-2 transition-all duration-300",
            selectedImage === index
              ? "border-emerald-500 shadow-lg"
              : "border-transparent hover:border-pink-300"
          )}
        >
          <Image
            src={image}
            alt={`${productName} ${index + 1}`}
            fill
            className="object-cover"
          />
        </button>

      ))}

    </div>
  );
}