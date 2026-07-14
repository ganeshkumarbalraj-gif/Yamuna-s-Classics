interface SearchEmptyProps {
  query: string;
}

export default function SearchEmpty({
  query,
}: SearchEmptyProps) {
  return (
    <div className="rounded-2xl border border-dashed border-pink-200 bg-pink-50 py-16 text-center">

      <h2 className="text-2xl font-bold">
        No products found
      </h2>

      <p className="mt-3 text-gray-600">
        We couldn&apos;t find anything matching
      </p>

      <p className="mt-2 font-semibold text-pink-600">
        &quot;{query}&quot;
      </p>

    </div>
  );
}