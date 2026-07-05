"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  "/gallery/gallery1.jpg",
  "/gallery/gallery2.jpg",
  "/gallery/gallery3.jpg",
  "/gallery/gallery4.jpg",
  "/gallery/gallery5.jpg",
  "/gallery/gallery6.jpg",
];

export default function GallerySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-pink-600 font-semibold uppercase tracking-widest">
            Gallery
          </p>

          <h2 className="text-5xl font-bold font-heading mt-3">
            Our Creative Showcase
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Every handmade creation reflects passion, patience and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={600}
                height={500}
                className="w-full h-72 object-cover"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}