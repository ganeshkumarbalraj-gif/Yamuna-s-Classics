"use client";

import { useEffect, useMemo, useState } from "react";
import SearchService from "@/services/SearchService";

export default function useSearch() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce typing (300ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const results = useMemo(() => {
    return SearchService.searchProducts(debouncedQuery);
  }, [debouncedQuery]);

  const clear = () => {
    setQuery("");
    setDebouncedQuery("");
  };

  return {
    query,
    setQuery,
    clear,
    results,
    hasResults: results.length > 0,
    isSearching: debouncedQuery.trim().length > 0,
  };
}