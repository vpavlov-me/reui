"use client";

import * as React from "react";
import { Skeleton } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function SkeletonPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Skeleton</h1>
        <p className="text-lg text-muted-foreground">
          Use to show a placeholder while content is loading.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Skeleton } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Match skeleton shapes to the content they represent",
            "Use skeletons for content that takes time to load",
            "Keep skeleton layouts consistent with final content",
            "Add subtle animation to indicate loading state",
            "Use appropriate sizes that match actual content dimensions",
            "Group related skeletons together to represent content blocks",
          ]}
          donts={[
            "Don't use skeletons for instant content that loads quickly",
            "Don't create skeletons that look nothing like the final content",
            "Don't use too many different skeleton shapes on one page",
            "Don't show skeletons for content that may not load at all",
            "Don't make skeletons jump or shift when content loads",
            "Don't use bright or distracting colors for skeletons",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          Basic skeleton shapes.
        </p>
        <CodePreview
          code={`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
        >
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </CodePreview>
      </section>

      {/* Card */}
      <section className="space-y-4">
        <h2 id="card" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Card
        </h2>
        <p className="text-muted-foreground">
          Skeleton for card content loading state.
        </p>
        <CodePreview
          code={`<div className="flex flex-col space-y-3 max-w-sm">
  <Skeleton className="h-[125px] w-full rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-[80%]" />
  </div>
</div>`}
        >
          <div className="flex flex-col space-y-3 w-full max-w-sm">
            <Skeleton className="h-[125px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[80%]" />
            </div>
          </div>
        </CodePreview>
      </section>

      {/* List */}
      <section className="space-y-4">
        <h2 id="list" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          List
        </h2>
        <p className="text-muted-foreground">
          Skeleton for list items.
        </p>
        <CodePreview
          code={`<div className="space-y-4 max-w-md">
  {[1, 2, 3].map((i) => (
    <div key={i} className="flex items-center space-x-4">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[60%]" />
      </div>
    </div>
  ))}
</div>`}
        >
          <div className="space-y-4 w-full max-w-md">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[60%]" />
                </div>
              </div>
            ))}
          </div>
        </CodePreview>
      </section>

      {/* Table */}
      <section className="space-y-4">
        <h2 id="table" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Table
        </h2>
        <p className="text-muted-foreground">
          Skeleton for table rows.
        </p>
        <CodePreview
          code={`<div className="space-y-2 max-w-lg">
  <Skeleton className="h-8 w-full" />
  {[1, 2, 3, 4].map((i) => (
    <Skeleton key={i} className="h-12 w-full" />
  ))}
</div>`}
        >
          <div className="space-y-2 w-full max-w-lg">
            <Skeleton className="h-8 w-full" />
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
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
              <tr>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground">
          The Skeleton component accepts all standard HTML div attributes. Use className to control dimensions, border-radius, and other styling.
        </p>
      </section>
    </div>
  );
}
