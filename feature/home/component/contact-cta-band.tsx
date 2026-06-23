"use client";

import { Clock, Phone, Send } from "lucide-react";
import Link from "next/link";
import { homeContent } from "../data/content";
import { FadeIn } from "./fade-in";

const { contactBand } = homeContent;

export function ContactCtaBand() {
  return (
    <section className="bg-brand py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h2 className="section-title text-white">
                {contactBand.title}
              </h2>
              <p className="mt-2 max-w-lg text-base text-white/80">
                {contactBand.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <a
                href={`tel:${contactBand.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-white transition-opacity duration-300 hover:opacity-80"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <p className="text-base text-white/70">{contactBand.phoneLabel}</p>
                  <p className="font-semibold">{contactBand.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <p className="text-base text-white/70">{contactBand.hoursLabel}</p>
                  <p className="font-semibold">{contactBand.hours}</p>
                </div>
              </div>
            </div>

            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-brand transition-all duration-700 ease-in-out hover:bg-white/90 hover:shadow-lg"
            >
              <Send className="h-4 w-4" />
              {contactBand.cta}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
