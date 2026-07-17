import SectionTitle from "@/components/common/SectionTitle";
import ProductCard from "@/components/products/ProductCard";
import Button from "@/components/ui/Button";

import { products } from "@/data/products";

export default function FeaturedProducts() {
  const featured = products.filter((product) => product.featured);

  return (
    <section
      aria-labelledby="featured-products-heading"
      className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-20"
    >
      {/* Decorative Background */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-pink-100/40 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="Handcrafted Collection"
          name="Featured Handmade Creations"
          description="Discover some of our most loved handmade creations, carefully crafted with creativity, passion, and attention to every detail."
        />

        <h2
          id="featured-products-heading"
          className="sr-only"
        >
          Featured Handmade Products
        </h2>

        {/* Products */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* CTA */}

        <div className="mt-16 flex flex-col items-center">

          <p className="mb-6 max-w-2xl text-center text-gray-600">
            Looking for something unique? Browse our complete collection
            of handcrafted gifts, home décor, crochet creations,
            embroidery, and personalized items.
          </p>

          <Button
            href="/products"
            className="px-8"
          >
            Explore All Products
          </Button>

        </div>

      </div>
    </section>
  );
}