import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-pink-50">

      {/* Decorative Blurs */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

        {/* Left Content */}

        <div>

          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            Handmade • Creative • Customised
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-800 lg:text-6xl">
            Beautiful Handmade Creations
            <span className="block text-purple-600">
              Crafted with Love
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Welcome to <strong>Yamuna's Classics</strong>, where creativity
            comes alive through handcrafted gifts, crochet, embroidery,
            customised hampers, baking and inspiring workshops.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/products"
              className="rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Explore Products
            </Link>

            <Link
              href="/workshops"
              className="rounded-xl border-2 border-purple-500 px-8 py-4 font-semibold text-purple-700 transition hover:bg-purple-50"
            >
              Join Workshops
            </Link>

          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-sm text-gray-600">

            <div>
              <p className="text-2xl font-bold text-purple-700">100%</p>
              Handmade
            </div>

            <div>
              <p className="text-2xl font-bold text-sky-700">Custom</p>
              Orders Welcome
            </div>

            <div>
              <p className="text-2xl font-bold text-pink-700">Workshops</p>
              For All Ages
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="relative">

          <div className="grid grid-cols-2 gap-5">

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/hero/crochet.jpg"
                alt="Crochet"
                width={500}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-5">

              <div className="overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/hero/embroidery.jpg"
                  alt="Embroidery"
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/hero/mehendi.jpg"
                  alt="Mehendi"
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}