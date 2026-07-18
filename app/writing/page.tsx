import { externalPosts } from "@/content/writing/external";
import { ExternalLinkIcon } from "../components/icons";

export const metadata = {
  title: "Writing",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function WritingPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Writing
      </h1>
      <p className="mt-2 text-black/60 dark:text-white/60">
        Posts and articles I&apos;ve written elsewhere.
      </p>
      <ul className="mt-8 flex flex-col gap-4">
        {externalPosts.map((post) => (
          <li key={post.url}>
            <a
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-2 rounded-xl border border-black/10 p-5 transition-colors hover:border-black/20 dark:border-white/15 dark:hover:border-white/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-black/50 dark:text-white/50">
                    {post.platform} · {formatDate(post.date)}
                  </span>
                  <h2 className="mt-1 font-medium">{post.title}</h2>
                </div>
                <ExternalLinkIcon className="mt-1 size-4 shrink-0 text-black/40 transition-colors group-hover:text-black dark:text-white/40 dark:group-hover:text-white" />
              </div>
              <p className="text-sm text-black/70 dark:text-white/70">
                {post.excerpt}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
