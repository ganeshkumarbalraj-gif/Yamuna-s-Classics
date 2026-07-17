"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { site } from "@/data/site";
import TextArea from "@/components/ui/TextArea";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const text = `Hello Yamuna,

My Name: ${name}

Email: ${email}

Phone: ${phone}

Message:
${message}`;

    const url = `https://wa.me/${site.whatsapp.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  }

  return (
    <section className="rounded-3xl bg-pink-50 p-10 shadow-sm">
      <div className="mb-10 text-center">
        <p className="font-semibold uppercase tracking-widest text-pink-600">
          Contact
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          We&apos;d Love to Hear From You
        </h2>

        <p className="mt-4 text-gray-600">
          Have a question about our handmade creations
          or workshops? Send us a message.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Details */}

        <div className="space-y-8">
          <div className="flex gap-4">
            <Phone className="mt-1 text-pink-600" />

            <div>
              <h3 className="font-semibold">Phone</h3>

              <a
                href={`tel:${site.phone}`}
                className="transition hover:text-pink-600"
              >
                {site.phone}
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <Mail className="mt-1 text-pink-600" />

            <div>
              <h3 className="font-semibold">Email</h3>

              <a
                href={`mailto:${site.email}`}
                className="transition hover:text-pink-600"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <MapPin className="mt-1 text-pink-600" />

            <div>
              <h3 className="font-semibold">Location</h3>

              <p>
                {site.city}, {site.state}, {site.country}
              </p>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="mb-4 font-semibold">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-white p-3 shadow transition hover:scale-110"
              >
                <Instagram />
              </a>

              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="rounded-full bg-white p-3 shadow transition hover:scale-110"
              >
                <Youtube />
              </a>

              <a
                href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full bg-green-500 p-3 text-white shadow transition hover:scale-110"
              >
                <MessageCircle />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <Input
            required
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            required
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            required
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <TextArea
  required
  placeholder="Your Message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="min-h-36 w-full rounded-xl border border-gray-300 bg-white p-4 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
/>

          <Button
            type="submit"
            className="w-full"
          >
            Send via WhatsApp
          </Button>
        </form>
      </div>
    </section>
  );
}