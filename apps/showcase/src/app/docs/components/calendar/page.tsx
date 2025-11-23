"use client";

import * as React from "react";
import { Calendar } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [dateDisabled, setDateDisabled] = React.useState<Date | undefined>(new Date());

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Calendar</h1>
        <p className="text-lg text-muted-foreground">
          A date field component that allows users to enter and edit date.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Calendar } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use for date selection in forms and filters",
            "Disable past dates for future-only selections",
            "Show clear visual indication of selected date",
            "Provide keyboard navigation support",
            "Use with date picker popover for better UX",
            "Indicate today's date with distinct styling",
          ]}
          donts={[
            "Don't use for time selection without date",
            "Don't disable too many dates without explanation",
            "Don't hide month/year navigation controls",
            "Don't use small touch targets on mobile",
            "Don't ignore timezone considerations",
            "Don't use for date ranges without proper range mode",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic calendar for date selection.
        </p>
        <CodePreview
          code={`const [date, setDate] = React.useState<Date | undefined>(new Date());

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border w-fit"
/>`}
        >
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border w-fit"
          />
        </CodePreview>
      </section>

      {/* Disabled Dates */}
      <section className="space-y-4">
        <h2 id="disabled-dates" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled Dates
        </h2>
        <p className="text-muted-foreground">
          Calendar with disabled past dates.
        </p>
        <CodePreview
          code={`const [date, setDate] = React.useState<Date | undefined>(new Date());

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={(date) => date < new Date()}
  className="rounded-md border w-fit"
/>`}
        >
          <Calendar
            mode="single"
            selected={dateDisabled}
            onSelect={setDateDisabled}
            disabled={(date) => date < new Date()}
            className="rounded-md border w-fit"
          />
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
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">mode</td>
                <td className="p-3 font-mono text-xs">single | multiple | range</td>
                <td className="p-3 font-mono text-xs">single</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">selected</td>
                <td className="p-3 font-mono text-xs">Date | Date[] | DateRange</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">onSelect</td>
                <td className="p-3 font-mono text-xs">(date: Date | undefined) =&gt; void</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs">Matcher | Matcher[]</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">initialFocus</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">numberOfMonths</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">1</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
