import Link from "next/link";
import { ShoppingBag } from "lucide-react";


export default function EmptyCart(){

return (

<div
className="
flex
flex-col
items-center
justify-center
rounded-3xl
bg-white
p-12
text-center
shadow-lg
"
>


<ShoppingBag
size={70}
className="text-pink-500"
/>


<h2 className="mt-6 text-3xl font-bold">

Your Cart is Empty

</h2>


<p className="mt-3 text-gray-600">

Explore our handmade creations and add your favourites.

</p>



<Link

href="/products"

className="
mt-8
rounded-xl
bg-gradient-to-r
from-pink-500
to-purple-500
px-8
py-4
font-semibold
text-white
transition
hover:-translate-y-1
"

>

Explore Products

</Link>


</div>

);

}