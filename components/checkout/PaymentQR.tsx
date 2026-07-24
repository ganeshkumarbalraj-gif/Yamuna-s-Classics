"use client";

import Image from "next/image";

import { payment } from "@/data/payment";


export default function PaymentQR(){

return (

<div
className="
rounded-3xl
bg-white
p-8
shadow-xl
text-center
"
>


<h2
className="
text-3xl
font-bold
"
>
Payment
</h2>



<p
className="
mt-4
text-gray-600
"
>
Scan the QR code and complete payment
</p>



<div
className="
mx-auto
mt-8
w-fit
rounded-3xl
border
p-5
"
>

<Image

src={payment.qrImage}

alt="GPay QR Code"

width={260}

height={260}

/>

</div>



<p
className="
mt-6
font-semibold
text-pink-600
"
>

UPI ID:
{payment.upiId}

</p>


</div>

);

}