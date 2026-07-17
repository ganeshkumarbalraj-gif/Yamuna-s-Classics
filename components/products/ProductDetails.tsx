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
    <section className="space-y-20">

      {/* Main Product Layout */}

      <div className="grid gap-16 lg:grid-cols-2">

        <ProductGallery
          images={product.images}
          name={product.name}
        />

        <ProductInfo
          product={product}
        />

      </div>

      {/* Product Details Tabs */}

      <ProductTabs
        product={product}
      />

    </section>
  );
}