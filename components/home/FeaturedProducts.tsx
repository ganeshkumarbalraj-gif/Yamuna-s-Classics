import Image from "next/image";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Featured Products</h2>
        <p className="mt-3 text-gray-600">
          A glimpse of our handcrafted creations.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-56 bg-gray-100">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <p className="text-sm text-pink-600">
                {product.category}
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                {product.name}
              </h3>

              <p className="mt-3 text-sm text-gray-600">
                {product.description}
              </p>

              <button className="mt-6 w-full rounded-full bg-pink-600 px-5 py-3 font-semibold text-white hover:bg-pink-700">
                Coming Soon
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}