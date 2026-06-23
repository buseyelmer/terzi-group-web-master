"use client";

import { ExternalLink, MapPin, Phone, Printer } from "lucide-react";
import { useState } from "react";
import { contactPageContent } from "../data/content";

const { locations } = contactPageContent;

function formatTel(value: string) {
  return value.replace(/[^\d+]/g, "");
}

export function LocationPanel() {
  const [activeId, setActiveId] = useState(locations[0].id);
  const active = locations.find((loc) => loc.id === activeId) ?? locations[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Lokasyon seçimi"
        className="flex gap-2 overflow-x-auto rounded-xl bg-gray-100 p-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:overflow-visible"
      >
        {locations.map((loc) => (
          <button
            key={loc.id}
            type="button"
            role="tab"
            aria-selected={activeId === loc.id}
            onClick={() => setActiveId(loc.id)}
            className={`shrink-0 rounded-lg px-3 py-2.5 text-xs font-semibold transition-all duration-200 sm:flex-1 sm:px-4 sm:text-sm ${
              activeId === loc.id
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {loc.name}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        className="mt-8 space-y-8"
        key={active.id}
      >
        <div className="space-y-4">
          <div className="flex gap-3">
            <MapPin
              className="mt-0.5 h-5 w-5 shrink-0 text-brand"
              strokeWidth={1.5}
            />
            <div>
              <p className="font-semibold text-gray-900">{active.name}</p>
              <address className="mt-1 not-italic text-base leading-relaxed text-gray-600">
                {active.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </div>

          <a
            href={`tel:${formatTel(active.phone)}`}
            className="flex items-center gap-3 text-base text-gray-600 transition-colors hover:text-brand"
          >
            <Phone className="h-5 w-5 shrink-0 text-gray-400" strokeWidth={1.5} />
            <span>
              <span className="text-gray-400">Telefon </span>
              {active.phone}
            </span>
          </a>

          <div className="flex items-center gap-3 text-base text-gray-600">
            <Printer className="h-5 w-5 shrink-0 text-gray-400" strokeWidth={1.5} />
            <span>
              <span className="text-gray-400">Faks </span>
              {active.fax}
            </span>
          </div>

          <a
            href={active.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
          >
            <ExternalLink className="h-4 w-4" />
            Google Maps&apos;te aç
          </a>
        </div>

        <div className="space-y-6 border-t border-gray-100 pt-8">
          {active.hours.map((block) => (
            <div key={block.title}>
              <h3 className="text-sm font-semibold text-gray-900">
                {block.title}
              </h3>
              <dl className="mt-3 space-y-2">
                {block.items.map((item) => (
                  <div
                    key={`${item.label}-${item.value}`}
                    className="flex flex-col gap-0.5 text-sm sm:flex-row sm:justify-between sm:gap-4"
                  >
                    <dt className="text-gray-500">{item.label}</dt>
                    <dd
                      className={`font-medium sm:text-right ${
                        item.value === "Kapalı"
                          ? "text-gray-400"
                          : "text-gray-800"
                      }`}
                    >
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
