"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

import { CartItem as CartItemType } from "@/context/CartContext";
import { useCart } from "@/context/CartContext";


interface Props {
  item: CartItemType;
}


export default function CartItem({
  item,
}: Props) {


  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();


  const product = item.product;


  return (

    <div
      className="
      flex
      gap-6
      rounded-3xl
      border
      border-gray-100
      bg-white
      p-6
      shadow-sm
      transition-all
      duration-300
      hover:shadow-lg
      "
    >


      <div
        className="
        relative
        h-28
        w-28
        overflow-hidden
        rounded-2xl
        bg-gray-100
        "
      >

        <Image

          src={
            product.images[0] ||
            "/images/placeholder-product.jpg"
          }

          alt={product.name}

          fill

          className="object-cover"

        />

      </div>




      <div className="flex flex-1 flex-col">


        <h3
          className="
          font-body
          text-xl
          font-bold
          text-gray-900
          "
        >

          {product.name}

        </h3>



        <p className="text-sm text-gray-500">

          {product.category}

        </p>



        <p
          className="
          mt-3
          text-lg
          font-bold
          text-emerald-600
          "
        >

          ₹{(product.price ?? 0).toLocaleString()}

        </p>




        <div className="mt-4 flex items-center gap-3">


          <button

            onClick={() =>
              decreaseQuantity(product.id)
            }

            className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-gray-300
            transition-all
            duration-300
            hover:border-emerald-600
            hover:bg-emerald-600
            hover:text-white
            "

          >

            <Minus size={16}/>

          </button>



          <span className="font-semibold">

            {item.quantity}

          </span>




          <button

            onClick={() =>
              increaseQuantity(product.id)
            }

            className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-gray-300
            transition-all
            duration-300
            hover:border-emerald-600
            hover:bg-emerald-600
            hover:text-white
            "

          >

            <Plus size={16}/>

          </button>


        </div>


      </div>




      <button

        onClick={() =>
          removeFromCart(product.id)
        }

        className="
        self-start
        text-red-500
        transition-all
        duration-300
        hover:scale-110
        hover:text-red-700
        "

      >

        <Trash2 size={22}/>

      </button>


    </div>

  );
}