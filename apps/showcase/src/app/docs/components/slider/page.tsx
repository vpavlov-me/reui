"use client";

import * as React from "react";
import { Slider, Label } from "@reluna-ui/ui";

export default function SliderPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Slider</h1>
        <p className="text-lg text-muted-foreground">
          An input where the user selects a value from within a given range.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic slider with default value.
        </p>
        <Slider defaultValue={[50]} max={100} step={1} className="max-w-sm" />
      </section>

      <section className="space-y-4">
        <h2 id="with-label" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Label
        </h2>
        <p className="text-muted-foreground">
          Slider with label and value display.
        </p>
        <div className="space-y-4 max-w-sm">
          <div className="flex justify-between">
            <Label>Volume</Label>
            <span className="text-sm text-muted-foreground">75%</span>
          </div>
          <Slider defaultValue={[75]} max={100} step={1} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="range" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Range
        </h2>
        <p className="text-muted-foreground">
          Slider with two thumbs for selecting a range.
        </p>
        <div className="space-y-4 max-w-sm">
          <div className="flex justify-between">
            <Label>Price Range</Label>
            <span className="text-sm text-muted-foreground">$25 - $75</span>
          </div>
          <Slider defaultValue={[25, 75]} max={100} step={1} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="steps" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Custom Steps
        </h2>
        <p className="text-muted-foreground">
          Slider with custom step increments.
        </p>
        <div className="space-y-4 max-w-sm">
          <Label>Step: 10</Label>
          <Slider defaultValue={[50]} max={100} step={10} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled
        </h2>
        <p className="text-muted-foreground">
          Disabled slider state.
        </p>
        <Slider defaultValue={[50]} max={100} step={1} disabled className="max-w-sm" />
      </section>
    </div>
  );
}
