import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import ProductGrid from "@/components/products/ProductGrid";
import WhatsAppButton from "@/components/common/WhatsAppButton";

import {
  getProductBySlug,
  products,
} from "@/data/products";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({
  params,
}: Props) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      {/* Breadcrumb */}

      <div className="mb-10 text-sm text-gray-500">
        <Link href="/">Home</Link>
        {" / "}
        <Link href="/products">Products</Link>
        {" / "}
        {product.name}
      </div>

      {/* Product */}

      <div className="grid lg:grid-cols-2 gap-14">

        <div className="relative h-[550px] rounded-3xl overflow-hidden border">

          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
          />

        </div>

        <div>

          <span className="inline-block rounded-full bg-pink-100 px-4 py-1 text-sm text-pink-700 font-medium">

            {product.category}

          </span>

          <h1 className="mt-5 text-5xl font-bold">

            {product.name}

          </h1>

          <div className="mt-4 flex gap-3 text-yellow-500">

            ⭐⭐⭐⭐⭐

            <span className="text-gray-500">

              ({product.reviewCount} Reviews)

            </span>

          </div>

          <p className="mt-8 leading-8 text-gray-600">

            {product.description}

          </p>

          <div className="mt-10 space-y-3">

            <p>✅ Handmade with Love</p>

            <p>✅ Custom Orders Accepted</p>

            <p>✅ Gift Wrapping Available</p>

            <p>✅ Made in India</p>

          </div>

          <div className="mt-10">

            <WhatsAppButton
              productName={product.name}
            />

          </div>

        </div>

      </div>

      {/* Related */}

      <section className="mt-24">

        <h2 className="text-3xl font-bold mb-8">

          Related Products

        </h2>

        <ProductGrid
          products={relatedProducts}
        />

      </section>

    </main>
  );
}