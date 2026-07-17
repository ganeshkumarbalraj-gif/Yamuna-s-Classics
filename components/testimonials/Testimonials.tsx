"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arun B.",
    location: "Chennai",
    image: "/testimonials/arun.jpg",
    review:
      "The crochet flowers are beautifully handcrafted. Everyone who saw them appreciated the quality and finish.",
  },
  {
    id: 2,
    name: "Anitha R.",
    location: "Coimbatore",
    image: "/testimonials/anitha.jpg",
    review:
      "The workshop was enjoyable and easy to follow. I completed my first crochet project with confidence.",
  },
  {
    id: 3,
    name: "Lakshmi K.",
    location: "Bengaluru",
    image: "/testimonials/lakshmi.jpg",
    review:
      "The personalized gift exceeded my expectations. Every detail reflected genuine craftsmanship.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50/40 to-white py-24">

      {/* Decorative Background */}

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-rose-100/40 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-rose-600">
            Customer Love
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every handmade creation tells a story. Here are a few heartfelt
            experiences shared by our happy customers.
          </p>

        </div>

        {/* Testimonial Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((item) => (

            <article
              key={item.id}
              className="group rounded-[32px] border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Stars */}

              <div className="flex gap-1">

                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              {/* Quote */}

              <p className="mt-6 text-lg italic leading-8 text-gray-600">
                &ldquo;{item.review}&rdquo;
              </p>

              {/* Customer */}

              <div className="mt-8 flex items-center gap-4">

                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-rose-200 shadow">

                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />

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