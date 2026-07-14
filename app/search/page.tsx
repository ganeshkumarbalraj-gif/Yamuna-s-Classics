"use client";

import PageHeader from "@/components/layout/PageHeader";
import SearchBar from "@/components/search/SearchBar";
import SearchResults from "@/components/search/SearchResults";
import useSearch from "@/hooks/useSearch";

export default function SearchPage() {
  const {
    query,
    setQuery,
    clear,
    results,
    isSearching,
  } = useSearch();

  return (
    <>
      <PageHeader
        name="Search"
        subtitle="Find your favourite handmade creations."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SearchBar
          value={query}
          onChange={setQuery}
          onClear={clear}
        />

        {/* Quick Search */}
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Crochet",
            "Bouquet",
            "Gift",
            "Embroidery",
            "Keychain",
          ].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setQuery(item)}
              className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-700 transition hover:bg-pink-200"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Search Result Count */}
        {isSearching && (
          <p className="mt-6 text-gray-600">
            {results.length} product
            {results.length !== 1 ? "s" : ""} found
          </p>
        )}

        {/* Search Results */}
        <div className="mt-10">
  <SearchResults
    products={results}
    query={query}
  />
</div>
      </section>
    </>
  );
}