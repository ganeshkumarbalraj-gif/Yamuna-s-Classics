interface GalleryFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function GalleryFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: GalleryFiltersProps) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
            selectedCategory === category
              ? "bg-pink-600 text-white shadow-lg"
              : "bg-white text-gray-700 border border-gray-200 hover:border-pink-500 hover:text-pink-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}