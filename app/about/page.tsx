import Image from "next/image";
import Link from "next/link";
import { about } from "@/data/about";

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-gradient-to-b from-rose-50 via-white to-sky-50">

      {/* Decorative Background */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-pink-100/30 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-emerald-100/30 blur-3xl" />

      {/* Hero */}

      <section className="relative py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

          {/* Image */}

          <div className="group">

            <div className="overflow-hidden rounded-[36px] shadow-2xl">

              <Image
                src="/about/yamuna.png"
                alt="Founder Yamuna"
                width={600}
                height={700}
                priority
                className="w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

          </div>

          {/* Content */}

          <div>

            <span className="rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-700">
              About Yamuna&apos;s Classics
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
              {about.name}
            </h1>

            <p className="mt-6 text-xl leading-9 text-gray-600">
              {about.subtitle}
            </p>

            <div className="mt-10 whitespace-pre-line leading-8 text-gray-700">
              {about.story}
            </div>

            {/* Statistics */}

            <div className="mt-12 grid grid-cols-3 gap-5">

              <div className="rounded-2xl bg-white p-6 shadow-lg">

                <h3 className="text-3xl font-bold text-emerald-600">
                  100+
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Handmade Gifts
                </p>

              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">

                <h3 className="text-3xl font-bold text-pink-600">
                  20+
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Happy Students
                </p>

              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">

                <h3 className="text-3xl font-bold text-sky-600">
                  5+
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Years Experience
                </p>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-4">

              <Link
                href="/products"
                className="rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl hover:from-emerald-700 hover:via-green-700 hover:to-green-600"
              >
                Explore Products
              </Link>

              <Link
                href="/workshops"
                className="rounded-xl border-2 border-pink-500 bg-white px-8 py-4 font-semibold text-pink-600 transition hover:-translate-y-1 hover:border-emerald-700 hover:bg-gradient-to-r hover:from-emerald-700 hover:via-green-700 hover:to-green-600 hover:text-white"
              >
                Join Workshops
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* Mission */}

      <section className="pb-24">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">

          <div className="rounded-[32px] bg-white p-10 shadow-xl">

            <h2 className="text-3xl font-bold text-pink-600">
              Our Mission
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              To create meaningful handmade products that inspire creativity,
              celebrate traditions and bring happiness into every home while
              teaching future generations the beauty of handcrafted art.
            </p>

          </div>

          <div className="rounded-[32px] bg-white p-10 shadow-xl">

            <h2 className="text-3xl font-bold text-emerald-600">
              Our Vision
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              To become one of India&apos;s most loved handmade craft brands,
              inspiring thousands of people to create beautiful handmade
              memories through creativity and learning.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}