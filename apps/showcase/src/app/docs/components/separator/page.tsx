"use client";

import * as React from "react";
import { Separator } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function SeparatorPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Separator</h1>
        <p className="text-lg text-muted-foreground">
          Visually or semantically separates content. Separators help organize content by creating clear visual boundaries between sections.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Separator } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use separators to create visual hierarchy between content sections",
            "Use vertical separators in horizontal navigation or toolbars",
            "Apply consistent spacing around separators",
            "Use decorative prop for purely visual separators without semantic meaning",
            "Combine with text labels for 'or' dividers in forms",
            "Use appropriate orientation based on content layout",
          ]}
          donts={[
            "Don't overuse separators - too many create visual noise",
            "Don't use separators where whitespace alone would suffice",
            "Don't use inconsistent separator styles within the same interface",
            "Don't forget to set orientation for vertical separators",
            "Don't use separators as the only visual distinction between sections",
            "Don't place separators between every list item when borders work better",
          ]}
        />
      </section>

      {/* Horizontal */}
      <section className="space-y-4">
        <h2 id="horizontal" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Horizontal
        </h2>
        <p className="text-muted-foreground">
          Default horizontal separator.
        </p>
        <CodePreview
          code={`<div className="max-w-md">
  <div className="space-y-1">
    <h4 className="text-sm font-medium">Reluna UI</h4>
    <p className="text-sm text-muted-foreground">
      An open-source UI component library.
    </p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>`}
        >
          <div className="max-w-md w-full">
            <div className="space-y-1">
              <h4 className="text-sm font-medium">Reluna UI</h4>
              <p className="text-sm text-muted-foreground">
                An open-source UI component library.
              </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Blog</div>
              <Separator orientation="vertical" />
              <div>Docs</div>
              <Separator orientation="vertical" />
              <div>Source</div>
            </div>
          </div>
        </CodePreview>
      </section>

      {/* Vertical */}
      <section className="space-y-4">
        <h2 id="vertical" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Vertical
        </h2>
        <p className="text-muted-foreground">
          Vertical separator for side-by-side content.
        </p>
        <CodePreview
          code={`<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Home</div>
  <Separator orientation="vertical" />
  <div>Products</div>
  <Separator orientation="vertical" />
  <div>About</div>
  <Separator orientation="vertical" />
  <div>Contact</div>
</div>`}
        >
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Home</div>
            <Separator orientation="vertical" />
            <div>Products</div>
            <Separator orientation="vertical" />
            <div>About</div>
            <Separator orientation="vertical" />
            <div>Contact</div>
          </div>
        </CodePreview>
      </section>

      {/* In Lists */}
      <section className="space-y-4">
        <h2 id="in-list" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          In Lists
        </h2>
        <p className="text-muted-foreground">
          Use separators between list items.
        </p>
        <CodePreview
          code={`<div className="max-w-sm space-y-4">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm font-medium">Push Notifications</p>
      <p className="text-xs text-muted-foreground">Receive notifications</p>
    </div>
    <span className="text-sm text-muted-foreground">On</span>
  </div>
  <Separator />
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm font-medium">Email Updates</p>
      <p className="text-xs text-muted-foreground">Weekly digest</p>
    </div>
    <span className="text-sm text-muted-foreground">Off</span>
  </div>
  <Separator />
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm font-medium">SMS Alerts</p>
      <p className="text-xs text-muted-foreground">Critical only</p>
    </div>
    <span className="text-sm text-muted-foreground">On</span>
  </div>
</div>`}
        >
          <div className="max-w-sm w-full space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Push Notifications</p>
                <p className="text-xs text-muted-foreground">Receive notifications</p>
              </div>
              <span className="text-sm text-muted-foreground">On</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Email Updates</p>
                <p className="text-xs text-muted-foreground">Weekly digest</p>
              </div>
              <span className="text-sm text-muted-foreground">Off</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">SMS Alerts</p>
                <p className="text-xs text-muted-foreground">Critical only</p>
              </div>
              <span className="text-sm text-muted-foreground">On</span>
            </div>
          </div>
        </CodePreview>
      </section>

      {/* With Text */}
      <section className="space-y-4">
        <h2 id="with-text" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Text
        </h2>
        <p className="text-muted-foreground">
          Separator with centered text label.
        </p>
        <CodePreview
          code={`<div className="max-w-md">
  <div className="relative">
    <div className="absolute inset-0 flex items-center">
      <Separator className="w-full" />
    </div>
    <div className="relative flex justify-center text-xs uppercase">
      <span className="bg-background px-2 text-muted-foreground">
        Or continue with
      </span>
    </div>
  </div>
</div>`}
        >
          <div className="max-w-md w-full">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
          </div>
        </CodePreview>
      </section>

      {/* Decorative */}
      <section className="space-y-4">
        <h2 id="decorative" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Decorative
        </h2>
        <p className="text-muted-foreground">
          Use decorative prop for purely visual separators.
        </p>
        <CodePreview
          code={`<div className="max-w-md space-y-4">
  <p className="text-sm text-muted-foreground">
    This content is above the separator.
  </p>
  <Separator decorative />
  <p className="text-sm text-muted-foreground">
    This content is below the separator.
  </p>
</div>`}
        >
          <div className="max-w-md w-full space-y-4">
            <p className="text-sm text-muted-foreground">
              This content is above the separator.
            </p>
            <Separator decorative />
            <p className="text-sm text-muted-foreground">
              This content is below the separator.
            </p>
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
                <td className="p-3 font-mono text-xs">orientation</td>
                <td className="p-3 font-mono text-xs">horizontal | vertical</td>
                <td className="p-3 font-mono text-xs">horizontal</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">decorative</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
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
