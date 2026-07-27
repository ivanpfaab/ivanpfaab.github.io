import Link from "next/link";
import { externalPosts } from "@/content/writing/external";
import { getMdxPosts } from "@/content/writing/posts";
import { ChevronRightIcon, ExternalLinkIcon } from "../components/icons";

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

type WritingItem =
  | {
      type: "external";
      title: string;
      date: string;
      excerpt: string;
      platform: string;
      url: string;
      embedUrl?: string;
      embedHeight?: number;
    }
  | {
      type: "internal";
      title: string;
      date: string;
      excerpt: string;
      slug: string;
    };

const cardClassName =
  "rounded-xl border border-black/10 p-5 dark:border-white/15";
const linkCardClassName = `group flex flex-col gap-2 transition-colors hover:border-black/20 dark:hover:border-white/30 ${cardClassName}`;

export default async function WritingPage() {
  const mdxPosts = await getMdxPosts();

  const items: WritingItem[] = [
    ...externalPosts.map(
      (post): WritingItem => ({ type: "external", ...post })
    ),
    ...mdxPosts.map((post): WritingItem => ({ type: "internal", ...post })),
  ].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Writing
      </h1>
      <p className="mt-2 text-black/60 dark:text-white/60">
        Posts and articles, on this site and elsewhere.
      </p>
      {items.length === 0 ? (
        <p className="mt-8 text-sm text-black/60 dark:text-white/60">
          Nothing published yet — check back soon.
        </p>
      ) : (
        <ul className="mt-8 flex flex-col gap-4">
          {items.map((item) => {
            const label =
              item.type === "external" ? item.platform : "On this site";
            const key = item.type === "external" ? item.url : item.slug;

            if (item.type === "external" && item.embedUrl) {
              return (
                <li key={key} className={cardClassName}>
                  <span className="text-xs font-medium uppercase tracking-wide text-black/50 dark:text-white/50">
                    {label} · {formatDate(item.date)}
                  </span>
                  <h2 className="mt-1 font-medium">{item.title}</h2>
                  <div className="mt-4 overflow-hidden rounded-lg">
                    <iframe
                      src={item.embedUrl}
                      title={`${item.title} — ${item.platform} post`}
                      height={item.embedHeight ?? 800}
                      className="w-full border-0"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm text-black/60 transition-colors hover:text-black dark:text-white/60 dark:hover:text-white"
                  >
                    View original
                    <ExternalLinkIcon className="size-4" />
                  </a>
                </li>
              );
            }

            const cardBody = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-black/50 dark:text-white/50">
                      {label} · {formatDate(item.date)}
                    </span>
                    <h2 className="mt-1 font-medium">{item.title}</h2>
                  </div>
                  {item.type === "external" ? (
                    <ExternalLinkIcon className="mt-1 size-4 shrink-0 text-black/40 transition-colors group-hover:text-black dark:text-white/40 dark:group-hover:text-white" />
                  ) : (
                    <ChevronRightIcon className="mt-1 size-4 shrink-0 text-black/40 transition-colors group-hover:text-black dark:text-white/40 dark:group-hover:text-white" />
                  )}
                </div>
                <p className="text-sm text-black/70 dark:text-white/70">
                  {item.excerpt}
                </p>
              </>
            );

            return (
              <li key={key}>
                {item.type === "external" ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={linkCardClassName}
                  >
                    {cardBody}
                  </a>
                ) : (
                  <Link
                    href={`/writing/${item.slug}`}
                    className={linkCardClassName}
                  >
                    {cardBody}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
