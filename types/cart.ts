import { Product } from "./product";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartSummary {
  items: CartItem[];

  totalItems: number;

  subtotal: number;

  shipping: number;

  total: number;
}