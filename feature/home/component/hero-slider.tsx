"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { homeContent } from "../data/content";

const SLIDE_INTERVAL = 6000;
const slides = homeContent.hero.slides;

const SLIDE_BACKGROUNDS = [
  "bg-gradient-to-br from-brand-dark via-brand to-brand/80",
  "bg-gradient-to-br from-gray-900 via-gray-800 to-brand-dark",
  "bg-gradient-to-br from-brand via-brand-dark to-gray-900",
] as const;

const HEADER_OFFSET = "pt-24 sm:pt-40 md:pt-44";

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index: number) => setActiveIndex((index + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    const timer = setInterval(() => goTo(activeIndex + 1), SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [activeIndex, goTo]);

  return (
    <div className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden pt-4 sm:min-h-[calc(100svh-10rem)] sm:pt-0 lg:min-h-[calc(100svh-6.5rem)]">
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className={`absolute inset-0 ${SLIDE_BACKGROUNDS[index]}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

          <div
            className={`relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-44 sm:px-6 sm:pb-32 lg:px-8 lg:pb-36 ${HEADER_OFFSET}`}
          >
            <div className="max-w-2xl text-white">
              <h1 className="hero-title text-white">
                {slide.title}
              </h1>
              <p className="mt-3 max-w-xl text-base text-white/90 sm:mt-4">
                {slide.subtitle}
              </p>
              <Link
                href="/giris"
                className="mt-6 inline-flex items-center rounded border-2 border-white px-6 py-2.5 font-accent text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-gray-900 sm:mt-8 sm:px-8 sm:py-3"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2.5 sm:bottom-28 lg:bottom-32">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Slayt ${index + 1}`}
            onClick={() => goTo(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
