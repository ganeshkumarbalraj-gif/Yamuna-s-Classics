import Image from "next/image";

import { Star } from "lucide-react";



export interface Testimonial {

  id:number;

  name:string;

  location:string;

  image:string;

  review:string;

}



interface Props {

  testimonial:Testimonial;

}





export default function TestimonialCard({

  testimonial,

}:Props){



  return (

    <article

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






      {/* Customer */}



      <div

        className="
        flex
        items-center
        gap-4
        "

      >





        <Image

          src={testimonial.image}

          alt={testimonial.name}

          width={72}

          height={72}

          className="
          h-[72px]
          w-[72px]
          rounded-full
          object-cover
          "

        />






        <div>


          <h3

            className="
            text-xl
            font-bold
            text-gray-900
            "

          >

            {testimonial.name}

          </h3>





          <p

            className="
            text-gray-500
            "

          >

            {testimonial.location}

          </p>



        </div>




      </div>







      {/* Rating */}





      <div

        className="
        mt-6
        flex
        gap-1
        "

      >


        {[1,2,3,4,5].map((star)=>(


          <Star

            key={star}

            size={20}

            className="
            fill-yellow-400
            text-yellow-400
            "

          />


        ))}



      </div>







      {/* Review */}





      <p

        className="
        mt-6
        leading-8
        italic
        text-gray-600
        "

      >

        &ldquo;{testimonial.review}&rdquo;


      </p>






    </article>


  );


}