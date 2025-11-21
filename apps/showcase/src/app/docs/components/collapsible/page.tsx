"use client";

import * as React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Button,
} from "@reluna-ui/ui";
import { ChevronsUpDown, Plus, Minus } from "lucide-react";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function CollapsiblePage() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenDisabled, setIsOpenDisabled] = React.useState(false);

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Collapsible</h1>
        <p className="text-lg text-muted-foreground">
          An interactive component which expands/collapses a panel.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use for progressive disclosure of content",
            "Provide clear visual indication of expanded/collapsed state",
            "Include accessible toggle buttons with proper labels",
            "Use for organizing related content into expandable sections",
            "Animate the expand/collapse transition smoothly",
            "Preserve state when appropriate for user experience",
          ]}
          donts={[
            "Don't nest too many collapsible sections",
            "Don't hide critical information in collapsed sections",
            "Don't use without clear trigger affordance",
            "Don't auto-collapse sections while user is interacting",
            "Don't use for primary navigation elements",
            "Don't hide form validation errors in collapsed sections",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic collapsible with toggle button.
        </p>
        <CodePreview
          code={`const [isOpen, setIsOpen] = React.useState(false);

<Collapsible
  open={isOpen}
  onOpenChange={setIsOpen}
  className="w-[350px] space-y-2"
>
  <div className="flex items-center justify-between space-x-4 px-4">
    <h4 className="text-sm font-semibold">
      @peduarte starred 3 repositories
    </h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm" className="w-9 p-0">
        <ChevronsUpDown className="h-4 w-4" />
        <span className="sr-only">Toggle</span>
      </Button>
    </CollapsibleTrigger>
  </div>
  <div className="rounded-md border px-4 py-3 font-mono text-sm">
    @radix-ui/primitives
  </div>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-3 font-mono text-sm">
      @radix-ui/colors
    </div>
    <div className="rounded-md border px-4 py-3 font-mono text-sm">
      @stitches/react
    </div>
  </CollapsibleContent>
</Collapsible>`}
        >
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2"
          >
            <div className="flex items-center justify-between space-x-4 px-4">
              <h4 className="text-sm font-semibold">
                @peduarte starred 3 repositories
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              @radix-ui/primitives
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                @radix-ui/colors
              </div>
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                @stitches/react
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CodePreview>
      </section>

      {/* With Custom Icons */}
      <section className="space-y-4">
        <h2 id="custom-icons" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Custom Icons
        </h2>
        <p className="text-muted-foreground">
          Use different icons to indicate the expanded/collapsed state.
        </p>
        <CodePreview
          code={`import { Plus, Minus } from "lucide-react";

const [isOpen, setIsOpen] = React.useState(false);

<Collapsible
  open={isOpen}
  onOpenChange={setIsOpen}
  className="w-[350px] space-y-2"
>
  <div className="flex items-center justify-between space-x-4 px-4">
    <h4 className="text-sm font-semibold">Additional Information</h4>
    <CollapsibleTrigger asChild>
      <Button variant="outline" size="sm" className="w-9 p-0">
        {isOpen ? (
          <Minus className="h-4 w-4" />
        ) : (
          <Plus className="h-4 w-4" />
        )}
        <span className="sr-only">Toggle</span>
      </Button>
    </CollapsibleTrigger>
  </div>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-3 text-sm">
      Here is some additional content that was hidden.
    </div>
  </CollapsibleContent>
</Collapsible>`}
        >
          <Collapsible
            open={isOpenDisabled}
            onOpenChange={setIsOpenDisabled}
            className="w-[350px] space-y-2"
          >
            <div className="flex items-center justify-between space-x-4 px-4">
              <h4 className="text-sm font-semibold">Additional Information</h4>
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="sm" className="w-9 p-0">
                  {isOpenDisabled ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-3 text-sm">
                Here is some additional content that was hidden.
              </div>
            </CollapsibleContent>
          </Collapsible>
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
                <td className="p-3 font-mono text-xs">open</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">defaultOpen</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">onOpenChange</td>
                <td className="p-3 font-mono text-xs">(open: boolean) =&gt; void</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr>
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
