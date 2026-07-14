import { Product } from "@/types";
import { site } from "@/data/site";

interface ProductSchemaProps {
  product: Product;
}

export default function ProductSchema({
  product,
}: ProductSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "Product",

    name: product.name,

    image: product.images.map((image) =>
      image.startsWith("http")
        ? image
        : `https://www.yamunasclassics.com${image}`
    ),

    description: product.description,

    sku: product.id,

    brand: {
      "@type": "Brand",
      name: site.name,
    },

    category: product.category,

    offers: {
      "@type": "Offer",

      price: product.price,

      priceCurrency: "INR",

      availability:
        product.stock === "Out of Stock"
          ? "https://schema.org/OutOfStock"
          : "https://schema.org/InStock",

      seller: {
        "@type": "Organization",
        name: site.name,
      },

      url:
        `https://www.yamunasclassics.com/products/${product.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}