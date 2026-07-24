"use client";

import Button from "@/components/ui/Button";

import { useCart } from "@/context/CartContext";


export default function CartSummary() {


  const {
    totalPrice,
    itemCount,
  } = useCart();



  return (

    <div
      className="
      rounded-3xl
      bg-white
      p-8
      shadow-xl
      "
    >



      <h2
        className="
        mb-8
        font-body
        text-3xl
        font-bold
        text-gray-900
        "
      >

        Order Summary

      </h2>




      <div className="space-y-5">


        <div className="flex justify-between text-lg">

          <span>
            Cart
          </span>

          <span>
            {itemCount}
          </span>

        </div>




        <div className="flex justify-between text-lg">

          <span>
            Delivery
          </span>


          <span className="text-emerald-600">

            FREE

          </span>


        </div>




        <hr />




        <div
          className="
          flex
          justify-between
          text-2xl
          font-bold
          "
        >

          <span>
            Total
          </span>


          <span className="text-emerald-700">

            ₹{totalPrice.toLocaleString()}

          </span>


        </div>


      </div>




      <div className="mt-10 space-y-4">


        <Button
          href="/checkout"
          className="w-full"
        >

          Proceed to Checkout

        </Button>



        <Button
          href="/products"
          variant="outline"
          className="w-full"
        >

          Continue Shopping

        </Button>


      </div>



    </div>

  );

}