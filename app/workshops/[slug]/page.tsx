import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/whatsapp";
import WorkshopSchema from "@/components/seo/WorkshopSchema";
import { getWorkshopBySlug } from "@/data/workshops";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function WorkshopDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  const workshop = getWorkshopBySlug(slug);

  if (!workshop) {
    notFound();
  }

  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-pink-50">
 <WorkshopSchema workshop={workshop} />
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Image */}

          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-xl">

            <Image
  src={workshop.images[0] || "/images/placeholder.webp"}
  alt={workshop.name}
  fill
  priority
  className="object-cover"
/>

          </div>

          {/* Content */}

          <div>

            <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
              {workshop.level}
            </span>

            <h1 className="mt-6 text-5xl font-bold text-gray-800">
              {workshop.name}
            </h1>

            <p className="mt-8 leading-8 text-gray-600">
              {workshop.description}
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl bg-white p-5 shadow">
                <h3 className="font-semibold">Duration</h3>
                <p>{workshop.duration}</p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow">
                <h3 className="font-semibold">Age Group</h3>
                <p>{workshop.ageGroup}</p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow">
                <h3 className="font-semibold">Materials</h3>
                <p>
                  {workshop.materialsProvided
                    ? "Included"
                    : "Bring Your Own"}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow">
                <h3 className="font-semibold">Certificate</h3>
                <p>
                  {workshop.certificate
                    ? "Provided"
                    : "Not Included"}
                </p>
              </div>

            </div>

            <div className="mt-10">

              <h2 className="text-2xl font-semibold">
                What You&apos;ll Learn
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">

                {workshop.includes.map((item: string) => (
  <li key={item}>{item}</li>
))}

              </ul>

            </div>

            <div className="mt-12 flex flex-wrap gap-4">

              <Link
                href={getWhatsAppLink(
                  `Hello, I'm interested in the "${workshop.name}" workshop.`
                )}
                target="_blank"
                className="rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 px-8 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Register via WhatsApp
              </Link>

              <Link
                href="/workshops"
                className="rounded-xl border-2 border-purple-500 px-8 py-4 font-semibold text-purple-700 hover:bg-purple-50"
              >
                Back to Workshops
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}