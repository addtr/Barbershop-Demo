import { AtSign, Scissors } from "lucide-react";

const BARBERS = [
  {
    name: "Marcus Reyes",
    role: "Master Barber · Owner",
    experience: "12 years experience",
    specialty: "Skin fades & classic cuts",
    handle: "@marcus.cuts",
  },
  {
    name: "Devon Blake",
    role: "Senior Barber",
    experience: "8 years experience",
    specialty: "Beard sculpting & straight razor shaves",
    handle: "@devonblends",
  },
  {
    name: "Sofia Marin",
    role: "Barber",
    experience: "5 years experience",
    specialty: "Modern textures & scissor work",
    handle: "@sofiacuts.co",
  },
  {
    name: "Jalen Cross",
    role: "Junior Barber",
    experience: "2 years experience",
    specialty: "Kids cuts & line-ups",
    handle: "@jalen.linesup",
  },
];

export default function Barbers() {
  return (
    <section id="barbers" className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
            Meet The Team
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Our Barbers
          </h2>
          <p className="mt-4 text-white/60">
            Four chairs, one standard: every client leaves sharper than they walked in.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BARBERS.map((barber) => (
            <div
              key={barber.name}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6"
            >
              <div className="flex h-32 w-full items-center justify-center rounded-xl bg-white/5">
                <Scissors className="h-10 w-10 text-white/20" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{barber.name}</h3>
              <p className="text-sm font-medium text-amber-500">{barber.role}</p>
              <p className="mt-3 text-sm text-white/60">{barber.experience}</p>
              <p className="mt-1 text-sm text-white/60">{barber.specialty}</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-white/40">
                <AtSign className="h-3.5 w-3.5" />
                {barber.handle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
