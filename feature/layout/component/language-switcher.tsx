"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDown, Globe } from "lucide-react";
import { useState } from "react";

const languages = [
  { code: "tr", label: "Türkçe" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
] as const;

export function LanguageSwitcher() {
  const [selected, setSelected] = useState<(typeof languages)[number]["code"]>("tr");
  const current = languages.find((lang) => lang.code === selected) ?? languages[0];

  return (
    <Menu as="div" className="relative">
      <MenuButton className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/30">
        <Globe className="h-4 w-4 text-brand" />
        <span className="hidden uppercase sm:inline">{current.code}</span>
        <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
      </MenuButton>

      <MenuItems className="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-xl border border-gray-100 bg-white py-1.5 shadow-lg focus:outline-none">
        {languages.map((lang) => (
          <MenuItem key={lang.code}>
            {({ focus }) => (
              <button
                type="button"
                onClick={() => setSelected(lang.code)}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-base transition-colors ${
                  focus ? "bg-brand-lighter text-brand" : "text-gray-700"
                } ${selected === lang.code ? "font-semibold" : ""}`}
              >
                <span>{lang.label}</span>
                <span className="text-base uppercase text-gray-400">{lang.code}</span>
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
