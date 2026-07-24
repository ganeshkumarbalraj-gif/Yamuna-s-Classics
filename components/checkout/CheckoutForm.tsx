"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";


export default function CheckoutForm(){

  const {
  cart,
  totalPrice,
} = useCart();


  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");



  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ){

    e.preventDefault();


    const orderId =
      `YC${Date.now()}`;



    const items = cart
    .map(item =>
      `${item.product.name} x ${item.quantity}`
    )
    .join("\n");



    const message = `

Hello Yamuna's Classics,

Order ID: ${orderId}

Customer Details:

Name:
${name}

Phone:
${phone}

Email:
${email}

Address:
${address}


Order Details:

${items}


Total Amount:
₹${totalPrice.toLocaleString()}


Payment completed through GPay.

Please confirm my order.

`;



    const whatsapp =
    `https://wa.me/?text=${encodeURIComponent(message)}`;



    window.open(
      whatsapp,
      "_blank"
    );


  }




return (

<form

onSubmit={handleSubmit}

className="
rounded-3xl
bg-white
p-8
shadow-xl
space-y-6
"

>


<h2
className="
text-3xl
font-bold
text-gray-900
"
>
Customer Details
</h2>



<input

required

value={name}

onChange={(e)=>setName(e.target.value)}

placeholder="Your Name"

className="
w-full
rounded-xl
border
border-gray-200
px-5
py-4
outline-none
focus:border-pink-500
"

/>



<input

required

value={phone}

onChange={(e)=>setPhone(e.target.value)}

placeholder="Phone Number"

className="
w-full
rounded-xl
border
border-gray-200
px-5
py-4
outline-none
focus:border-pink-500
"

/>




<input

required

type="email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

placeholder="Email Address"

className="
w-full
rounded-xl
border
border-gray-200
px-5
py-4
outline-none
focus:border-pink-500
"

/>




<textarea

required

value={address}

onChange={(e)=>setAddress(e.target.value)}

placeholder="Delivery Address"

rows={4}

className="
w-full
rounded-xl
border
border-gray-200
px-5
py-4
outline-none
focus:border-pink-500
"

/>




<Button

type="submit"

className="
w-full
"

>

Confirm Order

</Button>



</form>

);


}