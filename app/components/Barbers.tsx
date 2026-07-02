import { AtSign } from "lucide-react";
import Reveal from "./Reveal";

const BARBERS = [
  {
    name: "Marcus Reyes",
    initials: "MR",
    role: "Master Barber · Owner",
    experience: "12 years experience",
    specialty: "Skin fades & classic cuts",
    handle: "@marcus.cuts",
  },
  {
    name: "Devon Blake",
    initials: "DB",
    role: "Senior Barber",
    experience: "8 years experience",
    specialty: "Beard sculpting & straight razor shaves",
    handle: "@devonblends",
  },
  {
    name: "Sofia Marin",
    initials: "SM",
    role: "Barber",
    experience: "5 years experience",
    specialty: "Modern textures & scissor work",
    handle: "@sofiacuts.co",
  },
  {
    name: "Jalen Cross",
    initials: "JC",
    role: "Junior Barber",
    experience: "2 years experience",
    specialty: "Kids cuts & line-ups",
    handle: "@jalen.linesup",
  },
];

export default function Barbers() {
  return (
    <section id="barbers" className="relative overflow-hidden bg-zinc-950 py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 animate-pulse rounded-full bg-amber-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-amber-500" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
              Meet The Team
            </p>
          </div>
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            Our Barbers
          </h2>
          <p className="mt-4 text-white/60">
            Four chairs, one standard: every client leaves sharper than they walked in.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {BARBERS.map((barber, i) => (
            <Reveal key={barber.name} delay={i * 80}>
              <div className="group">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-lg font-semibold text-black transition-transform duration-300 group-hover:scale-110">
                  {barber.initials}
                </div>
                <div className="mt-5 border-t border-white/10 pt-5 transition-colors duration-300 group-hover:border-amber-500/40">
                  <h3 className="text-lg font-semibold text-white">{barber.name}</h3>
                  <p className="text-sm font-medium text-amber-500">{barber.role}</p>
                  <p className="mt-3 text-sm text-white/60">{barber.experience}</p>
                  <p className="mt-1 text-sm text-white/60">{barber.specialty}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-white/40">
                    <AtSign className="h-3.5 w-3.5" />
                    {barber.handle}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
