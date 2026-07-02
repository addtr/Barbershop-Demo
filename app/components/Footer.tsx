import { AtSign, Globe, Scissors } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-white">
          <Scissors className="h-4 w-4 text-amber-500" />
          <span className="text-sm font-semibold">Iron &amp; Fade Barbershop</span>
        </div>

        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()}{" "}
          Iron &amp; Fade Barbershop. All rights reserved. This is a demo
          website.
        </p>

        <div className="flex gap-2 text-white/50">
          <a
            href="#"
            aria-label="Instagram"
            className="rounded-full p-2 transition-colors hover:bg-white/10 hover:text-amber-500"
          >
            <AtSign className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Website"
            className="rounded-full p-2 transition-colors hover:bg-white/10 hover:text-amber-500"
          >
            <Globe className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
