import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">

              <Image
                src="/logo/yamunas-classics-logo.png"
                alt="Yamuna's Classics"
                width={55}
                height={55}
              />

              <h3 className="text-2xl font-bold">
                Yamuna's Classics
              </h3>

            </div>

            <p className="mt-5 text-zinc-300 leading-7">
              Handmade crafts, customized gifts, creative workshops and artistic
              learning experiences created with love and passion.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h4 className="font-semibold text-lg mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-zinc-300">

              <li><Link href="/">Home</Link></li>

              <li><Link href="/products">Products</Link></li>

              <li><Link href="/gallery">Gallery</Link></li>

              <li><Link href="/workshops">Workshops</Link></li>

              <li><Link href="/about">About</Link></li>

              <li><Link href="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="font-semibold text-lg mb-5">
              Contact
            </h4>

            <div className="space-y-4 text-zinc-300">

              <div className="flex gap-3">

                <Phone size={18} />

                <span>+91 XXXXX XXXXX</span>

              </div>

              <div className="flex gap-3">

                <Mail size={18} />

                <span>hello@yamunasclassics.com</span>

              </div>

              <div className="flex gap-3">

                <MapPin size={18} />

                <span>Chennai, Tamil Nadu</span>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h4 className="font-semibold text-lg mb-5">
              Follow Us
            </h4>

            <div className="flex gap-4 text-2xl">

              <FaFacebookF className="cursor-pointer hover:text-pink-400 transition" />

              <FaInstagram className="cursor-pointer hover:text-pink-400 transition" />

              <FaYoutube className="cursor-pointer hover:text-pink-400 transition" />

              <FaPinterestP className="cursor-pointer hover:text-pink-400 transition" />

              <FaWhatsapp className="cursor-pointer hover:text-pink-400 transition" />

            </div>

            <p className="mt-6 text-zinc-400 text-sm">
              Follow us for new creations, workshops and creative inspiration.
            </p>

          </div>

        </div>

        <div className="border-t border-zinc-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Yamuna's Classics. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-zinc-400 text-sm mt-4 md:mt-0">
            Made with <Heart className="text-pink-500" size={16} fill="currentColor" /> in India
          </p>

        </div>

      </div>
    </footer>
  );
}