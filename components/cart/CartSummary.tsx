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
    "Hello Yamuna's Classics!",
    "",
    "I'd like to place an order:",
    "",
    ...items.map(
      (item) =>
        `• ${item.product.name} x ${item.quantity}`
    ),
    "",
    `Subtotal: ₹${subtotal.toLocaleString()}`,
    `Shipping: ₹${shipping.toLocaleString()}`,
    `Total: ₹${total.toLocaleString()}`,
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
          value={`₹${shipping.toLocaleString()}`}
        />

        <hr />

        <Row
          label="Total"
          value={`₹${total.toLocaleString()}`}
          bold
        />
      </div>

      <div className="mt-8 space-y-4">
        <Button
  href={getWhatsAppLink(orderMessage)}
  className="w-full"
>
  Order on WhatsApp
</Button>

        <Button
          type="button"
          variant="secondary"
          className="w-full"
          onClick={clear}
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