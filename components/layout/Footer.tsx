"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>
            <h2 className="text-2xl font-bold text-emerald-600">
              Yamuna&apos;s Classics
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Handmade creations crafted with love.
              From beautiful crochet and embroidery
              to creative workshops, every piece is
              thoughtfully designed to bring joy.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/" className="hover:text-emerald-600">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-emerald-600">
                  About
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-emerald-600">
                  Products
                </Link>
              </li>

              <li>
                <Link href="/gallery" className="hover:text-emerald-600">
                  Gallery
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-emerald-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Workshops */}

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Learn With Us
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>Crochet Workshops</li>
              <li>Embroidery Classes</li>
              <li>Paper Crafts</li>
              <li>Handmade Gifts</li>
              <li>Custom Orders</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-gray-600">

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-600" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-600" />
                <span>info@yamunasclassics.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-emerald-600" />
                <span>
                  Chennai,
                  <br />
                  Tamil Nadu,
                  India
                </span>
              </div>

            </div>

            {/* Social Icons */}

            <div className="mt-6 flex gap-4">

              <a
                href="#"
                className="rounded-full bg-white p-3 shadow transition hover:bg-emerald-600 hover:text-white"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="rounded-full bg-white p-3 shadow transition hover:bg-emerald-600 hover:text-white"
              >
                <Instagram size={18} />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Yamuna&apos;s Classics.
          Handmade with ❤️ in India.
        </div>
      </div>
    </footer>
  );
}