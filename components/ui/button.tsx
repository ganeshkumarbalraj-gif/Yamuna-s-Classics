"use client";


import Link from "next/link";

import clsx from "clsx";

import { ReactNode } from "react";



interface ButtonProps {

  children: ReactNode;

  href?: string;

  external?: boolean;

  type?: "button" | "submit" | "reset";

  variant?: "primary" | "secondary" | "outline";

  className?: string;

  onClick?: () => void;

}




export default function Button({

  children,

  href,

  external = false,

  type = "button",

  variant = "primary",

  className = "",

  onClick,

}: ButtonProps) {



  const classes = clsx(


    // Common button style

    "inline-flex",
    "items-center",
    "justify-center",

    "h-12",

    "px-6",

    "rounded-full",

    "border",

    "font-body",

    "font-semibold",

    "transition-all",

    "duration-300",

    "hover:bg-emerald-600",

    "hover:border-emerald-600",

    "hover:text-white",

    "hover:shadow-lg",

    "active:scale-95",



    {


      // Primary button

      "border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 text-white":

        variant === "primary",



      // Secondary button

      "border-pink-500 bg-white text-pink-600":

        variant === "secondary",



      // Outline button

      "border-gray-300 bg-white text-gray-700":

        variant === "outline",


    },


    className


  );





  if (href) {



    if (external) {


      return (

        <a

          href={href}

          target="_blank"

          rel="noopener noreferrer"

          className={classes}

        >

          {children}


        </a>

      );


    }



    return (

      <Link

        href={href}

        className={classes}

      >

        {children}


      </Link>

    );


  }





  return (

    <button

      type={type}

      className={classes}

      onClick={onClick}

    >

      {children}


    </button>

  );


}