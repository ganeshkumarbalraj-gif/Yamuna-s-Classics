import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Heart,
} from "lucide-react";

import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-pink-50">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <Image
              src="/logo/yamunas-classics-logo.png"
              alt="Yamuna&apos;s Classics"
              width={170}
              height={85}
              style={{
                width: "170px",
                height: "auto",
              }}
            />

            <p className="mt-6 leading-7 text-gray-600">
              Every creation at <strong>Yamuna&apos;s Classics</strong> is
              handcrafted with love, patience and creativity. We specialize in
              crochet, embroidery, paper crafts, personalized gifts and
              inspiring workshops.
            </p>

            <div className="mt-6 inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
              <Heart className="mr-2 h-4 w-4 fill-emerald-600" />
              Handmade with Love in India
            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-lg font-bold text-gray-900">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link href="/" className="transition hover:text-emerald-600">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-emerald-600">
                  About
                </Link>
              </li>

              <li>
                <Link href="/products" className="transition hover:text-emerald-600">
                  Products
                </Link>
              </li>

              <li>
                <Link href="/workshops" className="transition hover:text-emerald-600">
                  Workshops
                </Link>
              </li>

              <li>
                <Link href="/gallery" className="transition hover:text-emerald-600">
                  Gallery
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition hover:text-emerald-600">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Categories */}

          <div>

            <h3 className="mb-5 text-lg font-bold text-gray-900">
              Our Specialities
            </h3>

            <ul className="space-y-3 text-gray-600">

              <li>🧶 Crochet Creations</li>

              <li>🪡 Embroidery Art</li>

              <li>🎁 Personalized Gifts</li>

              <li>🎉 Festive Decorations</li>

              <li>📜 Paper Crafts</li>

              <li>🎓 Creative Workshops</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-lg font-bold text-gray-900">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">

                <Phone className="mt-1 h-5 w-5 text-emerald-600" />

                <a
                  href={`tel:${site.phone}`}
                  className="transition hover:text-emerald-600"
                >
                  {site.phone}
                </a>

              </div>

              <div className="flex items-start gap-3">

                <Mail className="mt-1 h-5 w-5 text-emerald-600" />

                <a
                  href={`mailto:${site.email}`}
                  className="transition hover:text-emerald-600"
                >
                  {site.email}
                </a>

              </div>

              <div className="flex items-start gap-3">

                <MapPin className="mt-1 h-5 w-5 text-emerald-600" />

                <span>
                  {site.city}, {site.state}
                </span>

              </div>

            </div>

            {/* Social Icons */}

            <div className="mt-8 flex gap-4">

              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-3 shadow transition hover:-translate-y-1 hover:bg-pink-500 hover:text-white"
              >
                <Instagram size={20} />
              </a>

              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-3 shadow transition hover:-translate-y-1 hover:bg-red-500 hover:text-white"
              >
                <Youtube size={20} />
              </a>

              <a
                href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-3 shadow transition hover:-translate-y-1 hover:bg-emerald-500 hover:text-white"
              >
                <MessageCircle size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="mt-14 border-t border-emerald-100 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

            <p>
              © {year} - Yamuna&apos;s Classics. All Rights Reserved.
            </p>

            <div className="flex gap-6">

              <Link
                href="/privacy-policy"
                className="transition hover:text-emerald-600"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-emerald-600"
              >
                Terms
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}