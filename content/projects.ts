export type Project = {
  name: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  tags: string[];
  featured?: boolean;
};

// Add real projects here when ready. Keep 2-3 with `featured: true` so the
// Home page has something to highlight. Until then, this stays empty and the
// Projects page shows a "Coming soon" message.
export const projects: Project[] = [];
