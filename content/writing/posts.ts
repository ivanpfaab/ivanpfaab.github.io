import fs from "node:fs";
import path from "node:path";

const contentDir = path.join(process.cwd(), "content/writing");

export type MdxPostMetadata = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

type RawMetadata = { title: string; date: string; excerpt: string };

export function getMdxSlugs(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getMdxPost(slug: string) {
  const mod = (await import(`./${slug}.mdx`)) as {
    default: React.ComponentType;
    metadata: RawMetadata;
  };
  return mod;
}

export async function getMdxPosts(): Promise<MdxPostMetadata[]> {
  const slugs = getMdxSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await getMdxPost(slug);
      return { slug, ...metadata };
    })
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
