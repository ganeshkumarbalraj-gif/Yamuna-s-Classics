import Image from "next/image";
import Badge from "@/components/ui/Badge";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Product } from "@/types";

type Props = {
  product: Product;
};

export default function ProductDetails({ product }: Props) {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      {/* Product Image */}
      <div>
        <Image
          src={product.images[0]}
          alt={product.name}
          width={700}
          height={700}
          className="w-full rounded-2xl object-cover shadow-lg"
        />
      </div>

      {/* Product Details */}
      <div className="space-y-6">
        <Badge>{product.category}</Badge>

        <h1 className="text-4xl font-bold">
          {product.name}
        </h1>

        <p className="text-gray-600 leading-8">
          {product.description}
        </p>

        <div className="text-3xl font-bold text-pink-600">
          ₹ {product.price}
        </div>

        <div className="flex flex-wrap gap-3">
          {product.customizable && (
            <Badge variant="secondary">
              Customizable
            </Badge>
          )}
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">
            Materials
          </h3>

          <ul className="list-inside list-disc space-y-1 text-gray-600">
            {product.materials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">
            Available Colours
          </h3>

          <div className="flex flex-wrap gap-2">
            {product.colours.map((colour) => (
              <Badge key={colour} variant="outline">
                {colour}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">
            Delivery Time
          </h3>

          <p>{product.deliveryTime}</p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">
            Care Instructions
          </h3>

          <ul className="list-inside list-disc space-y-1 text-gray-600">
            {product.careInstructions.map((instruction) => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ul>
        </div>

        <div className="pt-6">
          <WhatsAppButton subject={product.name} />
        </div>
      </div>
    </div>
  );
}