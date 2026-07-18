import { profile } from "@/content/profile";
import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/15">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-black/60 dark:text-white/60 sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        <div className="flex items-center gap-4">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
