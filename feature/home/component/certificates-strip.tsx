"use client";

import { Award, Leaf, ShieldCheck, Truck } from "lucide-react";
import { homeContent } from "../data/content";
import { FadeIn } from "./fade-in";

const certIcons = [ShieldCheck, Award, Leaf, Truck];
const { certificates } = homeContent;

export function CertificatesStrip() {
  return (
    <section className="border-y border-gray-100 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="section-badge text-gray-400">
            {certificates.title}
          </p>
        </FadeIn>
        <div className="mt-8 grid grid-cols-1 gap-6 min-[400px]:grid-cols-2 sm:grid-cols-4">
          {certificates.items.map((item, index) => {
            const Icon = certIcons[index];
            return (
              <FadeIn key={item.name} delay={index * 80}>
                <div className="flex flex-col items-center text-center transition-all duration-700 ease-in-out hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-colors duration-300 hover:bg-brand-lighter hover:text-brand">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <p className="card-title mt-3 text-gray-800">{item.name}</p>
                  <p className="mt-0.5 text-sm text-gray-400 sm:text-base">{item.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
