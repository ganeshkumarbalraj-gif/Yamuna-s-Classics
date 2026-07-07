import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-sky-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div>

          <p className="mb-3 text-lg font-semibold text-pink-600">
            Welcome to
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900">
            Yamuna's Classics
          </h1>

          <p className="mb-8 text-lg leading-8 text-gray-600">
            Where every handmade creation tells a story.
            Discover beautiful crochet creations, embroidery,
            mehendi artistry, paper crafts, baking and inspiring
            creative workshops.
          </p>

          <div className="flex flex-wrap gap-4">

            <Link
              href="/products"
              className="rounded-xl bg-pink-600 px-8 py-4 font-semibold text-white transition hover:bg-pink-700"
            >
              Explore Products
            </Link>

            <Link
              href="/workshops"
              className="rounded-xl border-2 border-purple-500 px-8 py-4 font-semibold text-purple-600 transition hover:bg-purple-50"
            >
              Join Workshops
            </Link>

          </div>

          {/* Categories */}

          <div className="mt-10 flex flex-wrap gap-3">

            {[
              "Crochet",
              "Embroidery",
              "Mehendi",
              "Paper Crafts",
              "Baking",
              "Workshops",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-5 py-2 shadow-md text-gray-700"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative">

          <div className="grid grid-cols-2 gap-5">

            <Image
              src="/hero/crochet.jpg"
              alt="Crochet"
              width={500}
              height={500}
              className="rounded-3xl object-cover shadow-xl"
            />

            <Image
              src="/hero/embroidery.jpg"
              alt="Embroidery"
              width={500}
              height={500}
              className="mt-10 rounded-3xl object-cover shadow-xl"
            />

            <Image
              src="/hero/mehendi.jpg"
              alt="Mehendi"
              width={500}
              height={500}
              className="-mt-8 rounded-3xl object-cover shadow-xl"
            />

            <Image
              src="/hero/papercraft.jpg"
              alt="Paper Craft"
              width={500}
              height={500}
              className="rounded-3xl object-cover shadow-xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}