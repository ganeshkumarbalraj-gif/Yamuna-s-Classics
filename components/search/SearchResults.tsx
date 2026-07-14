import ProductCard from "@/components/products/ProductCard";
import SearchEmpty from "./SearchEmpty";

import { Product } from "@/types";

interface Props {
  products: Product[];
  query: string;
}

export default function SearchResults({
  products,
  query,
}: Props): React.JSX.Element {
  if (products.length === 0) {
    return <SearchEmpty query={query} />;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}