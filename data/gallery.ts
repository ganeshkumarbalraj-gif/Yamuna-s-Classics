import { GalleryItem } from "@/types/gallery";

export const galleryItems: GalleryItem[] = [
  {
    id: "crochet-bouquet",
    slug: "crochet-bouquet",
    name: "Crochet Bouquet",
    category: "Crochet",
    image: "/gallery/crochet1.jpg",
    description:
      "Beautiful handmade crochet bouquet created with care and creativity.",
    featured: true,
  },

  {
    id: "embroidery-hoop-art",
    slug: "embroidery-hoop-art",
    name: "Embroidery Hoop Art",
    category: "Embroidery",
    image: "/gallery/embroidery1.jpg",
    description:
      "Elegant embroidery artwork handcrafted with traditional techniques.",
    featured: true,
  },

  {
    id: "mehendi-design",
    slug: "mehendi-design",
    name: "Traditional Mehendi Design",
    category: "Mehendi",
    image: "/gallery/mehendi1.jpg",
    description:
      "Creative traditional mehendi patterns designed with precision.",
    featured: false,
  },

  {
    id: "paper-craft",
    slug: "paper-craft",
    name: "Paper Craft",
    category: "Creative Craft",
    image: "/gallery/paper1.jpg",
    description:
      "Unique handmade paper craft creations.",
    featured: false,
  },
];