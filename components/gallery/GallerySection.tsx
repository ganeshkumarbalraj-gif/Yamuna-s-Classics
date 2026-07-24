"use client";

import { useMemo, useState } from "react";

import GalleryFilters from "./GalleryFilters";
import GalleryGrid from "./GalleryGrid";
import GalleryLightbox from "./GalleryLightbox";

import GalleryService from "@/services/GalleryService";
import SectionTitle from "@/components/common/SectionTitle";

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [isOpen, setIsOpen] =
    useState(false);

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
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50/30 to-white py-24">

      {/* Decorative Background */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-pink-100/40 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="Our Handmade Collection"
          name="Creative Gallery"
          description="Browse a collection of our handcrafted creations, workshop moments and beautiful handmade artwork made with love."
          center
        />

        <div className="mt-12">

          <GalleryFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

        </div>

        <div className="mt-14">

          <GalleryGrid
            cart={filteredItems}
            onImageClick={openLightbox}
          />

        </div>

      </div>

      <GalleryLightbox
        cart={filteredItems}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={closeLightbox}
        onPrevious={previousImage}
        onNext={nextImage}
      />

    </section>
  );
}