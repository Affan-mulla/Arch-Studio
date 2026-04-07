"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#d8e0d5] px-6">
      <div className="max-w-md text-center">
        <h1 className="font-(family-name:--font-cormorant) text-[3rem] text-[#263226]">
          Something went wrong
        </h1>
        <p className="mt-4 font-(family-name:--font-jost) text-[1.1rem] text-[#687368]">
          An unexpected error occurred. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex items-center gap-2 border border-[#2c3c2d] px-5 py-3 font-(family-name:--font-jost) text-sm uppercase tracking-[0.14em] text-[#2c3c2d]"
        >
          Try again →
        </button>
      </div>
    </main>
  );
}
