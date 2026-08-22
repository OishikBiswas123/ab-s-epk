"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const aspects = [
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-square",
];

export default function PhotoGallery({
  photos,
  title,
  subtitle,
}: {
  photos: readonly string[];
  title: string;
  subtitle: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const [menuIndex, setMenuIndex] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((a) => (a === null ? null : (a + 1) % photos.length)),
    [photos.length]
  );
  const prev = useCallback(
    () =>
      setActive((a) =>
        a === null ? null : (a - 1 + photos.length) % photos.length
      ),
    [photos.length]
  );

  const handlePhotoClick = useCallback(
    (i: number) => {
      if (menuIndex === i) {
        setMenuIndex(null);
      } else {
        setMenuIndex(i);
      }
    },
    [menuIndex]
  );

  const downloadPhoto = useCallback(async (src: string) => {
    try {
      const res = await fetch(src);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = src.split("/").pop() || "photo.jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      window.open(src, "_blank");
    }
    setMenuIndex(null);
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  useEffect(() => {
    if (menuIndex === null) return;
    const handleMouseDown = () => setMenuIndex(null);
    window.addEventListener("mousedown", handleMouseDown);
    return () => window.removeEventListener("mousedown", handleMouseDown);
  }, [menuIndex]);

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Gallery
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-2 max-w-xl text-base text-zinc-400">{subtitle}</p>
        </div>
        <span className="text-sm font-medium text-zinc-500">
          {photos.length} photos
        </span>
      </div>

      <div className="mt-8 columns-2 gap-4 md:columns-3 lg:columns-4 [column-fill:_balance]">
        {photos.map((src, i) => (
          <div key={src} className="relative mb-4">
            <button
              type="button"
              onClick={() => handlePhotoClick(i)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <div className={`w-full ${aspects[i % aspects.length]}`}>
                <Image
                  src={src}
                  alt={`${title} photo ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                  {title}
                </span>
              </div>
            </button>

            {menuIndex === i && (
              <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-black/80 backdrop-blur-sm">
                <div className="flex gap-3">
                  <button
                    type="button"
                    onMouseDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(i);
                      setMenuIndex(null);
                    }}
                    className="rounded-full border border-zinc-600 bg-zinc-900/90 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-amber-400 hover:text-amber-400"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadPhoto(src);
                    }}
                    className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-zinc-950 transition-colors hover:bg-amber-300"
                  >
                    Download
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition-colors hover:border-amber-400 hover:text-amber-400"
          >
            ✕
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition-colors hover:border-amber-400 hover:text-amber-400 sm:left-6"
          >
            ←
          </button>

          <div className="relative h-[80vh] w-[90vw] sm:w-[80vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[active]}
              alt={`${title} photo ${active + 1}`}
              fill
              sizes="80vw"
              priority
              className="object-contain"
            />
          </div>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition-colors hover:border-amber-400 hover:text-amber-400 sm:right-6"
          >
            →
          </button>

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm font-medium text-zinc-400">
            {active + 1} / {photos.length}
          </span>
        </div>
      )}
    </div>
  );
}