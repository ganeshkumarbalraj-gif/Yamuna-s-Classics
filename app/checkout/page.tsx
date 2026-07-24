"use client";


import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentQR from "@/components/checkout/PaymentQR";


export default function CheckoutPage(){


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
py-20
"
>


<h1
className="
mb-12
text-5xl
font-bold
text-gray-900
"
>

Checkout

</h1>



<div
className="
grid
gap-10
lg:grid-cols-2
"
>


<div
className="
space-y-10
"
>

<CheckoutForm />

<PaymentQR />


</div>



<OrderSummary />


</div>


</section>


</main>


);

}