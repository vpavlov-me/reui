"use client";

import * as React from "react";
import { Calendar } from "@reluna-ui/ui";

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
        <p className="text-lg text-muted-foreground">
          A date field component that allows users to enter and edit date.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic calendar for date selection.
        </p>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-fit"
        />
      </section>

      <section className="space-y-4">
        <h2 id="disabled-dates" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled Dates
        </h2>
        <p className="text-muted-foreground">
          Calendar with disabled past dates.
        </p>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) => date < new Date()}
          className="rounded-md border w-fit"
        />
      </section>
    </div>
  );
}
