"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Workshops", href: "/workshops" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-pink-100 bg-white shadow-sm">
  <div className="mx-auto flex min-h-[110px] max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}

        <Link href="/" className="flex items-center">
          <Image
            src="/logo/yamunas-classics-logo.png"
            alt="Yamuna's Classics"
            width={320}
            height={120}
            priority
            className="h-auto w-[170px] lg:w-[210px]"
          />
        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition duration-300 ${
                  active
                    ? "text-pink-600"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}

        <Link
          href="/contact"
          className="hidden rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 lg:block"
        >
          Enquire Now
        </Link>
      </div>
    </header>
  );
}