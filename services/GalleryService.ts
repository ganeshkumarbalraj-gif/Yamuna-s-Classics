import { gallery } from "@/data/gallery";

class GalleryService {
  getAll() {
    return gallery;
  }

  getFeatured() {
    return gallery.filter((g) => g.featured);
  }

  getByCategory(category: string) {
    if (category === "All") {
      return gallery;
    }

    return gallery.filter((g) => g.category === category);
  }

  getCategories() {
    return [
      "All",
      ...new Set(gallery.map((g) => g.category)),
    ];
  }

  getBySlug(slug: string) {
    return gallery.find((g) => g.slug === slug);
  }
}

const galleryService = new GalleryService();

export default galleryService;