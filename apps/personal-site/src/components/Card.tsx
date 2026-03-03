import type { ReactNode } from "react";

export interface CardProps {
  /** Optional card heading. */
  title?: string;
  /** Optional icon rendered before the title (lucide-react element). */
  icon?: ReactNode;
  /** Card body content. */
  children: ReactNode;
  /** Additional CSS classes. */
  className?: string;
}

/**
 * A clean bordered card with optional title and icon.
 *
 * @example
 * ```tsx
 * <Card title="Scalability" icon={<Server size={20} />}>
 *   <p>We help you scale.</p>
 * </Card>
 * ```
 */
export function Card({ title, icon, children, className = "" }: CardProps) {
  return (
    <div
      className={[
        "rounded-xl border border-gray-200 bg-white p-6 shadow-sm",
        "dark:border-gray-700 dark:bg-gray-900",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {(title || icon) && (
        <div className="mb-4 flex items-center gap-3">
          {icon && (
            <span className="flex-shrink-0 text-gray-600 dark:text-gray-400">
              {icon}
            </span>
          )}
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
          )}
        </div>
      )}
      <div className="text-gray-600 dark:text-gray-400">{children}</div>
    </div>
  );
}
