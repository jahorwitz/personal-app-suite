import * as React from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import { cn } from "@/utils/index";

export interface CurrencyInputProps extends Omit<
  NumericFormatProps,
  "value" | "onValueChange" | "onChange"
> {
  id?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  className?: string;
  decimalScale?: number;
  fixedDecimalScale?: boolean;
}

const CurrencyInput = React.forwardRef<HTMLInputElement, CurrencyInputProps>(
  (
    {
      id,
      className,
      value,
      onChange,
      placeholder,
      decimalScale = 2,
      fixedDecimalScale = false,
      ...props
    },
    ref,
  ) => {
    return (
      <NumericFormat
        id={id}
        getInputRef={ref}
        value={value}
        onValueChange={(values) => {
          onChange?.(values.value);
        }}
        thousandSeparator=","
        decimalSeparator="."
        prefix="$"
        decimalScale={decimalScale}
        fixedDecimalScale={fixedDecimalScale}
        allowNegative={false}
        placeholder={placeholder}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        {...props}
      />
    );
  },
);

CurrencyInput.displayName = "CurrencyInput";

export { CurrencyInput };
