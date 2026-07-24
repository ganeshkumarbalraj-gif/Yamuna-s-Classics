import { Product } from "@/types";
import { CartItem, CartSummary } from "@/types/cart";

const STORAGE_KEY = "yamunas-classics-cart";
const CART_EVENT = "cartUpdated";

class CartService {
  private save(cart: CartItem[]) {
    if (typeof window === "undefined") return;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(cart)
    );

    window.dispatchEvent(
      new CustomEvent(CART_EVENT)
    );
  }

  getItems(): CartItem[] {
    if (typeof window === "undefined") {
      return [];
    }

    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      return [];
    }

    try {
      return JSON.parse(data) as CartItem[];
    } catch {
      return [];
    }
  }

  add(product: Product) {
    const cart = this.getItems();

    const existing = cart.find(
      (item) => item.product.id === product.id
    );

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        product,
        quantity: 1,
      });
    }

    this.save(cart);
  }

  remove(productId: string) {
    const cart = this.getItems().filter(
      (item) => item.product.id !== productId
    );

    this.save(cart);
  }

  increase(productId: string) {
    const cart = this.getItems();

    const item = cart.find(
      (i) => i.product.id === productId
    );

    if (item) {
      item.quantity++;
      this.save(cart);
    }
  }

  decrease(productId: string) {
    const cart = this.getItems();

    const item = cart.find(
      (i) => i.product.id === productId
    );

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {
      this.remove(productId);
      return;
    }

    this.save(cart);
  }

  clear() {
    this.save([]);
  }

  getSummary(): CartSummary {
    const cart = this.getItems();

    const subtotal = cart.reduce(
      (sum, item) =>
        sum +
        (item.product.price ?? 0) *
          item.quantity,
      0
    );

    const totalItems = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    const shipping =
      subtotal >= 1000 || subtotal === 0
        ? 0
        : 100;

    return {
      cart,
      subtotal,
      shipping,
      total: subtotal + shipping,
      totalItems,
    };
  }

  getCount() {
    return this.getSummary().totalItems;
  }

  getEventName() {
    return CART_EVENT;
  }
}

const cartService = new CartService();

export default cartService;