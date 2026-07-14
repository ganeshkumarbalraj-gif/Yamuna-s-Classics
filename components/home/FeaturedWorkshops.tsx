import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/common/SectionTitle";
import { workshops } from "@/data/workshops";

export default function FeaturedWorkshops() {
  const featured = workshops.slice(0, 2);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24">

      {/* Decorative Background */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="Creative Learning"
          name="Featured Workshops"
          description="Discover the joy of creating beautiful handmade crafts through inspiring workshops designed for beginners and enthusiasts alike."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {featured.map((workshop) => (

            <article
              key={workshop.slug}
              className="group overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* IMAGE */}

              <div className="relative h-80 overflow-hidden">

                <Image
                  src={
                    workshop.images[0] ||
                    "/images/placeholder-workshop.jpg"
                  }
                  alt={workshop.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-700 backdrop-blur">
                  {workshop.level}
                </div>

              </div>

              {/* CONTENT */}

              <div className="p-8">

                <h3 className="text-3xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-emerald-600">
                  {workshop.name}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {workshop.description}
                </p>

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-gray-500">
                      Duration
                    </p>

                    <p className="font-semibold text-emerald-600">
                      {workshop.duration}
                    </p>

                  </div>

                  <Button
                    href={`/workshops/${workshop.slug}`}
                  >
                    Learn More
                  </Button>

                </div>

              </div>

            </article>

          ))}

        </div>

        <div className="mt-16 text-center">

          <Button
            href="/workshops"
            variant="secondary"
          >
            View All Workshops
          </Button>

        </div>

      </div>

    </section>
  );
}