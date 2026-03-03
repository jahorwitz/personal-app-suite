import { useState, useRef, useEffect } from "react";
import { useLocale } from "../i18n";
import type { Locale } from "../config/types";
import { supportedLocales } from "../config/content";

/** Display labels for each locale. */
const localeLabels: Record<
  Locale,
  { flag: string; name: string; short: string }
> = {
  en: { flag: "🇺🇸", name: "English", short: "EN" },
  es: { flag: "🇪🇸", name: "Español", short: "ES" },
  pt: { flag: "🇧🇷", name: "Português", short: "PT" },
  fr: { flag: "🇫🇷", name: "Français", short: "FR" },
};

/**
 * Dropdown language switcher for the site header.
 *
 * Displays the current locale as a compact button. On click, shows a
 * dropdown with all supported locales. Selecting a locale navigates
 * to the equivalent path under the new prefix.
 */
export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = localeLabels[locale];

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
        className={[
          "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium",
          "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2",
          "dark:focus-visible:ring-white",
          "transition-colors",
        ].join(" ")}
      >
        <span aria-hidden="true">{current.flag}</span>
        <span>{current.short}</span>
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Available languages"
          className={[
            "absolute right-0 z-50 mt-1 w-40 overflow-hidden rounded-lg border",
            "border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900",
          ].join(" ")}
        >
          {supportedLocales.map((loc) => {
            const info = localeLabels[loc];
            const isActive = loc === locale;
            return (
              <li key={loc}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    setLocale(loc);
                    setOpen(false);
                  }}
                  className={[
                    "flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-gray-100 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                      : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800",
                  ].join(" ")}
                >
                  <span aria-hidden="true">{info.flag}</span>
                  <span>{info.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
