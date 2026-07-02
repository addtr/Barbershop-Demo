import { Quote, Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Marcus T.",
    initials: "MT",
    rating: 5,
    text: "Best fade I've had in years. Marcus took his time and the lineup was razor sharp.",
  },
  {
    name: "Jordan P.",
    initials: "JP",
    rating: 5,
    text: "Great atmosphere, even better cuts. Booked with Sofia and left feeling like a new person.",
  },
  {
    name: "Andre W.",
    initials: "AW",
    rating: 5,
    text: "Devon hooked me up with a clean beard line and the hot towel treatment is unreal.",
  },
  {
    name: "Chris L.",
    initials: "CL",
    rating: 4,
    text: "Walked in nervous about a big change, walked out looking sharp. Will be back.",
  },
  {
    name: "Miguel S.",
    initials: "MS",
    rating: 5,
    text: "My go-to spot for the last two years. Consistent quality every single visit.",
  },
  {
    name: "Priya N.",
    initials: "PN",
    rating: 5,
    text: "Took my son in for his first real haircut and Jalen was so patient with him. Great experience.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-amber-500" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
              Client Reviews
            </p>
          </div>
          <h2 className="font-display text-4xl text-white sm:text-5xl">
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

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="relative border-t-2 border-amber-500/30 pt-6 transition-colors duration-300 hover:border-amber-500/70"
            >
              <Quote className="absolute top-4 right-0 h-8 w-8 text-white/[0.06]" />
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
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-xs font-semibold text-black">
                  {review.initials}
                </div>
                <p className="text-sm font-semibold text-white">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
