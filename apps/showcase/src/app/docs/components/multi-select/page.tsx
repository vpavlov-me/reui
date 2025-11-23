"use client";

import * as React from "react";
import { MultiSelect } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

const frameworks = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "nextjs", label: "Next.js" },
  { value: "nuxt", label: "Nuxt" },
];

const languages = [
  { value: "typescript", label: "TypeScript" },
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "rust", label: "Rust" },
  { value: "go", label: "Go" },
];

export default function MultiSelectPage() {
  const [selected, setSelected] = React.useState<string[]>([]);

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Multi Select</h1>
        <p className="text-lg text-muted-foreground">
          A searchable multi-select dropdown with badges, keyboard navigation, and maximum selection support.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { MultiSelect } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Provide a clear placeholder text",
            "Enable search for long option lists",
            "Show selected items as badges",
            "Allow easy removal of selections",
            "Set max selection when appropriate",
            "Use clear option labels",
          ]}
          donts={[
            "Don't use for single selection (use Select instead)",
            "Don't hide the number of selections",
            "Don't disable search for many options",
            "Don't use overly long option labels",
            "Don't forget to handle empty selection state",
            "Don't make it hard to clear all selections",
          ]}
        />
      </section>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 id="basic" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Basic Usage
        </h2>
        <p className="text-muted-foreground">
          Simple multi-select with search functionality.
        </p>
        <CodePreview
          code={`const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
];

<MultiSelect
  options={options}
  placeholder="Select frameworks"
  onValueChange={(value) => console.log(value)}
/>`}
        >
          <MultiSelect
            options={frameworks}
            placeholder="Select frameworks"
            onValueChange={setSelected}
          />
        </CodePreview>
      </section>

      {/* With Default Value */}
      <section className="space-y-4">
        <h2 id="default-value" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Default Value
        </h2>
        <p className="text-muted-foreground">
          Pre-select options using defaultValue.
        </p>
        <CodePreview
          code={`<MultiSelect
  options={options}
  defaultValue={["react", "vue"]}
  placeholder="Select frameworks"
/>`}
        >
          <MultiSelect
            options={frameworks}
            defaultValue={["react", "vue"]}
            placeholder="Select frameworks"
          />
        </CodePreview>
      </section>

      {/* Max Selection */}
      <section className="space-y-4">
        <h2 id="max-selection" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Max Selection
        </h2>
        <p className="text-muted-foreground">
          Limit the number of items that can be selected.
        </p>
        <CodePreview
          code={`<MultiSelect
  options={options}
  maxSelected={3}
  placeholder="Select up to 3"
/>`}
        >
          <MultiSelect
            options={frameworks}
            maxSelected={3}
            placeholder="Select up to 3"
            onValueChange={setSelected}
          />
        </CodePreview>
      </section>

      {/* Custom Placeholders */}
      <section className="space-y-4">
        <h2 id="placeholders" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Custom Placeholders
        </h2>
        <p className="text-muted-foreground">
          Customize placeholder and search text.
        </p>
        <CodePreview
          code={`<MultiSelect
  options={languages}
  placeholder="Choose languages..."
  searchPlaceholder="Type to search..."
  emptyMessage="No languages found"
/>`}
        >
          <MultiSelect
            options={languages}
            placeholder="Choose languages..."
            searchPlaceholder="Type to search..."
            emptyMessage="No languages found"
            onValueChange={setSelected}
          />
        </CodePreview>
      </section>

      {/* Disabled State */}
      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled State
        </h2>
        <p className="text-muted-foreground">
          Disable the multi-select when not available.
        </p>
        <CodePreview
          code={`<MultiSelect
  options={options}
  defaultValue={["react"]}
  disabled
/>`}
        >
          <MultiSelect
            options={frameworks}
            defaultValue={["react"]}
            disabled
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
                <th className="p-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">options</td>
                <td className="p-3 font-mono text-xs">MultiSelectOption[]</td>
                <td className="p-3 font-mono text-xs">required</td>
                <td className="p-3">Array of options</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs">string[]</td>
                <td className="p-3 font-mono text-xs">-</td>
                <td className="p-3">Controlled value</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">defaultValue</td>
                <td className="p-3 font-mono text-xs">string[]</td>
                <td className="p-3 font-mono text-xs">[]</td>
                <td className="p-3">Default selected values</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">onValueChange</td>
                <td className="p-3 font-mono text-xs">(value: string[]) =&gt; void</td>
                <td className="p-3 font-mono text-xs">-</td>
                <td className="p-3">Selection change handler</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">maxSelected</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">-</td>
                <td className="p-3">Maximum selections allowed</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3">Disable the component</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
