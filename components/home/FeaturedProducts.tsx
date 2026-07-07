import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import SectionTitle from "@/components/common/SectionTitle";

export default function FeaturedProducts() {
  const featured = products.slice(0, 3);

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

            <div
              key={product.slug}
              className="overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 hover:scale-110"
                />

              </div>

              <div className="p-7">

                <span className="rounded-full bg-pink-100 px-4 py-1 text-sm font-medium text-pink-700">
                  {product.category}
                </span>

                <h3 className="mt-5 text-2xl font-semibold">
                  {product.name}
                </h3>

                <p className="mt-4 text-gray-600">
                  {product.description.length > 120
                    ? product.description.substring(0, 120) + "..."
                    : product.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-xl font-bold text-purple-700">
                    ₹ {product.price}
                  </span>

                  <Link
                    href={`/products/${product.slug}`}
                    className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-3 text-white transition hover:opacity-90"
                  >
                    View Details
                  </Link>

                </div>

              </div>

            </div>

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