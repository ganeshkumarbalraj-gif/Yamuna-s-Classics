"use client";


import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import Button from "@/components/ui/Button";

import { useCart } from "@/context/CartContext";



export default function CartPage() {


  const { cart } = useCart();



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
        max-w-7xl
        px-6
        py-16
        "
      >



        <h1
          className="
          mb-10
          font-body
          text-4xl
          font-bold
          text-gray-900
          md:text-5xl
          "
        >

          Shopping Cart

        </h1>





        {cart.length === 0 ? (



          <div
            className="
            rounded-3xl
            bg-white
            p-12
            text-center
            shadow-lg
            "
          >



            <h2
              className="
              font-body
              text-2xl
              font-semibold
              text-gray-800
              "
            >

              Your cart is empty

            </h2>





            <p
              className="
              mt-4
              text-gray-600
              "
            >

              Browse our handmade creations and add your favourite items.

            </p>





            <div className="mt-8">


              <Button
                href="/products"
              >

                Continue Shopping

              </Button>


            </div>



          </div>



        ) : (



          <div
            className="
            grid
            gap-10
            lg:grid-cols-[2fr_1fr]
            "
          >



            <div className="space-y-6">


              {cart.map((item) => (


                <CartItem

                  key={item.product.id}

                  item={item}

                />


              ))}


            </div>





            <div
              className="
              lg:sticky
              lg:top-24
              lg:self-start
              "
            >

              <CartSummary />


            </div>




          </div>



        )}



      </section>


    </main>


  );

}