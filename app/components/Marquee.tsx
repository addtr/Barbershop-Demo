import { Scissors } from "lucide-react";

const ITEMS = [
  "Walk-Ins Welcome",
  "Fresh Fades Daily",
  "Book Your Chair",
  "Classic Cuts, Modern Edge",
  "Est. 2014 · Brooklyn",
];

export default function Marquee() {
  const items = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-black/10 bg-amber-500 py-3">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-10 text-sm font-semibold tracking-[0.2em] text-black uppercase"
          >
            {item}
            <Scissors className="h-4 w-4" />
          </span>
        ))}
      </div>
    </div>
  );
}
