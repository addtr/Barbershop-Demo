import { Scissors, Sparkles, Flame, Baby, User, Zap } from "lucide-react";
import Reveal from "./Reveal";

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
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 animate-pulse rounded-full bg-amber-500/[0.07] blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-2xl">
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
        </Reveal>

        <div className="border-t border-white/10">
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={i * 60}>
              <div className="group relative flex flex-col gap-4 border-b border-white/10 py-7 pl-4 transition-colors duration-300 hover:bg-white/[0.02] sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <span className="absolute top-0 left-0 h-full w-0.5 origin-top scale-y-0 bg-amber-500 transition-transform duration-300 group-hover:scale-y-100" />
                <div className="flex gap-4">
                  <service.icon className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wide text-white/40">
                      {service.duration}
                    </p>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60">
                      {service.description}
                    </p>
                  </div>
                </div>
                <span className="font-display shrink-0 text-2xl text-amber-500 sm:pl-6">
                  {service.price}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
