import GalleryCard from "./GalleryCard";

import { GalleryItem } from "@/types";

interface GalleryGridProps {
  items: GalleryItem[];
  onImageClick: (index: number) => void;
}

export default function GalleryGrid({
  items,
  onImageClick,
}: GalleryGridProps) {
  if (items.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">
          No images found
        </h3>

        <p className="mt-3 text-gray-600">
          Try selecting another category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item, index) => (
        <GalleryCard
          key={item.id}
          item={item}
          onClick={() => onImageClick(index)}
        />
      ))}
    </div>
  );
}