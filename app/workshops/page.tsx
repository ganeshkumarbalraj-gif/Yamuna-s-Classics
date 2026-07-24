import type { Metadata } from "next";

import PageHeader from "@/components/layout/PageHeader";
import SectionTitle from "@/components/common/SectionTitle";
import WorkshopGrid from "@/components/workshops/WorkshopGrid";
import Button from "@/components/ui/Button";

import { workshops } from "@/data/workshops";

export const metadata: Metadata = {
  title: "Workshops | Yamuna's Classics",
  description:
    "Join creative workshops at Yamuna's Classics and learn crochet, embroidery, paper crafts and other handmade arts.",
};

export default function WorkshopsPage() {
  return (
    <>
      <PageHeader
        name="Creative Workshops"
        subtitle="Learn beautiful handmade crafts from Yamuna and discover the joy of creating something unique."
      />

      <main className="relative overflow-hidden bg-gradient-to-b from-white via-pink-50/40 to-emerald-50/30">

        {/* Decorative Background */}

        <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-pink-100/30 blur-3xl" />

        <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-emerald-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">

          {/* Introduction */}

          <SectionTitle
            center
            eyebrow="Create • Learn • Inspire"
            name="Experience the Joy of Handmade Crafting"
            description="Whether you're a complete beginner or looking to improve your creative skills, our workshops provide a friendly and inspiring environment to learn crochet, embroidery, paper crafts, mehendi and much more."
          />

          {/* Statistics */}

                    <div className="mt-16 grid gap-6 md:grid-cols-3">

            <StatCard
              value={`${workshops.length}+`}
              label="Creative Workshops"
            />

            <StatCard
              value="All Ages"
              label="Suitable For"
            />

            <StatCard
              value="100%"
              label="Hands-on Learning"
            />

          </div>

          {/* Workshop Grid */}

          <div className="mt-20">

            <WorkshopGrid
              workshops={workshops}
            />

          </div>

          {/* Bottom CTA */}

          <div className="mt-24 rounded-[36px] bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 px-10 py-16 text-center text-white shadow-2xl">

            <h2 className="text-4xl font-bold">
              Ready to Begin Your Creative Journey?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              Join our friendly workshops and discover how enjoyable handmade
              crafting can be. Learn new skills, meet fellow craft enthusiasts,
              and create beautiful handmade treasures.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Button
                href="/contact"
                className="bg-white text-pink-600 hover:bg-gradient-to-r hover:from-emerald-700 hover:via-green-700 hover:to-green-600 hover:text-white"
              >
                Enquire Now
              </Button>

              <Button
                href="/gallery"
                variant="secondary"
              >
                View Gallery
              </Button>

            </div>

          </div>

        </div>

      </main>
    </>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-3xl border border-white bg-white p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      <h3 className="text-4xl font-bold text-emerald-600">
        {value}
      </h3>

      <p className="mt-3 font-medium text-gray-600">
        {label}
      </p>

    </div>
  );
}