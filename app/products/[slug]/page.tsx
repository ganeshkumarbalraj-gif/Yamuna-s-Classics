import { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductDetails from "@/components/products/ProductDetails";
import ProductReviews from "@/components/products/ProductReviews";
import RelatedProducts from "@/components/products/RelatedProducts";

import { products } from "@/data/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find(
    (p) => p.slug === slug
  );

  if (!product) {
    return {
      title: "Product Not Found | Yamuna's Classics",
    };
  }

  return {
    title: `${product.name} | Yamuna's Classics`,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: product.images,
    },
  };
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find(
    (p) => p.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:py-16">

      {/* Product */}

      <ProductDetails product={product} />

      {/* Reviews */}

      <section className="mt-20">
        <ProductReviews
          productId={product.id}
        />
      </section>

      {/* Related Products */}

      <section className="mt-20">
        <RelatedProducts
          currentProduct={product}
        />
      </section>

    </main>
  );
}