import { ArrowRight, Mail } from "lucide-react";
import { Button } from "../components";
import { useContent } from "../i18n";

export function Hero() {
  const { hero } = useContent();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Subtle gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white"
          >
            {hero.headline}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-400">
            {hero.subheadline}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              as="a"
              href={hero.primaryCta.href}
              variant="primary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.primaryCta.label}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>

            <Button
              as="a"
              href={hero.secondaryCta.href}
              variant="secondary"
              size="lg"
            >
              <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
