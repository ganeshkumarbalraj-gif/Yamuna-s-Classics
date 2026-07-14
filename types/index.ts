export * from "./common";

export interface Product {
  id: string;

  name: string;

  slug: string;

  category: string;

  shortDescription: string;

  description: string;

  price: number;

  images: string[];

  featured: boolean;

  bestSeller: boolean;

  newArrival: boolean;

  customizable: boolean;

  materials: string[];

  colours: string[];

  deliveryTime: string;

  careInstructions: string[];

  rating?: number;

  reviewCount?: number;

  stock?: "In Stock" | "Made to Order" | "Out of Stock";

  tags?: string[];

  // ===============================
  // Future Ready Fields
  // ===============================

  brand?: string;

  origin?: string;

  weight?: string;

  dimensions?: string;

  includes?: string[];

  warranty?: string;

  shipping?: string;
}
export * from "./product";
export * from "./workshop";
export * from "./gallery";
export * from "./testimonial";
export * from "./faq";