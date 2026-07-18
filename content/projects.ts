export type Project = {
  name: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  tags: string[];
  featured?: boolean;
};

// PLACEHOLDER — replace with your real projects. Keep 2-3 with `featured: true`
// so the Home page has something to highlight.
export const projects: Project[] = [
  {
    name: "PLACEHOLDER Project One",
    description:
      "PLACEHOLDER — one or two sentences on what this project does and why it matters.",
    repoUrl: "https://github.com/ivanpfaab/PLACEHOLDER",
    tags: ["data-engineering"],
    featured: true,
  },
  {
    name: "PLACEHOLDER Project Two",
    description: "PLACEHOLDER — description.",
    repoUrl: "https://github.com/ivanpfaab/PLACEHOLDER",
    tags: ["cloud"],
    featured: true,
  },
  {
    name: "PLACEHOLDER Project Three",
    description: "PLACEHOLDER — description.",
    repoUrl: "https://github.com/ivanpfaab/PLACEHOLDER",
    tags: ["analytics"],
  },
];
