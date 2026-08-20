import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import PhotoGallery from "@/components/photo-gallery";
import { site } from "@/lib/epk";
import { photos } from "@/lib/photos";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-zinc-400">{description}</p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* ABOUT */}
      <section id="about" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={photos.abir[0]}
                  alt={`${site.artist} performing live`}
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-10 flex flex-col gap-4">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={photos.abir[3]}
                    alt={`${site.artist} on stage`}
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-zinc-800 bg-zinc-900/90 px-6 py-4 backdrop-blur sm:-right-8">
              <p className="text-3xl font-black text-amber-400">{photos.abir.length}</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Live Photos
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
              About
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
              The Artist &amp; The Band
            </h2>
            <p className="mt-6 text-base leading-8 text-zinc-300">
              Led by <strong className="text-zinc-50">{site.artist}</strong> —
              frontman, guitarist and front-of-house force — the band brings a
              high-energy fusion sound backed by a dedicated production crew.
              Every show is built on precision sound, tight performances and a
              full live production experience.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-400">
              Full bio and press assets coming soon.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "Members", v: "9" },
                { k: "Soundcheck", v: "2 hrs" },
                { k: "Coverage", v: "120 dB" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 text-center"
                >
                  <p className="text-2xl font-black text-amber-400">{s.v}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
                    {s.k}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABIR GALLERY */}
      <section id="gallery" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <PhotoGallery
          photos={photos.abir}
          title="Abir Biswas — Live"
          subtitle="On stage, up close — the frontman in full flight."
        />
      </section>

      {/* BAND GALLERY */}
      <section id="band" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <PhotoGallery
          photos={photos.band}
          title="The Band"
          subtitle="The crew that makes it loud — drums, bass, keys, guitar and percussion."
        />
      </section>

      {/* HIGHLIGHTS */}
      <section
        id="highlights"
        className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6"
      >
        <SectionHeading
          eyebrow="Press"
          title="Highlights & Quotes"
          description="Pull quotes from press, festival line-ups and partners."
        />
        <div className="mt-10 space-y-4">
          {[
            {
              quote:
                "A live act that brings the full package — performance, precision and production.",
              credit: "Festival review",
            },
            {
              quote:
                "One of the cleanest live mixes in the circuit, night after night.",
              credit: "Venue production team",
            },
          ].map((p, i) => (
            <blockquote
              key={i}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <p className="text-lg leading-8 text-zinc-200">
                &ldquo;{p.quote}&rdquo;
              </p>
              <footer className="mt-3 text-sm font-medium text-amber-400">
                — {p.credit}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 sm:p-12">
          <SectionHeading
            eyebrow="Booking"
            title="Book Abir Biswas Live"
            description="For bookings, press, and production coordination, reach out to the team directly."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href={`tel:${site.managerPhone.replace(/\s/g, "")}`}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-colors hover:border-amber-400"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Manager
              </p>
              <p className="mt-2 text-lg font-bold text-zinc-50">
                {site.manager}
              </p>
              <p className="mt-1 text-amber-400 group-hover:text-amber-300">
                {site.managerPhone}
              </p>
            </a>
            <a
              href={`tel:${site.productionPhone.replace(/\s/g, "")}`}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-colors hover:border-amber-400"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Production
              </p>
              <p className="mt-2 text-lg font-bold text-zinc-50">
                {site.production}
              </p>
              <p className="mt-1 text-amber-400 group-hover:text-amber-300">
                {site.productionPhone}
              </p>
            </a>
            <a
              href={`mailto:${site.managerEmail}`}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-colors hover:border-amber-400 sm:col-span-2"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Email
              </p>
              <p className="mt-2 text-lg font-bold text-amber-400 group-hover:text-amber-300">
                {site.managerEmail}
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                F.O.H. Engineer: {site.fohEngineer} · {site.managerPhone}
              </p>
            </a>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/rider"
              className="inline-block rounded-full border border-zinc-700 px-7 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-amber-400 hover:text-amber-400"
            >
              View Technical Rider
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}