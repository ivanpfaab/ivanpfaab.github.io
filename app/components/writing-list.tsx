"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRightIcon, ExternalLinkIcon } from "./icons";

export type WritingItem =
  | {
      type: "external";
      title: string;
      date: string;
      excerpt: string;
      tags: string[];
      keywords?: string[];
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
      tags: string[];
      keywords?: string[];
      slug: string;
    };

const cardClassName =
  "rounded-xl border border-black/10 p-5 dark:border-white/15";
const linkCardClassName = `group flex flex-col gap-2 transition-colors hover:border-black/20 dark:hover:border-white/30 ${cardClassName}`;

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function matchesSearch(item: WritingItem, query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return true;

  if (item.title.toLowerCase().includes(normalized)) return true;

  return (item.keywords ?? []).some((keyword) =>
    keyword.toLowerCase().includes(normalized)
  );
}

function matchesTags(item: WritingItem, selectedTags: string[]) {
  if (selectedTags.length === 0) return true;
  return selectedTags.some((tag) => item.tags.includes(tag));
}

export function WritingList({ items }: { items: WritingItem[] }) {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    for (const item of items) {
      for (const tag of item.tags) tags.add(tag);
    }
    return Array.from(tags).sort((a, b) => a.localeCompare(b));
  }, [items]);

  const filtered = useMemo(
    () =>
      items.filter(
        (item) => matchesSearch(item, query) && matchesTags(item, selectedTags)
      ),
    [items, query, selectedTags]
  );

  function toggleTag(tag: string) {
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((value) => value !== tag)
        : [...current, tag]
    );
  }

  if (items.length === 0) {
    return (
      <p className="mt-8 text-sm text-black/60 dark:text-white/60">
        Nothing published yet — check back soon.
      </p>
    );
  }

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium uppercase tracking-wide text-black/50 dark:text-white/50">
            Search
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title…"
            className="w-full rounded-lg border border-black/10 bg-transparent px-3 py-2 text-sm outline-none transition-colors placeholder:text-black/40 focus:border-black/30 dark:border-white/15 dark:placeholder:text-white/40 dark:focus:border-white/40"
          />
        </label>

        {allTags.length > 0 && (
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium uppercase tracking-wide text-black/50 dark:text-white/50">
              Tags
            </span>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => {
                const active = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    aria-pressed={active}
                    className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                      active
                        ? "border-black/40 bg-black/5 text-black dark:border-white/50 dark:bg-white/10 dark:text-white"
                        : "border-black/10 text-black/70 hover:border-black/25 dark:border-white/15 dark:text-white/70 dark:hover:border-white/30"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-sm text-black/60 dark:text-white/60">
          No posts match your filters.
        </p>
      ) : (
        <ul className="mt-8 flex flex-col gap-4">
          {filtered.map((item) => {
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
                  {item.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-black/10 px-2 py-0.5 text-xs text-black/60 dark:border-white/15 dark:text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
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
                    {item.tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-black/10 px-2 py-0.5 text-xs text-black/60 dark:border-white/15 dark:text-white/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
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
    </div>
  );
}
