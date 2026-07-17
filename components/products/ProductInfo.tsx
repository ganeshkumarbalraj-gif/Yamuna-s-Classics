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
    <div className="space-y-8">

      {/* Category */}

      <Badge>
        {product.category}
      </Badge>

      {/* Product Name */}

      <div>

        <h1 className="text-4xl font-bold text-gray-900">
          {product.name}
        </h1>

        <p className="mt-3 leading-8 text-gray-600">
          {product.shortDescription}
        </p>

      </div>

      {/* Price */}

      <div>

        <p className="text-sm text-gray-500">
          Starting From
        </p>

        <p className="mt-2 text-4xl font-bold text-emerald-600">
          {product.price !== undefined
            ? `₹${product.price.toLocaleString()}`
            : "Price on Request"}
        </p>

      </div>

      {/* Product Badges */}

      <div className="flex flex-wrap gap-3">

        <Badge>
          Handmade
        </Badge>

        {product.customizable && (
          <Badge variant="secondary">
            Customizable
          </Badge>
        )}

        <Badge variant="outline">
          Gift Ready
        </Badge>

      </div>

      {/* Description */}

      <div>

        <h2 className="mb-3 text-xl font-semibold">
          Description
        </h2>

        <p className="leading-8 text-gray-600">
          {product.description}
        </p>

      </div>

      {/* Delivery */}

      <div className="rounded-2xl bg-emerald-50 p-5">

        <h3 className="font-semibold text-emerald-700">
          Delivery Information
        </h3>

        <p className="mt-2 text-sm text-gray-700">
          {product.deliveryTime}
        </p>

      </div>

      {/* Trust Section */}

      <div className="rounded-2xl border border-gray-100 bg-white p-6">

        <ul className="space-y-3 text-sm text-gray-700">

          <li>✓ Handmade with care</li>

          <li>✓ Secure WhatsApp ordering</li>

          <li>✓ Quality craftsmanship</li>

          <li>✓ Custom orders available</li>

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

      <div className="flex justify-center">

        <WishlistButton
          productId={product.id}
        />

      </div>

    </div>
  );
}