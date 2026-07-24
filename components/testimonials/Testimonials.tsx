import SectionTitle from "@/components/common/SectionTitle";

import TestimonialCard, {
  Testimonial,
} from "./TestimonialCard";



const testimonials: Testimonial[] = [

  {
    id: 1,
    name: "Arun",
    location: "Chennai",
    image: "/testimonials/arun.jpg",
    review:
      "Absolutely beautiful handmade products. The crochet flowers looked even better than the pictures.",
  },


  {
    id: 2,
    name: "Lakshmi",
    location: "Coimbatore",
    image: "/testimonials/lakshmi.jpg",
    review:
      "Yamuna is an excellent teacher. I completed my first crochet project within a week.",
  },


  {
    id: 3,
    name: "Anitha",
    location: "Bengaluru",
    image: "/testimonials/anitha.jpg",
    review:
      "Wonderful experience. Every product is crafted with great care and attention to detail.",
  },

];





export default function Testimonials() {


  return (

    <section

      className="
      bg-gradient-to-b
      from-white
      to-rose-50
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

          eyebrow="Testimonials"

          name="What Our Customers Say"

          description="
          We are grateful for the love and trust
          of our wonderful customers.
          "

          center

        />








        <div

          className="
          mt-16
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
          "

        >





          {testimonials.map((testimonial)=>(


            <TestimonialCard

              key={testimonial.id}

              testimonial={testimonial}

            />


          ))}





        </div>







      </div>




    </section>

  );

}