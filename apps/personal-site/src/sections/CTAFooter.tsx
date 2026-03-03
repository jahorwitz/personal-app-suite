import { ArrowRight } from "lucide-react";
import { Button, SectionWrapper } from "../components";
import { useContent } from "../i18n";

export function CTAFooter() {
  const { ctaFooter, hero, footer } = useContent();

  const linkedIn = footer.socialLinks.find((l) => l.platform === "LinkedIn");

  return (
    <SectionWrapper
      id="cta-footer"
      className="bg-gray-900 py-20 text-white md:py-28 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="cta-footer-heading"
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          {ctaFooter.headline}
        </h2>
        {ctaFooter.subheadline && (
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
            {ctaFooter.subheadline}
          </p>
        )}

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            as="a"
            href={ctaFooter.cta.href}
            variant="primary"
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaFooter.cta.label}
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Button>

          <Button
            as="a"
            href={hero.secondaryCta.href}
            variant="secondary"
            size="lg"
            className="border-gray-400 text-white hover:bg-gray-800 dark:border-gray-400 dark:text-white dark:hover:bg-gray-800"
          >
            {hero.secondaryCta.label}
          </Button>

          {linkedIn && (
            <Button
              as="a"
              href={linkedIn.url}
              variant="ghost"
              size="lg"
              className="text-gray-300 hover:bg-gray-800 hover:text-white dark:text-gray-300 dark:hover:bg-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkedIn.platform}
            </Button>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
