"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { homeContent } from "../data/content";

type FaqItem = (typeof homeContent.faq.items)[number];

type FaqAccordionProps = {
  items?: readonly FaqItem[];
};

export function FaqAccordion({ items = [] }: FaqAccordionProps) {
  const safeItems = items ?? [];

  if (safeItems.length === 0) return null;

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {safeItems.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-xl border transition-all duration-300 ease-in-out ${
              isOpen
                ? "border-brand/20 bg-white shadow-sm shadow-brand/5"
                : "border-gray-200/80 bg-white/80 hover:border-gray-300"
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setActiveIndex(isOpen ? null : index)}
              className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
            >
              <span
                className={`text-base font-semibold leading-snug transition-colors duration-300 sm:text-[1.0625rem] ${
                  isOpen ? "text-brand" : "text-gray-500 group-hover:text-gray-700"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                  isOpen ? "bg-brand/10 text-brand" : "bg-gray-100 text-gray-400"
                }`}
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={2}
                />
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="border-t border-gray-100 px-5 pb-5 pt-3 text-base leading-relaxed text-gray-600 sm:px-6 sm:pb-6 sm:pt-4">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
