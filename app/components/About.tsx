const STATS = [
  { value: "10+", label: "Years in Brooklyn" },
  { value: "4", label: "Master Barbers" },
  { value: "12k+", label: "Cuts Given" },
  { value: "4.9", label: "Average Rating" },
];

export default function About() {
  return (
    <section id="about" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
              Our Story
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
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
          </div>

          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-colors duration-300 hover:border-amber-500/30"
              >
                <p className="text-3xl font-semibold text-amber-500">{stat.value}</p>
                <p className="mt-2 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
