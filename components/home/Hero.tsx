"use client";

import Image from "next/image";

import FadeIn from "@/components/animations/FadeIn";
import FloatingBadge from "@/components/common/FloatingBadge";
import Button from "@/components/ui/Button";
import { homeData } from "@/data/home";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-emerald-50">
      {/* Background Blur */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        {/* LEFT */}

        <FadeIn>
          <span className="inline-flex items-center rounded-full border border-pink-200 bg-white px-5 py-2 text-sm font-semibold text-pink-600 shadow-sm">
            {homeData.hero.badge}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {homeData.hero.name}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            {homeData.hero.subtitle}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={homeData.hero.primaryButton.href}>
              {homeData.hero.primaryButton.text}
            </Button>

            <Button
              href={homeData.hero.secondaryButton.href}
              variant="secondary"
            >
              {homeData.hero.secondaryButton.text}
            </Button>
          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-2 gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-lg md:grid-cols-4">
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
            <div className="overflow-hidden rounded-[36px] bg-white p-4 shadow-2xl ring-1 ring-gray-100">
              <Image
                src="/about/yamuna.jpg"
                alt="Yamuna - Founder of Yamuna's Classics"
                width={520}
                height={650}
                priority
                className="rounded-[28px] object-cover"
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

      <p className="mt-2 text-sm font-medium text-gray-600">
        {label}
      </p>
    </div>
  );
}