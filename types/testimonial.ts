import { BaseEntity } from "./common";

export interface Testimonial extends BaseEntity {
  name: string;

  role: string;

  image: string;

  rating: number;

  review: string;
}