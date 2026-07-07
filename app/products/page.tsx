import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import SectionTitle from "@/components/common/SectionTitle";

export default function ProductsPage() {
  return (
    <main className="bg-gradient-to-b from-pink-50 via-white to-sky-50">

      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <SectionTitle
            eyebrow="Handcrafted with Love"
            title="Our Complete Collection"
            description="Browse our handcrafted creations. Every product is carefully made with creativity, patience and attention to detail."
          />

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}