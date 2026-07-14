import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <main className="bg-gradient-to-br from-white via-pink-50/30 to-emerald-50 py-20">
      <section className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Terms & Conditions
        </h1>

        <p className="mt-6 leading-8 text-gray-600">
          By using this website, you agree to use it responsibly and in
          accordance with applicable laws.
        </p>

        <p className="mt-5 leading-8 text-gray-600">
          Product availability, pricing, and workshop schedules may change
          without prior notice.
        </p>

        <p className="mt-5 leading-8 text-gray-600">
          Complete Terms &amp; Conditions will be published before the official
          launch of Yamuna&apos;s Classics.
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