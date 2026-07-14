export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Arun B.",
    role: "Workshop Participant",
    image: "/testimonials/arun.jpg",
    rating: 5,
    review:
      "Yamuna&apos;s workshops are wonderful. I learned crochet from scratch and now create beautiful handmade gifts for my family.",
    featured: true,
  },
  {
    id: "2",
    name: "Lakshmi R.",
    role: "Happy Customer",
    image: "/testimonials/lakshmi.jpg",
    rating: 5,
    review:
      "The quality of the handmade products is exceptional. Every item is crafted with great care and attention to detail.",
    featured: true,
  },
  {
    id: "3",
    name: "Anita K.",
    role: "Craft Enthusiast",
    image: "/testimonials/anita.jpg",
    rating: 5,
    review:
      "The personalized gifts exceeded my expectations. Beautiful craftsmanship and timely delivery.",
    featured: false,
  },
];