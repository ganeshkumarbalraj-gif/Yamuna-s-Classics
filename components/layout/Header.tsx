import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo/yamunas-classics-logo.png"
            alt="Yamuna's Classics"
            width={60}
            height={60}
          />
          <div>
            <h1 className="text-2xl font-bold">Yamuna's Classics</h1>
            <p className="text-sm text-gray-500">
              Handmade with Love
            </p>
          </div>
        </div>

        <nav className="hidden gap-8 md:flex">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Workshops</a>
          <a href="#">Gallery</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}