const STORAGE_KEY = "yamunas-classics-wishlist";

const WISHLIST_EVENT = "wishlistUpdated";

class WishlistService {
  getItems(): string[] {
    if (typeof window === "undefined") {
      return [];
    }

    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return [];
    }

    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }

  save(cart: string[]) {
    if (typeof window === "undefined") return;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(cart)
    );

    window.dispatchEvent(
      new CustomEvent(WISHLIST_EVENT)
    );
  }

  isSaved(productId: string) {
    return this.getItems().includes(productId);
  }

  add(productId: string) {
    const cart = this.getItems();

    if (!cart.includes(productId)) {
      cart.push(productId);
      this.save(cart);
    }
  }

  remove(productId: string) {
    const cart = this.getItems().filter(
      (id) => id !== productId
    );

    this.save(cart);
  }

  toggle(productId: string) {
    if (this.isSaved(productId)) {
      this.remove(productId);
    } else {
      this.add(productId);
    }
  }

  count() {
    return this.getItems().length;
  }

  eventName() {
    return WISHLIST_EVENT;
  }
}

const wishlistService = new WishlistService();

export default wishlistService;