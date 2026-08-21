import Link from "next/link";
import { site } from "@/lib/epk";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="text-lg font-bold tracking-tight text-amber-400">
            {site.artistFull}
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {site.tagline}
          </p>
        </div>

        <div className="text-sm">
          <p className="font-semibold uppercase tracking-wider text-zinc-500">
            Bookings &amp; Management
          </p>
          <p className="mt-2 text-zinc-300">{site.manager}</p>
          <a
            href={`tel:${site.managerPhone.replace(/\s/g, "")}`}
            className="block text-zinc-300 hover:text-amber-400"
          >
            {site.managerPhone}
          </a>
          <a
            href={`mailto:${site.managerEmail}`}
            className="block text-zinc-300 hover:text-amber-400"
          >
            {site.managerEmail}
          </a>
        </div>

        <nav className="flex flex-col gap-2 text-sm">
          <Link
            href="/"
            className="text-zinc-300 transition-colors hover:text-amber-400"
          >
            Home
          </Link>
          <Link
            href="/rider"
            className="text-zinc-300 transition-colors hover:text-amber-400"
          >
            Technical Rider
          </Link>
          <a
            href="#book"
            className="text-zinc-300 transition-colors hover:text-amber-400"
          >
            Book Us
          </a>
        </nav>
      </div>
      <div className="border-t border-zinc-800/60 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {site.artistFull}. All rights reserved. <span className="ml-1 text-zinc-500">Crafted by</span>{" "}
          <a
            href="https://oishikbiswas.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors hover:text-amber-400"
          >
            Oishik Biswas
          </a>
      </div>
    </footer>
  );
}
