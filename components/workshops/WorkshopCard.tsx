import Image from "next/image";
import Link from "next/link";
import { Workshop } from "@/types";

interface WorkshopCardProps {
  workshop: Workshop;
}

export default function WorkshopCard({
  workshop,
}: WorkshopCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-64">
        <Image
          src={workshop.images[0] || "/images/placeholder.webp"}
          alt={workshop.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700">
          {workshop.level}
        </span>

        <h3 className="mt-4 text-2xl font-semibold">
          {workshop.name}
        </h3>

        <p className="mt-3 text-gray-600">
          {workshop.shortDescription}
        </p>

        <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
          <span>{workshop.duration}</span>
          <span>{workshop.ageGroup}</span>
        </div>

        <Link
          href={`/workshops/${workshop.slug}`}
          className="mt-6 inline-block rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-3 text-white transition hover:opacity-90"
        >
          View Workshop
        </Link>
      </div>
    </div>
  );
}