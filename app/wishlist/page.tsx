import Link from "next/link";

import WishlistGrid from "@/components/wishlist/WishlistGrid";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "My Wishlist | Yamuna's Classics",
  description:
    "Your favourite handmade creations saved for later.",
};

export default function WishlistPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-emerald-50">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              My Wishlist ❤️
            </h1>

            <p className="mt-3 text-lg text-gray-600">
              Save your favourite handmade creations and come back to them anytime.
            </p>
          </div>

          <Button href="/products">
            Continue Shopping
          </Button>
        </div>

        <WishlistGrid />

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-pink-500 to-emerald-500 p-10 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold">
            Handmade with Love
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Every creation at Yamuna&apos;s Classics is handcrafted with care,
creativity, and attention to detail. Thank you for supporting
handmade art.   
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-pink-600 transition hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}