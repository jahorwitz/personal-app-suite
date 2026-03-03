import { Outlet } from "react-router-dom";
import { useContent } from "../i18n";
import { SEOHead } from "../components";
import { usePageView } from "../hooks";
import { Header } from "./Header";
import { Footer } from "./Footer";

/**
 * Root layout component wrapping every page with Header, Footer,
 * SEO defaults, and GA page-view tracking.
 */
export function Layout() {
  const { meta } = useContent();
  usePageView();

  return (
    <>
      <SEOHead title={meta.siteTitle} description={meta.siteDescription} />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
