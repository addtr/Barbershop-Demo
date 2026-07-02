import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Marcus T.",
    rating: 5,
    text: "Best fade I've had in years. Marcus took his time and the lineup was razor sharp.",
  },
  {
    name: "Jordan P.",
    rating: 5,
    text: "Great atmosphere, even better cuts. Booked with Sofia and left feeling like a new person.",
  },
  {
    name: "Andre W.",
    rating: 5,
    text: "Devon hooked me up with a clean beard line and the hot towel treatment is unreal.",
  },
  {
    name: "Chris L.",
    rating: 4,
    text: "Walked in nervous about a big change, walked out looking sharp. Will be back.",
  },
  {
    name: "Miguel S.",
    rating: 5,
    text: "My go-to spot for the last two years. Consistent quality every single visit.",
  },
  {
    name: "Priya N.",
    rating: 5,
    text: "Took my son in for his first real haircut and Jalen was so patient with him. Great experience.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
            Client Reviews
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What People Are Saying
          </h2>
          <div className="mt-4 flex items-center gap-2 text-white/60">
            <div className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-500" />
              ))}
            </div>
            <span className="text-sm">4.9 out of 5 &middot; 214 reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-black/40"
            >
              <div className="flex text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? "fill-amber-500" : "text-white/20"}`}
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-white">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
