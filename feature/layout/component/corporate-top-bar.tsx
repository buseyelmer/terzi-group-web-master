"use client";

import { Award, Globe, HeadphonesIcon, Package, Tag } from "lucide-react";
import { homeContent } from "@/feature/home/data/content";

const infoIcons = [Globe, Award, HeadphonesIcon, Tag, Package];
const items = homeContent.topBar.items;

export function CorporateTopBar() {
  return (
    <div className="hidden bg-brand/85 text-white backdrop-blur-sm md:block">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 overflow-x-auto py-2.5 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 [&::-webkit-scrollbar]:hidden">
          {items.map((item, index) => {
            const Icon = infoIcons[index];
            return (
              <span
                key={item}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap text-xs text-white/95 sm:text-sm md:text-base"
              >
                <Icon className="h-4 w-4 shrink-0" />
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
