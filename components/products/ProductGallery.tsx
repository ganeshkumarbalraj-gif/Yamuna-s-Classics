"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({
  images,
  name,
}: ProductGalleryProps) {
  const gallery =
    images.length > 0
      ? images
      : ["/images/placeholder-product.jpg"];

  const [selectedImage, setSelectedImage] = useState(gallery[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div className="space-y-5">

        {/* Main Image */}

        <div
          className="group relative cursor-zoom-in overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm"
          onClick={() => setLightboxOpen(true)}
        >
          <div className="relative aspect-square">
            <Image
              src={selectedImage}
              alt={name}
              fill
              priority
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Thumbnails */}

        {gallery.length > 1 && (
          <div className="grid grid-cols-4 gap-4">
            {gallery.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`relative aspect-square overflow-hidden rounded-2xl border transition-all ${
                  selectedImage === image
                    ? "border-emerald-600 ring-2 ring-emerald-200"
                    : "border-gray-200 hover:border-emerald-400"
                }`}
              >
                <Image
                  src={image}
                  alt={`${name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute -right-4 -top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold shadow-lg hover:bg-gray-100"
            >
              ×
            </button>

            <div className="relative h-[80vh] w-[80vw] max-w-4xl">
              <Image
                src={selectedImage}
                alt={name}
                fill
                className="object-contain"
              />
            </div>

            {gallery.length > 1 && (
              <div className="mt-6 flex justify-center gap-3">
                {gallery.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`relative h-20 w-20 overflow-hidden rounded-xl border ${
                      selectedImage === image
                        ? "border-emerald-500"
                        : "border-white/40"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}