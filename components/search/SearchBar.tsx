"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export default function SearchBar({
  value,
  onChange,
  onClear,
}: SearchBarProps) {
  return (
    <div className="relative w-full">

      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />

      <input
        type="text"
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Search handmade products..."
        className="w-full rounded-2xl border border-pink-200 bg-white py-4 pl-12 pr-12 shadow-sm outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
      />

      {value && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-pink-600"
        >
          <X size={20} />
        </button>
      )}

    </div>
  );
}