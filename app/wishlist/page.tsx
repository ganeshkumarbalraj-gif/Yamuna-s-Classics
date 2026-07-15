"use client";

import Link from "next/link";

export default function WishlistPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-emerald-50">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">
          My Wishlist
        </h1>

        <div className="rounded-3xl bg-white p-12 text-center shadow-lg">
          <h2 className="text-2xl font-semibold">
            Wishlist Coming Soon ❤️
          </h2>

          <p className="mt-4 text-gray-600">
            Save your favourite handmade creations and come back to them anytime.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-pink-500 to-emerald-500 px-8 py-4 font-semibold text-white transition hover:opacity-90"
          >
            Browse Products
          </Link>
        </div>
      </section>
    </main>
  );
}