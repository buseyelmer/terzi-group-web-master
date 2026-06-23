"use client";

import { Headphones, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { headerContent } from "../data/content";
import { AccountMenu } from "./account-menu";
import { LanguageSwitcher } from "./language-switcher";
import { SearchBar } from "./search-bar";

type SiteHeaderProps = {
  overlay?: boolean;
};

export function SiteHeader({ overlay = false }: SiteHeaderProps) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <div
      className={`bg-white ${overlay ? "shadow-sm" : "sticky top-0 z-50 border-b border-gray-100 shadow-sm"}`}
    >
      <div className="relative mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src="/logo_text.svg"
            alt="Terzi Group"
            width={250}
            height={56}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <div className="absolute left-1/2 hidden w-full max-w-xl -translate-x-1/2 px-4 md:block">
          <SearchBar />
        </div>

        <div className="relative z-10 ml-auto flex items-center gap-0.5 sm:gap-1">
          <LanguageSwitcher />
          <button
            type="button"
            title={headerContent.search}
            aria-label={headerContent.search}
            aria-expanded={mobileSearchOpen}
            onClick={() => setMobileSearchOpen((open) => !open)}
            className="flex items-center justify-center rounded-lg p-2.5 text-gray-700 transition-colors hover:bg-brand-lighter hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 md:hidden"
          >
            <Search className="h-5 w-5" />
          </button>
          <Link
            href="/destek"
            title={headerContent.customerService}
            aria-label={headerContent.customerService}
            className="flex items-center justify-center rounded-lg p-2.5 text-gray-700 transition-colors hover:bg-brand-lighter hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
          >
            <Headphones className="h-5 w-5" />
          </Link>
          <AccountMenu />
        </div>
      </div>

      {mobileSearchOpen ? (
        <div className="border-t border-gray-50 px-4 pb-3 pt-2 md:hidden">
          <SearchBar />
        </div>
      ) : null}
    </div>
  );
}
