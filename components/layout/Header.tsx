"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import NavLink from "./NavLink";
import HeaderActions from "./HeaderActions";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Workshops", href: "/workshops" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-emerald-100 bg-white/90 shadow-lg backdrop-blur-xl"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <HeaderActions />

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="rounded-xl border border-gray-200 p-2 transition hover:bg-gray-100 lg:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <aside className="fixed right-0 top-0 z-50 flex h-screen w-80 flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b p-6">
              <Logo />

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg p-2 hover:bg-gray-100"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-2 p-6">
              {navigation.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => {
                    window.location.href = item.href;
                  }}
                  className="rounded-xl px-4 py-3 text-left text-lg font-medium transition hover:bg-emerald-50 hover:text-emerald-600"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </aside>
        </>
      )}
    </>
  );
}