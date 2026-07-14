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

  save(items: string[]) {
    if (typeof window === "undefined") return;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(items)
    );

    window.dispatchEvent(
      new CustomEvent(WISHLIST_EVENT)
    );
  }

  isSaved(productId: string) {
    return this.getItems().includes(productId);
  }

  add(productId: string) {
    const items = this.getItems();

    if (!items.includes(productId)) {
      items.push(productId);
      this.save(items);
    }
  }

  remove(productId: string) {
    const items = this.getItems().filter(
      (id) => id !== productId
    );

    this.save(items);
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