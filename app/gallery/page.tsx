import type { Metadata } from "next";

import PageHeader from "@/components/layout/PageHeader";
import GallerySection from "@/components/gallery/GallerySection";

export const metadata: Metadata = {
  title: "Gallery | Yamuna's Classics",
  description:
    "Explore our handmade crochet, embroidery, paper crafts, mehendi, workshops and beautiful handcrafted creations.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        name="Gallery"
        subtitle="Discover handcrafted creations made with love, creativity and attention to every detail."
      />

      <main className="relative overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-emerald-50/30">

        {/* Decorative Background */}

        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-pink-100/30 blur-3xl" />

        <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-emerald-100/30 blur-3xl" />

        <div className="relative">

          <GallerySection />

        </div>

      </main>
    </>
  );
}