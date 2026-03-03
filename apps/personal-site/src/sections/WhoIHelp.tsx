import { Building2, User } from "lucide-react";
import type { ReactNode } from "react";
import { SectionWrapper } from "../components";
import { useContent } from "../i18n";

const iconMap: Record<string, ReactNode> = {
  "building-2": <Building2 className="h-6 w-6" aria-hidden="true" />,
  user: <User className="h-6 w-6" aria-hidden="true" />,
};

export function WhoIHelp() {
  const { whoIHelp } = useContent();

  return (
    <SectionWrapper id="who-i-help" variant="alternate">
      <div className="text-center">
        <h2
          id="who-i-help-heading"
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
        >
          {whoIHelp.sectionTitle}
        </h2>
        {whoIHelp.sectionSubtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {whoIHelp.sectionSubtitle}
          </p>
        )}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Primary audience — visually more prominent */}
        <div className="rounded-xl border-2 border-gray-900 bg-white p-8 shadow-md dark:border-white dark:bg-gray-900">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900">
              {iconMap[whoIHelp.segments[0].icon] ?? null}
            </span>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {whoIHelp.segments[0].title}
            </h3>
          </div>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            {whoIHelp.segments[0].description}
          </p>
        </div>

        {/* Secondary audience — lighter treatment */}
        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              {iconMap[whoIHelp.segments[1].icon] ?? null}
            </span>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {whoIHelp.segments[1].title}
            </h3>
          </div>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            {whoIHelp.segments[1].description}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
