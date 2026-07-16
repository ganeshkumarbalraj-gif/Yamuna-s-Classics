import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductSchema from "@/components/seo/ProductSchema";
import ProductGallery from "@/components/products/ProductGallery";
import ProductInfo from "@/components/products/ProductInfo";
import RelatedProducts from "@/components/products/RelatedProducts";

import ProductService from "@/services/ProductService";
import { site } from "@/data/site";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = ProductService.getBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  const url = `https://www.yamunasclassics.com/products/${product.slug}`;

  return {
    title: product.name,

    description: product.shortDescription,

    keywords: [
      product.name,
      product.category,
      "Handmade",
      "Crochet",
      "Embroidery",
      "Paper Crafts",
      "Customized Gifts",
      "Yamuna's Classics",
      "Chennai",
      "India",
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: product.name,
      description: product.shortDescription,
      url,
      siteName: site.name,
      type: "website",

      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.shortDescription,
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = ProductService.getBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-pink-50">
<ProductSchema product={product} />
      {/* Breadcrumb */}

      <section className="mx-auto max-w-7xl px-6 pt-10">

        <nav
          aria-label="Breadcrumb"
          className="text-sm text-gray-500"
        >
          <ol className="flex flex-wrap items-center">

            <li>Home</li>

            <li className="mx-2">/</li>

            <li>Products</li>

            <li className="mx-2">/</li>

            <li
              aria-current="page"
              className="font-medium text-gray-700"
            >
              {product.name}
            </li>

          </ol>
        </nav>

      </section>

      {/* Product */}

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-14 lg:grid-cols-2">

          <ProductGallery
  images={product.images}
  name={product.name}
/>

          <ProductInfo
            product={product}
          />

        </div>

      </section>

      {/* Related Products */}

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <RelatedProducts
          product={product}
        />

      </section>

    </main>
  );
}