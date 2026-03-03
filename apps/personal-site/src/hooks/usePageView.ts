import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** GA4 Measurement ID — replace with actual ID before production. */
const GA_MEASUREMENT_ID = "G-JH9KLBXK9B";

/**
 * Sends a GA4 page-view event on every route change.
 *
 * GA4's `gtag.js` does not track SPA route changes automatically.
 * Call this hook once inside the `Layout` component.
 *
 * @example
 * ```tsx
 * function Layout() {
 *   usePageView();
 *   return <Outlet />;
 * }
 * ```
 */
export function usePageView() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.hash,
      });
    }
  }, [location.pathname, location.hash]);
}
