"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDown, LogIn, User, UserPlus } from "lucide-react";
import Link from "next/link";
import { headerContent } from "../data/content";

export function AccountMenu() {
  return (
    <Menu as="div" className="relative">
      <MenuButton className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/30">
        <User className="h-4 w-4 text-brand" />
        <span className="hidden sm:inline">{headerContent.account}</span>
        <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
      </MenuButton>

      <MenuItems className="absolute right-0 z-50 mt-2 w-52 origin-top-right rounded-xl border border-gray-100 bg-white py-1.5 shadow-lg focus:outline-none">
        <MenuItem>
          {({ focus }) => (
            <Link
              href="/giris"
              className={`flex items-center gap-2.5 px-4 py-2.5 text-base transition-colors ${
                focus ? "bg-brand-lighter text-brand" : "text-gray-700"
              }`}
            >
              <LogIn className="h-4 w-4" />
              {headerContent.login}
            </Link>
          )}
        </MenuItem>
        <MenuItem>
          {({ focus }) => (
            <Link
              href="/kayit"
              className={`flex items-center gap-2.5 px-4 py-2.5 text-base transition-colors ${
                focus ? "bg-brand-lighter text-brand" : "text-gray-700"
              }`}
            >
              <UserPlus className="h-4 w-4" />
              {headerContent.register}
            </Link>
          )}
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
