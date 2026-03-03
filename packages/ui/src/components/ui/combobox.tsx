"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/utils";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  emptyMessage?: string;
  allowCustom?: boolean;
  customLabel?: (input: string) => string;
  className?: string;
  onSearchChange?: (search: string) => void;
}

export function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Select option...",
  emptyMessage = "No option found.",
  allowCustom = true,
  customLabel = (input) => `Create "${input}"`,
  className,
  onSearchChange,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  // Call onSearchChange when search value changes
  React.useEffect(() => {
    onSearchChange?.(search);
  }, [search, onSearchChange]);

  // Find selected option or use custom value
  const selectedOption = options.find((option) => option.value === value);
  const displayValue = selectedOption?.label || value || placeholder;

  // Filter options based on search
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase()),
  );

  // Check if search matches any existing option
  const hasExactMatch = options.some(
    (option) => option.value.toLowerCase() === search.toLowerCase(),
  );

  // Show custom create option if allowed and search doesn't match
  const showCustomOption = allowCustom && search && !hasExactMatch;

  const handleSelect = (selectedValue: string) => {
    onValueChange(selectedValue === value ? "" : selectedValue);
    setOpen(false);
    setSearch("");
  };

  const handleCustomCreate = () => {
    onValueChange(search);
    setOpen(false);
    setSearch("");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", className)}
        >
          {displayValue}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command shouldFilter={false}>
          <CommandInput
            placeholder={placeholder}
            value={search}
            onValueChange={setSearch}
          />
          <CommandList>
            <CommandEmpty>
              <div>{emptyMessage}</div>

              {allowCustom && <div>Type to create a new option.</div>}
            </CommandEmpty>
            <CommandGroup>
              {filteredOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={handleSelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
              {showCustomOption && (
                <CommandItem
                  value={search}
                  onSelect={handleCustomCreate}
                  className="text-primary"
                >
                  <Check className="mr-2 h-4 w-4 opacity-0" />
                  {customLabel(search)}
                </CommandItem>
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
