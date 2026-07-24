"use client";

import Image from "next/image";

import FadeIn from "@/components/animations/FadeIn";

import Button from "@/components/ui/Button";

import { homeData } from "@/data/home";
import { site } from "@/data/site";


export default function Hero() {

  return (

    <section
      className="
      relative
      overflow-hidden
      bg-gradient-to-br
      from-rose-50
      via-white
      to-sky-50
      "
    >


      {/* Background Decorations */}


      <div
        className="
        absolute
        -left-44
        -top-44
        h-[28rem]
        w-[28rem]
        rounded-full
        bg-pink-200/30
        blur-3xl
        "
      />


      <div
        className="
        absolute
        -right-44
        bottom-0
        h-[28rem]
        w-[28rem]
        rounded-full
        bg-emerald-200/30
        blur-3xl
        "
      />





      <div
        className="
        relative
        mx-auto
        grid
        max-w-7xl
        items-center
        gap-14
        px-6
        py-28 lg:py-32
        lg:grid-cols-2
        lg:py-28
        "
      >




        {/* LEFT CONTENT */}



        <FadeIn>


          <span
            className="
            inline-flex
            items-center
            rounded-full
            border
            border-pink-200
            bg-white
            px-5
            py-2
            text-sm
            font-semibold
            tracking-wide
            text-pink-600
            shadow-sm
            "
          >

            {homeData.hero.badge}

          </span>





          <h1
            className="
            mt-6
            max-w-3xl
            text-4xl
            font-bold
            leading-tight
            text-gray-900
            md:text-5xl
            lg:text-6xl
            "
          >

            {homeData.hero.name}

          </h1>






          <p
            className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl"
          >

            {homeData.hero.subtitle}

          </p>






          <div
            className="
            mt-10
            flex
            flex-wrap
            gap-4
            "
          >


            <Button
              href={
                homeData.hero.primaryButton.href
              }
            >

              {
                homeData.hero.primaryButton.text
              }

            </Button>




            <Button

              href={
                homeData.hero.secondaryButton.href
              }

              variant="secondary"

            >

              {
                homeData.hero.secondaryButton.text
              }

            </Button>


          </div>






          {/* Statistics */}



          <div
            className="mt-16 grid grid-cols-2 gap-6 rounded-[32px] border border-white/70 bg-white/90 p-8 shadow-2xl backdrop-blur md:grid-cols-4"
          >


            <Stat
              value={site.stats.handmadeProducts}
              label="Products"
            />


            <Stat
              value={site.stats.happyCustomers}
              label="Customers"
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







        {/* RIGHT IMAGE */}





        <FadeIn delay={0.2}>

  <div
    className="
    relative
    flex
    justify-center
    "
  >

    <div
      className="
      overflow-hidden
      rounded-[40px]
      bg-white
      p-5
      shadow-[0_25px_60px_rgba(0,0,0,0.12)]
      ring-1
      ring-gray-100
      transition-all
      duration-700
      hover:-translate-y-3
      hover:scale-[1.02]
      hover:shadow-[0_35px_80px_rgba(0,0,0,0.18)]
      "
    >

      <Image

        src="/about/yamuna.png"

        alt="Yamuna founder of Yamuna's Classics"

        width={520}

        height={650}

        priority

        className="
        rounded-[32px]
        object-cover
        "

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
}:{
  value:string;
  label:string;
}) {

  return (

    <div
      className="rounded-2xl p-5 text-center transition-all duration-500 hover:-translate-y-2 hover:bg-rose-50 hover:shadow-lg"
    >

      <h3
        className="
        text-3xl
        font-bold
        text-emerald-600
        "
      >

        {value}

      </h3>


      <p
        className="
        mt-2
        text-sm
        font-medium
        text-gray-600
        "
      >

        {label}

      </p>


    </div>

  );
}