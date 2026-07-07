import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import {
  Phone,
  Mail,
  MapPin,
  Heart,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-pink-50 via-white to-sky-50 border-t border-pink-100">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <Image
              src="/logo/yamunas-classics-logo.png"
              alt="Yamuna's Classics"
              width={180}
              height={180}
              className="mb-5"
            />

            <p className="leading-7 text-gray-600">
              Handmade creations crafted with love, creativity and passion.
              From crochet and embroidery to workshops and customised gifts,
              every piece tells a beautiful story.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <div className="space-y-3">

              <Link href="/">Home</Link><br />
              <Link href="/products">Products</Link><br />
              <Link href="/workshops">Workshops</Link><br />
              <Link href="/gallery">Gallery</Link><br />
              <Link href="/contact">Contact</Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-gray-600">

              <div className="flex gap-3">
                <Phone size={18} />
                {site.phone}
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                {site.email}
              </div>

              <div className="flex gap-3">
                <MapPin size={18} />
                {site.city}, {site.state}
              </div>

            </div>

          </div>

          {/* About */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Handmade With Love
            </h3>

            <p className="leading-7 text-gray-600">
              Every creation is thoughtfully designed and handcrafted,
              making every gift unique and memorable.
            </p>

          </div>

        </div>

      </div>

      <div className="border-t border-pink-100">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">

          <p className="text-sm text-gray-600">
            © {year} Yamuna's Classics. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-sm text-gray-600">
            Made with <Heart size={16} className="text-pink-500 fill-pink-500" /> in India
          </p>

        </div>

      </div>

    </footer>
  );
}