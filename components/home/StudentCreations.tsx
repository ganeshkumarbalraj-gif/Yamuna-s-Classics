import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";

const creations = [
  {
    image: "/students/student1.jpg",
    name: "Crochet Flower",
  },
  {
    image: "/students/student2.jpg",
    name: "Embroidery Hoop",
  },
  {
    image: "/students/student3.jpg",
    name: "Paper Craft",
  },
  {
    image: "/students/student4.jpg",
    name: "Greeting Card",
  },
];

export default function StudentCreations() {
  return (
    <section className="bg-gradient-to-b from-white via-pink-50 to-sky-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="Our Students"
          name="Creations Made During Our Workshops"
          description="Every masterpiece begins with a first stitch, a first brush stroke and a first smile."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {creations.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-square">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
sizes="(max-width:768px) 100vw,
           (max-width:1200px) 50vw,
           33vw"
                  className="object-cover"
                />

              </div>

              <div className="p-5 text-center">
                <h3 className="font-semibold">
                  {item.name}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}