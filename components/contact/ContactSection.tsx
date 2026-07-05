"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactSection() {
  return (
    <section className="py-24 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-pink-600 font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-bold font-heading mt-3">
            We'd Love to Hear From You
          </h2>

          <p className="text-gray-600 mt-5">
            Have a question about products or workshops? Get in touch with us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Details */}
          <div className="space-y-8">

            <div className="flex gap-4 items-start">
              <Phone className="text-pink-600 mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Mail className="text-pink-600 mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>hello@yamunasclassics.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <MapPin className="text-pink-600 mt-1" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p>Chennai, Tamil Nadu, India</p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form className="space-y-5">

            <Input placeholder="Your Name" />

            <Input type="email" placeholder="Email Address" />

            <Input placeholder="Phone Number" />

            <textarea
              placeholder="Your Message"
              className="w-full rounded-md border p-3 min-h-36"
            />

            <Button className="w-full">
              Send Message
            </Button>

          </form>

        </div>

      </div>
    </section>
  );
}