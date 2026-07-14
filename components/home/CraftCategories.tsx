import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";

const crafts = [
  {
    name: "Crochet",
    description: "Handmade flowers, toys, bags and home décor.",
    href: "/products?category=crochet",
    color: "from-pink-500 to-rose-400",
    emoji: "🧶",
  },
  {
    name: "Embroidery",
    description: "Traditional and modern embroidery creations.",
    href: "/products?category=embroidery",
    color: "from-purple-500 to-fuchsia-500",
    emoji: "🪡",
  },
  {
    name: "Mehendi",
    description: "Elegant bridal and festive mehendi designs.",
    href: "/gallery?category=mehendi",
    color: "from-emerald-500 to-green-400",
    emoji: "🌿",
  },
  {
    name: "Paper Crafts",
    description: "Creative handmade paper decorations and gifts.",
    href: "/products?category=papercraft",
    color: "from-sky-500 to-cyan-400",
    emoji: "🎨",
  },
  {
    name: "Baking",
    description: "Homemade cakes, chocolates and festive treats.",
    href: "/products?category=baking",
    color: "from-orange-400 to-amber-400",
    emoji: "🍰",
  },
  {
    name: "Workshops",
    description: "Learn beautiful crafts from experienced instructors.",
    href: "/workshops",
    color: "from-indigo-500 to-sky-500",
    emoji: "🎓",
  },
];

export default function CraftCategories() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
  eyebrow="Explore"
  name="Our Creative World"
  description="Browse our handcrafted collections and discover workshops that celebrate creativity."
/>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {crafts.map((craft) => (
            <Link
              key={craft.name}
              href={craft.href}
              className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${craft.color} text-3xl shadow-lg`}
              >
                {craft.emoji}
              </div>

              <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                {craft.name}
              </h3>

              <p className="mb-6 text-gray-600">
                {craft.description}
              </p>

              <span className="font-semibold text-pink-600 group-hover:text-sky-600">
                Explore →
              </span>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}