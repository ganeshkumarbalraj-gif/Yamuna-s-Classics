"use client";

import Link from "next/link";
import CartIcon from "@/components/common/CartIcon";
import Logo from "@/components/common/Logo";
import MobileMenu from "@/components/layout/MobileMenu";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/workshops", label: "Workshops" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Logo />

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative font-medium text-gray-700 transition duration-300 hover:text-emerald-600 after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-emerald-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-3">

  {/* Cart - Visible on all devices */}

  <CartIcon />

  {/* Desktop Enquire Button */}

  <Link
    href="/contact"
    className="hidden rounded-xl bg-emerald-600 px-5 py-2 font-semibold text-white transition-all duration-300 hover:bg-emerald-700 lg:inline-flex"
  >
    Enquire
  </Link>

  {/* Mobile Menu */}

  <MobileMenu />

</div>
      </div>
    </header>
  );
}