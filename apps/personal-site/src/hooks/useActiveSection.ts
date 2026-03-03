import { useEffect, useState, useRef } from "react";

/**
 * Tracks which section is currently visible in the viewport using `IntersectionObserver`.
 *
 * @param sectionIds - Array of DOM element IDs to observe (e.g. `["hero", "services"]`).
 * @param options - Optional `IntersectionObserver` threshold and root margin.
 * @returns The `id` of the section with the greatest intersection ratio, or `null` if none visible.
 *
 * @example
 * ```tsx
 * const activeSection = useActiveSection(["hero", "services", "work-highlights"]);
 * // activeSection === "services"
 * ```
 */
export function useActiveSection(
  sectionIds: string[],
  options: { threshold?: number; rootMargin?: string } = {},
): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const ratioMap = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const { threshold = 0.3, rootMargin = "0px 0px -40% 0px" } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratioMap.current.set(entry.target.id, entry.intersectionRatio);
        }

        // Pick the section with the highest intersection ratio
        let maxRatio = 0;
        let maxId: string | null = null;
        for (const [id, ratio] of ratioMap.current) {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxId = id;
          }
        }
        setActiveId(maxId);
      },
      { threshold, rootMargin },
    );

    const elements: Element[] = [];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    }

    return () => {
      for (const el of elements) {
        observer.unobserve(el);
      }
      observer.disconnect();
    };
    // Re-run only when the section IDs list changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(",")]);

  return activeId;
}
