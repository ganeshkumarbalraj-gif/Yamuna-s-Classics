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

  seo?: SeoData;
}