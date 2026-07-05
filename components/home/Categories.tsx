import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <h2 className="mb-3 text-4xl font-bold">
          Explore Our Collections
        </h2>

        <p className="mb-12 text-gray-600">
          Discover handcrafted products and creative workshops.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-4 text-5xl">
              {category.emoji}
            </div>

            <h3 className="mb-2 text-2xl font-semibold">
              {category.title}
            </h3>

            <p className="text-gray-600">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}