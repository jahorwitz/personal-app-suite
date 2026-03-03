import { Helmet } from "react-helmet-async";
import { useLocale } from "../i18n";
import { supportedLocales } from "../config/content";
import type { Locale } from "../config/types";

const SITE_URL = "https://withjosh.net";

/** Maps locale codes to og:locale format. */
const ogLocaleMap: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  pt: "pt_BR",
  fr: "fr_FR",
};

export interface SEOHeadProps {
  /** Page title. */
  title: string;
  /** Page meta description. */
  description: string;
  /** Current page path (e.g. `"/contact"`). Defaults to `""`. */
  path?: string;
  /** OG image path relative to site root. Defaults to `"/og-image.png"`. */
  ogImage?: string;
  /** Open Graph type. Defaults to `"website"`. */
  ogType?: string;
  /** Set `true` to add `noindex` (e.g. 404 pages). */
  noIndex?: boolean;
}

/**
 * Manages `<head>` meta tags for SEO and social sharing via `react-helmet-async`.
 *
 * Renders title, description, Open Graph tags, Twitter Card tags,
 * canonical URL, and hreflang alternate links for all supported locales.
 *
 * @example
 * ```tsx
 * <SEOHead
 *   title={content.meta.siteTitle}
 *   description={content.meta.siteDescription}
 * />
 * ```
 */
export function SEOHead({
  title,
  description,
  path = "",
  ogImage = "/og-image.png",
  ogType = "website",
  noIndex = false,
}: SEOHeadProps) {
  const { locale } = useLocale();

  const canonicalPath = locale === "en" ? path : `/${locale}${path}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const imageUrl = `${SITE_URL}${ogImage}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={ogLocaleMap[locale]} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content="@jahorwitz" />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang alternates */}
      {supportedLocales.map((loc) => {
        const href =
          loc === "en" ? `${SITE_URL}${path}` : `${SITE_URL}/${loc}${path}`;
        return <link key={loc} rel="alternate" hrefLang={loc} href={href} />;
      })}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${path}`} />
    </Helmet>
  );
}
