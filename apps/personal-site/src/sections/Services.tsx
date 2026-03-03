import {
  Code,
  Wrench,
  Search,
  Zap,
  Shield,
  LayoutDashboard,
  Link,
} from "lucide-react";
import type { ReactNode } from "react";
import { Card, SectionWrapper } from "../components";
import { useContent } from "../i18n";

/** Map service index to an icon for visual variety. */
const primaryIcons: ReactNode[] = [
  <Code className="h-5 w-5" aria-hidden="true" key="code" />,
  <Search className="h-5 w-5" aria-hidden="true" key="search" />,
  <Shield className="h-5 w-5" aria-hidden="true" key="shield" />,
];

const secondaryIcons: ReactNode[] = [
  <Wrench className="h-5 w-5" aria-hidden="true" key="wrench" />,
  <LayoutDashboard className="h-5 w-5" aria-hidden="true" key="dashboard" />,
  <Link className="h-5 w-5" aria-hidden="true" key="link" />,
  <Zap className="h-5 w-5" aria-hidden="true" key="zap" />,
];

export function Services() {
  const { services } = useContent();

  return (
    <SectionWrapper id="services">
      <div className="text-center">
        <h2
          id="services-heading"
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
        >
          {services.sectionTitle}
        </h2>
        {services.sectionSubtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {services.sectionSubtitle}
          </p>
        )}
      </div>

      {/* Tier A — Primary / Advisory */}
      <div className="mt-16">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {services.primary.tierLabel}
          </h3>
          <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-400">
            {services.primary.tierDescription}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.primary.services.map((service, i) => (
            <Card
              key={service.title}
              title={service.title}
              icon={primaryIcons[i % primaryIcons.length]}
              className="border-2 border-gray-200 dark:border-gray-600"
            >
              <p className="mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span
                      className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-900 dark:bg-white"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Tier B — Secondary / Freelance */}
      <div className="mt-16">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {services.secondary.tierLabel}
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
            {services.secondary.tierDescription}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.secondary.services.map((service, i) => (
            <div
              key={service.title}
              className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="text-gray-500 dark:text-gray-400">
                  {secondaryIcons[i % secondaryIcons.length]}
                </span>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
