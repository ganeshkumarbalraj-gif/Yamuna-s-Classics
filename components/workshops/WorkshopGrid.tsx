import WorkshopCard from "./WorkshopCard";
import { Workshop } from "@/types";

interface Props {
  workshops: Workshop[];
}

export default function WorkshopGrid({
  workshops,
}: Props) {
  if (workshops.length === 0) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          No Workshops Available
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          New creative workshops will be announced soon.
          Please check back again.
        </p>
      </section>
    );
  }

  return (
    <section className="relative py-4">

      {/* Decorative Background */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-pink-100/30 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-100/30 blur-3xl" />

      {/* Workshop Grid */}

      <div className="relative grid gap-10 md:grid-cols-2 xl:grid-cols-3">

        {workshops.map((workshop) => (
          <WorkshopCard
            key={workshop.id}
            workshop={workshop}
          />
        ))}

      </div>

    </section>
  );
}