import Image from "next/image";
import Link from "next/link";
import { workshops } from "@/data/workshops";
import SectionTitle from "@/components/common/SectionTitle";

export default function FeaturedWorkshops() {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-purple-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
  eyebrow="Learn With Us"
  title="Creative Workshops"
  description="Learn timeless handmade skills through enjoyable and inspiring workshops for all ages."
/>

        <div className="grid gap-10 md:grid-cols-2">

          {workshops.slice(0, 2).map((workshop) => (

            <div
              key={workshop.slug}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-72">

                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-8">

                <span className="rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700">
                  {workshop.level}
                </span>

                <h3 className="mt-5 text-2xl font-semibold">
                  {workshop.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {workshop.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="font-semibold text-purple-700">
                    {workshop.duration}
                  </span>

                  <Link
                    href={`/workshops/${workshop.slug}`}
                    className="rounded-xl bg-gradient-to-r from-sky-500 to-purple-500 px-5 py-3 text-white transition hover:opacity-90"
                  >
                    Learn More
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-14 text-center">

          <Link
            href="/workshops"
            className="rounded-xl border-2 border-sky-500 px-8 py-4 font-semibold text-sky-700 transition hover:bg-sky-50"
          >
            View All Workshops
          </Link>

        </div>

      </div>
    </section>
  );
}