import Image from "next/image";
import Link from "next/link";
import { Workshop } from "@/types/workshop";

interface WorkshopCardProps {
  workshop: Workshop;
}

export default function WorkshopCard({
  workshop,
}: WorkshopCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative h-64">
        <Image
          src={workshop.image}
          alt={workshop.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <span className="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700">
          {workshop.level}
        </span>

        <h3 className="mt-4 text-2xl font-semibold">
          {workshop.title}
        </h3>

        <p className="mt-3 text-gray-600">
          {workshop.description}
        </p>

        <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
          <span>{workshop.duration}</span>
          <span>{workshop.mode}</span>
        </div>

        <Link
          href={`/workshops/${workshop.slug}`}
          className="mt-6 inline-block rounded-xl bg-pink-600 px-5 py-3 text-white hover:bg-pink-700"
        >
          View Workshop
        </Link>
      </div>
    </div>
  );
}