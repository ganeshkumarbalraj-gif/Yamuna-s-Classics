import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/products";
import WhatsAppButton from "@/components/common/WhatsAppButton";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-gradient-to-b from-pink-50 via-white to-sky-50">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-14 lg:grid-cols-2">

          {/* Product Image */}

          <div className="relative aspect-square overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-lg">

            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />

          </div>

          {/* Product Details */}

          <div>

            <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-700">
              {product.category}
            </span>

            <h1 className="mt-5 text-5xl font-bold text-gray-800">
              {product.name}
            </h1>

            <p className="mt-3 text-lg text-gray-600">
              {product.shortDescription}
            </p>

            <div className="mt-8">

              <p className="text-sm uppercase tracking-wide text-gray-500">
                Starting From
              </p>

              <p className="text-4xl font-bold text-purple-700">
                ₹ {product.price}
              </p>

            </div>

            <p className="mt-8 leading-8 text-gray-700">
              {product.description}
            </p>

            {/* Materials */}

            <div className="mt-10">

              <h2 className="mb-4 text-xl font-semibold">
                Materials
              </h2>

              <ul className="space-y-2">

                {product.materials.map((item) => (
                  <li key={item}>• {item}</li>
                ))}

              </ul>

            </div>

            {/* Colours */}

            <div className="mt-10">

              <h2 className="mb-4 text-xl font-semibold">
                Available Colours
              </h2>

              <div className="flex flex-wrap gap-2">

                {product.colours.map((colour) => (
                  <span
                    key={colour}
                    className="rounded-full bg-sky-100 px-4 py-2 text-sm text-sky-700"
                  >
                    {colour}
                  </span>
                ))}

              </div>

            </div>

            {/* Delivery */}

            <div className="mt-10 rounded-2xl bg-white p-6 shadow">

              <div className="space-y-3">

                <p>
                  <strong>Delivery:</strong> {product.deliveryTime}
                </p>

                <p>
                  <strong>Customisable:</strong>{" "}
                  {product.customizable ? "Yes" : "No"}
                </p>

              </div>

            </div>

            {/* Care */}

            <div className="mt-10">

              <h2 className="mb-4 text-xl font-semibold">
                Care Instructions
              </h2>

              <ul className="space-y-2">

                {product.careInstructions.map((item) => (
                  <li key={item}>• {item}</li>
                ))}

              </ul>

            </div>

            <div className="mt-12">

              <WhatsAppButton subject={product.name} />

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}