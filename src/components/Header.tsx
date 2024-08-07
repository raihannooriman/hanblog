"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create post",
  },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <h1 className="text-2xl font-bold">Hanblog</h1>
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`${
                  pathname === link.href ? "text-zinc-900" : "text-zinc-400"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
