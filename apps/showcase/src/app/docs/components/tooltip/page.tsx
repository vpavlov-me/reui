"use client";

import * as React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Button,
} from "@reluna-ui/ui";
import { Plus } from "lucide-react";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function TooltipPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Tooltip</h1>
        <p className="text-lg text-muted-foreground">
          A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use tooltips to provide helpful hints or additional context",
            "Keep tooltip text short and concise (1-2 lines max)",
            "Use tooltips on icon-only buttons for accessibility",
            "Position tooltips to avoid blocking important content",
            "Ensure tooltips are accessible via keyboard focus",
            "Use consistent delay timing across your application",
          ]}
          donts={[
            "Don't put essential information only in tooltips",
            "Don't use tooltips for form field validation errors",
            "Don't include interactive elements inside tooltips",
            "Don't use tooltips on touch-only devices without alternatives",
            "Don't make tooltip text too long or verbose",
            "Don't use tooltips as a replacement for proper labels",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic tooltip that appears on hover.
        </p>
        <CodePreview
          code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CodePreview>
      </section>

      {/* With Icon Button */}
      <section className="space-y-4">
        <h2 id="with-icon" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Icon Button
        </h2>
        <p className="text-muted-foreground">
          Tooltip on an icon button for accessibility.
        </p>
        <CodePreview
          code={`import { Plus } from "lucide-react";

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline" size="icon">
        <Plus className="h-4 w-4" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add new item</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add new item</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CodePreview>
      </section>

      {/* Positions */}
      <section className="space-y-4">
        <h2 id="positions" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Positions
        </h2>
        <p className="text-muted-foreground">
          Tooltips can be positioned on different sides.
        </p>
        <CodePreview
          code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Top</Button>
    </TooltipTrigger>
    <TooltipContent side="top">
      <p>Tooltip on top</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Right</Button>
    </TooltipTrigger>
    <TooltipContent side="right">
      <p>Tooltip on right</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Bottom</Button>
    </TooltipTrigger>
    <TooltipContent side="bottom">
      <p>Tooltip on bottom</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Left</Button>
    </TooltipTrigger>
    <TooltipContent side="left">
      <p>Tooltip on left</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Top</Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Tooltip on top</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Right</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Tooltip on right</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Bottom</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Tooltip on bottom</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Left</Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Tooltip on left</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
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
                <td className="p-3 font-mono text-xs">TooltipProvider</td>
                <td className="p-3 font-mono text-xs">delayDuration</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">700</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">TooltipProvider</td>
                <td className="p-3 font-mono text-xs">skipDelayDuration</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">300</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">TooltipContent</td>
                <td className="p-3 font-mono text-xs">side</td>
                <td className="p-3 font-mono text-xs">top | right | bottom | left</td>
                <td className="p-3 font-mono text-xs">top</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">TooltipContent</td>
                <td className="p-3 font-mono text-xs">sideOffset</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">4</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">TooltipContent</td>
                <td className="p-3 font-mono text-xs">align</td>
                <td className="p-3 font-mono text-xs">start | center | end</td>
                <td className="p-3 font-mono text-xs">center</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">TooltipTrigger</td>
                <td className="p-3 font-mono text-xs">asChild</td>
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
