import {
  createContext,
  useContext,
  useMemo,
  useCallback,
  type ReactNode,
} from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import type { Locale, SiteContent } from "../config/types";
import { contentMap, defaultLocale, supportedLocales } from "../config/content";

/** Values exposed by the language context. */
export interface LanguageContextValue {
  locale: Locale;
  content: SiteContent;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Returns whether a string is a supported locale code. */
function isValidLocale(value: string | undefined): value is Locale {
  return supportedLocales.includes(value as Locale);
}

interface LanguageProviderProps {
  children: ReactNode;
}

/**
 * Provides locale-aware content to the component tree.
 *
 * Reads the `:lang` route parameter to determine the active locale.
 * Falls back to `"en"` when the parameter is absent or unsupported.
 * `setLocale` navigates to the equivalent path under the new locale prefix.
 */
export function LanguageProvider({ children }: LanguageProviderProps) {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const locale: Locale = isValidLocale(lang) ? lang : defaultLocale;
  const content = contentMap[locale];

  const setLocale = useCallback(
    (newLocale: Locale) => {
      const pathSegments = location.pathname.split("/").filter(Boolean);

      // Remove the current locale prefix if present
      if (pathSegments.length > 0 && isValidLocale(pathSegments[0])) {
        pathSegments.shift();
      }

      // Build the new path with the locale prefix (omit for English default)
      const newPath =
        newLocale === defaultLocale
          ? `/${pathSegments.join("/")}`
          : `/${newLocale}/${pathSegments.join("/")}`;

      navigate(newPath + location.search + location.hash);
    },
    [location.pathname, location.search, location.hash, navigate],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, content, setLocale }),
    [locale, content, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Returns the full `SiteContent` object for the current locale.
 *
 * Must be used inside a `<LanguageProvider>`.
 */
export function useContent(): SiteContent {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useContent must be used within a LanguageProvider");
  }
  return ctx.content;
}

/**
 * Returns the current locale code and a function to change it.
 *
 * `setLocale` triggers a navigation to the equivalent path under the new locale.
 * Must be used inside a `<LanguageProvider>`.
 */
export function useLocale(): {
  locale: Locale;
  setLocale: (l: Locale) => void;
} {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LanguageProvider");
  }
  return { locale: ctx.locale, setLocale: ctx.setLocale };
}
