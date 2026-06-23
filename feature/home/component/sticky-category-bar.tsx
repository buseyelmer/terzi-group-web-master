"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getCategoryHref, PRODUCT_CATEGORIES } from "@/feature/category/data/categories";
import { categoryIcons } from "./category-icon-map";

const CATEGORY_NAV_ID = "category-nav";

export function StickyCategoryBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);
  const thresholdRef = useRef(0);

  useEffect(() => {
    const updateThreshold = () => {
      const el = document.getElementById(CATEGORY_NAV_ID);
      if (el) {
        const rect = el.getBoundingClientRect();
        thresholdRef.current = rect.bottom + window.scrollY;
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pastCategoryNav = scrollY > thresholdRef.current;

      setIsSticky(pastCategoryNav);

      if (!pastCategoryNav) {
        setIsVisible(false);
      } else if (scrollY > lastScrollY.current) {
        setIsVisible(true);
      } else if (scrollY < lastScrollY.current) {
        setIsVisible(false);
      }

      lastScrollY.current = scrollY;
    };

    updateThreshold();
    handleScroll();

    window.addEventListener("resize", updateThreshold);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", updateThreshold);
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollPaddingTop = "";
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollPaddingTop =
      isSticky && isVisible ? "3rem" : "";
  }, [isSticky, isVisible]);

  return (
    <AnimatePresence>
      {isSticky && isVisible && (
        <motion.nav
          key="sticky-category-bar"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Kategori menüsü"
          className="fixed top-0 right-0 left-0 z-50 border-y border-gray-200 bg-white/95 font-sans shadow-sm backdrop-blur-md"
        >
          <div className="mx-auto flex h-12 max-w-7xl items-center justify-center overflow-x-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex items-center">
              {PRODUCT_CATEGORIES.map(({ key, slug, label }, index) => {
                const Icon = categoryIcons[key];
                const isLast = index === PRODUCT_CATEGORIES.length - 1;

                return (
                  <li
                    key={key}
                    className={`flex shrink-0 items-center ${!isLast ? "border-r border-gray-200" : ""}`}
                  >
                    <Link
                      href={getCategoryHref(slug)}
                      className="group flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-gray-800 transition-colors hover:text-brand sm:gap-2.5 sm:px-5 sm:text-sm"
                    >
                      <Icon
                        className="h-4 w-4 shrink-0 text-brand transition-colors group-hover:text-brand-dark sm:h-[18px] sm:w-[18px]"
                        strokeWidth={1.5}
                      />
                      <span className="whitespace-nowrap">{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
