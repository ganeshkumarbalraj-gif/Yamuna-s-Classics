import Image from "next/image";

import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/ui/Button";

import { products } from "@/data/products";



export default function FeaturedProducts() {


  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 4);



  return (

    <section
      className="
      relative
      overflow-hidden
      bg-gradient-to-b
      from-gray-50
      via-white
      to-gray-50
      py-24
      "
    >




      {/* Background Decorations */}


      <div
        className="
        absolute
        -left-32
        top-0
        h-80
        w-80
        rounded-full
        bg-pink-100/40
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
        bg-emerald-100/40
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

          eyebrow="Featured Collection"

          name="Our Handmade Products"

          description="
          Explore our carefully crafted handmade gifts,
          crochet creations and personalized products.
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





          {featuredProducts.map((product)=>(


            <article

              key={product.id}

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
                aspect-square
                overflow-hidden
                "
              >


                <Image

                  src={
                    product.images[0] ??
                    "/images/placeholder-product.jpg"
                  }

                  alt={product.name}

                  fill

                  sizes="
                  (max-width:768px) 100vw,
                  (max-width:1200px) 50vw,
                  25vw
                  "

                  className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
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

                  {product.category}

                </p>





                <h3
                  className="
                  mt-3
                  text-xl
                  font-bold
                  text-gray-900
                  "
                >

                  {product.name}

                </h3>





                <p
                  className="
                  mt-3
                  line-clamp-2
                  text-gray-600
                  "
                >

                  {product.shortDescription}

                </p>






                <p
                  className="
                  mt-5
                  text-2xl
                  font-bold
                  text-emerald-600
                  "
                >

                  ₹{product.price?.toLocaleString()}

                </p>





                <Button

                  href={`/products/${product.slug}`}

                  className="mt-6 w-full"

                >

                  View Product

                </Button>



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

            href="/products"

            variant="secondary"

          >

            View All Products

          </Button>


        </div>





      </div>



    </section>

  );

}