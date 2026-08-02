import fs from "node:fs";
import path from "node:path";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

const contentDir = path.join(process.cwd(), "content/writing");

export type MdxPostMetadata = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  keywords?: string[];
};

type RawMetadata = {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  keywords?: string[];
};

export function getMdxSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getMdxPost(slug: string) {
  const source = fs.readFileSync(
    path.join(contentDir, `${slug}.mdx`),
    "utf8"
  );
  const { default: Content, metadata } = (await evaluate(source, {
    ...runtime,
  })) as unknown as {
    default: React.ComponentType;
    metadata: RawMetadata;
  };
  return { default: Content, metadata };
}

export async function getMdxPosts(): Promise<MdxPostMetadata[]> {
  const slugs = getMdxSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await getMdxPost(slug);
      return {
        slug,
        title: metadata.title,
        date: metadata.date,
        excerpt: metadata.excerpt,
        tags: metadata.tags ?? [],
        keywords: metadata.keywords,
      };
    })
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
