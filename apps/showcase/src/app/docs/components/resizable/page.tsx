"use client";

import * as React from "react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function ResizablePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Resizable</h1>
        <p className="text-lg text-muted-foreground">
          Accessible resizable panel groups and layouts with keyboard support.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use resizable panels for adjustable layouts like sidebars",
            "Set appropriate minSize to prevent panels from collapsing completely",
            "Use withHandle prop to show visible drag indicator",
            "Provide meaningful default sizes for optimal initial layout",
            "Use collapsible prop for panels that can be hidden",
            "Test keyboard navigation for accessibility compliance",
          ]}
          donts={[
            "Don't nest too many resizable panels creating confusion",
            "Don't use without considering mobile touch interactions",
            "Don't set defaultSize values that don't add up correctly",
            "Don't forget to handle the collapsed state visually",
            "Don't use for simple two-column layouts that don't need resizing",
            "Don't ignore minimum size constraints that cause layout breaking",
          ]}
        />
      </section>

      {/* Horizontal */}
      <section className="space-y-4">
        <h2 id="horizontal" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Horizontal
        </h2>
        <p className="text-muted-foreground">
          Horizontally resizable panels.
        </p>
        <CodePreview
          code={`<ResizablePanelGroup
  direction="horizontal"
  className="max-w-md rounded-lg border"
>
  <ResizablePanel defaultSize={50}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">One</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">Two</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}
        >
          <ResizablePanelGroup
            direction="horizontal"
            className="max-w-md rounded-lg border"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="font-semibold">One</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CodePreview>
      </section>

      {/* Vertical */}
      <section className="space-y-4">
        <h2 id="vertical" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Vertical
        </h2>
        <p className="text-muted-foreground">
          Vertically resizable panels.
        </p>
        <CodePreview
          code={`<ResizablePanelGroup
  direction="vertical"
  className="min-h-[200px] max-w-md rounded-lg border"
>
  <ResizablePanel defaultSize={25}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Header</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={75}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Content</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}
        >
          <ResizablePanelGroup
            direction="vertical"
            className="min-h-[200px] max-w-md rounded-lg border"
          >
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Header</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Content</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CodePreview>
      </section>

      {/* With Handle */}
      <section className="space-y-4">
        <h2 id="handle" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Handle
        </h2>
        <p className="text-muted-foreground">
          Resizable panels with visible handle.
        </p>
        <CodePreview
          code={`<ResizablePanelGroup
  direction="horizontal"
  className="max-w-md rounded-lg border"
>
  <ResizablePanel defaultSize={25}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">Sidebar</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={75}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">Content</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}
        >
          <ResizablePanelGroup
            direction="horizontal"
            className="max-w-md rounded-lg border"
          >
            <ResizablePanel defaultSize={25}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="font-semibold">Sidebar</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="font-semibold">Content</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
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
                <td className="p-3 font-mono text-xs">ResizablePanelGroup</td>
                <td className="p-3 font-mono text-xs">direction</td>
                <td className="p-3 font-mono text-xs">horizontal | vertical</td>
                <td className="p-3 font-mono text-xs">horizontal</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ResizablePanel</td>
                <td className="p-3 font-mono text-xs">defaultSize</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ResizablePanel</td>
                <td className="p-3 font-mono text-xs">minSize</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">10</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ResizablePanel</td>
                <td className="p-3 font-mono text-xs">maxSize</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">100</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ResizablePanel</td>
                <td className="p-3 font-mono text-xs">collapsible</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">ResizableHandle</td>
                <td className="p-3 font-mono text-xs">withHandle</td>
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
