"use client";

import { useCart } from "@/context/CartContext";


export default function OrderSummary(){

const {
  cart,
  totalPrice,
}=useCart();



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
text-3xl
font-bold
text-gray-900
"
>
Order Summary
</h2>



<div className="space-y-5">


{
cart.map(item=>(

<div
key={item.product.id}
className="
flex
justify-between
border-b
pb-4
"
>


<div>

<p
className="
font-semibold
"
>
{item.product.name}
</p>


<p
className="
text-sm
text-gray-500
"
>
Qty: {item.quantity}
</p>

</div>



<p
className="
font-semibold
"
>

₹{(
(item.product.price ?? 0)
*
item.quantity
).toLocaleString()}

</p>


</div>

))
}



<div
className="
flex
justify-between
pt-5
text-2xl
font-bold
"
>

<span>
Total
</span>


<span
className="
text-emerald-700
"
>
₹{totalPrice.toLocaleString()}
</span>


</div>


</div>


</div>

);

}