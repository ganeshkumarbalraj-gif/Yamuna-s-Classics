import { galleryItems } from "@/data/gallery";
import { GalleryItem } from "@/types/gallery";

class GalleryService {

  getAll(): GalleryItem[] {
    return galleryItems;
  }


  getFeatured(): GalleryItem[] {
    return galleryItems.filter(
      (item) => item.featured
    );
  }


  getBySlug(
    slug: string
  ): GalleryItem | undefined {
    return galleryItems.find(
      (item) => item.slug === slug
    );
  }


  getCategories(): string[] {

    return [
      ...new Set(
        galleryItems.map(
          (item) => item.category
        )
      ),
    ];

  }

}


const galleryService = new GalleryService();

export default galleryService;