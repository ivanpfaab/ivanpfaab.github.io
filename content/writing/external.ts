export type ExternalPost = {
  title: string;
  platform: "Medium" | "Dev.to" | "LinkedIn" | string;
  url: string;
  date: string; // ISO date, e.g. "2026-01-15"
  excerpt: string;
  // Optional iframe embed (e.g. a LinkedIn post embed URL). When present, the
  // post renders inline instead of as a plain link-out card. `embedHeight`
  // should match the height LinkedIn's own embed snippet suggests for that
  // post, since it varies with the post's content length.
  embedUrl?: string;
  embedHeight?: number;
};

export const externalPosts: ExternalPost[] = [
  {
    title: "Is history repeating itself right under our noses?",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7464322179791446016/",
    date: "2026-05-26",
    excerpt:
      "Drawing parallels between the 2000 Dot-Com crash and today's AI hype cycle — and why real value comes from patient engineering and genuine business applications, not hype-driven speculation.",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7464322179791446016?collapsed=1",
    embedHeight: 500,
  },
  {
    title:
      "Stop treating AI like a magic wand and start treating it like a math problem",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7411524531443503104/",
    date: "2026-01-26",
    excerpt:
      "Comparing reckless AI adoption to gambling, and making the case for calculated, systematic AI implementation grounded in human oversight rather than hopeful guessing.",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7411524531443503104?collapsed=1",
    embedHeight: 593,
  },
  {
    title: "BigQuery: Partitioning vs. Clustering – When to Use What?",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7325334665295224832/",
    date: "2025-07-26",
    excerpt:
      "A practical breakdown of when to use partitioning vs. clustering in BigQuery to improve query speed and reduce costs.",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7325334665295224832?collapsed=1",
    embedHeight: 593,
  },
];
