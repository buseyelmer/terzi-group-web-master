"use client";

import { Network, Snowflake, Warehouse } from "lucide-react";
import { homeContent } from "../data/content";
import { FadeIn } from "./fade-in";

const CARD_ICONS = [Warehouse, Snowflake, Network];
const { supplyChainTech } = homeContent;

export function SupplyChainTech() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-10 text-center sm:mb-12">
          <p className="section-badge text-brand">{supplyChainTech.badge}</p>
          <h2 className="section-title mt-2 text-gray-900">{supplyChainTech.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-500">
            {supplyChainTech.subtitle}
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {supplyChainTech.cards.map((card, index) => {
            const Icon = CARD_ICONS[index];
            return (
              <FadeIn key={card.title} delay={index * 80}>
                <article className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-brand/20 hover:shadow-lg sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="card-title mt-5 text-gray-900">{card.title}</h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-gray-500">
                    {card.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
