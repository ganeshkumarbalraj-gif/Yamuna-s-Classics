"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Heart,
  ShoppingCart,
  Trash2,
} from "lucide-react";

import Button from "@/components/ui/Button";

import { useCart } from "@/context/CartContext";

import WishlistService from "@/services/WishlistService";

import { Product } from "@/types";


interface WishlistCardProps {

  product: Product;

  onRemove?: () => void;

}



export default function WishlistCard({
  product,
  onRemove,
}: WishlistCardProps) {


  const { addToCart } = useCart();




  const image =
    product.images?.[0] ??
    "/images/placeholder-product.jpg";





  function handleRemove() {

    WishlistService.remove(product.id);

    onRemove?.();

  }





  function handleMoveToCart() {

    addToCart(product);

    WishlistService.remove(product.id);

    onRemove?.();

  }





  return (

    <article

      className="
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


      <Link
        href={`/products/${product.slug}`}
      >

        <div
          className="
          relative
          aspect-square
          overflow-hidden
          "
        >


          <Image

            src={image}

            alt={product.name}

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
            hover:scale-110
            "

          />


        </div>


      </Link>





      {/* Content */}


      <div
        className="
        p-6
        "
      >




        <div
          className="
          flex
          items-start
          justify-between
          gap-4
          "
        >



          <div>


            <h3
              className="
              text-xl
              font-bold
              text-gray-900
              "
            >

              {product.name}

            </h3>




            <p
              className="
              mt-1
              text-sm
              text-gray-500
              "
            >

              {product.category}

            </p>


          </div>




          <Heart

            className="
            h-6
            w-6
            fill-pink-500
            text-pink-500
            "

          />


        </div>







        {/* Price */}


        <p
          className="
          my-5
          text-3xl
          font-bold
          text-emerald-700
          "
        >

          {product.price
            ? `₹${product.price.toLocaleString()}`
            : "Price on Request"
          }


        </p>







        {/* Move Cart */}


        <Button

          className="w-full"

          onClick={handleMoveToCart}

        >

          <ShoppingCart
            className="
            mr-2
            h-5
            w-5
            "
          />

          Move to Cart


        </Button>







        {/* Remove */}


        <Button

          variant="secondary"

          className="
          mt-3
          w-full
          "

          onClick={handleRemove}

        >

          <Trash2
            className="
            mr-2
            h-5
            w-5
            "
          />

          Remove


        </Button>





      </div>



    </article>

  );
}