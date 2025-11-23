"use client";

import * as React from "react";
import { Badge } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function BadgePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Badge</h1>
        <p className="text-lg text-muted-foreground">
          Displays a badge or label. Badges are used to highlight status, categories, or other metadata in a compact format.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Badge } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use badges to highlight status, categories, or metadata",
            "Keep badge text short and concise (1-2 words)",
            "Use consistent colors for the same status across the application",
            "Use the destructive variant for error or critical states",
            "Include dot indicators for real-time status like online/offline",
            "Use outline variant for less prominent labels",
          ]}
          donts={[
            "Don't use badges for primary actions or clickable elements",
            "Don't use long text that wraps to multiple lines",
            "Don't overuse badges - they lose impact when overused",
            "Don't mix different badge sizes in the same context",
            "Don't use decorative badges without semantic meaning",
            "Don't use too many color variants in close proximity",
          ]}
        />
      </section>

      {/* Variants */}
      <section className="space-y-4">
        <h2 id="variants" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Variants
        </h2>
        <p className="text-muted-foreground">
          Badges come in different variants for various contexts.
        </p>
        <CodePreview
          code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
        >
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </CodePreview>
      </section>

      {/* Status Badges */}
      <section className="space-y-4">
        <h2 id="status" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Status Badges
        </h2>
        <p className="text-muted-foreground">
          Custom colored badges for status indicators.
        </p>
        <CodePreview
          code={`<Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
  Active
</Badge>
<Badge className="bg-amber-50 text-amber-700 hover:bg-amber-100">
  Pending
</Badge>
<Badge className="bg-red-50 text-red-700 hover:bg-red-100">
  Error
</Badge>
<Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100">
  Info
</Badge>
<Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">
  Draft
</Badge>`}
        >
          <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
            Active
          </Badge>
          <Badge className="bg-amber-50 text-amber-700 hover:bg-amber-100">
            Pending
          </Badge>
          <Badge className="bg-red-50 text-red-700 hover:bg-red-100">
            Error
          </Badge>
          <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100">
            Info
          </Badge>
          <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">
            Draft
          </Badge>
        </CodePreview>
      </section>

      {/* With Dot Indicator */}
      <section className="space-y-4">
        <h2 id="with-dot" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Dot Indicator
        </h2>
        <p className="text-muted-foreground">
          Badges with colored dot indicators.
        </p>
        <CodePreview
          code={`<Badge variant="outline" className="gap-1.5">
  <span className="h-2 w-2 rounded-full bg-emerald-500" />
  Online
</Badge>
<Badge variant="outline" className="gap-1.5">
  <span className="h-2 w-2 rounded-full bg-amber-500" />
  Away
</Badge>
<Badge variant="outline" className="gap-1.5">
  <span className="h-2 w-2 rounded-full bg-red-500" />
  Busy
</Badge>
<Badge variant="outline" className="gap-1.5">
  <span className="h-2 w-2 rounded-full bg-gray-400" />
  Offline
</Badge>`}
        >
          <Badge variant="outline" className="gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Online
          </Badge>
          <Badge variant="outline" className="gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            Away
          </Badge>
          <Badge variant="outline" className="gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Busy
          </Badge>
          <Badge variant="outline" className="gap-1.5">
            <span className="h-2 w-2 rounded-full bg-gray-400" />
            Offline
          </Badge>
        </CodePreview>
      </section>

      {/* Categories */}
      <section className="space-y-4">
        <h2 id="categories" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Categories
        </h2>
        <p className="text-muted-foreground">
          Using badges as category labels.
        </p>
        <CodePreview
          code={`<Badge variant="secondary">Design</Badge>
<Badge variant="secondary">Development</Badge>
<Badge variant="secondary">Marketing</Badge>
<Badge variant="secondary">Product</Badge>
<Badge variant="secondary">Research</Badge>`}
        >
          <Badge variant="secondary">Design</Badge>
          <Badge variant="secondary">Development</Badge>
          <Badge variant="secondary">Marketing</Badge>
          <Badge variant="secondary">Product</Badge>
          <Badge variant="secondary">Research</Badge>
        </CodePreview>
      </section>

      {/* With Count */}
      <section className="space-y-4">
        <h2 id="with-count" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Count
        </h2>
        <p className="text-muted-foreground">
          Badges displaying numeric counts.
        </p>
        <CodePreview
          code={`<Badge>3</Badge>
<Badge variant="secondary">12</Badge>
<Badge variant="destructive">99+</Badge>
<Badge variant="outline">New</Badge>`}
        >
          <Badge>3</Badge>
          <Badge variant="secondary">12</Badge>
          <Badge variant="destructive">99+</Badge>
          <Badge variant="outline">New</Badge>
        </CodePreview>
      </section>

      {/* Inline Usage */}
      <section className="space-y-4">
        <h2 id="inline" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Inline Usage
        </h2>
        <p className="text-muted-foreground">
          Badges used inline with text.
        </p>
        <CodePreview
          code={`<p className="text-sm">
  This feature is <Badge className="mx-1">New</Badge> and available now.
</p>
<p className="text-sm">
  Task status: <Badge variant="secondary" className="ml-1">In Progress</Badge>
</p>
<p className="text-sm">
  Priority: <Badge variant="destructive" className="ml-1">High</Badge>
</p>`}
        >
          <div className="space-y-3">
            <p className="text-sm">
              This feature is <Badge className="mx-1">New</Badge> and available now.
            </p>
            <p className="text-sm">
              Task status: <Badge variant="secondary" className="ml-1">In Progress</Badge>
            </p>
            <p className="text-sm">
              Priority: <Badge variant="destructive" className="ml-1">High</Badge>
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
                <td className="p-3 font-mono text-xs">variant</td>
                <td className="p-3 font-mono text-xs">default | secondary | destructive | outline</td>
                <td className="p-3 font-mono text-xs">default</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">children</td>
                <td className="p-3 font-mono text-xs">React.ReactNode</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
