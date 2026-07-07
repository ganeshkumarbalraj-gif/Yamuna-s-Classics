import { Heart, Gift, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Heart,
    number: "150+",
    label: "Handmade Creations",
  },
  {
    icon: Users,
    number: "500+",
    label: "Happy Students",
  },
  {
    icon: Gift,
    number: "100+",
    label: "Custom Orders",
  },
  {
    icon: Award,
    number: "5★",
    label: "Customer Rating",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index}>
              <Icon className="mx-auto h-12 w-12 text-pink-600 mb-4" />

              <h3 className="text-4xl font-bold">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}