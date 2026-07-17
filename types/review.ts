export interface Review {
  id: string;
  productId: string;

  customerName: string;
  rating: number;

  title: string;
  comment: string;

  date: string;

  verified: boolean;

  avatar?: string;
}