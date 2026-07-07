import SectionTitle from "@/components/common/SectionTitle";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";

export default function FeaturedProducts() {
  const featured = products.filter((product) => product.featured);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Our Creations"
          title="Featured Handmade Collection"
          description="Each creation is lovingly handcrafted with creativity, patience and attention to every little detail."
        />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/products"
            className="rounded-xl border-2 border-purple-500 px-8 py-4 font-semibold text-purple-700 transition hover:bg-purple-50"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}