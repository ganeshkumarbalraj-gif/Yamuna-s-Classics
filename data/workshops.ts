export interface Workshop {
  id: string;
  title: string;
  slug: string;

  shortDescription: string;
  description: string;

  duration: string;
  level: string;

  image: string;

  featured: boolean;

  includes: string[];

  materialsProvided: boolean;

  certificate: boolean;

  ageGroup: string;
}

export const workshops: Workshop[] = [
  {
    id: "1",
    title: "Crochet for Beginners",
    slug: "crochet-for-beginners",

    shortDescription:
      "Learn crochet from scratch in a fun and interactive workshop.",

    description:
      "A beginner-friendly workshop covering crochet basics, stitches, reading patterns and creating your first beautiful projects.",

    duration: "5 Days",

    level: "Beginner",

    image: "/workshops/crochet.jpg",

    featured: true,

    includes: [
      "Basic Stitches",
      "Reading Patterns",
      "Hands-on Practice",
      "Mini Project"
    ],

    materialsProvided: true,

    certificate: true,

    ageGroup: "12+ Years",
  },

  {
    id: "2",
    title: "Embroidery Workshop",
    slug: "embroidery-workshop",

    shortDescription:
      "Master beautiful embroidery stitches and floral designs.",

    description:
      "Learn essential embroidery techniques, floral patterns and finishing methods suitable for beginners and hobbyists.",

    duration: "7 Days",

    level: "Intermediate",

    image: "/workshops/embroidery.jpg",

    featured: true,

    includes: [
      "Basic Stitches",
      "Floral Designs",
      "Hoop Finishing"
    ],

    materialsProvided: true,

    certificate: true,

    ageGroup: "12+ Years",
  },

  {
    id: "3",
    title: "Paper Craft Workshop",
    slug: "paper-craft-workshop",

    shortDescription:
      "Create handmade greeting cards and paper decorations.",

    description:
      "Explore creative paper crafting techniques suitable for festivals, gifts and home décor.",

    duration: "3 Days",

    level: "Beginner",

    image: "/gallery/paper1.jpg",

    featured: false,

    includes: [
      "Greeting Cards",
      "Paper Flowers",
      "Decorative Crafts"
    ],

    materialsProvided: true,

    certificate: false,

    ageGroup: "10+ Years",
  }
];