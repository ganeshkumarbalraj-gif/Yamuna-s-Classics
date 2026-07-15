"use client";

import Link from "next/link";

import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import useCart from "@/hooks/useCart";

export default function CartPage() {
  const { items } = useCart();

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-emerald-50">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-10 text-4xl font-bold text-gray-900 md:text-5xl">
          Shopping Cart
        </h1>

        {items.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">
              Your cart is empty
            </h2>

            <p className="mt-4 text-gray-600">
              Browse our handmade creations and add your favourite items.
            </p>

            <Link
              href="/products"
              className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-pink-500 to-emerald-500 px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              {items.map((item) => (
                <CartItem
                  key={item.product.id}
                  item={item}
                />
              ))}
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <CartSummary />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}