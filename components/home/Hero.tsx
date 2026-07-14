"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import FloatingBadge from "@/components/common/FloatingBadge";
import { homeData } from "@/data/home";
import { site } from "@/data/site";
import FadeIn from "@/components/animations/FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-emerald-50">

      {/* Background Decorations */}

      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2">

        {/* LEFT */}

        <FadeIn>

          <span className="inline-block rounded-full border border-pink-200 bg-white px-5 py-2 text-sm font-semibold text-pink-600 shadow-sm">
            {homeData.hero.badge}
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            {homeData.hero.name}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            {homeData.hero.subtitle}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <Button
              href={homeData.hero.primaryButton.href}
            >
              {homeData.hero.primaryButton.text}
            </Button>

            <Button
              href={homeData.hero.secondaryButton.href}
              variant="secondary"
            >
              {homeData.hero.secondaryButton.text}
            </Button>

          </div>

          {/* Statistics */}

          <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-xl md:grid-cols-4">

            <Stat
              value={site.stats.handmadeProducts}
              label="Products"
            />

            <Stat
              value={site.stats.happyCustomers}
              label="Happy Customers"
            />

            <Stat
              value={site.stats.workshopStudents}
              label="Students"
            />

            <Stat
              value={site.stats.yearsExperience}
              label="Years"
            />

          </div>

        </FadeIn>

        {/* RIGHT */}

        <FadeIn delay={0.2}>

          <div className="relative flex justify-center">

            <div className="overflow-hidden rounded-[40px] border border-white bg-white p-4 shadow-2xl">

              <Image
                src="/about/yamuna.jpg"
                alt="Founder"
                width={520}
                height={650}
                priority
                className="rounded-[32px] object-cover"
              />

            </div>

            <div className="absolute -left-8 top-10 hidden lg:block">

              <FloatingBadge
                name={site.stats.workshopStudents}
                subtitle="Students Trained"
              />

            </div>

            <div className="absolute -right-8 bottom-10 hidden lg:block">

              <FloatingBadge
                name={site.stats.handmade}
                subtitle="Crafted with Love"
              />

            </div>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="text-center">

      <h3 className="text-3xl font-bold text-emerald-600">
        {value}
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        {label}
      </p>

    </div>
  );
}