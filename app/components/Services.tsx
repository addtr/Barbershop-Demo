import { Scissors, Sparkles, Flame, Baby, User, Zap } from "lucide-react";

const SERVICES = [
  {
    name: "Classic Haircut",
    price: "$35",
    duration: "30 min",
    description: "A timeless cut tailored to your face shape, finished with a straight-razor neckline.",
    icon: Scissors,
  },
  {
    name: "Skin Fade",
    price: "$40",
    duration: "40 min",
    description: "Precision fade from skin to top, blended seamlessly with clippers and shears.",
    icon: Zap,
  },
  {
    name: "Beard Trim & Shape",
    price: "$20",
    duration: "20 min",
    description: "Sharp lineup and shape-up with hot towel finish and beard oil.",
    icon: User,
  },
  {
    name: "Hot Towel Shave",
    price: "$30",
    duration: "30 min",
    description: "Traditional straight-razor shave with hot towels and a soothing balm finish.",
    icon: Flame,
  },
  {
    name: "Cut & Beard Combo",
    price: "$50",
    duration: "55 min",
    description: "Our most popular package — full haircut plus a complete beard sculpt.",
    icon: Sparkles,
  },
  {
    name: "Kids Cut (12 & under)",
    price: "$25",
    duration: "25 min",
    description: "Patient, friendly cuts for the younger crowd, lollipop included.",
    icon: Baby,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-black py-24">
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-amber-500/[0.07] blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-amber-500" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
              What We Offer
            </p>
          </div>
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            Services &amp; Pricing
          </h2>
          <p className="mt-4 text-white/60">
            Every service includes a consultation, hot towel, and styling finish. Walk-ins welcome, appointments preferred.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-black/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 transition-colors duration-300 group-hover:bg-amber-500/20">
                <service.icon className="h-6 w-6 text-amber-500" />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                <span className="text-lg font-semibold text-amber-500">{service.price}</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-wide text-white/40">
                {service.duration}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
