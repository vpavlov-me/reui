"use client";

import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Button,
} from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function DrawerPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Drawer</h1>
        <p className="text-lg text-muted-foreground">
          A drawer component for React. Extends the Dialog component with slide-in functionality.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
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
            "Use drawers for mobile-friendly bottom sheets and quick actions",
            "Include a visible drag handle for touch interactions",
            "Provide clear title and description for context",
            "Use for simple forms, selections, or confirmations",
            "Allow dismissal by dragging down or tapping overlay",
            "Keep content concise and focused on a single task",
          ]}
          donts={[
            "Don't use drawers for complex multi-step workflows",
            "Don't make drawer content scroll excessively",
            "Don't nest drawers within other drawers or dialogs",
            "Don't use on desktop when a sheet or dialog would work better",
            "Don't forget to include cancel/close actions",
            "Don't put critical blocking content in drawers",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic drawer that slides up from the bottom.
        </p>
        <CodePreview
          code={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Move Goal</DrawerTitle>
        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
      </DrawerHeader>
      <div className="p-4 pb-0">
        <div className="flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full"
          >
            -
          </Button>
          <div className="flex-1 text-center">
            <div className="text-7xl font-bold tracking-tighter">
              350
            </div>
            <div className="text-[0.70rem] uppercase text-muted-foreground">
              Calories/day
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full"
          >
            +
          </Button>
        </div>
      </div>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`}
        >
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Move Goal</DrawerTitle>
                  <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0">
                  <div className="flex items-center justify-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 shrink-0 rounded-full"
                    >
                      -
                    </Button>
                    <div className="flex-1 text-center">
                      <div className="text-7xl font-bold tracking-tighter">
                        350
                      </div>
                      <div className="text-[0.70rem] uppercase text-muted-foreground">
                        Calories/day
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 shrink-0 rounded-full"
                    >
                      +
                    </Button>
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </CodePreview>
      </section>

      {/* Simple */}
      <section className="space-y-4">
        <h2 id="simple" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Simple
        </h2>
        <p className="text-muted-foreground">
          A simple drawer with just header and footer.
        </p>
        <CodePreview
          code={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Simple Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Are you sure?</DrawerTitle>
        <DrawerDescription>
          This action cannot be undone.
        </DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <Button variant="destructive">Delete</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`}
        >
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Simple Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Are you sure?</DrawerTitle>
                  <DrawerDescription>
                    This action cannot be undone.
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button variant="destructive">Delete</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
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
                <th className="p-3 text-left font-medium">Props</th>
                <th className="p-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">Drawer</td>
                <td className="p-3 font-mono text-xs">open, onOpenChange, shouldScaleBackground</td>
                <td className="p-3 text-xs">Root component that manages drawer state</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">DrawerTrigger</td>
                <td className="p-3 font-mono text-xs">asChild</td>
                <td className="p-3 text-xs">Button that opens the drawer</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">DrawerContent</td>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 text-xs">Container for drawer content with slide animation</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">DrawerHeader</td>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 text-xs">Container for title and description</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">DrawerTitle</td>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 text-xs">Accessible title for the drawer</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">DrawerDescription</td>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 text-xs">Accessible description for the drawer</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">DrawerFooter</td>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 text-xs">Container for action buttons</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">DrawerClose</td>
                <td className="p-3 font-mono text-xs">asChild</td>
                <td className="p-3 text-xs">Button that closes the drawer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
