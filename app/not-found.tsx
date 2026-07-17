import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gradient-to-b from-white to-rose-50 px-6">

      <div className="max-w-xl text-center">

        <h1 className="text-7xl font-bold text-rose-500">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-6 leading-8 text-gray-600">
          Sorry, the page you are looking for does not exist
          or may have been moved.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Button href="/">
            Go Home
          </Button>

          <Button
            href="/products"
            variant="secondary"
          >
            Browse Products
          </Button>

        </div>

      </div>

    </main>
  );
}