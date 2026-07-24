import Badge from "@/components/ui/Badge";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import WishlistButton from "@/components/common/WishlistButton";
import Button from "@/components/ui/Button";

import { Product } from "@/types";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({
  product,
}: ProductInfoProps) {
  return (
    <div className="space-y-10">

      {/* Category */}

      <Badge>
        {product.category}
      </Badge>

      {/* Product Name */}

      <div>

        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 lg:text-5xl">
          {product.name}
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          {product.shortDescription}
        </p>

      </div>

      {/* Price */}

      <div className="rounded-[32px] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
          Starting From
        </p>

        <p className="mt-3 text-5xl font-bold text-emerald-700">
          {product.price !== undefined
            ? `₹${product.price.toLocaleString()}`
            : "Price on Request"}
        </p>

        <p className="mt-4 text-sm text-gray-600">
          Handmade • Premium Quality • Made with Love
        </p>

      </div>

      {/* Product Features */}

      <div className="flex flex-wrap gap-3">

        <Badge>
          Handmade
        </Badge>

        {product.customizable && (
          <Badge variant="success">
            Customizable
          </Badge>
        )}

        <Badge variant="outline">
          Gift Ready
        </Badge>

      </div>

      {/* Description */}

      <div className="rounded-[32px] border border-gray-100 bg-white p-7 shadow-sm transition-all duration-500 hover:shadow-lg">

        <h2 className="mb-5 text-2xl font-bold text-gray-900">
          Product Description
        </h2>

        <p className="leading-8 text-gray-600">
          {product.description}
        </p>

      </div>

      {/* Delivery */}

      <div className="rounded-[32px] border border-emerald-100 bg-gradient-to-r from-emerald-50 to-white p-7 shadow-sm transition-all duration-500 hover:shadow-lg">

        <h3 className="text-xl font-bold text-emerald-700">
          Delivery Information
        </h3>

        <p className="mt-3 leading-8 text-gray-700">
          {product.deliveryTime}
        </p>

      </div>

      {/* Trust */}

      <div className="rounded-[32px] border border-gray-100 bg-white p-7 shadow-sm transition-all duration-500 hover:shadow-lg">

        <h3 className="mb-4 text-lg font-semibold text-gray-900">
  Why You&apos;ll Love It
</h3>

        <ul className="space-y-4 text-gray-700">

          <li className="flex cart-start gap-3">
            <span className="text-emerald-600">✓</span>
            Handmade with love and attention to every detail
          </li>

          <li className="flex cart-start gap-3">
            <span className="text-emerald-600">✓</span>
            Premium quality materials and craftsmanship
          </li>

          <li className="flex cart-start gap-3">
            <span className="text-emerald-600">✓</span>
            Secure ordering through WhatsApp
          </li>

          <li className="flex cart-start gap-3">
            <span className="text-emerald-600">✓</span>
            Personalization available on selected products
          </li>

          <li className="flex cart-start gap-3">
            <span className="text-emerald-600">✓</span>
            Beautifully packed and gift ready
          </li>

        </ul>

      </div>

      {/* Action Buttons */}

      <div className="grid gap-4 sm:grid-cols-2">

        <WhatsAppButton
          subject={product.name}
        />

        <Button
          href="/cart"
          variant="secondary"
        >
          Add to Cart
        </Button>

      </div>

      {/* Wishlist */}

      <div className="flex justify-center pt-2">

        <WishlistButton
          productId={product.id}
        />

      </div>

    </div>
  );
}