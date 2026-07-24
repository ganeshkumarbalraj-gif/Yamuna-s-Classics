import type { Metadata } from "next";
import {
  Playfair_Display,
  Poppins,
} from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { CartProvider } from "@/context/CartContext";


const playfair = Playfair_Display({
  subsets:["latin"],
  variable:"--font-playfair",
});


const poppins = Poppins({
  subsets:["latin"],
  weight:[
    "300",
    "400",
    "500",
    "600",
    "700"
  ],
  variable:"--font-poppins",
});



export const metadata:Metadata = {

  metadataBase:
    new URL(
      "https://www.yamunasclassics.com"
    ),


  title:{

    default:
      "Yamuna's Classics",

    template:
      "%s | Yamuna's Classics",

  },


  description:
    "Handcrafted crochet, embroidery, paper crafts, handmade gifts and creative workshops.",


  keywords:[

    "Crochet",

    "Embroidery",

    "Handmade Gifts",

    "Paper Crafts",

    "Workshops",

    "Yamuna's Classics",

  ],


  authors:[

    {

      name:
        "Yamuna's Classics",

    },

  ],


  creator:
    "Yamuna's Classics",


  openGraph:{

    title:
      "Yamuna's Classics",

    description:
      "Beautiful handmade creations crafted with love.",

    url:
      "https://www.yamunasclassics.com",

    siteName:
      "Yamuna's Classics",

    locale:
      "en_IN",

    type:
      "website",

    images:[

      {

        url:
          "/og-image.jpg",

        width:
          1200,

        height:
          630,

        alt:
          "Yamuna's Classics",

      },

    ],

  },


  icons:{

    icon:
      "/icon.png",

    apple:
      "/apple-icon.png",

  },


};



export default function RootLayout({

 children,

}:Readonly<{

 children:React.ReactNode;

}>) {


return (

<html
  lang="en"
  className={`${playfair.variable} ${poppins.variable}`}
>


<body

className="
bg-white
text-gray-800
antialiased
"

>


<CartProvider>


<Header />


<main>

{children}

</main>


<Footer />


</CartProvider>


</body>


</html>

);


}