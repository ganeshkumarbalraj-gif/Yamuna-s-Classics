import Image from "next/image";
import {
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";

import { Workshop } from "@/types";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";


interface WorkshopCardProps {
  workshop: Workshop;
}


export default function WorkshopCard({
  workshop,
}: WorkshopCardProps) {


  return (

    <article
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


      {/* Workshop Image */}

      <div
        className="
        relative
        h-72
        overflow-hidden
        "
      >

        <Image

          src={
            workshop.images[0] ||
            "/images/placeholder.webp"
          }

          alt={workshop.name}

          fill

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
          from-black/60
          via-black/10
          to-transparent
          "
        />


        <div
          className="
          absolute
          left-5
          top-5
          "
        >

          <Badge variant="success">

            {workshop.level}

          </Badge>

        </div>


      </div>




      {/* Content */}


      <div className="p-7">


        <h3
          className="
          font-body
          text-2xl
          font-bold
          text-gray-900
          transition-colors
          duration-300
          group-hover:text-emerald-700
          "
        >

          {workshop.name}

        </h3>



        <p
          className="
          mt-4
          leading-7
          text-gray-600
          "
        >

          {workshop.shortDescription}

        </p>




        {/* Details */}


        <div
          className="
          mt-6
          flex
          flex-wrap
          gap-4
          "
        >


          <div
            className="
            flex
            items-center
            gap-2
            rounded-full
            bg-gray-100
            px-4
            py-2
            text-sm
            text-gray-700
            "
          >

            <Clock
              size={16}
              className="text-emerald-600"
            />

            {workshop.duration}

          </div>




          <div
            className="
            flex
            items-center
            gap-2
            rounded-full
            bg-gray-100
            px-4
            py-2
            text-sm
            text-gray-700
            "
          >

            <Users
              size={16}
              className="text-emerald-600"
            />

            {workshop.ageGroup}

          </div>


        </div>





        {/* Buttons */}


        <div
          className="
          mt-8
          flex
          gap-4
          "
        >


          <Button

            href={`/workshops/${workshop.slug}`}

            className="flex-1"

          >

            Learn More

          </Button>





          <Button

            href="/contact"

            variant="outline"

          >

            Join

            <ArrowRight

              size={18}

              className="ml-2"

            />

          </Button>



        </div>



      </div>



    </article>

  );

}