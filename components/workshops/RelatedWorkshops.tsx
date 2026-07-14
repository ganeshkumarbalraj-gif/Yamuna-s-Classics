import WorkshopCard from "./WorkshopCard";

import WorkshopService from "@/services/WorkshopService";

import { Workshop } from "@/types";

interface Props {
  workshop: Workshop;
}

export default function RelatedWorkshops({
  workshop,
}: Props) {
 const workshops = WorkshopService.getRelated(
  workshop.level,
  workshop.id
);
  if (workshops.length === 0) {
    return null;
  }

  return (
    <section className="mt-20">

      <h2 className="mb-8 text-3xl font-bold">
        Related Workshops
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {workshops.map((item) => (
          <WorkshopCard
            key={item.id}
            workshop={item}
          />
        ))}

      </div>

    </section>
  );
}