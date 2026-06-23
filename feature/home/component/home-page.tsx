"use client";

import { BrandsSection } from "./brands-section";
import { CategoryNav } from "./category-nav";
import { CategoryShowcase } from "./category-showcase";
import { CertificatesStrip } from "./certificates-strip";
import { ContactCtaBand } from "./contact-cta-band";
import { FaqSupportSection } from "./faq-support-section";
import { CorporateTrust } from "./corporate-trust";
import { CorporateVision } from "./corporate-vision";
import { GlobalImpact } from "./global-impact";
import { GlobalMap } from "./global-map";
import { HomeHeroSection } from "./home-hero-section";
import { OperationalStatusBar } from "./operational-status-bar";
import { ScrollProgress } from "./scroll-progress";
import { SloganBands } from "./slogan-bands";
import { StickyCategoryBar } from "./sticky-category-bar";
import { SupplyChainTech } from "./supply-chain-tech";
import { WhyChooseUs } from "./why-choose-us";

export function HomePage() {
  return (
    <>
      <ScrollProgress />
      <StickyCategoryBar />
      <HomeHeroSection />
      <CategoryNav />
      <CorporateTrust />
      <SloganBands />
      <CategoryShowcase />
      <GlobalImpact />
      <WhyChooseUs />
      <BrandsSection />
      <CorporateVision />
      <GlobalMap />
      <SupplyChainTech />
      <ContactCtaBand />
      <FaqSupportSection />
      <CertificatesStrip />
      <OperationalStatusBar />
    </>
  );
}
