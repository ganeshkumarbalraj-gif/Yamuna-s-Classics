import { Heart, Palette, GraduationCap, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Heart,
    title: "Handmade with Love",
    description: "Every creation is carefully handcrafted with attention to detail.",
  },
  {
    icon: Palette,
    title: "Creative Designs",
    description: "Unique gifts and crafts designed for every special occasion.",
  },
  {
    icon: GraduationCap,
    title: "Workshops & Classes",
    description: "Learn crochet, embroidery, paper crafts, baking and more.",
  },
  {
    icon: Sparkles,
    title: "Personalized Creations",
    description: "Custom-made products created especially for you.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-pink-600 font-semibold uppercase tracking-widest">
              About Us
            </p>

            <h2 className="mt-3 text-5xl font-bold">
              Welcome to Yamuna's Classics
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Yamuna's Classics celebrates creativity through handmade
              crafts, personalized gifts and inspiring workshops.
              Every product reflects passion, patience and craftsmanship,
              while every class is designed to help students discover the joy
              of creating something beautiful.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-pink-100 bg-pink-50 p-6 shadow-sm transition hover:shadow-lg"
                >
                  <Icon className="h-10 w-10 text-pink-600" />

                  <h3 className="mt-4 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}