import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-rose-100 bg-gradient-to-b from-white to-rose-50">

      {/* Decorative Background */}

      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-rose-100/40 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-pink-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-gray-900">
              Yamuna&apos;s Classics
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Handmade creations crafted with love.
              Crochet, embroidery, paper crafts,
              mehendi, baking and inspiring creative
              workshops.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition hover:text-rose-600"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-gray-600 transition hover:text-rose-600"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="text-gray-600 transition hover:text-rose-600"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/workshops"
                  className="text-gray-600 transition hover:text-rose-600"
                >
                  Workshops
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="text-gray-600 transition hover:text-rose-600"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 transition hover:text-rose-600"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              Contact
            </h3>

            <div className="space-y-4 text-gray-600">

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-rose-500" />
                <span>{site.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-rose-500" />
                <span>{site.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-rose-500" />
                <span>{site.address}</span>
              </div>

            </div>

          </div>

          {/* Follow Us */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-3 shadow transition hover:-translate-y-1 hover:bg-rose-500 hover:text-white"
              >
                <Facebook size={20} />
              </a>

              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-3 shadow transition hover:-translate-y-1 hover:bg-rose-500 hover:text-white"
              >
                <Instagram size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-rose-100 pt-8 text-center text-sm text-gray-500">

          © {new Date().getFullYear()}  - Yamuna&apos;s Classics.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}