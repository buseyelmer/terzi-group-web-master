"use client";

import { homeContent } from "../data/content";

const { marquee } = homeContent;

const primaryItems = [...marquee.segments, marquee.slogan, ...marquee.segments, marquee.slogan];
const sloganItems = [...marquee.slogans, ...marquee.slogans];
const accentSlogans = new Set(["Şeffaf Fiyatlandırma", "Geniş Ürün Yelpazesi"]);

export function SloganBands() {
  return (
    <div className="border-y border-gray-100">
      <div className="overflow-hidden bg-gray-50 py-4">
        <div className="animate-marquee flex w-max items-center whitespace-nowrap">
          {primaryItems.map((text, index) => {
            const isSlogan = text === marquee.slogan;
            return (
              <span key={`primary-${text}-${index}`} className="inline-flex items-center">
                <span
                  className={
                    isSlogan
                      ? "banner-text mx-8 text-lg italic text-brand sm:text-xl"
                      : "font-accent mx-8 text-base font-semibold uppercase tracking-[0.25em] text-gray-500"
                  }
                >
                  {text}
                </span>
                <span className="text-brand/40" aria-hidden>
                  |
                </span>
              </span>
            );
          })}
        </div>
      </div>

      <div className="overflow-hidden bg-white py-5 sm:py-6">
        <div className="animate-marquee-right flex w-max items-center whitespace-nowrap">
          {sloganItems.map((text, index) => {
            const isAccentSlogan = accentSlogans.has(text);
            const fontClass = isAccentSlogan ? "font-heading font-bold" : "banner-text";

            return (
            <span key={`slogan-${text}-${index}`} className="inline-flex items-center">
              <span
                className={
                  index % 2 === 0
                    ? `${fontClass} mx-3 text-lg text-gray-900 sm:mx-10 sm:text-3xl lg:text-4xl`
                    : `${fontClass} mx-3 text-lg text-transparent [-webkit-text-stroke:1px_#dc0c18] sm:mx-10 sm:text-3xl sm:[-webkit-text-stroke:2px_#dc0c18] lg:text-4xl`
                }
              >
                {text}
              </span>
              <span className="text-lg text-brand/25 sm:text-3xl" aria-hidden>
                ✦
              </span>
            </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
