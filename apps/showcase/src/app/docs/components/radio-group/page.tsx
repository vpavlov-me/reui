"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItem, Label } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function RadioGroupPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Radio Group</h1>
        <p className="text-lg text-muted-foreground">
          A set of checkable buttons where only one can be checked at a time. Radio groups are ideal for mutually exclusive options.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { RadioGroup, RadioGroupItem } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use radio groups for mutually exclusive options (2-7 choices)",
            "Always have one option selected by default when possible",
            "List options in a logical order (alphabetical, numerical, etc.)",
            "Use clear and concise labels for each option",
            "Add descriptions for complex options that need explanation",
            "Group related radio buttons with a fieldset and legend",
          ]}
          donts={[
            "Don't use radio groups for more than 7 options (use select instead)",
            "Don't use radio groups for non-mutually exclusive options (use checkboxes)",
            "Don't change the meaning of other options based on selection",
            "Don't use radio buttons for binary choices (use toggle or checkbox)",
            "Don't truncate option labels - show full text",
            "Don't mix horizontal and vertical layouts in the same group",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic radio group with simple options.
        </p>
        <CodePreview
          code={`<RadioGroup defaultValue="option-1">
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
</RadioGroup>`}
        >
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
        </CodePreview>
      </section>

      {/* With Description */}
      <section className="space-y-4">
        <h2 id="with-description" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Description
        </h2>
        <p className="text-muted-foreground">
          Add descriptions for each option.
        </p>
        <CodePreview
          code={`<RadioGroup defaultValue="comfortable">
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
</RadioGroup>`}
        >
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
        </CodePreview>
      </section>

      {/* Horizontal Layout */}
      <section className="space-y-4">
        <h2 id="horizontal" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Horizontal Layout
        </h2>
        <p className="text-muted-foreground">
          Display radio options in a horizontal row.
        </p>
        <CodePreview
          code={`<RadioGroup defaultValue="medium" className="flex gap-6">
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
</RadioGroup>`}
        >
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
        </CodePreview>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled
        </h2>
        <p className="text-muted-foreground">
          Disabled radio group options.
        </p>
        <CodePreview
          code={`<RadioGroup defaultValue="option-a" disabled>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-a" id="option-a" />
    <Label htmlFor="option-a" className="text-muted-foreground">Option A</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-b" id="option-b" />
    <Label htmlFor="option-b" className="text-muted-foreground">Option B</Label>
  </div>
</RadioGroup>`}
        >
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
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">onValueChange</td>
                <td className="p-3 font-mono text-xs">(value: string) =&gt; void</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">required</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">orientation</td>
                <td className="p-3 font-mono text-xs">horizontal | vertical</td>
                <td className="p-3 font-mono text-xs">vertical</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
