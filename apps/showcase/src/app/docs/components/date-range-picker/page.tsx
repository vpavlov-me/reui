"use client";

import * as React from "react";
import { DateRangePicker } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";
import { DateRange } from "react-day-picker";

export default function DateRangePickerPage() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>();

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Date Range Picker</h1>
        <p className="text-lg text-muted-foreground">
          A calendar-based date range picker with support for date constraints and multiple month views.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { DateRangePicker } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Show two months for easier range selection",
            "Display clear start and end dates",
            "Use for booking, reporting, and filtering",
            "Set reasonable date constraints",
            "Provide a clear placeholder",
            "Format dates consistently",
          ]}
          donts={[
            "Don't use for single date selection",
            "Don't allow invalid date ranges",
            "Don't hide the selected range",
            "Don't use confusing date formats",
            "Don't allow end date before start date",
            "Don't use on mobile without optimization",
          ]}
        />
      </section>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 id="basic" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Basic Usage
        </h2>
        <p className="text-muted-foreground">
          Simple date range picker with two month view.
        </p>
        <CodePreview
          code={`<DateRangePicker
  onValueChange={(range) => console.log(range)}
/>`}
        >
          <DateRangePicker onValueChange={setDateRange} />
        </CodePreview>
      </section>

      {/* With Default Value */}
      <section className="space-y-4">
        <h2 id="default-value" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Default Value
        </h2>
        <p className="text-muted-foreground">
          Pre-select a date range.
        </p>
        <CodePreview
          code={`<DateRangePicker
  defaultValue={{
    from: new Date(2024, 0, 15),
    to: new Date(2024, 0, 25),
  }}
/>`}
        >
          <DateRangePicker
            defaultValue={{
              from: new Date(2024, 0, 15),
              to: new Date(2024, 0, 25),
            }}
          />
        </CodePreview>
      </section>

      {/* Custom Placeholder */}
      <section className="space-y-4">
        <h2 id="placeholder" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Custom Placeholder
        </h2>
        <p className="text-muted-foreground">
          Set a custom placeholder text.
        </p>
        <CodePreview
          code={`<DateRangePicker
  placeholder="Select your travel dates"
/>`}
        >
          <DateRangePicker placeholder="Select your travel dates" />
        </CodePreview>
      </section>

      {/* Single Month */}
      <section className="space-y-4">
        <h2 id="single-month" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Single Month View
        </h2>
        <p className="text-muted-foreground">
          Show only one month at a time for compact layouts.
        </p>
        <CodePreview
          code={`<DateRangePicker numberOfMonths={1} />`}
        >
          <DateRangePicker numberOfMonths={1} />
        </CodePreview>
      </section>

      {/* Date Constraints */}
      <section className="space-y-4">
        <h2 id="constraints" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Date Constraints
        </h2>
        <p className="text-muted-foreground">
          Limit selectable dates with fromDate and toDate.
        </p>
        <CodePreview
          code={`<DateRangePicker
  fromDate={new Date()}
  toDate={new Date(2025, 11, 31)}
  placeholder="Select future dates"
/>`}
        >
          <DateRangePicker
            fromDate={new Date()}
            toDate={new Date(2025, 11, 31)}
            placeholder="Select future dates"
          />
        </CodePreview>
      </section>

      {/* Disabled State */}
      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled State
        </h2>
        <p className="text-muted-foreground">
          Disable the picker when not available.
        </p>
        <CodePreview
          code={`<DateRangePicker disabled />`}
        >
          <DateRangePicker disabled />
        </CodePreview>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 id="api" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          API Reference
        </h2>
        <div className="rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-3 text-left font-medium">Prop</th>
                <th className="p-3 text-left font-medium">Type</th>
                <th className="p-3 text-left font-medium">Default</th>
                <th className="p-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs">DateRange</td>
                <td className="p-3 font-mono text-xs">-</td>
                <td className="p-3">Controlled value</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">defaultValue</td>
                <td className="p-3 font-mono text-xs">DateRange</td>
                <td className="p-3 font-mono text-xs">-</td>
                <td className="p-3">Default date range</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">onValueChange</td>
                <td className="p-3 font-mono text-xs">(date: DateRange) =&gt; void</td>
                <td className="p-3 font-mono text-xs">-</td>
                <td className="p-3">Selection change handler</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">numberOfMonths</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">2</td>
                <td className="p-3">Number of months to show</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">fromDate</td>
                <td className="p-3 font-mono text-xs">Date</td>
                <td className="p-3 font-mono text-xs">-</td>
                <td className="p-3">Minimum selectable date</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">toDate</td>
                <td className="p-3 font-mono text-xs">Date</td>
                <td className="p-3 font-mono text-xs">-</td>
                <td className="p-3">Maximum selectable date</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3">Disable the picker</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
