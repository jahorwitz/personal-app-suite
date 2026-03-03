import { SectionWrapper } from "../components";
import { useContent } from "../i18n";

export function ProblemsIFix() {
  const { problemsIFix } = useContent();

  return (
    <SectionWrapper id="problems" variant="alternate">
      <div className="text-center">
        <h2
          id="problems-heading"
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
        >
          {problemsIFix.sectionTitle}
        </h2>
        {problemsIFix.sectionSubtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {problemsIFix.sectionSubtitle}
          </p>
        )}
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-6">
        {problemsIFix.problems.map((problem) => (
          <div
            key={problem.text}
            className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
          >
            <span
              className="flex-shrink-0 text-4xl font-serif leading-none text-gray-300 dark:text-gray-600"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <div className="flex-1">
              <p className="text-lg font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                {problem.text}
              </p>
              {problem.category && (
                <span className="mt-3 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  {problem.category}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
