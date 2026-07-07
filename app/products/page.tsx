import PageHeader from "@/components/layout/PageHeader";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/data/products";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Yamuna's Classics",
  description: "Learn more about Yamuna's Classics and our handmade creations.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our Products"
        subtitle="Discover handcrafted creations made with love."
      />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <ProductGrid products={products} />
       </main>
    </>
  );
}