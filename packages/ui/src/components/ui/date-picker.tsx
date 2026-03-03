import * as React from "react";
import { format, parse, isValid, startOfMonth } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { formatDate, registerCursorTracker } from "cleave-zen";
import { cn } from "@/utils/index";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface DatePickerProps {
  id?: string;
  value?: string;
  onChange?: (date: string | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    { id, value, onChange, placeholder = "MM/DD/YYYY", className, disabled },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");

    // Helper function to parse YYYY-MM-DD string to Date object
    const parseValueToDate = (
      dateStr: string | undefined,
    ): Date | undefined => {
      if (!dateStr || dateStr === "") return undefined;
      const parsed = parse(dateStr, "yyyy-MM-dd", new Date());
      return isValid(parsed) ? parsed : undefined;
    };

    // Helper function to format Date to YYYY-MM-DD string
    const formatDateToValue = (date: Date | undefined): string | undefined => {
      if (!date || !isValid(date)) return undefined;
      return format(date, "yyyy-MM-dd");
    };

    // Convert the string value prop to a Date for internal use
    const dateValue = React.useMemo(() => parseValueToDate(value), [value]);

    const [month, setMonth] = React.useState<Date>(() => {
      const initialDate = parseValueToDate(value);
      return initialDate && isValid(initialDate)
        ? startOfMonth(initialDate)
        : new Date();
    });
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    // Combine refs
    React.useEffect(() => {
      if (typeof ref === "function") {
        ref(inputRef.current);
      } else if (ref) {
        ref.current = inputRef.current;
      }
    }, [ref]);

    // Register cursor tracker for better UX
    React.useEffect(() => {
      if (inputRef.current) {
        return registerCursorTracker({
          input: inputRef.current,
          delimiter: "/",
        });
      }
    }, []);

    // Update input value when value prop changes
    React.useEffect(() => {
      if (dateValue && isValid(dateValue)) {
        setInputValue(format(dateValue, "MM/dd/yyyy"));
        setMonth(startOfMonth(dateValue));
      } else if (!value) {
        setInputValue("");
      }
    }, [value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value;

      // Format the input using cleave-zen
      const formattedValue = formatDate(rawValue, {
        datePattern: ["m", "d", "Y"],
        delimiter: "/",
      });

      setInputValue(formattedValue);

      // Remove slashes for validation
      const cleanValue = formattedValue.replace(/\//g, "");

      // If input is cleared
      if (cleanValue === "") {
        onChange?.(undefined);
        return;
      }

      // Try to parse the date if we have a complete date (8 digits)
      if (cleanValue.length === 8) {
        const parsedDate = parse(formattedValue, "MM/dd/yyyy", new Date());
        if (isValid(parsedDate)) {
          onChange?.(formatDateToValue(parsedDate));
          setMonth(startOfMonth(parsedDate));
        }
      }
    };

    const handleInputBlur = () => {
      // Re-validate and format on blur
      const cleanValue = inputValue.replace(/\//g, "");

      if (cleanValue.length === 8) {
        const parsedDate = parse(inputValue, "MM/dd/yyyy", new Date());
        if (isValid(parsedDate)) {
          setInputValue(format(parsedDate, "MM/dd/yyyy"));
          onChange?.(formatDateToValue(parsedDate));
          setMonth(startOfMonth(parsedDate));
        } else {
          // Invalid date, reset to empty or previous value
          setInputValue(
            dateValue && isValid(dateValue)
              ? format(dateValue, "MM/dd/yyyy")
              : "",
          );
        }
      } else if (cleanValue.length > 0 && cleanValue.length < 8) {
        // Incomplete date, reset to previous value or empty
        setInputValue(
          dateValue && isValid(dateValue)
            ? format(dateValue, "MM/dd/yyyy")
            : "",
        );
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      // Close popover on Escape
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    const handleCalendarSelect = (selectedDate: Date | undefined) => {
      onChange?.(formatDateToValue(selectedDate));
      setOpen(false);
      if (selectedDate && isValid(selectedDate)) {
        setInputValue(format(selectedDate, "MM/dd/yyyy"));
        setMonth(startOfMonth(selectedDate));
      } else {
        setInputValue("");
      }
    };

    const handleIconClick = () => {
      if (!disabled) {
        setOpen(!open);
      }
    };

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <div className={cn("relative flex items-center", className)}>
          <input
            ref={inputRef}
            id={id}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder={placeholder}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            )}
          />
          <PopoverTrigger asChild>
            <button
              type="button"
              onClick={handleIconClick}
              disabled={disabled}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Open calendar"
            >
              <CalendarIcon className="h-4 w-4" />
            </button>
          </PopoverTrigger>
        </div>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={dateValue}
            onSelect={handleCalendarSelect}
            month={month}
            onMonthChange={setMonth}
            autoFocus
          />
        </PopoverContent>
      </Popover>
    );
  },
);

DatePicker.displayName = "DatePicker";

export { DatePicker };
