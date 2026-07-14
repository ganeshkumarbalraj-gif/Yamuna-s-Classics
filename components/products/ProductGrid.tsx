import { Product } from "@/types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-gray-50 text-center">
        <h3 className="text-2xl font-semibold text-gray-700">
          No Products Found
        </h3>

        <p className="mt-3 max-w-md text-gray-500">
          We couldn&apos;t find any products matching your search.
          Please try another keyword or category.
        </p>
      </div>
    );
  }

  return (
    <section
      aria-label="Products"
      className="
        mt-10
        grid
        gap-8
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {products.map((product) => (
        <div
          key={product.slug}
          className="flex h-full transition duration-300 hover:scale-[1.01]"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </section>
  );
}