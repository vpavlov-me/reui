"use client";

import * as React from "react";
import { ScrollArea, ScrollBar, Separator } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

const tags = Array.from({ length: 50 }).map((_, i) => `Tag ${i + 1}`);

export default function ScrollAreaPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Scroll Area</h1>
        <p className="text-lg text-muted-foreground">
          Augments native scroll functionality for custom, cross-browser styling.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { ScrollArea, ScrollBar } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use for consistent scrollbar styling across browsers",
            "Set explicit height or max-height for vertical scrolling",
            "Add ScrollBar component for horizontal scroll areas",
            "Use for long lists, code blocks, or constrained content",
            "Consider touch scrolling behavior on mobile devices",
            "Provide visual indication that content is scrollable",
          ]}
          donts={[
            "Don't use when native scrolling is sufficient",
            "Don't forget to set dimensions on the container",
            "Don't nest multiple scroll areas creating confusion",
            "Don't hide scrollbars when content clearly overflows",
            "Don't use for entire page scrolling",
            "Don't forget horizontal ScrollBar for wide content",
          ]}
        />
      </section>

      {/* Vertical */}
      <section className="space-y-4">
        <h2 id="vertical" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Vertical
        </h2>
        <p className="text-muted-foreground">
          Vertical scroll area with custom scrollbar.
        </p>
        <CodePreview
          code={`const tags = Array.from({ length: 50 }).map((_, i) => \`Tag \${i + 1}\`);

<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <React.Fragment key={tag}>
        <div className="text-sm">{tag}</div>
        <Separator className="my-2" />
      </React.Fragment>
    ))}
  </div>
</ScrollArea>`}
        >
          <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {tags.map((tag) => (
                <React.Fragment key={tag}>
                  <div className="text-sm">{tag}</div>
                  <Separator className="my-2" />
                </React.Fragment>
              ))}
            </div>
          </ScrollArea>
        </CodePreview>
      </section>

      {/* Horizontal */}
      <section className="space-y-4">
        <h2 id="horizontal" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Horizontal
        </h2>
        <p className="text-muted-foreground">
          Horizontal scroll area for wide content.
        </p>
        <CodePreview
          code={`<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {Array.from({ length: 10 }).map((_, i) => (
      <figure key={i} className="shrink-0">
        <div className="overflow-hidden rounded-md">
          <div className="h-32 w-48 bg-muted flex items-center justify-center">
            <span className="text-sm text-muted-foreground">Image {i + 1}</span>
          </div>
        </div>
        <figcaption className="pt-2 text-xs text-muted-foreground">
          Photo by Artist {i + 1}
        </figcaption>
      </figure>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}
        >
          <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <figure key={i} className="shrink-0">
                  <div className="overflow-hidden rounded-md">
                    <div className="h-32 w-48 bg-muted flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Image {i + 1}</span>
                    </div>
                  </div>
                  <figcaption className="pt-2 text-xs text-muted-foreground">
                    Photo by Artist {i + 1}
                  </figcaption>
                </figure>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
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
                <td className="p-3 font-mono text-xs">ScrollArea</td>
                <td className="p-3 font-mono text-xs">type</td>
                <td className="p-3 font-mono text-xs">auto | always | scroll | hover</td>
                <td className="p-3 font-mono text-xs">hover</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ScrollArea</td>
                <td className="p-3 font-mono text-xs">scrollHideDelay</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">600</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">ScrollBar</td>
                <td className="p-3 font-mono text-xs">orientation</td>
                <td className="p-3 font-mono text-xs">vertical | horizontal</td>
                <td className="p-3 font-mono text-xs">vertical</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
