"use client";

import * as React from "react";
import { Slider, Label } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function SliderPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Slider</h1>
        <p className="text-lg text-muted-foreground">
          An input where the user selects a value from within a given range.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Slider } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use sliders for selecting values within a continuous range",
            "Always display the current value or provide visual feedback",
            "Include labels to explain what the slider controls",
            "Use appropriate step increments for the data type",
            "Provide sensible default values within the range",
            "Use range sliders when users need to select min/max bounds",
          ]}
          donts={[
            "Don't use sliders for selecting from discrete categories",
            "Don't use extremely large ranges without meaningful steps",
            "Don't hide the current value from users",
            "Don't use sliders for precise numeric input requiring exact values",
            "Don't make the slider track too short to be usable",
            "Don't use sliders without accessible labels for screen readers",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic slider with default value.
        </p>
        <CodePreview
          code={`<Slider defaultValue={[50]} max={100} step={1} className="max-w-sm" />`}
        >
          <div className="w-full max-w-sm">
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        </CodePreview>
      </section>

      {/* With Label */}
      <section className="space-y-4">
        <h2 id="with-label" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Label
        </h2>
        <p className="text-muted-foreground">
          Slider with label and value display.
        </p>
        <CodePreview
          code={`import { Slider, Label } from "@reluna-ui/ui";

<div className="space-y-4">
  <div className="flex justify-between">
    <Label>Volume</Label>
    <span className="text-sm text-muted-foreground">75%</span>
  </div>
  <Slider defaultValue={[75]} max={100} step={1} />
</div>`}
        >
          <div className="space-y-4 w-full max-w-sm">
            <div className="flex justify-between">
              <Label>Volume</Label>
              <span className="text-sm text-muted-foreground">75%</span>
            </div>
            <Slider defaultValue={[75]} max={100} step={1} />
          </div>
        </CodePreview>
      </section>

      {/* Range */}
      <section className="space-y-4">
        <h2 id="range" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Range
        </h2>
        <p className="text-muted-foreground">
          Slider with two thumbs for selecting a range.
        </p>
        <CodePreview
          code={`<div className="space-y-4">
  <div className="flex justify-between">
    <Label>Price Range</Label>
    <span className="text-sm text-muted-foreground">$25 - $75</span>
  </div>
  <Slider defaultValue={[25, 75]} max={100} step={1} />
</div>`}
        >
          <div className="space-y-4 w-full max-w-sm">
            <div className="flex justify-between">
              <Label>Price Range</Label>
              <span className="text-sm text-muted-foreground">$25 - $75</span>
            </div>
            <Slider defaultValue={[25, 75]} max={100} step={1} />
          </div>
        </CodePreview>
      </section>

      {/* Custom Steps */}
      <section className="space-y-4">
        <h2 id="steps" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Custom Steps
        </h2>
        <p className="text-muted-foreground">
          Slider with custom step increments.
        </p>
        <CodePreview
          code={`<div className="space-y-4">
  <Label>Step: 10</Label>
  <Slider defaultValue={[50]} max={100} step={10} />
</div>`}
        >
          <div className="space-y-4 w-full max-w-sm">
            <Label>Step: 10</Label>
            <Slider defaultValue={[50]} max={100} step={10} />
          </div>
        </CodePreview>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled
        </h2>
        <p className="text-muted-foreground">
          Disabled slider state.
        </p>
        <CodePreview
          code={`<Slider defaultValue={[50]} max={100} step={1} disabled className="max-w-sm" />`}
        >
          <div className="w-full max-w-sm">
            <Slider defaultValue={[50]} max={100} step={1} disabled />
          </div>
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
                <td className="p-3 font-mono text-xs">defaultValue</td>
                <td className="p-3 font-mono text-xs">number[]</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs">number[]</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">onValueChange</td>
                <td className="p-3 font-mono text-xs">(value: number[]) =&gt; void</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">min</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">0</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">max</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">100</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">step</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">1</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">orientation</td>
                <td className="p-3 font-mono text-xs">horizontal | vertical</td>
                <td className="p-3 font-mono text-xs">horizontal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
