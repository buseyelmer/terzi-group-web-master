"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "./site-footer";

const AUTH_PATHS = ["/giris", "/kayit"];

export function ConditionalFooter() {
  const pathname = usePathname();
  if (AUTH_PATHS.includes(pathname)) return null;
  return <SiteFooter />;
}
