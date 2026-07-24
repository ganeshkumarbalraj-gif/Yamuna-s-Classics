"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";

import { useCart } from "@/context/CartContext";


export default function CartIcon(){

const { itemCount } = useCart();


return (

<Link
href="/cart"
className="
relative
flex
items-center
justify-center
text-gray-700
transition-all
duration-300
hover:text-emerald-600
"
>

<ShoppingCart
className="
h-6
w-6
"
/>


{itemCount > 0 && (

<span
className="
absolute
right-[-10px]
top-[-10px]
flex
h-5
w-5
items-center
justify-center
rounded-full
bg-pink-500
text-xs
font-semibold
text-white
"
>

{itemCount}

</span>

)}

</Link>

);

}