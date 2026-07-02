import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

const HOURS = [
  { day: "Monday", time: "9:00 AM – 8:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 8:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 8:00 PM" },
  { day: "Thursday", time: "9:00 AM – 8:00 PM" },
  { day: "Friday", time: "9:00 AM – 9:00 PM" },
  { day: "Saturday", time: "8:00 AM – 6:00 PM" },
  { day: "Sunday", time: "10:00 AM – 4:00 PM" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-zinc-950 py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 animate-pulse rounded-full bg-amber-500/[0.07] blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-amber-500" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
              Get In Touch
            </p>
          </div>
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            Visit or Book a Chair
          </h2>
          <p className="mt-4 text-white/60">
            Walk-ins are always welcome, but booking ahead guarantees your barber and time slot.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2 space-y-7 divide-y divide-white/10">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-amber-500" />
              <div>
                <h3 className="font-semibold text-white">Address</h3>
                <p className="mt-1 text-sm text-white/60">
                  482 Wells Street
                  <br />
                  Brooklyn, NY 11201
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-7">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-amber-500" />
              <div>
                <h3 className="font-semibold text-white">Phone</h3>
                <p className="mt-1 text-sm text-white/60">(718) 555-0192</p>
              </div>
            </div>

            <div className="flex gap-4 pt-7">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-amber-500" />
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="mt-1 text-sm text-white/60">hello@ironandfade.com</p>
              </div>
            </div>

            <div className="flex gap-4 pt-7">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-amber-500" />
              <div className="w-full">
                <h3 className="font-semibold text-white">Hours</h3>
                <ul className="mt-2 space-y-1 text-sm text-white/60">
                  {HOURS.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6">
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
