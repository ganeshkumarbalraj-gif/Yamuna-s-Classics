import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gradient-to-br from-white via-emerald-50/30 to-pink-50 py-20">
      <section className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Privacy Policy
        </h1>

        <p className="mt-6 leading-8 text-gray-600">
          Yamuna&apos;s Classics values your privacy. We collect only the
          information necessary to respond to your enquiries, process custom
          orders, and improve our services.
        </p>

        <p className="mt-5 leading-8 text-gray-600">
          We never sell or share your personal information with third parties
          except where required by law.
        </p>

        <p className="mt-5 leading-8 text-gray-600">
          A detailed privacy policy will be published before the official
          launch of our website.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-xl bg-gradient-to-r from-emerald-500 to-pink-500 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105"
        >
          ← Back to Home
        </Link>
      </section>
    </main>
  );
}