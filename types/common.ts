export interface BaseEntity {
  id: string;

  slug: string;

  name?: string;

  featured: boolean;

  createdAt?: string;

  updatedAt?: string;
}

export interface SeoData {
  name?: string;

  description?: string;

  keywords?: string[];
}