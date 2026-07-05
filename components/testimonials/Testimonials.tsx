"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    text: "The crochet workshop was wonderful. I learned so much and enjoyed every session!",
  },
  {
    name: "Lakshmi R.",
    text: "Beautiful handmade gifts with amazing attention to detail. Highly recommended!",
  },
  {
    name: "Anitha K.",
    text: "Yamuna is an excellent teacher. The workshops are fun and easy to follow.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-pink-600 font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold font-heading mt-3">
            What Our Students Say
          </h2>

          <p className="text-gray-600 mt-5">
            Words from our happy learners and customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <div className="flex gap-1 text-pink-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 leading-7">
                "{item.text}"
              </p>

              <h4 className="mt-6 font-bold text-xl">
                {item.name}
              </h4>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}