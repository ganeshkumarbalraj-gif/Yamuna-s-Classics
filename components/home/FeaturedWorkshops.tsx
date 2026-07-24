import Image from "next/image";

import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/ui/Button";

import { workshops } from "@/data/workshops";



export default function FeaturedWorkshops() {


  const featuredWorkshops = workshops.slice(0, 2);



  return (

    <section
      className="
      relative
      overflow-hidden
      bg-gradient-to-b
      from-white
      via-sky-50/30
      to-white
      py-24
      "
    >





      {/* Decorative Background */}



      <div
        className="
        absolute
        -left-32
        top-0
        h-80
        w-80
        rounded-full
        bg-sky-100/40
        blur-3xl
        "
      />



      <div
        className="
        absolute
        -right-32
        bottom-0
        h-80
        w-80
        rounded-full
        bg-purple-100/40
        blur-3xl
        "
      />







      <div
        className="
        relative
        mx-auto
        max-w-7xl
        px-6
        "
      >






        <SectionTitle

          eyebrow="Creative Learning"

          name="Featured Workshops"

          description="
          Learn beautiful handmade crafts through
          guided practical workshops.
          "

        />







        <div
          className="
          mt-16
          grid
          gap-8
          lg:grid-cols-2
          "
        >





          {featuredWorkshops.map((workshop)=>(



            <article

              key={workshop.slug}

              className="
              group
              overflow-hidden
              rounded-[32px]
              border
              border-gray-100
              bg-white
              shadow-lg
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              "

            >





              {/* Image */}



              <div
                className="
                relative
                h-80
                overflow-hidden
                "
              >



                <Image

                  src={
                    workshop.images[0] ??
                    "/images/placeholder-workshop.jpg"
                  }

                  alt={workshop.name}

                  fill

                  sizes="
                  (max-width:1024px) 100vw,
                  50vw
                  "

                  className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                  "

                />





                <div
                  className="
                  absolute
                  bottom-5
                  left-5
                  rounded-full
                  bg-white/90
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-gray-700
                  shadow
                  backdrop-blur
                  "
                >

                  {workshop.level}

                </div>




              </div>








              {/* Content */}



              <div
                className="
                p-8
                "
              >





                <h3
                  className="
                  text-2xl
                  font-bold
                  text-gray-900
                  transition-colors
                  group-hover:text-emerald-600
                  "
                >

                  {workshop.name}

                </h3>






                <p
                  className="
                  mt-5
                  leading-7
                  text-gray-600
                  "
                >

                  {workshop.description}

                </p>






                <div
                  className="
                  my-6
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-gray-200
                  to-transparent
                  "
                />







                <div
                  className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  "
                >



                  <div>

                    <p
                      className="
                      text-sm
                      text-gray-500
                      "
                    >

                      Duration

                    </p>


                    <p
                      className="
                      font-semibold
                      text-emerald-600
                      "
                    >

                      {workshop.duration}

                    </p>


                  </div>





                  <Button

                    href={`/workshops/${workshop.slug}`}

                  >

                    Learn More

                  </Button>



                </div>



              </div>





            </article>



          ))}





        </div>







        <div
          className="
          mt-16
          flex
          justify-center
          "
        >


          <Button

            href="/workshops"

            variant="secondary"

          >

            View All Workshops

          </Button>



        </div>






      </div>



    </section>

  );

}