import { BaseEntity, SeoData } from "./common";

export interface Product extends BaseEntity {
  name: string;

  category: string;

  shortDescription: string;

  description: string;

  price?: number;

  images: string[];

  materials: string[];

  colours: string[];

  customizable: boolean;

  deliveryTime: string;

  careInstructions: string[];

  featured: boolean;

  bestSeller: boolean;

  newArrival: boolean;

  rating?: number;

  reviewCount?: number;

  stock?: "In Stock" | "Made to Order" | "Out of Stock";

  tags?: string[];

  brand?: string;

  origin?: string;

  weight?: string;

  dimensions?: string;

  includes?: string[];

  warranty?: string;

  shipping?: string;

  seo?: SeoData;
}

export * from "./common";
export * from "./product";
export * from "./workshop";
export * from "./gallery";
export * from "./testimonial";
export * from "./faq";
export * from "./review";