import { Link } from "react-router-dom";
import { useContent, useLocale } from "../i18n";
import { SEOHead, ContactForm } from "../components";

/**
 * Standalone contact page with heading, description, and the contact form.
 */
export function ContactPage() {
  const { contact, common, meta } = useContent();
  const { locale } = useLocale();
  const basePath = locale === "en" ? "" : `/${locale}`;

  return (
    <>
      <SEOHead
        title={`${contact.pageTitle} — ${meta.siteTitle}`}
        description={contact.pageDescription}
        path="/contact"
      />

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Back link */}
        <Link
          to={basePath || "/"}
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {common.backToHome}
        </Link>

        {/* Heading */}
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {contact.pageTitle}
        </h1>
        <p className="mb-10 text-lg text-gray-600 dark:text-gray-400">
          {contact.pageDescription}
        </p>

        {/* Form card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
