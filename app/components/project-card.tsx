import type { Project } from "@/content/projects";
import { ExternalLinkIcon, GithubIcon } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-black/10 p-5 dark:border-white/15">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-medium">{project.name}</h3>
        <div className="flex shrink-0 items-center gap-3 text-black/60 dark:text-white/60">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} repository`}
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            <GithubIcon className="size-5" />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} live site`}
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              <ExternalLinkIcon className="size-5" />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-black/70 dark:text-white/70">
        {project.description}
      </p>
      {project.tags.length > 0 && (
        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-black/5 px-2.5 py-1 text-xs text-black/60 dark:bg-white/10 dark:text-white/60"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
