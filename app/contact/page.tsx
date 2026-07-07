import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Contact | Yamuna's Classics",
  description: "Get in touch with Yamuna's Classics for handmade gifts, workshops and custom orders.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you."
      />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold">
            Let's Create Something Beautiful Together
          </h2>

          <p className="mt-6 text-gray-600">
            Whether you're looking for handmade gifts, custom orders, or workshop
            information, we'd be delighted to hear from you.
          </p>

          <div className="mt-10 space-y-4">
            <p><strong>📍 Location:</strong> Chennai, India</p>
            <p><strong>📧 Email:</strong> yamunasclassics@gmail.com</p>
            <p><strong>📱 WhatsApp:</strong> +91 97909 18673</p>
          </div>
        </div>
      </main>
    </>
  );
}