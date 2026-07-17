"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ShoppingCart,
  Heart,
  Phone,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Workshops", href: "/workshops" },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Menu Button */}

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-xl p-2 transition hover:bg-gray-100 lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>

      {/* Overlay */}

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setOpen(false)}
          />

          <aside className="fixed right-0 top-0 z-50 flex h-full w-80 max-w-[85vw] flex-col bg-white shadow-2xl">

            {/* Header */}

            <div className="flex items-center justify-between border-b p-5">

              <h2 className="text-xl font-bold text-emerald-700">
                Menu
              </h2>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

            </div>

            {/* Navigation */}

            <nav className="flex-1 px-5 py-6">

              <div className="space-y-2">

                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 font-medium transition hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    {item.name}
                  </Link>
                ))}

              </div>

            </nav>

            {/* Footer Actions */}

            <div className="border-t p-5">

              <div className="space-y-3">

                <Link
                  href="/wishlist"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl border p-3 transition hover:bg-gray-50"
                >
                  <Heart size={20} />
                  Wishlist
                </Link>

                <Link
                  href="/cart"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl border p-3 transition hover:bg-gray-50"
                >
                  <ShoppingCart size={20} />
                  Cart
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white transition hover:bg-emerald-700"
                >
                  <Phone size={18} />
                  Contact Us
                </Link>

              </div>

            </div>

          </aside>
        </>
      )}
    </>
  );
}