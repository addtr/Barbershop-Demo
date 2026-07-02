import AnimatedStat from "./AnimatedStat";
import Reveal from "./Reveal";

const STATS = [
  { value: "10+", label: "Years in Brooklyn" },
  { value: "4", label: "Master Barbers" },
  { value: "12k+", label: "Cuts Given" },
  { value: "4.9", label: "Average Rating" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-zinc-950 py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 animate-pulse rounded-full bg-amber-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-amber-500" />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
                Our Story
              </p>
            </div>
            <h2 className="font-display text-4xl text-white sm:text-5xl">
              A neighborhood shop, built on craft
            </h2>
            <p className="mt-5 text-white/60 leading-relaxed">
              Iron &amp; Fade opened its doors in 2014 with a single chair and a
              simple idea: every cut should be treated like a craft, not a
              transaction. A decade later, we&apos;re still that same
              neighborhood shop &mdash; just with four chairs, a waitlist worth
              the wait, and a reputation for the sharpest fades in Brooklyn.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              No shortcuts, no rushed appointments. Just skilled barbers, hot
              towels, and a shop that feels like it belongs to the block.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 divide-x divide-y divide-white/10 border border-white/10">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 text-center transition-colors duration-300 hover:bg-white/[0.03]"
                >
                  <AnimatedStat value={stat.value} />
                  <p className="mt-2 text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
