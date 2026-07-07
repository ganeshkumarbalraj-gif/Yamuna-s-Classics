import PageHeader from "@/components/layout/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Yamuna's Classics",
  description: "Learn more about Yamuna's Classics and our handmade creations.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="A showcase of handmade creations."
      />

      <main className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-lg text-gray-600">
          Gallery coming in the next step...
        </p>
      </main>
    </>
  );
}