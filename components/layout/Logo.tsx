import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Go to Yamuna's Classics home page"
      className="group flex items-center gap-4"
    >
      <div className="overflow-hidden rounded-2xl bg-white p-1 shadow-md transition-all duration-300 group-hover:shadow-xl">
        <Image
          src="/logo/yamunas-classics-logo.png"
          alt="Yamuna's Classics Logo"
          width={70}
          height={70}
          priority
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="hidden sm:block">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-emerald-600">
          Yamuna&apos;s Classics
        </h1>

        <p className="text-sm uppercase tracking-[0.2em] text-emerald-600">
          Handmade with Love
        </p>
      </div>
    </Link>
  );
}