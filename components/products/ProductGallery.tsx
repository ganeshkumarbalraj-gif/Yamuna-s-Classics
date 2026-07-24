"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
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

  const [selectedImage, setSelectedImage] =
    useState(gallery[0]);

  const [lightboxOpen, setLightboxOpen] =
    useState(false);

  const currentIndex =
    gallery.indexOf(selectedImage);

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

      <div className="space-y-6">

        {/* Main Image */}

        <div
          className="group relative cursor-zoom-in overflow-hidden rounded-[36px] border border-gray-100 bg-white shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]"
          onClick={() => setLightboxOpen(true)}
        >

          <div className="relative aspect-square">

            <Image
              src={selectedImage}
              alt={name}
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

            {/* Zoom Icon */}

            <div className="absolute bottom-5 right-5 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur opacity-0 transition duration-500 group-hover:opacity-100">

              <ZoomIn
                size={22}
                className="text-emerald-700"
              />

            </div>

          </div>

        </div>

        {/* Thumbnails */}

        {gallery.length > 1 && (

          <div className="grid grid-cols-4 gap-4">

            {gallery.map((image, index) => (

              <button
                key={index}
                type="button"
                onClick={() =>
                  setSelectedImage(image)
                }
                className={`group relative aspect-square overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  selectedImage === image
                    ? "scale-105 border-emerald-600 ring-2 ring-emerald-200"
                    : "border-gray-200 hover:border-emerald-400"
                }`}
              >

                <Image
                  src={image}
                  alt={`${name} ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

              </button>

            ))}

          </div>

        )}

      </div>

      {/* Lightbox */}

      {lightboxOpen && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-8"
          onClick={() =>
            setLightboxOpen(false)
          }
        >

          <div
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* Close */}

            <button
              type="button"
              onClick={() =>
                setLightboxOpen(false)
              }
              className="absolute -right-5 -top-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-emerald-600 hover:text-white"
            >

              <X size={24} />

            </button>

            {/* Previous */}

            {gallery.length > 1 && (

              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-4 shadow-xl backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-emerald-600 hover:text-white"
              >

                <ChevronLeft size={30} />

              </button>

            )}

            {/* Large Image */}

            <div className="relative h-[80vh] w-[80vw] max-w-5xl animate-in fade-in duration-300">

              <Image
                src={selectedImage}
                alt={name}
                fill
                className="object-contain"
              />

            </div>

            {/* Next */}

            {gallery.length > 1 && (

              <button
                type="button"
                onClick={showNext}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-4 shadow-xl backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-emerald-600 hover:text-white"
              >

                <ChevronRight size={30} />

              </button>

            )}

            {/* Counter */}

            {gallery.length > 1 && (

              <p className="mt-6 text-center text-sm tracking-[0.2em] text-gray-200">

                Image {currentIndex + 1} of {gallery.length}

              </p>

            )}

            {/* Lightbox Thumbnails */}

            {gallery.length > 1 && (

              <div className="mt-8 flex justify-center gap-4">

                {gallery.map((image, index) => (

                  <button
                    key={index}
                    type="button"
                    onClick={() =>
                      setSelectedImage(image)
                    }
                    className={`group relative h-20 w-20 overflow-hidden rounded-xl border shadow-md transition-all duration-300 hover:-translate-y-1 ${
                      selectedImage === image
                        ? "scale-110 border-emerald-500 ring-2 ring-emerald-300"
                        : "border-white/40 hover:border-white"
                    }`}
                  >

                    <Image
                      src={image}
                      alt={`${name} ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
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