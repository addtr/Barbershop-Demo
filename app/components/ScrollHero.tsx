"use client";

import { useEffect, useRef, useState } from "react";

const LERP_FACTOR = 0.22;
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetProgressRef = useRef(0);
  const currentTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setVisible(true), 200);

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const progress = scrollableDistance > 0 ? scrolled / scrollableDistance : 0;
      targetProgressRef.current = Math.min(Math.max(progress, 0), 1);
    };

    const tick = () => {
      const duration = video.duration;
      if (duration && !Number.isNaN(duration)) {
        const targetTime = targetProgressRef.current * duration;
        currentTimeRef.current +=
          (targetTime - currentTimeRef.current) * LERP_FACTOR;
        video.currentTime = currentTimeRef.current;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    video.pause();
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.clearTimeout(fadeTimer);
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          className={`h-full w-full object-cover transition-opacity duration-500 ease-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          src={`${BASE_PATH}/hero.mp4`}
          muted
          playsInline
          preload="auto"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-white/70">
            Est. 2014 &middot; Brooklyn, NY
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            Iron &amp; Fade
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            Classic craft, modern edge. Scroll to see the cut come together.
          </p>
        </div>
      </div>
    </div>
  );
}
