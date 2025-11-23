"use client";

import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
  Input,
  Label,
} from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function PopoverPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Popover</h1>
        <p className="text-lg text-muted-foreground">
          Displays rich content in a portal, triggered by a button.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Popover, PopoverContent, PopoverTrigger } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use popovers for secondary content that needs user attention",
            "Include forms, settings, or detailed information in popovers",
            "Provide a clear way to dismiss the popover",
            "Position popovers to avoid blocking important content",
            "Use appropriate width based on content complexity",
            "Ensure popover content is focused when opened",
          ]}
          donts={[
            "Don't use popovers for critical actions that need full attention",
            "Don't nest popovers inside other popovers",
            "Don't include too much content that requires scrolling",
            "Don't use popovers when a modal dialog is more appropriate",
            "Don't auto-dismiss popovers with important form data",
            "Don't use popovers for simple text hints (use tooltips instead)",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic popover with form content.
        </p>
        <CodePreview
          code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="width">Width</Label>
          <Input
            id="width"
            defaultValue="100%"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxWidth">Max. width</Label>
          <Input
            id="maxWidth"
            defaultValue="300px"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="height">Height</Label>
          <Input
            id="height"
            defaultValue="25px"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxHeight">Max. height</Label>
          <Input
            id="maxHeight"
            defaultValue="none"
            className="col-span-2 h-8"
          />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`}
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">
                    Set the dimensions for the layer.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Width</Label>
                    <Input
                      id="width"
                      defaultValue="100%"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxWidth">Max. width</Label>
                    <Input
                      id="maxWidth"
                      defaultValue="300px"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      id="height"
                      defaultValue="25px"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxHeight">Max. height</Label>
                    <Input
                      id="maxHeight"
                      defaultValue="none"
                      className="col-span-2 h-8"
                    />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </CodePreview>
      </section>

      {/* Positions */}
      <section className="space-y-4">
        <h2 id="positions" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Positions
        </h2>
        <p className="text-muted-foreground">
          Popovers can be positioned on different sides.
        </p>
        <CodePreview
          code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Top</Button>
  </PopoverTrigger>
  <PopoverContent side="top" className="w-40">
    <p className="text-sm">Popover content</p>
  </PopoverContent>
</Popover>

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Right</Button>
  </PopoverTrigger>
  <PopoverContent side="right" className="w-40">
    <p className="text-sm">Popover content</p>
  </PopoverContent>
</Popover>

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Bottom</Button>
  </PopoverTrigger>
  <PopoverContent side="bottom" className="w-40">
    <p className="text-sm">Popover content</p>
  </PopoverContent>
</Popover>

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Left</Button>
  </PopoverTrigger>
  <PopoverContent side="left" className="w-40">
    <p className="text-sm">Popover content</p>
  </PopoverContent>
</Popover>`}
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Top</Button>
            </PopoverTrigger>
            <PopoverContent side="top" className="w-40">
              <p className="text-sm">Popover content</p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Right</Button>
            </PopoverTrigger>
            <PopoverContent side="right" className="w-40">
              <p className="text-sm">Popover content</p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </PopoverTrigger>
            <PopoverContent side="bottom" className="w-40">
              <p className="text-sm">Popover content</p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Left</Button>
            </PopoverTrigger>
            <PopoverContent side="left" className="w-40">
              <p className="text-sm">Popover content</p>
            </PopoverContent>
          </Popover>
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
                <td className="p-3 font-mono text-xs">Popover</td>
                <td className="p-3 font-mono text-xs">open</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">Popover</td>
                <td className="p-3 font-mono text-xs">onOpenChange</td>
                <td className="p-3 font-mono text-xs">(open: boolean) =&gt; void</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">Popover</td>
                <td className="p-3 font-mono text-xs">modal</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">PopoverContent</td>
                <td className="p-3 font-mono text-xs">side</td>
                <td className="p-3 font-mono text-xs">top | right | bottom | left</td>
                <td className="p-3 font-mono text-xs">bottom</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">PopoverContent</td>
                <td className="p-3 font-mono text-xs">sideOffset</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">4</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">PopoverContent</td>
                <td className="p-3 font-mono text-xs">align</td>
                <td className="p-3 font-mono text-xs">start | center | end</td>
                <td className="p-3 font-mono text-xs">center</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">PopoverTrigger</td>
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
