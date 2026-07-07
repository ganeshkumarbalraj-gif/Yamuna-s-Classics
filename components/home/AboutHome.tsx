import Link from "next/link";

export default function AboutHome() {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-pink-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-14 lg:grid-cols-2">

          {/* Left Side */}
          <div>

            <p className="mb-3 text-lg font-semibold text-pink-600">
              About Us
            </p>

            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              Every Creation Begins with Passion
            </h2>

            <p className="mb-6 text-lg leading-8 text-gray-700">
              Yamuna's Classics is a creative studio dedicated to preserving
              the beauty of handmade craftsmanship. From crochet and embroidery
              to mehendi, paper crafts and baking, every creation is designed
              with care, patience and love.
            </p>

            <p className="mb-8 text-lg leading-8 text-gray-700">
              Beyond handcrafted products, we inspire creativity through
              workshops that encourage learners of all ages to discover the
              joy of making something beautiful with their own hands.
            </p>

            <Link
              href="/about"
              className="rounded-xl bg-pink-600 px-7 py-4 font-semibold text-white transition hover:bg-pink-700"
            >
              Read Our Story
            </Link>

          </div>

          {/* Right Side */}
          <div className="grid gap-6">

            <div className="rounded-3xl bg-white p-7 shadow-md">
              <h3 className="mb-3 text-2xl font-semibold text-purple-700">
                🌸 Our Mission
              </h3>

              <p className="text-gray-600">
                To celebrate creativity by crafting meaningful handmade products
                while sharing traditional skills through engaging workshops.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-md">
              <h3 className="mb-3 text-2xl font-semibold text-sky-700">
                🌍 Our Vision
              </h3>

              <p className="text-gray-600">
                To become a trusted destination where handmade artistry inspires
                creativity, learning and joyful gifting.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-md">
              <h3 className="mb-3 text-2xl font-semibold text-pink-700">
                ❤️ Our Motto
              </h3>

              <p className="italic text-gray-600">
                "Handmade with Love, Crafted with Passion."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}