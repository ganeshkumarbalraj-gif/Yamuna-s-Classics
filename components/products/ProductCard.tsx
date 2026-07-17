"use client";

import Image from "next/image";

import { Product } from "@/types";
import { site } from "@/data/site";

import ProductBadge from "@/components/common/ProductBadge";
import StarRating from "@/components/common/StarRating";
import WishlistButton from "@/components/common/WishlistButton";
import Button from "@/components/ui/Button";

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
    <article className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Product Image */}

      <div className="relative aspect-square overflow-hidden">

        <Image
          src={image}
          alt={product.name}
          fill
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Wishlist */}

        <div className="absolute right-4 top-4 z-10">
          <WishlistButton productId={product.id} />
        </div>

        {/* Category */}

        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-gray-700 backdrop-blur">
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

      <div className="flex flex-1 flex-col p-7">

        <StarRating />

        <h3 className="mt-4 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-rose-600">
          {product.name}
        </h3>

        <p className="mt-4 flex-1 leading-7 text-gray-600">
          {product.shortDescription}
        </p>

        {/* Feature Badges */}

        <div className="mt-6 flex flex-wrap gap-2">

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

        <div className="my-7 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Price */}

        <div>

          <p className="text-sm uppercase tracking-wide text-gray-500">
            Starting From
          </p>

          <p className="mt-1 text-3xl font-bold text-rose-600">
            ₹
            {(product.price ?? 0).toLocaleString()}
          </p>

        </div>

        {/* Buttons */}

        <div className="mt-8 grid grid-cols-2 gap-3">

          <Button href={`/products/${product.slug}`}>
            View Details
          </Button>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-rose-500 bg-white px-5 py-3 font-semibold text-rose-600 transition-all duration-300 hover:-translate-y-1 hover:bg-rose-500 hover:text-white hover:shadow-xl"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </article>
  );
}