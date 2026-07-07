import { notFound } from "next/navigation";

import { getProductBySlug, products } from "@/data/products";

import ProductDetails from "@/components/products/ProductDetails";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <ProductDetails product={product} />
    </main>
  );
}