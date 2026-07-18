import Image from "next/image";
import { profile } from "@/content/profile";
import { SocialLinks } from "./components/social-links";

export default function Home() {
  return (
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
  );
}
