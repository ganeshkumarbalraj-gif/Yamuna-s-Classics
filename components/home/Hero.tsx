export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-pink-50 to-yellow-50">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="mb-6 text-6xl font-bold">
          Handcrafted with Love
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
          Beautiful handmade creations, creative workshops, and unique gifts
          crafted with passion.
        </p>

        <div className="flex justify-center gap-4">
          <button className="rounded-full bg-pink-600 px-8 py-4 font-semibold text-white hover:bg-pink-700">
            Explore Products
          </button>

          <button className="rounded-full border border-pink-600 px-8 py-4 font-semibold text-pink-600 hover:bg-pink-50">
            Join Workshops
          </button>
        </div>
      </div>
    </section>
  );
}