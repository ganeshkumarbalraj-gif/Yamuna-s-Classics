import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import WorkshopGrid from "@/components/workshops/WorkshopGrid";
import { workshops } from "@/data/workshops";

export const metadata: Metadata = {
  title: "Workshops | Yamuna&apos;s Classics",
  description:
    "Join creative workshops at Yamuna&apos;s Classics and learn crochet, embroidery, and other handmade crafts.",
};

export default function WorkshopsPage() {
  return (
    <>
      <PageHeader
        name="Creative Workshops"
        subtitle="Learn beautiful handmade crafts from Yamuna."
      />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <WorkshopGrid workshops={workshops} />
      </main>
    </>
  );
}