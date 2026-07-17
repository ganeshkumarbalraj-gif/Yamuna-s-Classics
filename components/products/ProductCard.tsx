"use client";

import Image from "next/image";

import ProductBadge from "@/components/common/ProductBadge";
import StarRating from "@/components/common/StarRating";
import WishlistButton from "@/components/common/WishlistButton";
import Button from "@/components/ui/Button";

import { site } from "@/data/site";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const image =
    product.images.length > 0
      ? product.images[0]
      : "/images/placeholder-product.jpg";

  const whatsappMessage = encodeURIComponent(
    `Hello Yamuna's Classics! I'm interested in "${product.name}". Please share more details.`
  );

  const whatsappLink = `https://wa.me/${site.whatsapp.replace(
    /\D/g,
    ""
  )}?text=${whatsappMessage}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}

      <div className="relative aspect-square overflow-hidden bg-gray-100">

        <Image
          src={image}
          alt={product.name}
          fill
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        {/* Wishlist */}

        <div className="absolute right-4 top-4">
          <WishlistButton productId={product.id} />
        </div>

        {/* Category */}

        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-gray-700 shadow backdrop-blur">
          {product.category}
        </div>

        {/* Badges */}

        <div className="absolute left-4 top-4 flex flex-col gap-2">

          {product.featured && (
            <ProductBadge>
              Featured
            </ProductBadge>
          )}

          {product.bestSeller && (
            <ProductBadge>
              Best Seller
            </ProductBadge>
          )}

          {product.newArrival && (
            <ProductBadge>
              New Arrival
            </ProductBadge>
          )}

        </div>

      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-6">

        <StarRating />

        <h3 className="mt-4 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-emerald-600">
          {product.name}
        </h3>

        <p className="mt-4 flex-1 text-gray-600 leading-7">
          {product.shortDescription}
        </p>

        {/* Features */}

        <div className="mt-5 flex flex-wrap gap-2">

          <ProductBadge>
            Handmade
          </ProductBadge>

          {product.customizable && (
            <ProductBadge>
              Customizable
            </ProductBadge>
          )}

          <ProductBadge>
            Gift Ready
          </ProductBadge>

        </div>

        <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Price */}

        <div>

          <p className="text-sm text-gray-500">
            Starting From
          </p>

          <p className="mt-1 text-3xl font-bold text-emerald-600">
  {product.price !== undefined
    ? `₹${product.price.toLocaleString()}`
    : "Price on Request"}
</p>

        </div>

        {/* Buttons */}

        <div className="mt-8 space-y-3">

          <Button
            href={`/products/${product.slug}`}
            className="w-full"
          >
            View Details
          </Button>

          <Button
            href={whatsappLink}
            external
            variant="secondary"
            className="w-full"
          >
            WhatsApp Enquiry
          </Button>

        </div>

      </div>

    </article>
  );
}