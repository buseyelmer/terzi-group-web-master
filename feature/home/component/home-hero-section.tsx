"use client";

import { CorporateTopBar } from "@/feature/layout/component/corporate-top-bar";
import { SiteHeader } from "@/feature/layout/component/site-header";
import { HeroSlider } from "./hero-slider";

export function HomeHeroSection() {
  return (
    <section className="relative">
      <HeroSlider />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-30">
        <div className="pointer-events-auto">
          <CorporateTopBar />
          <SiteHeader overlay />
        </div>
      </div>
    </section>
  );
}
