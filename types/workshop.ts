import { BaseEntity, SeoData } from "./common";

export interface Workshop extends BaseEntity {
  name: string;

  shortDescription: string;

  description: string;

  duration: string;

  level: string;

  images: string[];

  includes: string[];

  materialsProvided: boolean;

  certificate: boolean;

  ageGroup: string;

  seo?: SeoData;
}