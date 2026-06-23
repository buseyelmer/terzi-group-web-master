"use client";

import { Clock, Headphones, Mail } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/feature/home/component/fade-in";
import { supportPageContent } from "../data/content";

const { title, subtitle, highlights, contactCta, contactHref, hours, email } =
  supportPageContent;

export function SupportPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-gray-100 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <Headphones className="h-7 w-7" strokeWidth={1.5} />
            </span>
            <h1 className="section-title-lg mt-6 text-gray-900">{title}</h1>
            <p className="mt-4 text-base leading-relaxed text-gray-500">{subtitle}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn delay={80}>
            <ul className="grid gap-4 sm:grid-cols-3 sm:gap-5">
              {highlights.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-gray-100 bg-gray-50/80 p-5 text-center sm:p-6"
                >
                  <h2 className="card-title text-gray-900">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={140} className="mt-10 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2">
                <Clock className="h-4 w-4 text-brand" strokeWidth={1.5} />
                {hours}
              </span>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 transition-colors hover:border-brand/30 hover:text-brand"
              >
                <Mail className="h-4 w-4 text-brand" strokeWidth={1.5} />
                {email}
              </a>
            </div>

            <Link
              href={contactHref}
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              {contactCta}
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
