"use client";

import Image from "next/image";
import { ZoomIn } from "lucide-react";

import { GalleryItem } from "@/types";

import Badge from "@/components/ui/Badge";


interface GalleryCardProps {

  item: GalleryItem;

  onClick?: () => void;

}



export default function GalleryCard({
  item,
  onClick,
}: GalleryCardProps) {


  return (

    <button

      type="button"

      onClick={onClick}

      disabled={!onClick}

      className="
      group
      block
      w-full
      overflow-hidden
      rounded-[32px]
      border
      border-gray-100
      bg-white
      text-left
      shadow-lg
      transition-all
      duration-500
      hover:-translate-y-2
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





        {/* Dark Overlay */}


        <div

          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-black/20
          to-transparent
          transition-opacity
          duration-500
          "

        />





        {/* Category */}


        <div
          className="
          absolute
          left-5
          top-5
          "
        >

          <Badge variant="success">

            {item.category}

          </Badge>


        </div>






        {/* Zoom Icon */}


        <div

          className="
          absolute
          right-5
          top-5
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-white/90
          text-emerald-600
          opacity-0
          shadow-lg
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:opacity-100
          "

        >

          <ZoomIn size={20}/>


        </div>







        {/* Text */}


        <div

          className="
          absolute
          bottom-0
          left-0
          right-0
          p-6
          "

        >


          <h3

            className="
            text-2xl
            font-bold
            text-white
            transition
            group-hover:-translate-y-1
            "

          >

            {item.name}

          </h3>




          <p

            className="
            mt-2
            text-sm
            text-gray-200
            "

          >

            Click to view

          </p>



        </div>



      </div>



    </button>


  );
}