"use client";

interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSearch({
  value,
  onChange,
}: ProductSearchProps) {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      {/* Search Icon */}
      <div className="pointer-events-none absolute inset-y-0 left-5 flex items-center">
        <svg
          className="h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0a7 7 0 0114 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search handmade products..."
        className="w-full rounded-2xl border border-purple-200 bg-white py-4 pl-14 pr-14 text-gray-700 shadow-sm outline-none transition-all duration-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}