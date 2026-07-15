"use client";

import Button from "@/components/ui/Button";
import useCart from "@/hooks/useCart";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function CartSummary() {
  const {
  items,
  totalItems,
  subtotal,
  shipping,
  total,
  clear,
} = useCart();

  const orderMessage = [
  "🌸 Hello Yamuna's Classics!",
  "",
  "I would like to enquire about these products:",
  "",
  ...items.map(
    (item) => `• ${item.product.name} × ${item.quantity}`
  ),
  "",
  `Subtotal: ₹${subtotal.toLocaleString()}`,
  `Shipping: ${
    shipping === 0
      ? "FREE"
      : `₹${shipping.toLocaleString()}`
  }`,
  `Total: ₹${total.toLocaleString()}`,
  "",
  "Please let me know:",
  "• Availability",
  "• Delivery time",
  "• Payment details",
  "",
  "Thank you!",
].join("\n");

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">
      <h2 className="mb-8 text-2xl font-bold">
        Order Summary
      </h2>

      <div className="space-y-4">
        <Row
          label="Items"
          value={totalItems.toString()}
        />

        <Row
          label="Subtotal"
          value={`₹${subtotal.toLocaleString()}`}
        />

        <Row
  label="Shipping"
  value={
    shipping === 0
      ? "FREE"
      : `₹${shipping.toLocaleString()}`
  }
/>

        <hr />

        <Row
          label="Total"
          value={`₹${total.toLocaleString()}`}
          bold
        />
      </div>
<div className="mt-6 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700">
  ✓ Handmade with care<br />
  ✓ Secure ordering via WhatsApp<br />
  ✓ Customization available for most products
</div>
      <div className="mt-8 space-y-4">
        <Button
  href={getWhatsAppLink(orderMessage)}
  external
  className="w-full"
>
  Order on WhatsApp
</Button>

        <Button
          type="button"
          variant="secondary"
          className="w-full"
          onClick={() => {
  if (confirm("Clear all items from your cart?")) {
    clear();
  }
}}
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

interface RowProps {
  label: string;
  value: string;
  bold?: boolean;
}

function Row({
  label,
  value,
  bold = false,
}: RowProps) {
  return (
    <div className="flex items-center justify-between">
      <span
        className={
          bold
            ? "text-lg font-bold"
            : "text-gray-600"
        }
      >
        {label}
      </span>

      <span
        className={
          bold
            ? "text-lg font-bold text-emerald-600"
            : "font-medium"
        }
      >
        {value}
      </span>
    </div>
  );
}