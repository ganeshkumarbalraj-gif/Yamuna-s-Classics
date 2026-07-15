"use client";

import Link from "next/link";

import Logo from "@/components/common/Logo";
import CartIcon from "@/components/common/CartIcon";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="font-medium transition hover:text-emerald-600"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="font-medium transition hover:text-emerald-600"
          >
            About
          </Link>

          <Link
            href="/products"
            className="font-medium transition hover:text-emerald-600"
          >
            Products
          </Link>

          <Link
            href="/workshops"
            className="font-medium transition hover:text-emerald-600"
          >
            Workshops
          </Link>

          <Link
            href="/gallery"
            className="font-medium transition hover:text-emerald-600"
          >
            Gallery
          </Link>

          <Link
            href="/faq"
            className="font-medium transition hover:text-emerald-600"
          >
            FAQ
          </Link>

          <Link
            href="/contact"
            className="font-medium transition hover:text-emerald-600"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
  <CartIcon />

  <Link
    href="/contact"
    className="rounded-xl bg-gradient-to-r from-pink-500 to-emerald-500 px-5 py-2 font-semibold text-white transition hover:opacity-90"
  >
    Enquire
  </Link>
</div>
      </div>
    </header>
  );
}