"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItem, Label } from "@reluna-ui/ui";

export default function RadioGroupPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Radio Group</h1>
        <p className="text-lg text-muted-foreground">
          A set of checkable buttons where only one can be checked at a time. Radio groups are ideal for mutually exclusive options.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic radio group with simple options.
        </p>
        <RadioGroup defaultValue="option-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-1" id="option-1" />
            <Label htmlFor="option-1">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-2" id="option-2" />
            <Label htmlFor="option-2">Option Two</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-3" id="option-3" />
            <Label htmlFor="option-3">Option Three</Label>
          </div>
        </RadioGroup>
      </section>

      <section className="space-y-4">
        <h2 id="with-description" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Description
        </h2>
        <p className="text-muted-foreground">
          Add descriptions for each option.
        </p>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="default" id="r1" className="mt-1" />
            <div className="grid gap-1.5">
              <Label htmlFor="r1">Default</Label>
              <p className="text-sm text-muted-foreground">
                Standard spacing and font size.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="comfortable" id="r2" className="mt-1" />
            <div className="grid gap-1.5">
              <Label htmlFor="r2">Comfortable</Label>
              <p className="text-sm text-muted-foreground">
                More spacious with larger text.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="compact" id="r3" className="mt-1" />
            <div className="grid gap-1.5">
              <Label htmlFor="r3">Compact</Label>
              <p className="text-sm text-muted-foreground">
                Minimal spacing for dense layouts.
              </p>
            </div>
          </div>
        </RadioGroup>
      </section>

      <section className="space-y-4">
        <h2 id="horizontal" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Horizontal Layout
        </h2>
        <p className="text-muted-foreground">
          Display radio options in a horizontal row.
        </p>
        <RadioGroup defaultValue="medium" className="flex gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="small" id="small" />
            <Label htmlFor="small">Small</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medium" id="medium" />
            <Label htmlFor="medium">Medium</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="large" id="large" />
            <Label htmlFor="large">Large</Label>
          </div>
        </RadioGroup>
      </section>

      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled
        </h2>
        <p className="text-muted-foreground">
          Disabled radio group options.
        </p>
        <RadioGroup defaultValue="option-a" disabled>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-a" id="option-a" />
            <Label htmlFor="option-a" className="text-muted-foreground">Option A</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-b" id="option-b" />
            <Label htmlFor="option-b" className="text-muted-foreground">Option B</Label>
          </div>
        </RadioGroup>
      </section>
    </div>
  );
}
