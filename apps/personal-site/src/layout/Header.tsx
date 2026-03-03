import { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContent, useLocale } from "../i18n";
import { LanguageSwitcher } from "../components";
import { useActiveSection } from "../hooks";

/**
 * Sticky site header with navigation, mobile menu, and language switcher.
 *
 * Hash links smooth-scroll to sections on the home page. The Contact link
 * routes to the dedicated contact page. Active section highlighting comes
 * from the `useActiveSection` hook.
 */
export function Header() {
  const content = useContent();
  const { locale } = useLocale();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = useMemo(
    () =>
      content.nav.links
        .filter((l) => l.href.startsWith("#"))
        .map((l) => l.href.slice(1)),
    [content.nav.links],
  );

  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const basePath = locale === "en" ? "" : `/${locale}`;

  const isHomePage =
    location.pathname === "/" ||
    location.pathname === `/${locale}` ||
    location.pathname === `/${locale}/`;

  const handleHashClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (isHomePage && href.startsWith("#")) {
        e.preventDefault();
        const el = document.getElementById(href.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        // Update URL hash without navigation
        window.history.pushState(null, "", `${basePath}/${href}`);
      }
    },
    [isHomePage, basePath],
  );

  const resolveHref = (href: string) => {
    if (href.startsWith("#")) {
      return isHomePage ? href : `${basePath}/${href}`;
    }
    if (href.startsWith("/")) {
      return `${basePath}${href}`;
    }
    return href;
  };

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return activeSection === href.slice(1);
    }
    return false;
  };

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-gray-200/60 bg-white/80 backdrop-blur-lg dark:border-gray-700/60 dark:bg-gray-950/80"
          : "bg-white/60 backdrop-blur-sm dark:bg-gray-950/80",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo / site name */}
        <Link
          to={basePath || "/"}
          className="text-lg font-bold tracking-tight text-gray-900 transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-200"
        >
          {content.meta.siteTitle.split("—")[0]?.trim() ?? "Josh Horwitz"}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {content.nav.links.map((link) => {
            const href = resolveHref(link.href);
            const active = isActive(link.href);

            if (link.href.startsWith("/")) {
              return (
                <Link
                  key={link.href}
                  to={href}
                  className={[
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <a
                key={link.href}
                href={href}
                onClick={(e) => handleHashClick(e, link.href)}
                className={[
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
                ].join(" ")}
              >
                {link.label}
              </a>
            );
          })}

          <div className="ml-2 border-l border-gray-200 pl-2 dark:border-gray-700">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          >
            {mobileOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <div
        className={[
          "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
          mobileOpen ? "max-h-80" : "max-h-0",
        ].join(" ")}
      >
        <nav
          className="border-t border-gray-200 px-4 pb-4 pt-2 dark:border-gray-700"
          aria-label="Mobile"
        >
          {content.nav.links.map((link) => {
            const href = resolveHref(link.href);
            const active = isActive(link.href);

            if (link.href.startsWith("/")) {
              return (
                <Link
                  key={link.href}
                  to={href}
                  className={[
                    "block rounded-md px-3 py-3 text-base font-medium transition-colors",
                    active
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <a
                key={link.href}
                href={href}
                onClick={(e) => {
                  handleHashClick(e, link.href);
                  setMobileOpen(false);
                }}
                className={[
                  "block rounded-md px-3 py-3 text-base font-medium transition-colors",
                  active
                    ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
                ].join(" ")}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
