import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Yamuna's Classics",
    template: "%s | Yamuna's Classics",
  },

  description:
    "Handmade crochet, embroidery, paper crafts, workshops and personalized gifts.",

  metadataBase: new URL("https://www.yamunasclassics.com"),

  manifest: "/manifest.json",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={geist.variable}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Header />

        <main>{children}</main>

        <Footer />

        <FloatingWhatsApp />
      </body>
    </html>
  );
}