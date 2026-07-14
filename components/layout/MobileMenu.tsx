"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Workshops", href: "/workshops" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-80 bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-6 py-5">

          <h2 className="text-xl font-bold text-emerald-700">
            Menu
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-gray-100"
          >
            <X size={22} />
          </button>

        </div>

        <nav className="flex flex-col p-6">

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-xl px-4 py-4 text-lg font-medium text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/search"
            onClick={onClose}
            className="mt-6 rounded-xl border border-emerald-500 px-4 py-3 text-center font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            Search Products
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className="mt-4 rounded-xl bg-emerald-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-emerald-700"
          >
            Enquire Now
          </Link>

        </nav>
      </aside>
    </>
  );
}