import { BaseEntity } from "./common";

export interface GalleryItem extends BaseEntity {
  image: string;

  category: string;

  description?: string;
}