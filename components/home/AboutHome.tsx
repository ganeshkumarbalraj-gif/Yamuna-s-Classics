import Image from "next/image";
import Link from "next/link";

import AchievementCard from "@/components/common/AchievementCard";
import SkillBadge from "@/components/common/SkillBadge";

export default function AboutHome() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Image */}

          <div className="relative">

            <div className="overflow-hidden rounded-[32px] shadow-2xl">

              <Image
                src="/about/yamuna.jpg"
                alt="Yamuna - Founder of Yamuna&apos;s Classics"
                width={700}
                height={900}
                className="h-auto w-full object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 left-8 hidden rounded-3xl bg-white p-6 shadow-xl lg:block">

              <h3 className="text-3xl font-bold text-pink-600">
                120+
              </h3>

              <p className="text-gray-600">
                Happy Students
              </p>

            </div>

          </div>

          {/* Right */}

          <div>

            <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
              Meet the Founder
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
              Turning Creativity Into Beautiful Handmade Memories
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Welcome to <strong>Yamuna&apos;s Classics</strong>.
              Every handmade creation is crafted with care, patience,
              and passion. My goal is not only to create beautiful gifts,
              but also to inspire others through creative workshops that
              make learning enjoyable for every age group.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              From crochet flowers and embroidery to paper crafts,
              mehendi, and personalized gifts, every design reflects
              attention to detail and a love for handmade artistry.
            </p>

            {/* Skills */}

            <div className="mt-10 flex flex-wrap gap-3">

              <SkillBadge skill="Crochet" />
              <SkillBadge skill="Embroidery" />
              <SkillBadge skill="Paper Crafts" />
              <SkillBadge skill="Mehendi" />
              <SkillBadge skill="Handmade Gifts" />
              <SkillBadge skill="Workshops" />

            </div>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-2 gap-5">

              <AchievementCard
                value="120+"
                label="Students Trained"
              />

              <AchievementCard
                value="60+"
                label="Workshops"
              />

              <AchievementCard
                value="100+"
                label="Custom Orders"
              />

              <AchievementCard
                value="5+"
                label="Craft Specialities"
              />

            </div>

            {/* Quote */}

            <div className="mt-12 rounded-3xl border-l-4 border-pink-500 bg-pink-50 p-6">

              <p className="text-lg italic leading-8 text-gray-700">
  &quot;Creativity grows when it is shared. Every workshop is an
  opportunity to inspire confidence, imagination, and the joy
  of creating something by hand.&quot;
</p>

            </div>

            {/* Button */}

            <div className="mt-10">

              <Link
                href="/about"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Learn More About Yamuna
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}