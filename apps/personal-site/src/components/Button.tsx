import {
  forwardRef,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
} from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonBaseProps {
  /** Visual variant. */
  variant?: Variant;
  /** Button size. */
  size?: Size;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: "button";
    href?: never;
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: "a";
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100",
  secondary:
    "border border-gray-900 text-gray-900 hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-gray-800",
  ghost:
    "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3 text-lg",
};

/**
 * Polymorphic button component supporting `<button>` and `<a>` rendering.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>Click me</Button>
 * <Button as="a" href="/contact" variant="secondary">Contact</Button>
 * ```
 */
export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const { variant = "primary", size = "md", className = "", ...rest } = props;

  const classes = [
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2",
    "dark:focus-visible:ring-white",
    "disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (props.as === "a") {
    const { as: _as, ...anchorProps } = rest as Omit<
      ButtonAsAnchor,
      "variant" | "size" | "className"
    >;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...anchorProps}
      />
    );
  }

  const { as: _as, ...buttonProps } = rest as Omit<
    ButtonAsButton,
    "variant" | "size" | "className"
  >;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      className={classes}
      {...buttonProps}
    />
  );
});
