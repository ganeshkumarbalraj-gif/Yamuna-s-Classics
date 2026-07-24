"use client";

import { useMemo } from "react";

import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";


export default function OrderSuccessPage() {

  const { clearCart } = useCart();


  const order = useMemo(() => {

    if (typeof window === "undefined") {
      return null;
    }

    const saved =
      localStorage.getItem("order");


    if (!saved) {
      return null;
    }


    try {

      return JSON.parse(saved);

    } catch {

      return null;

    }


  }, []);



  useMemo(() => {

    if (order) {

      clearCart();

    }

  }, [order, clearCart]);



  return (

    <main
      className="
      min-h-screen
      bg-gradient-to-b
      from-pink-50
      via-white
      to-emerald-50
      "
    >


      <section
        className="
        mx-auto
        max-w-5xl
        px-6
        py-20
        "
      >


        <div
          className="
          rounded-[32px]
          bg-white
          p-10
          text-center
          shadow-xl
          "
        >


          <div
            className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-emerald-100
            text-4xl
            "
          >

            ✓

          </div>



          <h1
            className="
            mt-8
            text-4xl
            font-bold
            text-gray-900
            "
          >

            Order Placed Successfully

          </h1>



          <p
            className="
            mx-auto
            mt-5
            max-w-2xl
            text-lg
            leading-8
            text-gray-600
            "
          >

            Thank you for choosing Yamuna&apos;s Classics.
            We will contact you shortly to confirm your order
            details and payment.

          </p>



          {order && (

            <div
              className="
              mt-10
              rounded-3xl
              bg-gray-50
              p-8
              text-left
              "
            >

              <h2
                className="
                mb-6
                text-2xl
                font-bold
                text-gray-900
                "
              >

                Order Summary

              </h2>



              <div className="space-y-4">


                {order.items?.map(
                  (
                    item:{
                      product:{
                        name:string;
                        price:number;
                      };
                      quantity:number;
                    },
                    index:number
                  ) => (

                  <div
                    key={index}
                    className="
                    flex
                    justify-between
                    border-b
                    pb-3
                    "
                  >

                    <span>
                      {item.product.name}
                      {" "}
                      ×
                      {" "}
                      {item.quantity}
                    </span>


                    <span className="font-semibold">

                      ₹
                      {(item.product.price * item.quantity)
                        .toLocaleString()}

                    </span>


                  </div>

                ))}


              </div>


            </div>

          )}



          <div
            className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-5
            "
          >


            <Button
              href="/products"
            >

              Continue Shopping

            </Button>



            <Button
              href="/"
              variant="secondary"
            >

              Back To Home

            </Button>


          </div>



        </div>


      </section>


    </main>

  );

}