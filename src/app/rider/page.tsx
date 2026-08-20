import type { Metadata } from "next";
import Link from "next/link";
import { band, rider, site } from "@/lib/epk";

export const metadata: Metadata = {
  title: "Technical Rider",
};

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
      <h2 className="text-xl font-bold tracking-tight text-zinc-50">
        <span className="mr-3 inline-block h-4 w-1 rounded-full bg-amber-400 align-middle" />
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Note({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((n, i) => (
        <li key={i} className="flex gap-3 text-sm leading-6 text-zinc-300">
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
          <span>{n}</span>
        </li>
      ))}
    </ul>
  );
}

export default function RiderPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6">
      <header className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
          {site.artistFull} · {site.role}
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-50 sm:text-5xl">
          Technical Rider
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400">
          All P.A. and monitor requirements, equipment and patch lists, backline
          needs, hospitality and terms. Please forward a copy of this list to
          the sound vendor and ask them to confirm the availability of the
          equipment mentioned.
        </p>
      </header>

      <div className="mt-12 space-y-6">
        {/* PA SYSTEM */}
        <Card title="P.A. System">
          <p className="text-sm text-zinc-300">
            Any kind of good 3–4 way speaker system with sufficient and clean
            undistorted stereo coverage of{" "}
            <strong className="text-zinc-100">{rider.paSystem.coverage}</strong>{" "}
            is acceptable.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {rider.paSystem.preferences.map((p) => (
              <div
                key={p.brand}
                className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4"
              >
                <p className="text-sm font-bold uppercase tracking-wider text-amber-400">
                  {p.brand}
                </p>
                <p className="mt-1 text-sm leading-5 text-zinc-300">
                  {p.models}
                </p>
              </div>
            ))}
          </div>
          <Note items={rider.paSystem.notes} />
        </Card>

        {/* MONITORING */}
        <Card title="Monitoring System">
          <p className="text-sm text-zinc-300">{rider.monitoring.intro}</p>
          <p className="mt-3 text-sm text-zinc-300">
            Preferred monitors are{" "}
            <strong className="text-zinc-100">
              {rider.monitoring.preferred}
            </strong>
            .
          </p>
          <Note items={rider.monitoring.notes} />
        </Card>

        {/* CONSOLE */}
        <Card title="Digital Mixing Console">
          <div className="grid gap-3">
            {rider.console.brands.map((c) => (
              <div
                key={c.brand}
                className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3"
              >
                <span className="text-sm font-bold uppercase tracking-wider text-amber-400">
                  {c.brand}
                </span>
                <span className="ml-2 text-sm text-zinc-300">{c.models}</span>
              </div>
            ))}
          </div>
          <Note items={rider.console.notes} />
        </Card>

        {/* STAGE */}
        <Card title="Stage Requirements">
          <ul className="space-y-2.5">
            <li className="flex gap-3 text-sm leading-6 text-zinc-300">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
              <span>{rider.stage.riser}</span>
            </li>
            <li className="flex gap-3 text-sm leading-6 text-zinc-300">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
              <span>{rider.stage.stands}</span>
            </li>
          </ul>
        </Card>

        {/* EQUIPMENT LIST */}
        <Card title="Equipment List">
          <div className="grid gap-4 sm:grid-cols-2">
            {rider.equipment.map((e) => (
              <div
                key={e.section}
                className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  {e.section}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {e.items.map((item, i) => (
                    <li key={i} className="text-sm leading-5 text-zinc-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Vocal
              </p>
              <ul className="mt-2 space-y-1.5">
                <li className="text-sm leading-5 text-zinc-300">
                  Lead: {rider.vocal.lead}
                </li>
                <li className="text-sm leading-5 text-zinc-300">
                  Back vocal: {rider.vocal.backup}
                </li>
                <li className="text-sm leading-5 text-zinc-300">
                  Talkback: {rider.vocal.talkback}
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-5 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-6 text-amber-200">
            {rider.electricity}
          </p>
        </Card>

        {/* BACKLINE */}
        <Card title="Backline">
          <div className="space-y-4">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Drum Kit
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {rider.backline.drumKit}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                <span className="font-semibold text-zinc-200">Preferred kits: </span>
                {rider.backline.preferredKits}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {rider.backline.drumThrone}
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Percussion
              </p>
              <ul className="mt-2 space-y-1.5">
                {rider.backline.percussion.map((p, i) => (
                  <li key={i} className="text-sm leading-5 text-zinc-300">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {/* I/O PATCH LIST */}
        <Card title="I/O Patch List">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Inputs
              </p>
              <table className="mt-3 w-full text-left text-sm">
                <tbody>
                  {band.tech.inputList.map(([ch, desc]) => (
                    <tr
                      key={ch + desc}
                      className="border-b border-zinc-800/60 last:border-0"
                    >
                      <td className="whitespace-nowrap py-1.5 pr-4 font-mono text-xs text-amber-400">
                        {ch}
                      </td>
                      <td className="py-1.5 text-zinc-300">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Outputs
              </p>
              <table className="mt-3 w-full text-left text-sm">
                <tbody>
                  {band.tech.outputList.map(([ch, desc]) => (
                    <tr
                      key={ch + desc}
                      className="border-b border-zinc-800/60 last:border-0"
                    >
                      <td className="whitespace-nowrap py-1.5 pr-4 font-mono text-xs text-amber-400">
                        {ch}
                      </td>
                      <td className="py-1.5 text-zinc-300">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>

        {/* SOUND TERMS */}
        <Card title="Sound Terms & Conditions">
          <Note items={rider.terms} />
        </Card>

        {/* HOSPITALITY */}
        <Card title="Hospitality & Logistics — Accommodation">
          <ul className="space-y-2.5">
            <li className="flex gap-3 text-sm leading-6 text-zinc-300">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
              <span>{rider.hospitality.accommodation}</span>
            </li>
            <li className="flex gap-3 text-sm leading-6 text-zinc-300">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
              <span>{rider.hospitality.greenroom}</span>
            </li>
          </ul>
        </Card>

        {/* FOOD */}
        <Card title="Food & Beverages">
          <p className="text-sm leading-6 text-zinc-300">
            {rider.hospitality.food}
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                During Sound Check
              </p>
              <ul className="mt-2 space-y-1.5">
                {rider.hospitality.duringSoundcheck.map((item, i) => (
                  <li key={i} className="text-sm leading-5 text-zinc-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                During Show
              </p>
              <ul className="mt-2 space-y-1.5">
                {rider.hospitality.duringShow.map((item, i) => (
                  <li key={i} className="text-sm leading-5 text-zinc-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {/* TRAVEL */}
        <Card title="Travel">
          <ul className="space-y-2.5">
            <li className="flex gap-3 text-sm leading-6 text-zinc-300">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
              <span>{rider.hospitality.travel.flights}</span>
            </li>
            <li className="flex gap-3 text-sm leading-6 text-zinc-300">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
              <span>{rider.hospitality.travel.ground}</span>
            </li>
            <li className="flex gap-3 text-sm leading-6 text-zinc-300">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
              <span>{rider.hospitality.travel.drivers}</span>
            </li>
          </ul>
        </Card>

        {/* FINANCIAL TERMS */}
        <Card title="Terms & Condition">
          <Note items={rider.financial} />
        </Card>

        {/* FOH ENGINEER */}
        <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-b from-amber-500/10 to-transparent p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
                F.O.H. Engineer
              </p>
              <p className="mt-2 text-2xl font-bold text-zinc-50">
                {site.fohEngineer}
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                {site.managerPhone} ·{" "}
                <a
                  href={`mailto:${site.managerEmail}`}
                  className="text-amber-400 hover:text-amber-300"
                >
                  {site.managerEmail}
                </a>
              </p>
            </div>
            <Link
              href="/#book"
              className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-300"
            >
              Book the Band
            </Link>
          </div>
        </div>

        {/* CLOSING */}
        <p className="pt-2 text-center text-base leading-7 text-zinc-300">
          Let&apos;s do this! Super excited for the show. Together, we&apos;re
          going to make it an absolute hit.
        </p>
      </div>
    </div>
  );
}
