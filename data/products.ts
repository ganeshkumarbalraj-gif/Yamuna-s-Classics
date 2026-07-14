import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Crochet Flower Bouquet",
    slug: "crochet-flower-bouquet",
    category: "Crochet",

    shortDescription: "Beautiful everlasting crochet flower bouquet.",

    description:
      "Handcrafted crochet flower bouquet made with premium yarn. Perfect for birthdays, anniversaries, weddings and home décor. Each bouquet is carefully handmade and can be customised in different colours.",

    price: 899,

    images: [
      "/products/crochet/crochet-flower.jpg",
    ],

    featured: true,
    bestSeller: false,
newArrival: true,

    materials: [
      "Premium Cotton Yarn",
      "Floral Wrapping",
      "Ribbon"
    ],

    colours: [
      "Red",
      "Pink",
      "Yellow",
      "White",
      "Purple"
    ],

    deliveryTime: "5–7 Days",

    careInstructions: [
      "Keep away from water",
      "Dust gently with a soft brush",
      "Store in a dry place"
    ],

    customizable: true,
  },

  {
    id: "2",
    name: "Hand Embroidery Hoop",
    slug: "hand-embroidery-hoop",
    category: "Embroidery",

    shortDescription: "Elegant customised embroidery hoop.",

    description:
      "Beautiful floral embroidery hoops personalised with names, initials or inspirational quotes. Perfect as gifts and home décor.",

    price: 1299,

    images: [
      "/products/embroidery/embroidery-hoop.jpg",
    ],

    featured: true,
    bestSeller: false,
newArrival: true,

    materials: [
      "Cotton Fabric",
      "Wooden Hoop",
      "Embroidery Threads"
    ],

    colours: [
      "Custom Colours Available"
    ],

    deliveryTime: "7–10 Days",

    careInstructions: [
      "Avoid moisture",
      "Frame indoors only"
    ],

    customizable: true,
  },

  {
    id: "3",
    name: "Designer Mehendi",
    slug: "designer-mehendi",
    category: "Mehendi",

    shortDescription: "Traditional and Arabic mehendi designs.",

    description:
      "Professional mehendi designs for weddings, engagements, baby showers and festivals. Traditional, Arabic and bridal styles available.",

    price: 1499,

    images: [
      "/products/mehendi/mehendi.jpg",
    ],

    featured: true,
    bestSeller: false,
newArrival: true,

    materials: [
      "Natural Henna"
    ],

    colours: [
      "Natural"
    ],

    deliveryTime: "By Appointment",

    careInstructions: [
      "Follow after-care instructions provided during the session"
    ],

    customizable: true,
  },

  {
    id: "4",
    name: "Paper Craft Greeting Cards",
    slug: "paper-craft-greeting-cards",
    category: "Paper Craft",

    shortDescription: "Handmade greeting cards.",

    description:
      "Creative handmade greeting cards suitable for birthdays, anniversaries, weddings and festive celebrations.",

    price: 299,

    images: [
      "/products/paper-art/paper-craft.jpg",
    ],

    featured: false,
    bestSeller: true,
newArrival: false,

    materials: [
      "Premium Craft Paper",
      "Decorative Elements"
    ],

    colours: [
      "Various"
    ],

    deliveryTime: "3–5 Days",

    careInstructions: [
      "Keep dry"
    ],

    customizable: true,
  },

  {
    id: "5",
    name: "Customized Gift Hamper",
    slug: "customized-gift-hamper",
    category: "Gift Hampers",

    shortDescription: "Personalised gift hampers.",

    description:
      "Thoughtfully curated customised hampers for birthdays, weddings, festivals and corporate gifting.",

    price: 1999,

    images: [
      "/products/gift/gift-hamper.jpg",
    ],

    featured: true,
    bestSeller: false,
newArrival: true,

    materials: [
      "Premium Basket",
      "Decorative Wrapping",
      "Custom Contents"
    ],

    colours: [
      "Custom"
    ],

    deliveryTime: "5–7 Days",

    careInstructions: [
      "Handle carefully"
    ],

    customizable: true,
  },

  {
    id: "6",
    name: "Homemade Celebration Cakes",
    slug: "homemade-cakes",
    category: "Baking",

    shortDescription: "Freshly baked customised cakes.",

    description:
      "Fresh homemade cakes designed for birthdays, anniversaries and special occasions. Available in a variety of flavours and themes.",

    price: 1499,

    images: [
      "/products/baking/cake.jpg",
    ],

    featured: false,
    bestSeller: true,
newArrival: false,

    materials: [
      "Fresh Ingredients"
    ],

    colours: [
      "Theme Based"
    ],

    deliveryTime: "2–3 Days",

    careInstructions: [
      "Refrigerate after delivery"
    ],

    customizable: true,
  }
];