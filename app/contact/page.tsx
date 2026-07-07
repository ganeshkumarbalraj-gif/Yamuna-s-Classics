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

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you."
      />

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="space-y-8">

            <div>
              <h2 className="text-3xl font-bold">
                Get in Touch
              </h2>

              <p className="text-gray-600 mt-4">
                Have questions about products or workshops?
                We'd be happy to help.
              </p>
            </div>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <Phone className="text-pink-600" />
                <span>+91 97909 18673</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-pink-600" />
                <span>yamunasclassics@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-pink-600" />
                <span>Chennai, Tamil Nadu</span>
              </div>

              <div className="flex items-center gap-4">
                <MessageCircle className="text-green-600" />
                <span>WhatsApp Available</span>
              </div>

            </div>

          </div>

          <ContactSection />

        </div>

      </section>
      <section className="max-w-6xl mx-auto px-6 pb-20 space-y-10">
  <BusinessHours />
  <MapSection />
</section>
    </>
  );
}