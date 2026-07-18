import { resources, type Resource } from "@/content/resources";
import { ExternalLinkIcon } from "../components/icons";

export const metadata = {
  title: "Resources",
};

function groupByCategory(items: Resource[]) {
  const groups = new Map<string, Resource[]>();
  for (const item of items) {
    const existing = groups.get(item.category) ?? [];
    existing.push(item);
    groups.set(item.category, existing);
  }
  return groups;
}

export default function ResourcesPage() {
  const groups = groupByCategory(resources);

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Resources
      </h1>
      <p className="mt-2 text-black/60 dark:text-white/60">
        Things I keep coming back to, across data, cloud, and analytics.
      </p>
      <div className="mt-10 flex flex-col gap-10">
        {Array.from(groups.entries()).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-lg font-medium tracking-tight">{category}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {items.map((resource) => (
                <li key={resource.url}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start justify-between gap-4 rounded-xl border border-black/10 p-4 transition-colors hover:border-black/20 dark:border-white/15 dark:hover:border-white/30"
                  >
                    <div>
                      <h3 className="font-medium">{resource.title}</h3>
                      <p className="mt-1 text-sm text-black/70 dark:text-white/70">
                        {resource.description}
                      </p>
                    </div>
                    <ExternalLinkIcon className="mt-1 size-4 shrink-0 text-black/40 transition-colors group-hover:text-black dark:text-white/40 dark:group-hover:text-white" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
