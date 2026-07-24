"use client";

import Button from "@/components/ui/Button";


interface WhatsAppButtonProps {
  subject?: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
}


export default function WhatsAppButton({

  subject = "Yamuna's Classics",

  message,

  className = "",

  children,

}: WhatsAppButtonProps) {


  const phone =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";



  const whatsappMessage = encodeURIComponent(

    message ??
    `Hello Yamuna's Classics! I'm interested in "${subject}". Please share more details.`

  );



  const whatsappUrl =
    `https://wa.me/${phone}?text=${whatsappMessage}`;



  return (

    <Button

      href={whatsappUrl}

      external

      className={className}

    >

      {children ?? "💬 Enquire on WhatsApp"}

    </Button>

  );

}