"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";
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
      : ["/images/placeholder.webp"];

  const [current, setCurrent] = useState(0);

  const [lightbox, setLightbox] =
    useState(false);

  const previous = useCallback(() => {
  setCurrent((prev) =>
    prev === 0
      ? gallery.length - 1
      : prev - 1
  );
}, [gallery.length]);

  const next = useCallback(() => {
  setCurrent((prev) =>
    prev === gallery.length - 1
      ? 0
      : prev + 1
  );
}, [gallery.length]);

  useEffect(() => {
    function handleKeyDown(
      e: KeyboardEvent
    ) {
      if (!lightbox) return;

      if (e.key === "Escape") {
        setLightbox(false);
      }

      if (e.key === "ArrowLeft") {
        previous();
      }

      if (e.key === "ArrowRight") {
        next();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [lightbox, previous, next]);

  return (
    <>
      <div className="space-y-5">

        <div
          onClick={() => setLightbox(true)}
          className="group relative aspect-square cursor-pointer overflow-hidden rounded-3xl bg-white shadow-xl"
        >
          <Image
            src={gallery[current]}
            alt={name}
            fill
            priority
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        {gallery.length > 1 && (

          <div className="grid grid-cols-4 gap-4">

            {gallery.map(
              (image, index) => (

                <button
                  key={image}
                  onClick={() =>
                    setCurrent(index)
                  }
                  className={`relative aspect-square overflow-hidden rounded-xl border-2 transition

                  ${
                    current === index
                      ? "border-pink-500"
                      : "border-transparent hover:border-emerald-400"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>

              )
            )}

          </div>

        )}

      </div>

      {lightbox && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">

          <button
            onClick={() =>
              setLightbox(false)
            }
            className="absolute right-6 top-6 rounded-full bg-white p-2"
          >
            <X />
          </button>

          {gallery.length > 1 && (

            <button
              onClick={previous}
              className="absolute left-6 rounded-full bg-white p-3"
            >
              <ChevronLeft />
            </button>

          )}

          <div className="relative h-[85vh] w-[90vw]">

            <Image
              src={gallery[current]}
              alt={name}
              fill
              className="object-contain"
            />

          </div>

          {gallery.length > 1 && (

            <button
              onClick={next}
              className="absolute right-6 rounded-full bg-white p-3"
            >
              <ChevronRight />
            </button>

          )}

        </div>

      )}

    </>
  );
}