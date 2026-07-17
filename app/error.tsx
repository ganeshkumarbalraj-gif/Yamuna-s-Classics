"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-white px-6">

      <div className="max-w-lg text-center">

        <h1 className="text-6xl font-bold text-rose-500">
          Oops!
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-gray-900">
          Something went wrong
        </h2>

        <p className="mt-6 text-gray-600">
          An unexpected error occurred.
          Please try again.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Button
            onClick={() => reset()}
          >
            Try Again
          </Button>

          <Button
            href="/"
            variant="secondary"
          >
            Home
          </Button>

        </div>

      </div>

    </main>
  );
}