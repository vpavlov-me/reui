"use client";

import * as React from "react";
import { Combobox } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "es", label: "Spain" },
  { value: "it", label: "Italy" },
  { value: "jp", label: "Japan" },
];

export default function ComboboxPage() {
  const [value, setValue] = React.useState("");
  const [country, setCountry] = React.useState("");

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Combobox</h1>
        <p className="text-lg text-muted-foreground">
          Autocomplete input and command palette with a list of suggestions.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Combobox } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use for selecting from a large list of options",
            "Provide search functionality to filter options",
            "Show clear indication of selected value",
            "Include placeholder text to guide users",
            "Use when options list is too long for a simple select",
            "Provide meaningful empty state messages",
          ]}
          donts={[
            "Don't use for small lists (use Select instead)",
            "Don't disable search functionality",
            "Don't make the dropdown too narrow for content",
            "Don't use without a clear placeholder",
            "Don't forget to handle the empty search state",
            "Don't use for multi-select (use MultiSelect instead)",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic combobox with search functionality.
        </p>
        <CodePreview
          code={`const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

const [value, setValue] = React.useState("")

<Combobox
  options={frameworks}
  value={value}
  onValueChange={setValue}
  placeholder="Select framework..."
  searchPlaceholder="Search framework..."
  emptyText="No framework found."
/>`}
        >
          <Combobox
            options={frameworks}
            value={value}
            onValueChange={setValue}
            placeholder="Select framework..."
            searchPlaceholder="Search framework..."
            emptyText="No framework found."
          />
        </CodePreview>
      </section>

      {/* Custom Width */}
      <section className="space-y-4">
        <h2 id="custom-width" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Custom Width
        </h2>
        <p className="text-muted-foreground">
          Combobox with custom width for longer labels.
        </p>
        <CodePreview
          code={`const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "es", label: "Spain" },
]

<Combobox
  options={countries}
  value={country}
  onValueChange={setCountry}
  placeholder="Select country..."
  searchPlaceholder="Search country..."
  emptyText="No country found."
  className="w-[300px]"
/>`}
        >
          <Combobox
            options={countries}
            value={country}
            onValueChange={setCountry}
            placeholder="Select country..."
            searchPlaceholder="Search country..."
            emptyText="No country found."
            className="w-[300px]"
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
                <td className="p-3 font-mono text-xs">options</td>
                <td className="p-3 font-mono text-xs">{`{ value: string, label: string }[]`}</td>
                <td className="p-3 font-mono text-xs">required</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">onValueChange</td>
                <td className="p-3 font-mono text-xs">{`(value: string) => void`}</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">placeholder</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">"Select option..."</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">searchPlaceholder</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">"Search..."</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">emptyText</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">"No option found."</td>
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
