"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/rider", label: "Tech Rider" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex flex-col leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="text-base font-bold tracking-tight text-amber-400">
            ABIR BISWAS
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
            Live
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                isActive(link.href) ? "text-amber-400" : "text-zinc-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#book"
            className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-300"
          >
            Book Us
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-zinc-100 transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-zinc-100 transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-zinc-100 transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-zinc-800 px-4 pb-4 pt-2 sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-2.5 text-base font-medium ${
                isActive(link.href)
                  ? "bg-zinc-900 text-amber-400"
                  : "text-zinc-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-amber-400 px-4 py-2.5 text-center text-base font-semibold text-zinc-950"
          >
            Book Us
          </a>
        </nav>
      )}
    </header>
  );
}
