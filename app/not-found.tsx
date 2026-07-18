import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-wide text-black/50 dark:text-white/50">
        404
      </p>
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Page not found
      </h1>
      <p className="max-w-md text-black/70 dark:text-white/70">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium transition-colors hover:border-black/20 dark:border-white/15 dark:hover:border-white/30"
      >
        Back home
      </Link>
    </section>
  );
}
