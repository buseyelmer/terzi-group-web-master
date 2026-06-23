"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "./site-header";

export function ConditionalHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) return null;

  return <SiteHeader />;
}
