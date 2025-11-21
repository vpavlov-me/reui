"use client";

import * as React from "react";
import { ToggleGroup, ToggleGroupItem } from "@reluna-ui/ui";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function ToggleGroupPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Toggle Group</h1>
        <p className="text-lg text-muted-foreground">
          A set of two-state buttons that can be toggled on or off.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { ToggleGroup, ToggleGroupItem } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use single type for mutually exclusive options like alignment",
            "Use multiple type for additive options like text formatting",
            "Provide aria-label for each ToggleGroupItem",
            "Set defaultValue for sensible initial selection",
            "Group logically related options together",
            "Use consistent icon sizes within a group",
          ]}
          donts={[
            "Don't mix single and multiple behaviors in same group",
            "Don't use for more than 5-6 options (use dropdown instead)",
            "Don't forget accessibility labels on icon-only items",
            "Don't use toggle groups for navigation",
            "Don't create groups without clear visual relationship",
            "Don't disable individual items without clear reason",
          ]}
        />
      </section>

      {/* Single */}
      <section className="space-y-4">
        <h2 id="single" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Single
        </h2>
        <p className="text-muted-foreground">
          Only one item can be selected at a time.
        </p>
        <CodePreview
          code={`import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react";

<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="justify" aria-label="Align justify">
    <AlignJustify className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
        >
          <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="justify" aria-label="Align justify">
              <AlignJustify className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </CodePreview>
      </section>

      {/* Multiple */}
      <section className="space-y-4">
        <h2 id="multiple" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Multiple
        </h2>
        <p className="text-muted-foreground">
          Multiple items can be selected at once.
        </p>
        <CodePreview
          code={`import { Bold, Italic, Underline } from "lucide-react";

<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
        >
          <ToggleGroup type="multiple">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </CodePreview>
      </section>

      {/* Outline */}
      <section className="space-y-4">
        <h2 id="outline" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Outline
        </h2>
        <p className="text-muted-foreground">
          Toggle group with outline variant.
        </p>
        <CodePreview
          code={`import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";

<ToggleGroup type="single" variant="outline" defaultValue="center">
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
        >
          <ToggleGroup type="single" variant="outline" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </CodePreview>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled
        </h2>
        <p className="text-muted-foreground">
          Disabled toggle group items.
        </p>
        <CodePreview
          code={`import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";

<ToggleGroup type="single" disabled>
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
        >
          <ToggleGroup type="single" disabled>
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
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
                <th className="p-3 text-left font-medium">Component</th>
                <th className="p-3 text-left font-medium">Prop</th>
                <th className="p-3 text-left font-medium">Type</th>
                <th className="p-3 text-left font-medium">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ToggleGroup</td>
                <td className="p-3 font-mono text-xs">type</td>
                <td className="p-3 font-mono text-xs">single | multiple</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ToggleGroup</td>
                <td className="p-3 font-mono text-xs">variant</td>
                <td className="p-3 font-mono text-xs">default | outline</td>
                <td className="p-3 font-mono text-xs">default</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ToggleGroup</td>
                <td className="p-3 font-mono text-xs">size</td>
                <td className="p-3 font-mono text-xs">default | sm | lg</td>
                <td className="p-3 font-mono text-xs">default</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ToggleGroup</td>
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs">string | string[]</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ToggleGroup</td>
                <td className="p-3 font-mono text-xs">defaultValue</td>
                <td className="p-3 font-mono text-xs">string | string[]</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ToggleGroup</td>
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">ToggleGroupItem</td>
                <td className="p-3 font-mono text-xs">value</td>
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
