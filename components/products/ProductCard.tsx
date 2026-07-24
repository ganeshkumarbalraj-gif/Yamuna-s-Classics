"use client";

import Image from "next/image";

import { Product } from "@/types";

import { site } from "@/data/site";

import ProductBadge from "@/components/common/ProductBadge";
import StarRating from "@/components/common/StarRating";
import WishlistButton from "@/components/common/WishlistButton";
import Button from "@/components/ui/Button";

import { useCart } from "@/context/CartContext";


interface ProductCardProps {
  product: Product;
}



export default function ProductCard({
  product,
}: ProductCardProps) {


  const { addToCart } = useCart();



  const image =
    product.images?.[0] ??
    "/images/placeholder-product.jpg";



  const whatsappMessage = encodeURIComponent(
    `Hello Yamuna's Classics! I'm interested in "${product.name}". Please share more details.`
  );


  const whatsappLink =
    `https://wa.me/${site.whatsapp.replace(
      /\D/g,
      ""
    )}?text=${whatsappMessage}`;




  return (

    <article
      className="
      group
      flex
      h-full
      flex-col
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
          group-hover:scale-110
          "

        />



        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/40
          via-transparent
          to-transparent
          opacity-0
          transition
          group-hover:opacity-100
          "
        />




        {/* Wishlist */}


        <div
          className="
          absolute
          right-5
          top-5
          z-10
          "
        >

          <WishlistButton
            productId={product.id}
          />

        </div>





        {/* Badges */}


        <div
          className="
          absolute
          left-5
          top-5
          flex
          flex-col
          gap-2
          "
        >

          {product.featured && (

            <ProductBadge>
              Featured
            </ProductBadge>

          )}



          {product.bestSeller && (

            <ProductBadge variant="success">
              Best Seller
            </ProductBadge>

          )}



          {product.newArrival && (

            <ProductBadge variant="info">
              New Arrival
            </ProductBadge>

          )}


        </div>





        {/* Category */}


        <div
          className="
          absolute
          bottom-5
          left-5
          rounded-full
          bg-white/90
          px-4
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-wide
          text-gray-700
          shadow
          "
        >

          {product.category}

        </div>



      </div>





      {/* Content */}


      <div
        className="
        flex
        flex-1
        flex-col
        p-6
        "
      >



        <StarRating />



        <h3
          className="
          mt-4
          text-2xl
          font-bold
          text-gray-900
          transition
          group-hover:text-emerald-600
          "
        >

          {product.name}

        </h3>




        <p
          className="
          mt-3
          flex-1
          leading-7
          text-gray-600
          "
        >

          {product.shortDescription}

        </p>





        <div
          className="
          mt-5
          flex
          flex-wrap
          gap-2
          "
        >

          <ProductBadge>
            Handmade
          </ProductBadge>


          {product.customizable && (

            <ProductBadge variant="success">
              Customizable
            </ProductBadge>

          )}


        </div>






        <div
          className="
          my-6
          h-px
          bg-gray-200
          "
        />





        <p
          className="
          text-sm
          uppercase
          tracking-wider
          text-gray-500
          "
        >

          Starting From

        </p>



        <p
          className="
          mt-1
          text-3xl
          font-bold
          text-emerald-700
          "
        >

          ₹{product.price?.toLocaleString() ?? "Request"}

        </p>





        <div
          className="
          mt-6
          grid
          gap-3
          sm:grid-cols-2
          "
        >


          <Button
            href={`/products/${product.slug}`}
          >

            View Details

          </Button>





          <Button

            variant="secondary"

            onClick={() =>
              addToCart(product)
            }

          >

            Add Cart

          </Button>



        </div>





        <Button

  href={whatsappLink}

  external

  variant="outline"

  className="
  mt-3
  w-full
  "

>

  WhatsApp

</Button>




      </div>



    </article>

  );
}