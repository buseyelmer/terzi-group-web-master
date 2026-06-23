"use client";

import { Package, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { authContent } from "../data/content";

const BENEFIT_ICONS = [Package, Truck, ShieldCheck] as const;

type AuthShellProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
  footer?: ReactNode;
  wide?: boolean;
};

export function AuthShell({ children, title, subtitle, footer, wide }: AuthShellProps) {
  const { panel } = authContent;

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mb-8 flex justify-center lg:hidden">
          <Link href="/">
            <Image
              src="/logo_text.svg"
              alt="Terzi Group"
              width={200}
              height={44}
              className="h-9 w-auto"
            />
          </Link>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16">
          <aside className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="h-1.5 bg-brand" />

              <div className="p-6 sm:p-8">
                <Link href="/" className="hidden lg:inline-block">
                  <Image
                    src="/logo_text.svg"
                    alt="Terzi Group"
                    width={190}
                    height={42}
                    className="h-9 w-auto"
                  />
                </Link>

                <p className="section-badge mt-6 text-brand lg:mt-8">B2B Platform</p>
                <h2 className="section-title mt-2 text-gray-900">{panel.headline}</h2>
                <p className="mt-3 text-base leading-relaxed text-gray-500">
                  {panel.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {panel.benefits.map((benefit, index) => {
                    const Icon = BENEFIT_ICONS[index] ?? Package;
                    return (
                      <li
                        key={benefit.title}
                        className="flex gap-4 rounded-xl border border-gray-100 bg-gray-50/80 p-4"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-lighter text-brand">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-gray-900">{benefit.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-gray-500">
                            {benefit.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </aside>

          <div className={`mx-auto w-full ${wide ? "max-w-xl lg:mx-0 lg:max-w-none" : "max-w-md lg:mx-0 lg:max-w-none"}`}>
            <div className="mb-6 sm:mb-8">
              <h1 className="section-title-lg text-gray-900">{title}</h1>
              {subtitle ? (
                <p className="mt-2 text-base text-gray-500">{subtitle}</p>
              ) : null}
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              {children}
            </div>

            {footer ? (
              <div className="mt-6 text-center text-sm text-gray-500 lg:text-left">{footer}</div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white px-4 py-5 text-center text-sm text-gray-500 sm:px-6">
        <p>© {new Date().getFullYear()} Terzi Group · Avrupa Genelinde Toptan Tedarik</p>
      </div>
    </div>
  );
}
