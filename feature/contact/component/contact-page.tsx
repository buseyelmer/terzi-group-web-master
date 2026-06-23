"use client";

import { Mail, Phone } from "lucide-react";
import { contactPageContent } from "../data/content";
import { ContactForm } from "./contact-form";
import { LocationPanel } from "./location-panel";
import { FadeIn } from "@/feature/home/component/fade-in";

const { hero, generalEmail, locations, form } = contactPageContent;

function formatTel(value: string) {
  return value.replace(/[^\d+]/g, "");
}

export function ContactPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <FadeIn>
            <h1 className="section-title-lg text-gray-900">{hero.title}</h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-500">
              {hero.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={80} className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${generalEmail}`}
                className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 transition-colors hover:border-brand/30 hover:bg-brand-lighter/50 hover:text-brand sm:px-5"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand" strokeWidth={1.5} />
                <span className="break-all sm:break-normal">{generalEmail}</span>
              </a>
              {locations.map((loc) => (
                <a
                  key={loc.id}
                  href={`tel:${formatTel(loc.phone)}`}
                  className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 transition-colors hover:border-brand/30 hover:bg-brand-lighter/50 hover:text-brand sm:px-5"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand" strokeWidth={1.5} />
                  <span className="text-gray-400">{loc.name}</span>
                  <span className="break-all sm:break-normal">{loc.phone}</span>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24">
            <FadeIn className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 sm:p-8">
                <h2 className="section-title text-gray-900">{form.title}</h2>
                <p className="mt-2 text-base text-gray-500">{form.subtitle}</p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div>
                <h2 className="section-title text-gray-900">
                  Lokasyonlarımız
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Adres, çalışma saatleri ve iletişim bilgileri.
                </p>
                <div className="mt-8">
                  <LocationPanel />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
