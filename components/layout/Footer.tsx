import Link from "next/link";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";


import { site } from "@/data/site";



const quickLinks = [

  { href:"/", label:"Home" },

  { href:"/about", label:"About" },

  { href:"/products", label:"Products" },

  { href:"/workshops", label:"Workshops" },

  { href:"/gallery", label:"Gallery" },

  { href:"/contact", label:"Contact" },

];





export default function Footer(){


return (

<footer

className="
relative
overflow-hidden
border-t
border-rose-100
bg-gradient-to-b
from-white
to-rose-50
"

>





<div

className="
absolute
-left-32
top-0
h-80
w-80
rounded-full
bg-rose-100/40
blur-3xl
"

/>



<div

className="
absolute
-right-32
bottom-0
h-80
w-80
rounded-full
bg-emerald-100/40
blur-3xl
"

/>







<div

className="
relative
mx-auto
max-w-7xl
px-6
py-16
"

>






<div

className="
grid
gap-12
md:grid-cols-2
lg:grid-cols-4
"

>






{/* Brand */}



<div>


<h2

className="
text-3xl
font-bold
text-gray-900
"

>

Yamuna&apos;s Classics

</h2>



<p

className="
mt-5
leading-8
text-gray-600
"

>

Handmade creations crafted with love.
Crochet, embroidery, paper crafts,
mehendi, baking and inspiring creative
workshops.

</p>



</div>









{/* Links */}



<div>


<h3

className="
mb-5
text-lg
font-semibold
text-gray-900
"

>

Quick Links

</h3>



<ul className="space-y-3">


{quickLinks.map((link)=>(


<li key={link.href}>


<Link

href={link.href}

className="
text-gray-600
transition-all
duration-300
hover:pl-2
hover:text-emerald-600
"

>

{link.label}

</Link>



</li>


))}


</ul>


</div>









{/* Contact */}



<div>


<h3

className="
mb-5
text-lg
font-semibold
text-gray-900
"

>

Contact

</h3>




<div

className="
space-y-5
text-gray-600
"

>




<div className="flex items-center gap-3">

<Phone

size={18}

className="text-emerald-600"

/>

<span>

{site.phone}

</span>

</div>






<div className="flex items-center gap-3">

<Mail

size={18}

className="text-emerald-600"

/>

<span>

{site.email}

</span>

</div>







<div className="flex items-center gap-3">

<MapPin

size={18}

className="text-emerald-600"

/>

<span>

{site.address}

</span>

</div>





</div>


</div>









{/* Social */}



<div>


<h3

className="
mb-5
text-lg
font-semibold
text-gray-900
"

>

Follow Us

</h3>



<div className="flex gap-4">


<SocialLink href={site.instagram}>

<FaInstagram size={22}/>

</SocialLink>




<SocialLink href={site.youtube}>

<FaYoutube size={22}/>

</SocialLink>





<SocialLink

href={`https://wa.me/${site.whatsapp.replace(/\D/g,"")}`}

>

<FaWhatsapp size={22}/>

</SocialLink>



</div>



</div>








</div>









<div

className="
mt-16
border-t
border-rose-100
pt-8
text-center
"

>


<p className="text-sm text-gray-500">

© {new Date().getFullYear()} - Yamuna&apos;s Classics.
All Rights Reserved.

</p>



<p className="mt-2 text-xs text-gray-400">

Handmade with ❤️ in India

</p>



</div>





</div>






</footer>


);


}









function SocialLink({

href,

children,

}:{

href:string;

children:React.ReactNode;

}){


return (

<a

href={href}

target="_blank"

rel="noopener noreferrer"

className="
flex
h-12
w-12
items-center
justify-center
rounded-full
bg-white
text-pink-600
shadow-md
transition-all
duration-500
hover:-translate-y-1
hover:scale-110
hover:bg-emerald-600
hover:text-white
hover:shadow-xl
"

>

{children}

</a>


);


}