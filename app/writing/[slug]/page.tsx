import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMdxPost, getMdxSlugs } from "@/content/writing/posts";

export function generateStaticParams() {
  const slugs = getMdxSlugs();
  // Static export rejects an empty params list (misleading "missing
  // generateStaticParams" error). Keep a placeholder until MDX posts exist.
  if (slugs.length === 0) {
    return [{ slug: "__placeholder__" }];
  }
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!getMdxSlugs().includes(slug)) return {};
  const { metadata } = await getMdxPost(slug);
  return { title: metadata.title, description: metadata.excerpt };
}

export default async function WritingPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getMdxSlugs().includes(slug)) notFound();

  const { default: Post, metadata } = await getMdxPost(slug);

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-16">
      <p className="text-xs font-medium uppercase tracking-wide text-black/50 dark:text-white/50">
        {formatDate(metadata.date)}
      </p>
      <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
        {metadata.title}
      </h1>
      <div className="prose prose-neutral mt-8 max-w-none dark:prose-invert">
        <Post />
      </div>
    </article>
  );
}
