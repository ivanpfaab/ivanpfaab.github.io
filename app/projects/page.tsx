import { projects } from "@/content/projects";
import { ProjectCard } from "../components/project-card";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Projects
      </h1>
      <p className="mt-2 text-black/60 dark:text-white/60">
        A selection of things I&apos;ve built.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
