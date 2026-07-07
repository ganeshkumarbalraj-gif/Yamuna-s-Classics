import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";

const gallery = [
  {
    image: "/gallery/gallery1.jpg",
    title: "Crochet",
  },
  {
    image: "/gallery/gallery2.jpg",
    title: "Embroidery",
  },
  {
    image: "/gallery/gallery3.jpg",
    title: "Gift Hamper",
  },
  {
    image: "/gallery/gallery4.jpg",
    title: "Paper Craft",
  },
  {
    image: "/gallery/gallery5.jpg",
    title: "Mehendi",
  },
  {
    image: "/gallery/gallery6.jpg",
    title: "Workshop",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-gradient-to-b from-sky-50 via-white to-pink-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="Our Gallery"
          title="Moments of Creativity"
          description="A glimpse into our handmade creations, workshops and beautiful memories."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">

          {[
            "All",
            "Crochet",
            "Embroidery",
            "Mehendi",
            "Baking",
            "Paper Craft",
          ].map((item) => (
            <button
              key={item}
              className="rounded-full border border-purple-200 bg-white px-5 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-600 hover:text-white"
            >
              {item}
            </button>
          ))}

        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {gallery.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative aspect-square overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-5">

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

        <div className="mt-12 text-center">

          <Link
            href="/gallery"
            className="rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 px-8 py-4 font-semibold text-white transition hover:opacity-90"
          >
            View Complete Gallery
          </Link>

        </div>

      </div>
    </section>
  );
}