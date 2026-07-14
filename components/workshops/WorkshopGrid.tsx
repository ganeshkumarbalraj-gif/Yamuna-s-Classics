import WorkshopCard from "./WorkshopCard";
import { Workshop } from "@/types";

interface Props {
  workshops: Workshop[];
}

export default function WorkshopGrid({
  workshops,
}: Props) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {workshops.map((workshop) => (
        <WorkshopCard
          key={workshop.id}
          workshop={workshop}
        />
      ))}
    </div>
  );
}