"use client";

import { useEffect, useState } from "react";
import { Menu, Scissors, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Barbers", href: "#barbers" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 text-white transition-opacity hover:opacity-80"
        >
          <Scissors className="h-5 w-5 text-amber-500" />
          <span className="font-display text-xl tracking-wide">Iron &amp; Fade</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded text-sm font-medium text-white/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:text-white hover:after:w-full focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-amber-500 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/30 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Book Now
          </a>
        </nav>

        <button
          className="rounded-full p-2 text-white transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="w-fit rounded-md bg-amber-500 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 transition-all duration-200 hover:bg-amber-400 active:translate-y-0"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
