import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Technical Rider",
};

const pages = Array.from({ length: 9 }, (_, i) => `/rider/pages/page-${i + 1}.jpg`);

export default function RiderPage() {
  return (
    <div className="flex flex-1 flex-col items-center px-4 py-10 sm:px-6">
      <div className="flex w-full max-w-4xl flex-wrap items-center justify-between gap-4">
        <h1 className="text-lg font-black uppercase tracking-tight text-zinc-50">
          Technical Rider
        </h1>
        <a
          href="/rider/technical-rider.pdf"
          download
          className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-zinc-950 transition-colors hover:bg-amber-300"
        >
          Download PDF
        </a>
      </div>

      <div className="mt-8 flex w-full max-w-4xl flex-col items-center gap-8">
        {pages.map((src, i) => (
          <div key={src} className="w-full">
            <div className="relative w-full overflow-hidden rounded-lg bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
              <Image
                src={src}
                alt={`Technical Rider page ${i + 1}`}
                width={1700}
                height={2200}
                sizes="(max-width: 896px) 100vw, 896px"
                className="h-auto w-full"
              />
            </div>
            <p className="mt-2 text-center text-xs font-medium text-zinc-500">
              Page {i + 1} / {pages.length}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}