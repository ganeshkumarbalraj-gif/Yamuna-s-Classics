import Link from "next/link";

import { Workshop } from "@/types";
import { site } from "@/data/site";

interface WorkshopInfoProps {
  workshop: Workshop;
}

export default function WorkshopInfo({
  workshop,
}: WorkshopInfoProps) {
  return (
    <div className="rounded-2xl border border-pink-100 bg-white p-8 shadow-sm">

      <h1 className="text-4xl font-bold">
        {workshop.name}
      </h1>

      <p className="mt-5 text-gray-600">
        {workshop.description}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">

        <Info title="Duration" value={workshop.duration} />

        <Info title="Level" value={workshop.level} />

        <Info title="Age Group" value={workshop.ageGroup} />

        <Info
          title="Certificate"
          value={workshop.certificate ? "Included" : "Not Included"}
        />

        <Info
          title="Materials"
          value={
            workshop.materialsProvided
              ? "Provided"
              : "Bring Your Own"
          }
        />

      </div>

      <div className="mt-8">

        <h3 className="text-xl font-semibold">
  What&apos;s Included
</h3>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
          {workshop.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

      </div>

      <div className="mt-10 flex flex-wrap gap-4">

        <Link
          href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=Hi%20Yamuna,%20I%20am%20interested%20in%20the%20${encodeURIComponent(workshop.name)}%20workshop.`}
          className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
        >
          Register via WhatsApp
        </Link>

      </div>

    </div>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-pink-50 p-4">

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="mt-1 font-semibold">
        {value}
      </p>

    </div>
  );
}