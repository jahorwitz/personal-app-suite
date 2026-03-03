import {
  Clock,
  MessageSquare,
  CalendarCheck,
  FileText,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { SectionWrapper } from "../components";
import { useContent } from "../i18n";

const stepIcons: ReactNode[] = [
  <Clock className="h-5 w-5" aria-hidden="true" key="clock" />,
  <MessageSquare className="h-5 w-5" aria-hidden="true" key="msg" />,
  <CalendarCheck className="h-5 w-5" aria-hidden="true" key="cal" />,
  <FileText className="h-5 w-5" aria-hidden="true" key="file" />,
  <Users className="h-5 w-5" aria-hidden="true" key="users" />,
];

export function HowIWork() {
  const { howIWork } = useContent();

  return (
    <SectionWrapper id="how-i-work">
      <div className="text-center">
        <h2
          id="how-i-work-heading"
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
        >
          {howIWork.sectionTitle}
        </h2>
        {howIWork.sectionSubtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {howIWork.sectionSubtitle}
          </p>
        )}
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column — Engagement model */}
        <div>
          <h3 className="mb-8 text-xl font-bold text-gray-900 dark:text-white">
            {howIWork.engagementModel.title}
          </h3>
          <div className="space-y-6">
            {howIWork.engagementModel.steps.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  {stepIcons[i % stepIcons.length]}
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — Pricing */}
        <div>
          <h3 className="mb-8 text-xl font-bold text-gray-900 dark:text-white">
            {howIWork.pricing.title}
          </h3>
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {howIWork.pricing.description}
            </p>
            {howIWork.pricing.note && (
              <p className="mt-6 border-t border-gray-200 pt-6 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
                {howIWork.pricing.note}
              </p>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
