"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/resources", label: "Resources" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-black/10 dark:border-white/15">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Ivan Pfaab
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:gap-x-5">
            {links.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={
                      isActive
                        ? "font-medium text-black dark:text-white"
                        : "text-black/60 transition-colors hover:text-black dark:text-white/60 dark:hover:text-white"
                    }
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
