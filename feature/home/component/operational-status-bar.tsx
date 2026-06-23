"use client";

import { BarChart3, Truck } from "lucide-react";
import { homeContent } from "../data/content";

const { operationalStatus } = homeContent;

function StatusPulse() {
  return (
    <span className="relative flex h-3 w-3 shrink-0" aria-hidden>
      <span className="status-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
    </span>
  );
}

export function OperationalStatusBar() {
  return (
    <section
      className="border-y border-white/10 bg-[#0f172a]"
      aria-label="Operasyonel durum özeti"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="flex items-center justify-start gap-3 px-4 py-4 text-left sm:px-6 sm:py-5">
            <StatusPulse />
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-400">
                {operationalStatus.logisticsLabel}
              </p>
              <p className="mt-0.5 text-base font-semibold text-white">
                {operationalStatus.logisticsStatus}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-3 px-4 py-4 text-left sm:px-6 sm:py-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-gray-300">
              <BarChart3 className="h-4 w-4" strokeWidth={1.5} />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-400">
                {operationalStatus.efficiencyLabel}
              </p>
              <p className="mt-0.5 text-base font-semibold text-white">
                {operationalStatus.efficiencyValue}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-3 px-4 py-4 text-left sm:px-6 sm:py-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-gray-300">
              <Truck className="h-4 w-4" strokeWidth={1.5} />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-400">
                {operationalStatus.shipmentsLabel}
              </p>
              <p className="mt-0.5 text-base font-semibold text-white">
                {operationalStatus.shipmentsValue}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
