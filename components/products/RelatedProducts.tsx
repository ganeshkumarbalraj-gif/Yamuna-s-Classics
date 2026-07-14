import ProductCard from "@/components/products/ProductCard";
import ProductService from "@/services/ProductService";
import { Product } from "@/types";

interface RelatedProductsProps {
  product: Product;
}

export default function RelatedProducts({
  product,
}: RelatedProductsProps) {
  const relatedProducts = ProductService.getRelated(
  product.category,
  product.id
);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-20">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Related Products
        </h2>

        <p className="mt-2 text-gray-600">
          You may also like these handcrafted creations.
        </p>

      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {relatedProducts.map((relatedProduct) => (
          <ProductCard
            key={relatedProduct.slug}
            product={relatedProduct}
          />
        ))}

      </div>

    </section>
  );
}