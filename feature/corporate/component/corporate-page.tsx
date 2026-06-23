"use client";

import { CorporateHero } from "./corporate-hero";
import { CorporateAbout } from "./sections/corporate-about";
import { CorporateCta } from "./sections/corporate-cta";
import { CorporateMission } from "./sections/corporate-mission";
import { CorporatePillars } from "./sections/corporate-pillars";
import { CorporateTimeline } from "./sections/corporate-timeline";
import { CorporateValues } from "./sections/corporate-values";

export function CorporatePage() {
  return (
    <>
      <CorporateHero />
      <CorporateAbout />
      <CorporatePillars />
      <CorporateTimeline />
      <CorporateMission />
      <CorporateCta />
      <CorporateValues />
    </>
  );
}
