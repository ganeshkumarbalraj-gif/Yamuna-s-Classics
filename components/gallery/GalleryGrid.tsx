import GalleryCard from "./GalleryCard";

import { GalleryItem } from "@/types";

interface GalleryGridProps {
  cart: GalleryItem[];
  onImageClick: (index: number) => void;
}

export default function GalleryGrid({
  cart,
  onImageClick,
}: GalleryGridProps) {
  if (cart.length === 0) {
    return (
      <div className="rounded-[36px] border border-rose-100 bg-gradient-to-br from-white to-rose-50 py-24 text-center shadow-lg">

        <div className="mx-auto max-w-xl">

          <div className="mb-6 text-7xl">
            🎨
          </div>

          <h3 className="text-3xl font-bold text-gray-900">
            No creations found
          </h3>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We couldn&apos;t find any handmade creations in this category.
            Please choose another category to discover more beautiful
            handcrafted artwork.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div
      className="
        grid
        auto-rows-fr
        gap-8
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {cart.map((item, index) => (
        <div
          key={item.id}
          className="
            h-full
            transition-all
            duration-500
            hover:-translate-y-2
          "
        >
          <GalleryCard
            item={item}
            onClick={() => onImageClick(index)}
          />
        </div>
      ))}
    </div>
  );
}