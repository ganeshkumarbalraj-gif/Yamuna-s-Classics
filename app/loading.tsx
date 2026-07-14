export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">

      <div className="text-center">

        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-pink-300 border-t-purple-600"></div>

        <p className="mt-6 text-lg text-gray-600">
          Loading...
        </p>

      </div>

    </main>
  );
}