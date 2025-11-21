"use client";

import * as React from "react";
import { Toggle } from "@reluna-ui/ui";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function TogglePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Toggle</h1>
        <p className="text-lg text-muted-foreground">
          A two-state button that can be either on or off. Toggles are ideal for toolbar actions or binary options that need visual feedback.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Toggle } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use for binary on/off states like formatting options",
            "Always provide aria-label for icon-only toggles",
            "Group related toggles together in toolbars",
            "Use defaultPressed for initial active state",
            "Provide clear visual feedback for pressed state",
            "Consider using ToggleGroup for mutually exclusive options",
          ]}
          donts={[
            "Don't use for navigation or primary actions",
            "Don't forget accessibility labels for icon buttons",
            "Don't mix toggle sizes within the same toolbar",
            "Don't use disabled state without clear indication",
            "Don't use toggle for single-use actions like submit",
            "Don't create toggles without clear pressed/unpressed states",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic toggle button.
        </p>
        <CodePreview
          code={`import { Bold } from "lucide-react";

<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>`}
        >
          <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
        </CodePreview>
      </section>

      {/* Outline */}
      <section className="space-y-4">
        <h2 id="outline" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Outline
        </h2>
        <p className="text-muted-foreground">
          Toggle with outline variant.
        </p>
        <CodePreview
          code={`import { Italic } from "lucide-react";

<Toggle variant="outline" aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</Toggle>`}
        >
          <Toggle variant="outline" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
        </CodePreview>
      </section>

      {/* With Text */}
      <section className="space-y-4">
        <h2 id="with-text" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Text
        </h2>
        <p className="text-muted-foreground">
          Toggle buttons can include text labels.
        </p>
        <CodePreview
          code={`import { Bold, Italic, Underline } from "lucide-react";

<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4 mr-2" />
  Bold
</Toggle>
<Toggle aria-label="Toggle italic">
  <Italic className="h-4 w-4 mr-2" />
  Italic
</Toggle>
<Toggle aria-label="Toggle underline">
  <Underline className="h-4 w-4 mr-2" />
  Underline
</Toggle>`}
        >
          <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4 mr-2" />
            Bold
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic className="h-4 w-4 mr-2" />
            Italic
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline className="h-4 w-4 mr-2" />
            Underline
          </Toggle>
        </CodePreview>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 id="sizes" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Sizes
        </h2>
        <p className="text-muted-foreground">
          Available in different sizes.
        </p>
        <CodePreview
          code={`import { Bold } from "lucide-react";

<Toggle size="sm" aria-label="Toggle bold small">
  <Bold className="h-3 w-3" />
</Toggle>
<Toggle size="default" aria-label="Toggle bold default">
  <Bold className="h-4 w-4" />
</Toggle>
<Toggle size="lg" aria-label="Toggle bold large">
  <Bold className="h-5 w-5" />
</Toggle>`}
        >
          <Toggle size="sm" aria-label="Toggle bold small">
            <Bold className="h-3 w-3" />
          </Toggle>
          <Toggle size="default" aria-label="Toggle bold default">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle bold large">
            <Bold className="h-5 w-5" />
          </Toggle>
        </CodePreview>
      </section>

      {/* Toolbar Example */}
      <section className="space-y-4">
        <h2 id="toolbar" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Toolbar Example
        </h2>
        <p className="text-muted-foreground">
          A text formatting toolbar using toggles.
        </p>
        <CodePreview
          code={`import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";

<div className="flex gap-1 rounded-md border p-1 w-fit">
  <Toggle defaultPressed aria-label="Bold">
    <Bold className="h-4 w-4" />
  </Toggle>
  <Toggle aria-label="Italic">
    <Italic className="h-4 w-4" />
  </Toggle>
  <Toggle aria-label="Underline">
    <Underline className="h-4 w-4" />
  </Toggle>
  <div className="w-px bg-border mx-1" />
  <Toggle aria-label="Align left">
    <AlignLeft className="h-4 w-4" />
  </Toggle>
  <Toggle defaultPressed aria-label="Align center">
    <AlignCenter className="h-4 w-4" />
  </Toggle>
  <Toggle aria-label="Align right">
    <AlignRight className="h-4 w-4" />
  </Toggle>
</div>`}
        >
          <div className="flex gap-1 rounded-md border p-1 w-fit">
            <Toggle defaultPressed aria-label="Bold">
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Italic">
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Underline">
              <Underline className="h-4 w-4" />
            </Toggle>
            <div className="w-px bg-border mx-1" />
            <Toggle aria-label="Align left">
              <AlignLeft className="h-4 w-4" />
            </Toggle>
            <Toggle defaultPressed aria-label="Align center">
              <AlignCenter className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Align right">
              <AlignRight className="h-4 w-4" />
            </Toggle>
          </div>
        </CodePreview>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled
        </h2>
        <p className="text-muted-foreground">
          Disabled toggle to prevent interaction.
        </p>
        <CodePreview
          code={`import { Bold, Italic } from "lucide-react";

<Toggle disabled aria-label="Toggle disabled">
  <Bold className="h-4 w-4" />
</Toggle>
<Toggle disabled pressed aria-label="Toggle disabled pressed">
  <Italic className="h-4 w-4" />
</Toggle>`}
        >
          <Toggle disabled aria-label="Toggle disabled">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle disabled pressed aria-label="Toggle disabled pressed">
            <Italic className="h-4 w-4" />
          </Toggle>
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
                <td className="p-3 font-mono text-xs">variant</td>
                <td className="p-3 font-mono text-xs">default | outline</td>
                <td className="p-3 font-mono text-xs">default</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">size</td>
                <td className="p-3 font-mono text-xs">default | sm | lg</td>
                <td className="p-3 font-mono text-xs">default</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">pressed</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">defaultPressed</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">onPressedChange</td>
                <td className="p-3 font-mono text-xs">(pressed: boolean) =&gt; void</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
