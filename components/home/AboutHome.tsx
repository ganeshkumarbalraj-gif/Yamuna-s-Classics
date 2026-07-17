import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AboutHome() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24">

      {/* Background Decorations */}

      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-rose-100/40 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-emerald-100/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Founder Image */}

        <div className="relative">

          <div className="overflow-hidden rounded-[36px] shadow-2xl">

            <Image
              src="/about/founder.jpg"
              alt="Founder of Yamuna's Classics"
              width={700}
              height={700}
              className="w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

        </div>

        {/* Content */}

        <div>

          <p className="font-semibold uppercase tracking-[0.3em] text-rose-600">
            Meet the Founder
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
            Turning Creativity Into Beautiful Handmade Memories
          </h2>

          <p className="mt-8 leading-8 text-gray-600">
            Every creation at <strong>Yamuna&apos;s Classics</strong> is made with
            passion, patience and attention to detail. What started as a love
            for handmade crafts has grown into a beautiful journey of creating
            gifts, teaching creative skills and inspiring others to discover
            the joy of crafting.
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            From crochet and embroidery to paper crafts, mehendi and baking,
            each product reflects traditional artistry blended with modern
            creativity. Every handmade piece is created with care to make your
            special moments even more memorable.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button href="/about">
              Learn More
            </Button>

            <Button
              href="/contact"
              variant="secondary"
            >
              Contact Us
            </Button>

          </div>

        </div>

      </div>

    </section>
  );
}