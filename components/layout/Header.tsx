import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Workshops", href: "/workshops" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/yamunas-classics-logo.png"
            alt="Yamuna's Classics"
            width={60}
            height={60}
            priority
          />

          <div>
            <h1 className="text-2xl font-bold text-pink-700">
              Yamuna's Classics
            </h1>

            <p className="text-sm text-gray-500">
              Handmade with Love
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 transition hover:text-pink-600"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-xl bg-pink-600 px-5 py-2 text-white transition hover:bg-pink-700"
          >
            Enquire Now
          </Link>
        </nav>

      </div>
    </header>
  );
}