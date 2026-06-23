"use client";

import { Headphones, MessageSquare } from "lucide-react";
import Link from "next/link";
import type { homeContent } from "../data/content";

type SupportContent = (typeof homeContent.faq.support);

type ExpertSupportBoxProps = {
  content: SupportContent;
};

export function ExpertSupportBox({ content }: ExpertSupportBoxProps) {
  return (
    <aside className="lg:sticky lg:top-20 lg:self-start">
      <div className="relative overflow-hidden rounded-xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/5" />
        <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-slate-900/5" />

        <div className="relative">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Headphones className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <p className="section-badge text-brand">{content.title}</p>
          </div>

          <h3 className="mt-5 font-heading text-xl font-bold leading-snug text-[#1a2744] sm:text-2xl">
            {content.heading}
          </h3>

          <p className="mt-3 text-base leading-relaxed text-gray-500">
            {content.message}
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-lg bg-gray-50 px-4 py-3.5">
            <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={1.5} />
            <p className="text-sm leading-relaxed text-gray-600">
              Ortalama yanıt süresi:{" "}
              <span className="font-semibold text-[#1a2744]">1 iş günü</span>
            </p>
          </div>

          <Link
            href={content.href}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/20"
          >
            {content.cta}
          </Link>
        </div>
      </div>
    </aside>
  );
}
