import type { Metadata } from "next";
import { Playfair_Display, Poppins, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "Yamuna's Classics",
    template: "%s | Yamuna's Classics",
  },
  description:
    "Handcrafted gifts, crochet, embroidery, workshops and creative learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${playfair.variable} ${poppins.variable}`}>
        <Header />

        <main>{children}</main>

        <Footer />

        <WhatsAppButton />
<FloatingWhatsApp />
      </body>
    </html>
  );
}