import type { ReactNode } from "react";

type SectionVariant = "default" | "alternate";

export interface SectionWrapperProps {
  /** Anchor ID for scroll targeting (e.g. `"services"`). */
  id: string;
  /** Section content. */
  children: ReactNode;
  /** Visual variant — `"alternate"` applies a contrasting background. */
  variant?: SectionVariant;
  /** Additional CSS classes appended to the section element. */
  className?: string;
}

const variantStyles: Record<SectionVariant, string> = {
  default: "bg-white dark:bg-gray-950",
  alternate: "bg-gray-50 dark:bg-gray-900",
};

/**
 * Wraps a landing-page section with consistent vertical padding,
 * max-width container, horizontal padding, and a scroll-target `id`.
 *
 * Uses a `<section>` element with `aria-labelledby` pointing to a
 * conventional heading ID (`{id}-heading`) for accessibility.
 *
 * @example
 * ```tsx
 * <SectionWrapper id="services" variant="alternate">
 *   <h2 id="services-heading">Services</h2>
 *   ...
 * </SectionWrapper>
 * ```
 */
export function SectionWrapper({
  id,
  children,
  variant = "default",
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={[
        "scroll-mt-16 py-16 md:py-24",
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
