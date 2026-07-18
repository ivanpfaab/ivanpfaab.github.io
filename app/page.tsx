import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { SocialLinks } from "./components/social-links";
import { ProjectCard } from "./components/project-card";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 py-16 text-center sm:flex-row sm:items-start sm:gap-10 sm:py-24 sm:text-left">
        <Image
          src={profile.photo}
          alt={profile.name}
          width={160}
          height={160}
          priority
          className="size-40 shrink-0 rounded-full object-cover ring-1 ring-black/10 dark:ring-white/15"
        />
        <div className="flex flex-col items-center gap-5 sm:items-start">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-1 text-lg text-black/70 dark:text-white/70">
              {profile.title} at {profile.company}
            </p>
            <p className="mt-1 text-sm text-black/50 dark:text-white/50">
              {profile.tagline}
            </p>
          </div>
          <p className="max-w-xl text-black/80 dark:text-white/80">
            {profile.bio}
          </p>
          <div className="flex items-center gap-4">
            <SocialLinks iconClassName="size-5" />
          </div>
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="mx-auto w-full max-w-5xl px-6 pb-16 sm:pb-24">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="text-sm text-black/60 transition-colors hover:text-black dark:text-white/60 dark:hover:text-white"
            >
              View all →
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
