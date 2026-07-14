"use client";

import { MessageCircle } from "lucide-react";
import { Product } from "@/types";
import { site } from "@/data/site";

interface WhatsAppOrderBoxProps {
  product: Product;
}

export default function WhatsAppOrderBox({
  product,
}: WhatsAppOrderBoxProps) {
  const message = `Hello Yamuna&apos;s Classics! I'm interested in your ${product.name} and would like to know more details.,

Could you please share:

• Available colours
• Delivery timeline
• Customization options

Thank you.`;

  const url = `https://wa.me/${site.whatsapp.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(message)}`;

  return (
    <div className="rounded-2xl border border-green-200 bg-green-50 p-6">

      <h3 className="text-xl font-bold">
        Interested in this product?
      </h3>

      <p className="mt-2 text-gray-600">
        Contact us directly on WhatsApp for
        pricing, customization and delivery.
      </p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700"
      >
        <MessageCircle size={22} />

        Order on WhatsApp
      </a>
    </div>
  );
}