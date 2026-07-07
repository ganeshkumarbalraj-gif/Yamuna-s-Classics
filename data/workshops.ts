import { Workshop } from "@/types/workshop";

export const workshops: Workshop[] = [
  {
    id: "1",
    title: "Crochet for Beginners",
    slug: "crochet-for-beginners",
    description:
      "Learn crochet from scratch in an enjoyable hands-on workshop.",
    image: "/workshops/crochet.jpg",
    duration: "3 Hours",
    level: "Beginner",
    mode: "Offline",
    seats: 15,
    featured: true,
  },
  {
    id: "2",
    title: "Embroidery Basics",
    slug: "embroidery-basics",
    description:
      "Discover beautiful embroidery techniques and stitches.",
    image: "/workshops/embroidery.jpg",
    duration: "4 Hours",
    level: "Beginner",
    mode: "Offline",
    seats: 20,
    featured: true,
  },
];

export function getWorkshopBySlug(slug: string) {
  return workshops.find((workshop) => workshop.slug === slug);
}