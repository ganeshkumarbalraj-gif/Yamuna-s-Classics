import SectionTitle from "@/components/common/SectionTitle";
import ProductCard from "@/components/products/ProductCard";
import Button from "@/components/ui/Button";

import { products } from "@/data/products";

export default function FeaturedProducts() {
  const featured = products.filter((product) => product.featured);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24"
      aria-labelledby="featured-products-heading"
    >
      {/* Background Decorations */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-100/40 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Handcrafted Collection"
          name="Featured Handmade Creations"
          description="Every creation is lovingly handcrafted with creativity, patience, and attention to every little detail."
        />

        <h2 id="featured-products-heading" className="sr-only">
          Featured Handmade Products
        </h2>

        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button
            href="/products"
            variant="primary"
          >
            Explore All Products
          </Button>
        </div>
      </div>
    </section>
  );
}