import { Product } from "@/types";

import ProductGallery from "@/components/products/ProductGallery";
import ProductInfo from "@/components/products/ProductInfo";
import ProductTabs from "@/components/products/ProductTabs";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
  return (
    <section className="space-y-24">

      {/* Main Product Layout */}

      <div className="grid cart-start gap-16 lg:grid-cols-[1.05fr_0.95fr]">

        <ProductGallery
          images={product.images}
          name={product.name}
        />

        <ProductInfo
          product={product}
        />

      </div>

      {/* Divider */}

      <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />

      {/* Product Tabs */}

      <ProductTabs
        product={product}
      />

    </section>
  );
}