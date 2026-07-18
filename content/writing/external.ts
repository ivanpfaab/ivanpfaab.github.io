export type ExternalPost = {
  title: string;
  platform: "Medium" | "Dev.to" | "LinkedIn" | string;
  url: string;
  date: string; // ISO date, e.g. "2026-01-15"
  excerpt: string;
};

// PLACEHOLDER — replace with links to posts you've written elsewhere.
export const externalPosts: ExternalPost[] = [
  {
    title: "PLACEHOLDER — Post title",
    platform: "Medium",
    url: "https://medium.com/@PLACEHOLDER/PLACEHOLDER",
    date: "2026-01-01",
    excerpt: "PLACEHOLDER — one-sentence summary of the post.",
  },
];
