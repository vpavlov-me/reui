"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { cn } from "../../lib/utils"
import { Button } from "../button"
import { Calendar } from "../calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../popover"

export interface DateRangePickerProps {
  value?: DateRange
  defaultValue?: DateRange
  onValueChange?: (date: DateRange | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  align?: "start" | "center" | "end"
  numberOfMonths?: number
  fromDate?: Date
  toDate?: Date
}

const DateRangePicker = React.forwardRef<HTMLButtonElement, DateRangePickerProps>(
  (
    {
      value: controlledValue,
      defaultValue,
      onValueChange,
      placeholder = "Pick a date range",
      disabled = false,
      className,
      align = "start",
      numberOfMonths = 2,
      fromDate,
      toDate,
    },
    ref
  ) => {
    const [internalDate, setInternalDate] = React.useState<DateRange | undefined>(
      defaultValue
    )

    const isControlled = controlledValue !== undefined
    const date = isControlled ? controlledValue : internalDate

    const handleSelect = (newDate: DateRange | undefined) => {
      if (!isControlled) {
        setInternalDate(newDate)
      }
      onValueChange?.(newDate)
    }

    const formatDateRange = () => {
      if (!date?.from) return null

      if (date.to) {
        return (
          <>
            {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
          </>
        )
      }

      return format(date.from, "LLL dd, y")
    }

    return (
      <div className={cn("grid gap-2", className)}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              ref={ref}
              id="date"
              variant="outline"
              disabled={disabled}
              className={cn(
                "w-[300px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formatDateRange() || <span>{placeholder}</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align={align}>
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={handleSelect}
              numberOfMonths={numberOfMonths}
              fromDate={fromDate}
              toDate={toDate}
            />
          </PopoverContent>
        </Popover>
      </div>
    )
  }
)
DateRangePicker.displayName = "DateRangePicker"

export { DateRangePicker }
export type { DateRange }
