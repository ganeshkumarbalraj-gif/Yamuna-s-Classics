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

    <section
      className="
      bg-gradient-to-b
      from-white
      via-pink-50
      to-sky-50
      py-24
      "
    >





      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        "
      >






        <SectionTitle

          eyebrow="Our Students"

          name="Creations Made During Our Workshops"

          description="
          Every masterpiece begins with a first stitch,
          a first brush stroke and a first smile.
          "

        />








        <div

          className="
          mt-16
          grid
          gap-8
          sm:grid-cols-2
          lg:grid-cols-4
          "

        >





          {creations.map((item)=>(


            <article

              key={item.name}

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






              <div

                className="
                relative
                aspect-square
                overflow-hidden
                "

              >





                <Image

                  src={item.image}

                  alt={item.name}

                  fill

                  sizes="
                  (max-width:640px) 100vw,
                  (max-width:1024px) 50vw,
                  25vw
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
                  inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-transparent
                  to-transparent
                  opacity-0
                  transition
                  duration-500
                  group-hover:opacity-100
                  "

                />



              </div>








              <div

                className="
                p-5
                text-center
                "

              >



                <h3

                  className="
                  text-lg
                  font-bold
                  text-gray-900
                  "

                >

                  {item.name}

                </h3>




              </div>






            </article>



          ))}




        </div>






      </div>




    </section>

  );

}