import { products } from "@/data/products";

class ProductService {
  getAll() {
    return products;
  }

  getFeatured() {
    return products.filter((p) => p.featured);
  }

  getBestSellers() {
    return products.filter((p) => p.bestSeller);
  }

  getNewArrivals() {
    return products.filter((p) => p.newArrival);
  }

  getBySlug(slug: string) {
    return products.find((p) => p.slug === slug);
  }

  getRelated(category: string, currentId: string) {
    return products
      .filter(
        (p) =>
          p.category === category &&
          p.id !== currentId
      )
      .slice(0, 4);
  }

  getCategories() {
    return [
      ...new Set(products.map((p) => p.category)),
    ];
  }
}

const productService = new ProductService();

export default productService;