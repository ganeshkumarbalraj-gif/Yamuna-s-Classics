import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import PageHeader from "@/components/layout/PageHeader";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { getWorkshopBySlug } from "@/data/workshops";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function WorkshopPage({ params }: Props) {
  const { slug } = await params;

  const workshop = getWorkshopBySlug(slug);

  if (!workshop) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={workshop.title}
        subtitle="Creative Learning with Yamuna's Classics"
      />

      <main className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-2">

          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <Image
              src={workshop.image}
              alt={workshop.title}
              fill
              className="object-cover"
            />
          </div>

          <div>

            <div className="mb-4 text-sm text-gray-500">
              <Link href="/">Home</Link>
              {" / "}
              <Link href="/workshops">Workshops</Link>
              {" / "}
              {workshop.title}
            </div>

            <span className="rounded-full bg-pink-100 px-4 py-1 text-sm text-pink-700">
              {workshop.level}
            </span>

            <h1 className="mt-5 text-4xl font-bold">
              {workshop.title}
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              {workshop.description}
            </p>

            <div className="mt-8 space-y-3">
              <p>🕒 Duration: {workshop.duration}</p>
              <p>💺 Seats Available: {workshop.seats}</p>
              <p>📍 Mode: {workshop.mode}</p>
            </div>

            <div className="mt-10">
              <WhatsAppButton subject={workshop.title} />
            </div>

          </div>

        </div>

      </main>
    </>
  );
}