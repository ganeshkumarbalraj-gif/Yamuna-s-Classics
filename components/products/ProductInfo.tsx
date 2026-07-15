import {
  CheckCircle,
  Palette,
  Package,
  Truck,
  ShieldCheck,
  Sparkles,
  MessageCircle,
} from "lucide-react";

import WhatsAppButton from "@/components/common/WhatsAppButton";
import StarRating from "@/components/common/StarRating";
import { Product } from "@/types";
import CartButton from "@/components/common/CartButton";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({
  product,
}: ProductInfoProps) {
  return (
    <div className="space-y-8">

      {/* Rating */}

      <div className="flex items-center gap-3">

        <StarRating />

        <span className="text-sm text-gray-500">
          Loved by our customers
        </span>

      </div>

      {/* Title */}

      <div>

        <h1 className="text-4xl font-bold leading-tight text-gray-900">
          {product.name}
        </h1>

        <p className="mt-4 text-lg leading-8 text-gray-600">
          {product.shortDescription}
        </p>

      </div>

      {/* Price */}

      <div className="rounded-3xl bg-gradient-to-r from-pink-50 via-white to-emerald-50 p-6 shadow-sm">

        <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
          Starting Price
        </p>

        <h2 className="mt-2 bg-gradient-to-r from-pink-600 to-emerald-600 bg-clip-text text-5xl font-extrabold text-transparent">
          ₹{product.price}
        </h2>

      </div>

      {/* Highlights */}

      <div className="grid gap-4 sm:grid-cols-2">

        <Highlight
          icon={<Sparkles size={20} />}
          text="Handmade with Love"
        />

        {product.customizable && (
          <Highlight
            icon={<Palette size={20} />}
            text="Customizable"
          />
        )}

        <Highlight
          icon={<Package size={20} />}
          text="Gift Ready"
        />

        <Highlight
          icon={<ShieldCheck size={20} />}
          text="Premium Quality"
        />

      </div>

      {/* Description */}

      <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">

        <h3 className="mb-4 text-xl font-bold">
          About this Creation
        </h3>

        <p className="leading-8 text-gray-600">
          {product.description}
        </p>

      </div>

      {/* Colours */}

      {product.colours.length > 0 && (

        <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">

          <h3 className="mb-4 text-xl font-bold">
            Available Colours
          </h3>

          <div className="flex flex-wrap gap-3">

            {product.colours.map((colour) => (

              <span
                key={colour}
                className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700"
              >
                {colour}
              </span>

            ))}

          </div>

        </div>

      )}

      {/* Materials */}

      {product.materials.length > 0 && (

        <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">

          <h3 className="mb-4 text-xl font-bold">
            Materials Used
          </h3>

          <ul className="space-y-3">

            {product.materials.map((material) => (

              <li
                key={material}
                className="flex items-center gap-3"
              >
                <CheckCircle
                  size={18}
                  className="text-emerald-600"
                />

                <span>{material}</span>

              </li>

            ))}

          </ul>

        </div>

      )}

      {/* Delivery */}

      <div className="grid gap-5 md:grid-cols-2">

        <InfoCard
          icon={<Truck size={22} />}
          title="Delivery"
          value="Ships across India"
        />

        <InfoCard
          icon={<Package size={22} />}
          title="Packaging"
          value="Gift-ready packaging"
        />

      </div>

      {/* WhatsApp */}

      <div className="rounded-[2rem] bg-gradient-to-r from-emerald-500 to-emerald-600 p-8 text-white shadow-xl">

        <h3 className="text-2xl font-bold">
          Interested in this creation?
        </h3>

        <p className="mt-3 leading-7 text-emerald-50">
          We can customize colours, sizes and designs according to your
          preferences.
        </p>

        <div className="mt-6">
          <WhatsAppButton
            message={`Hello Yamuna&apos;s Classics! I'm interested in "${product.name}". Please share more details.`}
            className="w-full justify-center rounded-xl bg-white px-6 py-4 font-semibold text-emerald-700 hover:bg-emerald-50"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Enquire on WhatsApp
          </WhatsAppButton>
        </div>
<div className="mt-4">
  <CartButton
    product={product}
    className="w-full justify-center rounded-xl"
  />
</div>
      </div>

    </div>
  );
}

function Highlight({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="text-emerald-600">
        {icon}
      </div>

      <span className="font-medium">
        {text}
      </span>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

      <div className="mb-3 text-emerald-600">
        {icon}
      </div>

      <h4 className="font-semibold">
        {title}
      </h4>

      <p className="mt-2 text-gray-600">
        {value}
      </p>

    </div>
  );
}