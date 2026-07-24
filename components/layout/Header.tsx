"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CartIcon from "@/components/common/CartIcon";



const navLinks = [

  {
    href:"/",
    label:"Home",
  },

  {
    href:"/about",
    label:"About",
  },

  {
    href:"/products",
    label:"Products",
  },

  {
    href:"/workshops",
    label:"Workshops",
  },

  {
    href:"/gallery",
    label:"Gallery",
  },

  {
    href:"/contact",
    label:"Contact",
  },

];





export default function Header(){

const pathname = usePathname();




return (

<header

className="
sticky
top-0
z-50
border-b
border-rose-100
bg-white/95
backdrop-blur-xl
shadow-sm
transition-all
duration-300
"

>





<div

className="
mx-auto
flex
h-20
max-w-7xl
items-center
justify-between
px-6
"

>








{/* Logo */}



<Link

href="/"

className="
flex
items-center
gap-3
"

>


<Image

src="/logo/yamunas-classics-logo.png"

alt="Yamuna's Classics"

width={64}
height={64}

className="
rounded-full
transition-transform
duration-300
hover:scale-105
"

priority

/>



<div>


<h1

className="
text-2xl
tracking-tight
font-bold
text-gray-900
"

>

Yamuna&apos;s Classics

</h1>


<p

className="
text-sm
tracking-wide
text-pink-600
"

>

Handmade with Love

</p>


</div>


</Link>









{/* Desktop Menu */}



<nav

className="
hidden
items-center
gap-10
lg:flex
"

>


{navLinks.map((link)=>(


<Link

key={link.href}

href={link.href}

className={`

relative
font-medium
transition-all
duration-300

${
pathname===link.href

? "text-emerald-600"

: "text-gray-700 hover:text-emerald-600"

}

after:absolute
after:left-0
after:-bottom-2
after:h-0.5
after:w-0
after:bg-emerald-600
after:transition-all
after:duration-300

hover:after:w-full

${
pathname===link.href

? "after:w-full"

: ""

}

`}

>

{link.label}

</Link>


))}



<CartIcon />



</nav>









{/* Mobile Menu Button */}

<div
className="
flex
items-center
"
>



</div>








</div>









{/* Mobile Navigation */}







</header>


);


}