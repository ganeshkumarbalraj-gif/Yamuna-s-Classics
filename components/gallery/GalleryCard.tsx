import Image from "next/image";

import { GalleryItem } from "@/types";

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
}

export default function GalleryCard({
  item,
  onClick,
}: GalleryCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block overflow-hidden rounded-3xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative aspect-square">

        <Image
          src={item.image}
          alt={item.name ?? ""}
          fill
          sizes="(max-width:768px) 100vw,
                 (max-width:1200px) 50vw,
                 33vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/40" />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-left">

          <h3 className="text-xl font-bold text-white">
            {item.name}
          </h3>

          <p className="mt-2 text-sm text-gray-100">
            {item.category}
          </p>

        </div>

      </div>
    </button>
  );
}