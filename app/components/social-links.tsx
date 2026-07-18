import { profile } from "@/content/profile";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const items = [
  { href: profile.social.github, label: "GitHub", Icon: GithubIcon },
  { href: `mailto:${profile.social.email}`, label: "Email", Icon: MailIcon },
  { href: profile.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
].filter((item) => item.href !== "PLACEHOLDER");

export function SocialLinks({ iconClassName = "size-5" }: { iconClassName?: string }) {
  return (
    <>
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="transition-colors hover:text-black dark:hover:text-white"
        >
          <Icon className={iconClassName} />
        </a>
      ))}
    </>
  );
}
