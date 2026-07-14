"use client";

import { useMemo, useState } from "react";

import GalleryGrid from "./GalleryGrid";
import GalleryFilters from "./GalleryFilters";
import GalleryLightbox from "./GalleryLightbox";

import GalleryService from "@/services/GalleryService";

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [isOpen, setIsOpen] = useState(false);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const categories =
    GalleryService.getCategories();

  const allItems =
    GalleryService.getAll();

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") {
      return allItems;
    }

    return allItems.filter(
      (item) =>
        item.category === selectedCategory
    );
  }, [allItems, selectedCategory]);

  function openLightbox(index: number) {
    setCurrentIndex(index);
    setIsOpen(true);
  }

  function closeLightbox() {
    setIsOpen(false);
  }

  function previousImage() {
    setCurrentIndex((prev) =>
      prev === 0
        ? filteredItems.length - 1
        : prev - 1
    );
  }

  function nextImage() {
    setCurrentIndex((prev) =>
      prev === filteredItems.length - 1
        ? 0
        : prev + 1
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <GalleryFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <GalleryGrid
        items={filteredItems}
        onImageClick={openLightbox}
      />

      <GalleryLightbox
        items={filteredItems}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={closeLightbox}
        onPrevious={previousImage}
        onNext={nextImage}
      />

    </section>
  );
}