import { externalPosts } from "@/content/writing/external";
import { getMdxPosts } from "@/content/writing/posts";
import {
  WritingList,
  type WritingItem,
} from "../components/writing-list";

export const metadata = {
  title: "Writing",
};

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
      <WritingList items={items} />
    </section>
  );
}
