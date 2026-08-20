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
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="relative fade-up">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="group relative min-h-0 flex-1 overflow-hidden rounded-2xl">
                  <Image
                    src="/photos/45-IMG_5546.jpg"
                    alt={`${site.artist} and the band performing live`}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-3 z-10 px-4 text-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
                      {site.artist} &amp; The Band
                    </p>
                  </div>
                </div>
                <div className="group relative min-h-0 flex-1 overflow-hidden rounded-2xl">
                  <Image
                    src="/photos/audiencgroup.jpg"
                    alt="Audience at an Abir Biswas Live show"
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-3 z-10 px-4 text-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
                      The Crowd
                    </p>
                  </div>
                </div>
                <div className="group relative min-h-0 flex-1 overflow-hidden rounded-2xl">
                  <Image
                    src="/photos/46-IMG_5547.jpg"
                    alt={`${site.artist} and the band performing live`}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-3 z-10 px-4 text-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
                      On Stage
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[480px]">
                <Image
                  src={photos.abir[3]}
                  alt={`${site.artist} on stage`}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-4 z-10 px-4 text-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
                    {site.artist}
                  </p>
                </div>
              </div>
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
              <strong className="text-zinc-50">{site.artist}</strong> is a
              dynamic singer and stage performer with 100M+ song views and 1.5M+
              followers across social media platforms globally, with India
              &amp; worldwide hits.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-300">
              With 500+ live shows spanning public concerts, college fests,
              corporate gigs, and private events, {site.artist} has built a
              reputation as a powerful and versatile live performer.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-300">
              His musical journey includes collaborations with leading actors,
              directors, and major music labels, including Zee Music, Sony
              Music, SVF Music, Eagle Music, CD Choice and many more.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-400">
              Known for his distinctive voice, emotional delivery, and
              electrifying stage presence, {site.artist} continues to make his
              mark across India, Bangladesh, and the global music scene.
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { v: "100M+", k: "Views", img: "/photos/ab (3).jpg", alt: "Abir Biswas performing" },
                { v: "1.5M+", k: "Followers", img: "/photos/ab (10).jpg", alt: "Abir Biswas on stage" },
                { v: "500+", k: "Live Shows", img: "/photos/45-IMG_5546.jpg", alt: "Live show performance" },
                { v: "India & Worldwide", k: "Hits", img: "/photos/audiencgroup.jpg", alt: "Audience at a live show" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 px-5 py-6 text-center transition-colors duration-300 hover:border-amber-400/60"
                >
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-40 scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <p className={`font-black text-amber-400 transition-colors duration-300 group-hover:text-amber-300 ${s.k === "Hits" ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"}`}>
                      {s.v}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200">
                      {s.k}
                    </p>
                  </div>
                </div>
              ))}
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