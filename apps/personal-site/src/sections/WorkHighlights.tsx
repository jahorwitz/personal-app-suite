import { Card, SectionWrapper } from "../components";
import { useContent } from "../i18n";

export function WorkHighlights() {
  const { workHighlights } = useContent();

  return (
    <SectionWrapper id="work-highlights" variant="alternate">
      <div className="text-center">
        <h2
          id="work-highlights-heading"
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
        >
          {workHighlights.sectionTitle}
        </h2>
        {workHighlights.sectionSubtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {workHighlights.sectionSubtitle}
          </p>
        )}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workHighlights.highlights.map((highlight) => (
          <Card key={highlight.title} title={highlight.title}>
            <p className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
              {highlight.outcome}
            </p>
            <p className="mb-4 text-sm leading-relaxed">
              {highlight.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {highlight.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
