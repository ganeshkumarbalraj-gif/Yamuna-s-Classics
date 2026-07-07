import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700">
          {product.category}
        </span>

        <h3 className="mt-4 text-2xl font-semibold">
          {product.name}
        </h3>
<div className="mt-3 flex flex-wrap gap-2">

  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700">
    Handmade
  </span>

  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
    Customisable
  </span>

</div>
        <p className="mt-3 text-gray-600 line-clamp-3">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <div>
  <p className="text-xs uppercase tracking-wide text-gray-500">
    Starting From
  </p>

  <p className="text-2xl font-bold text-purple-700">
    ₹ {product.price}
  </p>
</div>

          <Link
            href={`/products/${product.slug}`}
            className="rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 px-5 py-3 text-white transition hover:opacity-90"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}