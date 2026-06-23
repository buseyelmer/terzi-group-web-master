import { Clock, Mail, MapPin, Phone, Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { footerContent } from "../data/content";

function formatTel(value: string) {
  return value.replace(/[^\d+]/g, "");
}

export function SiteFooter() {
  const { tagline, email, hours, copyright, links, locations } = footerContent;

  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo_text.svg"
                alt="Terzi Group"
                width={220}
                height={48}
                className="h-10 w-auto brightness-0 invert sm:h-11"
              />
            </Link>
            <p className="mt-5 max-w-md text-base leading-relaxed text-gray-400">
              {tagline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-8">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2.5 text-sm text-gray-300 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
                  <Mail className="h-4 w-4 text-brand" strokeWidth={1.5} />
                </span>
                {email}
              </a>
              <div className="inline-flex items-center gap-2.5 text-sm text-gray-300">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
                  <Clock className="h-4 w-4 text-brand" strokeWidth={1.5} />
                </span>
                {hours}
              </div>
            </div>

            <nav
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
              aria-label="Alt menü"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-6">
            {locations.map((location) => (
              <div
                key={location.name}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
              >
                <h3 className="text-base font-semibold text-brand sm:text-lg">
                  {location.name}
                </h3>

                <div className="mt-4 space-y-4">
                  <div className="flex gap-3">
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0 text-gray-500"
                      strokeWidth={1.5}
                    />
                    <address className="not-italic text-sm leading-relaxed text-gray-300">
                      {location.address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>

                  <a
                    href={`tel:${formatTel(location.phone)}`}
                    className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    <Phone
                      className="h-4 w-4 shrink-0 text-gray-500"
                      strokeWidth={1.5}
                    />
                    <span>
                      <span className="text-gray-500">Telefon: </span>
                      {location.phone}
                    </span>
                  </a>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Printer
                      className="h-4 w-4 shrink-0 text-gray-500"
                      strokeWidth={1.5}
                    />
                    <span>
                      <span className="text-gray-500">Faks: </span>
                      {location.fax}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p className="text-sm text-gray-500">{copyright}</p>
          <p className="text-sm text-gray-500">
            Avrupa Genelinde Toptan Tedarik
          </p>
        </div>
      </div>
    </footer>
  );
}
