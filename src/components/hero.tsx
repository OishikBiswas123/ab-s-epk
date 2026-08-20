"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/epk";
import { photos } from "@/lib/photos";

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {!videoFailed && (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={photos.heroFallback}
            onError={() => setVideoFailed(true)}
          >
            <source src={photos.heroVideo} type="video/mp4" />
          </video>
        )}
        {videoFailed && (
          <Image
            src={photos.heroFallback}
            alt={`${site.artistFull} performing live`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/40 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 py-32 text-center sm:px-6">
        <p className="rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400 backdrop-blur">
          Electronic Press Kit
        </p>
        <h1 className="mt-8 text-6xl font-black leading-none tracking-tight text-zinc-50 sm:text-8xl">
          ABIR BISWAS
          <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text pt-2 text-4xl text-transparent sm:text-6xl">
            LIVE
          </span>
        </h1>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.4em] text-zinc-300">
          {site.role} &amp; The Band
        </p>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-200">
          {site.tagline}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#book"
            className="rounded-full bg-amber-400 px-8 py-3.5 text-sm font-bold text-zinc-950 shadow-[0_0_40px_rgba(251,191,36,0.35)] transition-all hover:bg-amber-300"
          >
            Book the Band
          </a>
          <Link
            href="/rider"
            className="rounded-full border border-zinc-500/70 bg-zinc-950/40 px-8 py-3.5 text-sm font-bold text-zinc-100 backdrop-blur transition-colors hover:border-amber-400 hover:text-amber-400"
          >
            View Technical Rider
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-zinc-400">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}