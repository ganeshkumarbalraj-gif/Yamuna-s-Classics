import { Product } from "@/types/product";
import { products } from "@/data/products";

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getAllProducts(): Product[] {
  return products;
}