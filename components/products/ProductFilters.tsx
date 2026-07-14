"use client";

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) {
  return (
    <section className="mt-10">
      <div className="flex flex-wrap items-center justify-center gap-3">

        {categories.map((category) => {
          const active = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                active
                  ? "bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 text-white shadow-lg"
                  : "border border-purple-200 bg-white text-gray-700 hover:border-purple-400 hover:shadow-md"
              }`}
            >
              {category}
            </button>
          );
        })}

      </div>
    </section>
  );
}