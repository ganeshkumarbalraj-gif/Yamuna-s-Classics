"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { useCart } from "@/context/CartContext";



export default function CartButton() {


  const {
    itemCount,
  } = useCart();




  return (

    <Link

      href="/cart"

      className="
      relative
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      bg-white
      text-gray-700
      shadow-md
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-emerald-600
      hover:text-white
      "

      aria-label="Shopping Cart"

    >



      <ShoppingCart size={22} />





      {itemCount > 0 && (

        <span

          className="
          absolute
          -right-1
          -top-1
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          bg-pink-600
          text-xs
          font-bold
          text-white
          "

        >

          {itemCount}

        </span>

      )}



    </Link>

  );

}