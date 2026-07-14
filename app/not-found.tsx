import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-sky-50 via-white to-pink-50 px-6">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-pink-500">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-5 text-lg text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>

        <Link
          href="/"
          className="mt-10 inline-block rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 px-8 py-4 font-semibold text-white hover:opacity-90"
        >
          Return Home
        </Link>

      </div>

    </main>
  );
}