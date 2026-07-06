import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Crochet Flower Bouquet",
    slug: "crochet-flower-bouquet",
    category: "Crochet",
    shortDescription: "Beautiful handmade crochet flower bouquet.",
    description:
      "A handcrafted bouquet made with premium yarn, perfect for birthdays, anniversaries and home décor.",
    images: ["/products/crochet-flower.jpg"],
    featured: true,
    inStock: true,
    tags: ["crochet", "flowers"],
    customizable: true,
    rating: 5,
    reviewCount: 12,
  },
  {
    id: "2",
    name: "Embroidery Hoop Art",
    slug: "embroidery-hoop-art",
    category: "Embroidery",
    shortDescription: "Elegant personalized embroidery artwork.",
    description:
      "Beautiful embroidery hoop art suitable for gifting and home decoration.",
    images: ["/products/embroidery.jpg"],
    featured: true,
    inStock: true,
    tags: ["embroidery"],
    customizable: true,
    rating: 5,
    reviewCount: 8,
  },
  {
    id: "3",
    name: "Handmade Gift Hamper",
    slug: "gift-hamper",
    category: "Gift",
    shortDescription: "Customized handmade gift hamper.",
    description:
      "Personalized handcrafted hamper for birthdays, weddings and special occasions.",
    images: ["/products/gift-hamper.jpg"],
    featured: true,
    inStock: true,
    tags: ["gift"],
    customizable: true,
    rating: 5,
    reviewCount: 20,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}