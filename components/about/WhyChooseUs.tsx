import { CheckCircle } from "lucide-react";

const items = [
  "100% Handmade & Customized Products",
  "High Quality Materials & Finishing",
  "Creative & Unique Designs",
  "Expert Training & Small Batch Sizes",
  "Friendly Guidance & Personal Attention",
  "Proudly Based in Chennai",
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">

      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose Us?
      </h2>

      <div className="space-y-5">

        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-4 text-lg"
          >
            <CheckCircle className="text-pink-600" />
            <span>{item}</span>
          </div>
        ))}

      </div>

    </section>
  );
}