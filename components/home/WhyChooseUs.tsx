import { Sparkles, HeartHandshake, GraduationCap, Gift } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

const features = [
  {
    icon: Sparkles,
    title: "Handcrafted Excellence",
    description:
      "Every creation is handmade with attention to detail and a passion for creativity.",
  },
  {
    icon: HeartHandshake,
    title: "Customised for You",
    description:
      "Products can be personalised to suit your occasion, colours and preferences.",
  },
  {
    icon: GraduationCap,
    title: "Creative Workshops",
    description:
      "Learn beautiful crafts through friendly, practical and enjoyable workshops.",
  },
  {
    icon: Gift,
    title: "Perfect for Gifting",
    description:
      "Unique handmade gifts that create lasting memories for every celebration.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-sky-50 via-white to-pink-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="Why Choose Us"
          title="Crafted with Passion, Shared with Love"
          description="Every product and workshop reflects creativity, quality and the joy of handmade artistry."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-pink-100 p-4 text-pink-600">
                  <Icon size={32} />
                </div>

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}