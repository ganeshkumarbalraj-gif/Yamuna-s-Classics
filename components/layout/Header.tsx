"use client";

import Link from "next/link";

import Logo from "@/components/common/Logo";
import CartIcon from "@/components/common/CartIcon";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rose-100 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Logo />

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">

          <Link
            href="/"
            className="font-medium text-gray-700 transition-colors hover:text-rose-500"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="font-medium text-gray-700 transition-colors hover:text-rose-500"
          >
            About
          </Link>

          <Link
            href="/products"
            className="font-medium text-gray-700 transition-colors hover:text-rose-500"
          >
            Products
          </Link>

          <Link
            href="/workshops"
            className="font-medium text-gray-700 transition-colors hover:text-rose-500"
          >
            Workshops
          </Link>

          <Link
            href="/gallery"
            className="font-medium text-gray-700 transition-colors hover:text-rose-500"
          >
            Gallery
          </Link>

          <Link
            href="/faq"
            className="font-medium text-gray-700 transition-colors hover:text-rose-500"
          >
            FAQ
          </Link>

          <Link
            href="/contact"
            className="font-medium text-gray-700 transition-colors hover:text-rose-500"
          >
            Contact
          </Link>

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <CartIcon />

          <Link
            href="/contact"
            className="
              hidden
              rounded-xl
              bg-gradient-to-r
              from-rose-500
              to-pink-500
              px-6
              py-3
              font-semibold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:from-rose-600
              hover:to-pink-600
              hover:shadow-xl
              lg:inline-flex
            "
          >
            Enquire
          </Link>

          {/* Mobile Navigation */}

          <div className="lg:hidden">
            <MobileMenu />
          </div>

        </div>

      </div>
    </header>
  );
}