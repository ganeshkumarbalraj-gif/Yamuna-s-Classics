import PageHeader from "@/components/layout/PageHeader";
import ContactSection from "@/components/contact/ContactSection";
import BusinessHours from "@/components/contact/BusinessHours";
import MapSection from "@/components/contact/MapSection";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        name="Contact Us"
        subtitle="We&apos;d Love to Hear From You."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">

          {/* Contact Information */}

          <div>
            <h2 className="text-3xl font-bold">
              Get in Touch
            </h2>

            <p className="mt-4 text-gray-600">
              Have questions about our handmade creations,
              customised gifts or workshops?
              We&apos;d love to help.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <Phone className="text-pink-600" />

                <a
                  href={`tel:${site.phone}`}
                  className="transition hover:text-pink-600"
                >
                  {site.phone}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-pink-600" />

                <a
                  href={`mailto:${site.email}`}
                  className="transition hover:text-pink-600"
                >
                  {site.email}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-pink-600" />

                <span>
                  {site.city}, {site.state}, {site.country}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MessageCircle className="text-green-600" />

                <a
                  href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-green-700 hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>

            </div>
          </div>

          <ContactSection />

        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 pb-20">
        <BusinessHours />
        <MapSection />
      </section>
    </>
  );
}