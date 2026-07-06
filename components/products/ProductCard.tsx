import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 w-full">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <span className="text-sm font-medium text-pink-600">
          {product.category}
        </span>

        <h3 className="mt-2 text-2xl font-semibold">
          {product.name}
        </h3>

        <p className="mt-3 text-gray-600">
          {product.shortDescription}
        </p>

        <Link
          href={`/products/${product.slug}`}
          className="mt-6 inline-block rounded-xl bg-pink-600 px-5 py-3 text-white transition hover:bg-pink-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}