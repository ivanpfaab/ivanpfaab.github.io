import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

// TODO(step 5): source these from content/profile.ts once the content data layer lands.
const socialLinks = [
  { href: "https://github.com/ivanpfaab", label: "GitHub", Icon: GithubIcon },
  { href: "mailto:pfaabivan@gmail.com", label: "Email", Icon: MailIcon },
  { href: "#", label: "LinkedIn", Icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/15">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-black/60 dark:text-white/60 sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Ivan Pfaab</p>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
