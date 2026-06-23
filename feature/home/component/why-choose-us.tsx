"use client";

import { BadgePercent, Leaf, MessageCircle, Truck } from "lucide-react";
import Link from "next/link";
import { homeContent } from "../data/content";
import { FadeIn } from "./fade-in";

const featureIcons = [Leaf, BadgePercent, Truck, MessageCircle];
const { whyUs } = homeContent;

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <FadeIn>
          <p className="section-badge text-brand">{whyUs.title}</p>
          <h2 className="section-title-lg mt-3 leading-tight text-gray-900">
            {whyUs.heading}
            <br />
            {whyUs.headingLine2}
          </h2>
          <Link
            href="/giris"
            className="mt-8 inline-flex items-center bg-brand px-8 py-3.5 text-base font-semibold uppercase tracking-wide text-white transition-all duration-700 ease-in-out hover:bg-brand-dark"
          >
            {whyUs.cta}
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
          {whyUs.features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <FadeIn key={feature.title} delay={index * 80}>
                <div className="flex gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-100">
                    <Icon className="h-7 w-7 text-brand" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="card-title text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-base leading-relaxed text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
