"use client";

import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";


import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";

import { site } from "@/data/site";




export default function ContactSection() {


  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [message,setMessage] = useState("");





  function handleSubmit(
    e:React.FormEvent<HTMLFormElement>
  ){

    e.preventDefault();


    const text = `

Hello Yamuna,

My Name: ${name}

Email: ${email}

Phone: ${phone}

Message:
${message}

`;



    const whatsappUrl =
      `https://wa.me/${site.whatsapp.replace(
        /\D/g,
        ""
      )}?text=${encodeURIComponent(text)}`;



    window.open(
      whatsappUrl,
      "_blank"
    );

  }







  return (

    <section

      className="
      bg-gradient-to-b
      from-white
      via-rose-50/40
      to-white
      py-24
      "

    >





      <div

        className="
        mx-auto
        max-w-7xl
        px-6
        "

      >





        <div

          className="
          rounded-[32px]
          border
          border-gray-100
          bg-white
          p-8
          shadow-lg
          md:p-12
          "

        >






          {/* Header */}



          <div

            className="
            mx-auto
            max-w-3xl
            text-center
            "

          >



            <p

              className="
              font-semibold
              uppercase
              tracking-[0.3em]
              text-pink-600
              "

            >

              Contact

            </p>




            <h2

              className="
              mt-5
              text-4xl
              font-bold
              text-gray-900
              "

            >

              We&apos;d Love to Hear From You

            </h2>





            <p

              className="
              mt-5
              text-lg
              leading-8
              text-gray-600
              "

            >

              Have a question about our handmade creations
              or workshops? Send us a message.

            </p>



          </div>







          <div

            className="
            mt-14
            grid
            gap-12
            lg:grid-cols-2
            "

          >







            {/* Contact Information */}



            <div

              className="
              space-y-6
              "

            >





              <ContactItem
                icon={<Phone size={22}/>}
                title="Phone"
              >

                <a
                  href={`tel:${site.phone}`}
                  className="hover:text-pink-600"
                >
                  {site.phone}
                </a>

              </ContactItem>







              <ContactItem
                icon={<Mail size={22}/>}
                title="Email"
              >

                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-pink-600"
                >
                  {site.email}
                </a>


              </ContactItem>







              <ContactItem
                icon={<MapPin size={22}/>}
                title="Location"
              >

                {site.city}, {site.state}, {site.country}


              </ContactItem>







              <div className="pt-5">


                <h3
                  className="
                  mb-4
                  font-semibold
                  text-gray-900
                  "
                >

                  Follow Us

                </h3>




                <div className="flex gap-4">


                  <SocialButton href={site.instagram}>
                    <FaInstagram size={22}/>
                  </SocialButton>


                  <SocialButton href={site.youtube}>
                    <FaYoutube size={22}/>
                  </SocialButton>


                  <SocialButton
                    href={`https://wa.me/${site.whatsapp.replace(/\D/g,"")}`}
                  >
                    <FaWhatsapp size={22}/>
                  </SocialButton>


                </div>


              </div>




            </div>








            {/* Form */}



            <form

              onSubmit={handleSubmit}

              className="
              space-y-5
              rounded-3xl
              bg-gray-50
              p-6
              "

            >



              <Input

                required

                placeholder="Your Name"

                value={name}

                onChange={(e)=>setName(e.target.value)}

              />





              <Input

                required

                type="email"

                placeholder="Email Address"

                value={email}

                onChange={(e)=>setEmail(e.target.value)}

              />





              <Input

                required

                placeholder="Phone Number"

                value={phone}

                onChange={(e)=>setPhone(e.target.value)}

              />






              <TextArea

                required

                placeholder="Your Message"

                value={message}

                onChange={(e)=>setMessage(e.target.value)}

              />






              <Button

                type="submit"

                className="w-full"

              >

                Send via WhatsApp

              </Button>




            </form>






          </div>





        </div>





      </div>





    </section>


  );

}









function ContactItem({

  icon,

  title,

  children,

}:{

  icon:React.ReactNode;

  title:string;

  children:React.ReactNode;

}){


  return (

    <div

      className="
      flex
      gap-4
      rounded-2xl
      bg-gray-50
      p-5
      "

    >



      <div className="text-pink-600">

        {icon}

      </div>





      <div>


        <h3 className="font-semibold text-gray-900">

          {title}

        </h3>



        <div className="text-gray-600">

          {children}

        </div>


      </div>




    </div>


  );

}







function SocialButton({

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
      bg-pink-50
      text-pink-600
      shadow
      transition-all
      duration-300
      hover:scale-110
      hover:bg-pink-500
      hover:text-white
      "

    >

      {children}

    </a>


  );

}