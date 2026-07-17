"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

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

  const [selectedImage, setSelectedImage] = useState(
    gallery[0]
  );

  const [lightboxOpen, setLightboxOpen] =
    useState(false);

  const currentIndex = gallery.indexOf(
    selectedImage
  );

  const showPrevious = () => {
    const previous =
      currentIndex === 0
        ? gallery.length - 1
        : currentIndex - 1;

    setSelectedImage(gallery[previous]);
  };

  const showNext = () => {
    const next =
      currentIndex === gallery.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(gallery[next]);
  };

  return (
    <>
      {/* Gallery */}

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

        {/* Thumbnail Gallery */}

        {gallery.length > 1 && (
          <div className="grid grid-cols-4 gap-4">

            {gallery.map((image, index) => (

              <button
                key={index}
                type="button"
                onClick={() =>
                  setSelectedImage(image)
                }
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
          onClick={() =>
            setLightboxOpen(false)
          }
        >

          <div
            className="relative max-h-[90vh] max-w-5xl"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* Close Button */}

            <button
              type="button"
              onClick={() =>
                setLightboxOpen(false)
              }
              className="absolute -right-4 -top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-gray-100"
            >

              <X size={22} />

            </button>
                        {/* Previous Button */}

            {gallery.length > 1 && (
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-white"
              >
                <ChevronLeft size={28} />
              </button>
            )}

            {/* Large Image */}

            <div className="relative h-[80vh] w-[80vw] max-w-4xl">

              <Image
                src={selectedImage}
                alt={name}
                fill
                className="object-contain"
              />

            </div>

            {/* Next Button */}

            {gallery.length > 1 && (
              <button
                type="button"
                onClick={showNext}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-white"
              >
                <ChevronRight size={28} />
              </button>
            )}

            {/* Image Counter */}

            {gallery.length > 1 && (
              <p className="mt-5 text-center text-sm font-medium text-white">
                Image {currentIndex + 1} of {gallery.length}
              </p>
            )}

            {/* Lightbox Thumbnails */}

            {gallery.length > 1 && (

              <div className="mt-6 flex justify-center gap-3">

                {gallery.map((image, index) => (

                  <button
                    key={index}
                    type="button"
                    onClick={() =>
                      setSelectedImage(image)
                    }
                    className={`relative h-20 w-20 overflow-hidden rounded-xl border transition ${
                      selectedImage === image
                        ? "border-emerald-500 ring-2 ring-emerald-300"
                        : "border-white/40 hover:border-white"
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