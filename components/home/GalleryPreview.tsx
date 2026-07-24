import Image from "next/image";

import Button from "@/components/ui/Button";
import SectionTitle from "@/components/common/SectionTitle";

import { galleryItems } from "@/data/gallery";



export default function GalleryPreview() {


  const previewItems = galleryItems.slice(0, 6);



  return (

    <section
      className="
      bg-gradient-to-b
      from-white
      via-rose-50/30
      to-white
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

          eyebrow="Gallery"

          name="Our Handmade Creations"

          description="
          A glimpse of beautiful handmade creations crafted with creativity,
          patience and love.
          "

        />





        <div
          className="
          mt-16
          grid
          gap-8
          sm:grid-cols-2
          lg:grid-cols-3
          "
        >



          {previewItems.map((item)=>(


            <article

              key={item.id}

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
              hover:-translate-y-2
              hover:shadow-2xl
              "

            >





              {/* Image */}


              <div
                className="
                relative
                aspect-square
                overflow-hidden
                "
              >


                <Image

                  src={item.image}

                  alt={
                    item.name ??
                    "Yamuna's Classics creation"
                  }

                  fill

                  sizes="
                  (max-width:768px) 100vw,
                  (max-width:1200px) 50vw,
                  33vw
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
                  from-black/50
                  via-transparent
                  to-transparent
                  opacity-0
                  transition
                  duration-500
                  group-hover:opacity-100
                  "
                />


              </div>






              {/* Content */}



              <div
                className="
                p-6
                "
              >



                <p
                  className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-pink-600
                  "
                >

                  {item.category}

                </p>





                <h3
                  className="
                  mt-3
                  text-2xl
                  font-bold
                  text-gray-900
                  "
                >

                  {item.name}

                </h3>





                <p
                  className="
                  mt-4
                  line-clamp-3
                  leading-7
                  text-gray-600
                  "
                >

                  {item.description}

                </p>



              </div>



            </article>


          ))}



        </div>






        <div
          className="
          mt-14
          flex
          justify-center
          "
        >


          <Button
            href="/gallery"
          >

            View Complete Gallery

          </Button>



        </div>




      </div>



    </section>

  );

}