import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductDetails({ product }: Props) {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div>
        <Image
          src={product.images[0]}
          alt={product.name}
          width={700}
          height={700}
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

      <div className="space-y-6">
        <Badge>{product.category}</Badge>

        <h1 className="text-4xl font-bold">
          {product.name}
        </h1>

        <p className="text-gray-600 leading-8">
          {product.description}
        </p>

        <div className="flex gap-3 flex-wrap">
          {product.customizable && (
            <Badge variant="secondary">
              Customizable
            </Badge>
          )}

          {product.inStock ? (
            <Badge className="bg-green-600">
              In Stock
            </Badge>
          ) : (
            <Badge variant="destructive">
              Out of Stock
            </Badge>
          )}
        </div>

        <div className="pt-6">
          <WhatsAppButton subject={product.name} />
        </div>
      </div>
    </div>
  );
}