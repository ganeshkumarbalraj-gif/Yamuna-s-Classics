export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;

  shortDescription: string;
  description: string;

  images: string[];

  price?: number;

  featured: boolean;

  inStock: boolean;

  tags: string[];
}