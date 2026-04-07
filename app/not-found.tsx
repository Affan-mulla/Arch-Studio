import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#d8e0d5] px-6">
      <div className="max-w-md text-center">
        <p className="font-(family-name:--font-jost) text-sm uppercase tracking-[0.18em] text-[#7b8577]">
          404
        </p>
        <h1 className="mt-4 font-(family-name:--font-cormorant) text-[3.5rem] leading-[0.94] text-[#263226]">
          Page not found
        </h1>
        <p className="mt-5 font-(family-name:--font-jost) text-[1.1rem] text-[#687368]">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 border border-[#2c3c2d] px-5 py-3 font-(family-name:--font-jost) text-sm uppercase tracking-[0.14em] text-[#2c3c2d] transition-colors hover:bg-[#2c3c2d] hover:text-[#d8e0d5]"
        >
          Return home →
        </Link>
      </div>
    </main>
  );
}
