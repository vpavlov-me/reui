"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import { Check, ChevronsUpDown, X } from "lucide-react"
import { Badge } from "../badge"
import { Button } from "../button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../command"
import { Popover, PopoverContent, PopoverTrigger } from "../popover"

export interface MultiSelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface MultiSelectProps {
  options: MultiSelectOption[]
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  maxSelected?: number
  disabled?: boolean
  className?: string
}

const MultiSelect = React.forwardRef<HTMLButtonElement, MultiSelectProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue = [],
      onValueChange,
      placeholder = "Select options...",
      searchPlaceholder = "Search...",
      emptyMessage = "No options found.",
      maxSelected,
      disabled = false,
      className,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false)
    const [internalValue, setInternalValue] = React.useState<string[]>(defaultValue)

    const isControlled = controlledValue !== undefined
    const selectedValues = isControlled ? controlledValue : internalValue

    const handleSelect = (optionValue: string) => {
      let newValue: string[]

      if (selectedValues.includes(optionValue)) {
        newValue = selectedValues.filter((v) => v !== optionValue)
      } else {
        if (maxSelected && selectedValues.length >= maxSelected) {
          return
        }
        newValue = [...selectedValues, optionValue]
      }

      if (!isControlled) {
        setInternalValue(newValue)
      }
      onValueChange?.(newValue)
    }

    const handleRemove = (optionValue: string, e: React.MouseEvent) => {
      e.stopPropagation()
      const newValue = selectedValues.filter((v) => v !== optionValue)
      if (!isControlled) {
        setInternalValue(newValue)
      }
      onValueChange?.(newValue)
    }

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation()
      if (!isControlled) {
        setInternalValue([])
      }
      onValueChange?.([])
    }

    const selectedOptions = options.filter((opt) =>
      selectedValues.includes(opt.value)
    )

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className={cn(
              "h-auto min-h-10 w-full justify-between",
              selectedValues.length > 0 ? "px-2" : "px-3",
              className
            )}
          >
            {selectedValues.length === 0 ? (
              <span className="text-muted-foreground font-normal">
                {placeholder}
              </span>
            ) : (
              <div className="flex flex-wrap gap-1">
                {selectedOptions.map((option) => (
                  <Badge
                    key={option.value}
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {option.label}
                    <button
                      className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={(e) => handleRemove(option.value, e)}
                    >
                      <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                      <span className="sr-only">Remove {option.label}</span>
                    </button>
                  </Badge>
                ))}
              </div>
            )}
            <div className="flex shrink-0 items-center gap-1">
              {selectedValues.length > 0 && (
                <button
                  className="rounded-full p-0.5 hover:bg-muted"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={handleClear}
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                  <span className="sr-only">Clear all</span>
                </button>
              )}
              <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandList>
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = selectedValues.includes(option.value)
                  const isDisabled =
                    option.disabled ||
                    (!isSelected &&
                      maxSelected !== undefined &&
                      selectedValues.length >= maxSelected)

                  return (
                    <CommandItem
                      key={option.value}
                      value={option.label}
                      disabled={isDisabled}
                      onSelect={() => handleSelect(option.value)}
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50 [&_svg]:invisible"
                        )}
                      >
                        <Check className="h-3 w-3" />
                      </div>
                      {option.label}
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    )
  }
)
MultiSelect.displayName = "MultiSelect"

export { MultiSelect }
