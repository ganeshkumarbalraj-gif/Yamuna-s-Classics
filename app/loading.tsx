export default function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white">

      <div className="text-center">

        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-rose-200 border-t-rose-500" />

        <h2 className="mt-6 text-2xl font-semibold text-gray-900">
          Loading...
        </h2>

        <p className="mt-2 text-gray-500">
          Preparing beautiful handmade creations for you.
        </p>

      </div>

    </main>
  );
}