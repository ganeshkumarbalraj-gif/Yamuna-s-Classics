"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Workshops", href: "/workshops" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-pink-100 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo/yamunas-classics-logo.png"
            alt="Yamuna's Classics"
            width={180}
            height={95}
            priority
            className="h-auto w-[150px] md:w-[180px]"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[15px] font-medium transition ${
                pathname === item.href
                  ? "text-pink-600"
                  : "text-gray-700 hover:text-sky-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* WhatsApp */}
        <Link
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
          target="_blank"
          className="rounded-xl bg-gradient-to-r from-pink-600 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
        >
          WhatsApp Us
        </Link>
      </div>
    </header>
  );
}