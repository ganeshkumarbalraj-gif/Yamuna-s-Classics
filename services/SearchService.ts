import ProductService from "./ProductService";
import { containsSearch } from "@/lib/search";

class SearchService {
  searchProducts(query: string) {
    if (!query.trim()) {
      return [];
    }

    return ProductService.getAll().filter((product) => {
      return (
        containsSearch(product.name, query) ||
        containsSearch(product.category, query) ||
        containsSearch(product.shortDescription, query) ||
        containsSearch(product.description, query) ||
        containsSearch(product.materials, query) ||
        containsSearch(product.colours, query) 
      );
    });
  }
}

const searchService = new SearchService();

export default searchService;