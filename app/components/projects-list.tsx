"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/content/projects";
import { ProjectCard } from "./project-card";

function matchesSearch(project: Project, query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return true;
  return project.name.toLowerCase().includes(normalized);
}

function matchesTags(project: Project, selectedTags: string[]) {
  if (selectedTags.length === 0) return true;
  return selectedTags.some((tag) => project.tags.includes(tag));
}

export function ProjectsList({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    for (const project of projects) {
      for (const tag of project.tags) tags.add(tag);
    }
    return Array.from(tags).sort((a, b) => a.localeCompare(b));
  }, [projects]);

  const filtered = useMemo(
    () =>
      projects.filter(
        (project) =>
          matchesSearch(project, query) && matchesTags(project, selectedTags)
      ),
    [projects, query, selectedTags]
  );

  function toggleTag(tag: string) {
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((value) => value !== tag)
        : [...current, tag]
    );
  }

  if (projects.length === 0) {
    return (
      <p className="mt-8 text-sm text-black/60 dark:text-white/60">
        Coming soon...
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
            placeholder="Search by name…"
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
          No projects match your filters.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              headingLevel="h2"
            />
          ))}
        </div>
      )}
    </div>
  );
}
