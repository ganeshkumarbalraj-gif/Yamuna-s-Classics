export interface Workshop {
  id: string;
  title: string;
  slug: string;
  description: string;

  image: string;

  duration: string;

  level: "Beginner" | "Intermediate" | "Advanced";

  mode: "Online" | "Offline";

  seats: number;

  featured: boolean;
}