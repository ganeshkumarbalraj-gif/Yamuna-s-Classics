import {
  Gift,
  HeartHandshake,
  Sparkles,
  GraduationCap,
} from "lucide-react";



const features = [

  {
    icon: Gift,
    title: "Handmade Creations",
    description:
      "Every product is lovingly handcrafted with exceptional care and attention to detail.",
  },


  {
    icon: Sparkles,
    title: "Personalized Designs",
    description:
      "Custom-made gifts created to match your colours, style and special occasions.",
  },


  {
    icon: GraduationCap,
    title: "Creative Workshops",
    description:
      "Learn crochet, embroidery, paper crafts and traditional handmade art through guided workshops.",
  },


  {
    icon: HeartHandshake,
    title: "Made With Love",
    description:
      "Each creation reflects passion, creativity and dedication, making every gift special.",
  },

];





export default function WhyChooseUs() {


  return (

    <section
      className="
      relative
      overflow-hidden
      bg-white
      py-24
      "
    >




      {/* Background Decoration */}



      <div
        className="
        absolute
        left-0
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
        right-0
        bottom-0
        h-72
        w-72
        rounded-full
        bg-sky-100/30
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






        <div
          className="
          mx-auto
          max-w-3xl
          text-center
          "
        >



          <p
            className="
            font-semibold
            uppercase
            tracking-[0.3em]
            text-pink-600
            "
          >

            Why Choose Us

          </p>





          <h2
            className="
            mt-5
            text-4xl
            font-bold
            text-gray-900
            md:text-5xl
            "
          >

            Handmade Creations That Tell a Story

          </h2>





          <p
            className="
            mt-6
            text-lg
            leading-8
            text-gray-600
            "
          >

            We believe every handcrafted creation should bring happiness,
            preserve tradition and become a treasured memory.

          </p>




        </div>








        <div
          className="
          mt-16
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-4
          "
        >





          {features.map((feature)=>{


            const Icon = feature.icon;


            return (


              <div

                key={feature.title}

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





                <div

                  className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-50
                  transition-all
                  duration-300
                  group-hover:bg-blue-600
                  "

                >


                  <Icon

                    size={30}

                    className="
                    text-blue-600
                    transition-colors
                    duration-300
                    group-hover:text-white
                    "

                  />


                </div>







                <h3

                  className="
                  mt-8
                  text-2xl
                  font-bold
                  text-gray-900
                  "

                >

                  {feature.title}

                </h3>







                <p

                  className="
                  mt-5
                  leading-7
                  text-gray-600
                  "

                >

                  {feature.description}

                </p>





              </div>



            );


          })}





        </div>






      </div>




    </section>

  );

}