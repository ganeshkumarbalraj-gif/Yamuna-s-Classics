"use client";

import { useState } from "react";

import ProductGrid from "@/components/products/ProductGrid";
import ProductSearch from "@/components/products/ProductSearch";
import ProductFilters from "@/components/products/ProductFilters";

import ProductService from "@/services/ProductService";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = ProductService.getAll();
  const categories = ProductService.getCategories();

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const query = search.toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.shortDescription.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-pink-50">

      <section className="mx-auto max-w-7xl px-6 py-20">

        {/* Header */}

        <div className="text-center">

          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            Handmade Collection
          </span>

          <h1 className="mt-6 text-5xl font-bold text-gray-900">
            Our Handmade Products
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every creation at Yamuna&apos;s Classics is handmade with love,
            patience and attention to detail. Browse our collection and find
            something uniquely crafted for you or your loved ones.
          </p>

        </div>

        {/* Search */}

        <div className="mt-12">
          <ProductSearch
            value={search}
            onChange={setSearch}
          />
        </div>

        {/* Filters */}

        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Statistics */}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">

          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-pink-600">
              {filteredProducts.length}
            </span>{" "}
            product{filteredProducts.length !== 1 && "s"}
          </p>

          {selectedCategory !== "All" && (
            <button
              onClick={() => setSelectedCategory("All")}
              className="rounded-full border border-pink-300 px-4 py-2 text-sm font-medium text-pink-600 transition hover:bg-pink-50"
            >
              Clear Filter
            </button>
          )}

        </div>

        {/* Products */}

        <ProductGrid products={filteredProducts} />

      </section>

    </main>
  );
}