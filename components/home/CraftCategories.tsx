import Link from "next/link";

import SectionTitle from "@/components/common/SectionTitle";



const crafts = [

  {
    name: "Crochet",
    description:
      "Handmade flowers, toys, bags and beautiful home décor creations.",
    href: "/products?category=crochet",
    color: "from-pink-500 to-rose-400",
    emoji: "🧶",
  },


  {
    name: "Embroidery",
    description:
      "Traditional and modern embroidery artworks crafted with care.",
    href: "/products?category=embroidery",
    color: "from-purple-500 to-fuchsia-500",
    emoji: "🪡",
  },


  {
    name: "Mehendi",
    description:
      "Elegant bridal and festive mehendi designs for special occasions.",
    href: "/gallery?category=mehendi",
    color: "from-emerald-500 to-green-400",
    emoji: "🌿",
  },


  {
    name: "Paper Crafts",
    description:
      "Creative handmade paper decorations and personalized gifts.",
    href: "/products?category=papercraft",
    color: "from-sky-500 to-cyan-400",
    emoji: "🎨",
  },


  {
    name: "Baking",
    description:
      "Homemade cakes, chocolates and festive treats.",
    href: "/products?category=baking",
    color: "from-orange-400 to-amber-400",
    emoji: "🍰",
  },


  {
    name: "Workshops",
    description:
      "Learn beautiful crafts through guided creative workshops.",
    href: "/workshops",
    color: "from-indigo-500 to-blue-500",
    emoji: "🎓",
  },

];





export default function CraftCategories() {


  return (

    <section
      className="
      relative
      overflow-hidden
      bg-white
      py-24
      "
    >





      {/* Decorations */}



      <div
        className="
        absolute
        -left-24
        top-0
        h-72
        w-72
        rounded-full
        bg-pink-100/30
        blur-3xl
        "
      />



      <div
        className="
        absolute
        -right-24
        bottom-0
        h-72
        w-72
        rounded-full
        bg-emerald-100/30
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

          eyebrow="Explore"

          name="Our Creative World"

          description="
          Discover handmade collections and creative workshops
          designed with passion and imagination.
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






          {crafts.map((craft)=>(



            <Link

              key={craft.name}

              href={craft.href}

              className="
              group
              rounded-[32px]
              border
              border-gray-100
              bg-white
              p-8
              shadow-lg
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              "

            >





              {/* Icon */}



              <div

                className={`
                mb-6
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-3xl
                bg-gradient-to-r
                ${craft.color}
                text-4xl
                shadow-lg
                transition-transform
                duration-500
                group-hover:scale-110
                `}

              >

                {craft.emoji}

              </div>








              <h3

                className="
                mb-3
                text-2xl
                font-bold
                text-gray-900
                transition-colors
                duration-300
                group-hover:text-emerald-600
                "

              >

                {craft.name}

              </h3>






              <p

                className="
                mb-8
                leading-7
                text-gray-600
                "

              >

                {craft.description}

              </p>







              <span

                className="
                inline-flex
                items-center
                font-semibold
                text-emerald-600
                transition-all
                duration-300
                group-hover:translate-x-2
                group-hover:text-pink-600
                "

              >

                Explore Collection →

              </span>






            </Link>



          ))}





        </div>





      </div>



    </section>

  );

}