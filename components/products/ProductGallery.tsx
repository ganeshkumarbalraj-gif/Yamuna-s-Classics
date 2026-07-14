"use client";

import { useState } from "react";

import ProductMainImage from "./ProductMainImage";
import ProductThumbnails from "./ProductThumbnails";
import ImageLightbox from "./ImageLightbox";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images.length) {
    images = ["/images/placeholder-product.jpg"];
  }

  return (
    <>
      <div className="space-y-6">

        <ProductMainImage
          image={images[selectedImage]}
          productName={productName}
          onClick={() => setLightboxOpen(true)}
        />

        <ProductThumbnails
          images={images}
          productName={productName}
          selectedImage={selectedImage}
          onSelect={setSelectedImage}
        />

      </div>

      <ImageLightbox
        images={images}
        productName={productName}
        selectedImage={selectedImage}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onChange={setSelectedImage}
      />
    </>
  );
}