import PageHeader from "@/components/layout/PageHeader";
import GallerySection from "@/components/gallery/GallerySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Yamuna's Classics",

  description:
    "Explore our handmade crochet, embroidery, paper crafts, gift hampers, baking creations and custom handmade products.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        name="Gallery"
        subtitle="Explore our handmade creations and workshop memories."
      />

      <GallerySection />
    </>
  );
}