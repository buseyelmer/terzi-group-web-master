"use client";

import { Search } from "lucide-react";
import { headerContent } from "../data/content";

export function SearchBar() {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <input
        type="search"
        placeholder={headerContent.search}
        className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-base text-gray-700 outline-none transition-colors placeholder:text-gray-400 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
