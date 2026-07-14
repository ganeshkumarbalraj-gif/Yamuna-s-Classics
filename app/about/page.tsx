import Image from "next/image";
import Link from "next/link";
import { about } from "@/data/about";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-pink-50">

      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
            <Image
    src="/about/yamuna.jpg"
    alt="Founder Yamuna"
    loading="eager"
    width={500}
    height={600}
    className="w-full h-auto rounded-2xl"
/>
          </div>

          <div>

            <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
              About Yamuna&apos;s Classics
            </span>

            <h1 className="mt-6 text-5xl font-bold text-gray-800">
              {about.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {about.subtitle}
            </p>

            <div className="mt-10 whitespace-pre-line leading-8 text-gray-700">
              {about.story}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">

              <Link
                href="/products"
                className="rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 px-8 py-4 font-semibold text-white transition hover:opacity-90"
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

          </div>

        </div>
      </section>

      {/* Mission & Vision */}

      <section className="pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-purple-700">
              Our Mission
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              To create meaningful handmade products that bring happiness,
              inspire creativity and preserve the beauty of handcrafted art
              while sharing these skills through engaging workshops.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-sky-700">
              Our Vision
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              To become a trusted destination for handmade creations and
              creative learning, encouraging people of all ages to discover
              the joy of crafting.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}