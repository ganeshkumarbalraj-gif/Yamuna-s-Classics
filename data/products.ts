export type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  featured: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Elegant Crochet Basket",
    category: "Crochet",
    image: "/images/products/crochet-basket.jpg",
    description: "Beautiful handmade crochet storage basket.",
    featured: true,
  },
  {
    id: 2,
    name: "Designer Embroidery Hoop",
    category: "Embroidery",
    image: "/images/products/embroidery-hoop.jpg",
    description: "Modern floral embroidery artwork.",
    featured: true,
  },
  {
    id: 3,
    name: "Festive Mehendi Design",
    category: "Mehendi",
    image: "/images/products/mehendi.jpg",
    description: "Traditional bridal and festive mehendi.",
    featured: true,
  },
  {
    id: 4,
    name: "Creative Paper Flowers",
    category: "Paper Craft",
    image: "/images/products/paper-flowers.jpg",
    description: "Decorative handcrafted paper flowers.",
    featured: true,
  },
];