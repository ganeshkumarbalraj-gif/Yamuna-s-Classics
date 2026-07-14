"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arun B.",
    location: "Chennai",
    review:
      "The crochet flowers are beautifully handcrafted. Everyone who saw them appreciated the quality and finish.",
  },
  {
    id: 2,
    name: "Anitha R.",
    location: "Coimbatore",
    review:
      "The workshop was enjoyable and easy to follow. I completed my first crochet project with confidence.",
  },
  {
    id: 3,
    name: "Lakshmi K.",
    location: "Bengaluru",
    review:
      "The personalized gift exceeded my expectations. Every detail reflected genuine craftsmanship.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white py-24">

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-pink-100/40 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-pink-600">
            Customer Love
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every handmade creation carries a story. Here are a few words from
            our happy customers.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((item) => (

            <article
              key={item.id}
              className="group rounded-[30px] border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="flex items-center gap-1">

                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="mt-6 leading-8 text-gray-600">
  &ldquo;{item.review}&rdquo;
</p>

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h3 className="font-semibold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.location}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}