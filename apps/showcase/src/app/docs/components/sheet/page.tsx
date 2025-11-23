"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
  Button,
  Input,
  Label,
} from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function SheetPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Sheet</h1>
        <p className="text-lg text-muted-foreground">
          Extends the Dialog component to display content that complements the main content of the screen.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
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
            "Use sheets for supplementary content that doesn't require full-page navigation",
            "Include a clear title and description to set context",
            "Provide obvious ways to close the sheet (close button, overlay click)",
            "Use appropriate side based on content flow (right for details, bottom for mobile)",
            "Keep sheet content focused on a single task or topic",
            "Include footer actions when the sheet contains forms or confirmations",
          ]}
          donts={[
            "Don't use sheets for critical information that requires immediate attention",
            "Don't nest sheets within other sheets",
            "Don't make sheets too wide that they cover most of the screen",
            "Don't use sheets when a modal dialog would be more appropriate",
            "Don't put complex multi-step workflows in sheets",
            "Don't forget to handle keyboard navigation and focus management",
          ]}
        />
      </section>

      {/* Sides */}
      <section className="space-y-4">
        <h2 id="sides" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Sides
        </h2>
        <p className="text-muted-foreground">
          Sheets can slide in from different sides of the screen.
        </p>
        <CodePreview
          code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Top</Button>
  </SheetTrigger>
  <SheetContent side="top">
    <SheetHeader>
      <SheetTitle>Top Sheet</SheetTitle>
      <SheetDescription>
        This sheet slides in from the top.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Right</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Right Sheet</SheetTitle>
      <SheetDescription>
        This sheet slides in from the right.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Bottom</Button>
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Bottom Sheet</SheetTitle>
      <SheetDescription>
        This sheet slides in from the bottom.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Left</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Left Sheet</SheetTitle>
      <SheetDescription>
        This sheet slides in from the left.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Top</Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>Top Sheet</SheetTitle>
                <SheetDescription>
                  This sheet slides in from the top.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Right</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Right Sheet</SheetTitle>
                <SheetDescription>
                  This sheet slides in from the right.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>Bottom Sheet</SheetTitle>
                <SheetDescription>
                  This sheet slides in from the bottom.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Left</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Left Sheet</SheetTitle>
                <SheetDescription>
                  This sheet slides in from the left.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </CodePreview>
      </section>

      {/* With Form */}
      <section className="space-y-4">
        <h2 id="form" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Form
        </h2>
        <p className="text-muted-foreground">
          Sheet with form inputs and footer actions.
        </p>
        <CodePreview
          code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when you're done.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input id="name" value="John Doe" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">
          Username
        </Label>
        <Input id="username" value="@johndoe" className="col-span-3" />
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button type="submit">Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" defaultValue="John Doe" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input id="username" defaultValue="@johndoe" className="col-span-3" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
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
                <td className="p-3 font-mono text-xs">Sheet</td>
                <td className="p-3 font-mono text-xs">open, onOpenChange, modal</td>
                <td className="p-3 text-xs">Root component that manages sheet state</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">SheetTrigger</td>
                <td className="p-3 font-mono text-xs">asChild</td>
                <td className="p-3 text-xs">Button that opens the sheet</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">SheetContent</td>
                <td className="p-3 font-mono text-xs">side: top | right | bottom | left</td>
                <td className="p-3 text-xs">Container for sheet content with slide animation</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">SheetHeader</td>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 text-xs">Container for title and description</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">SheetTitle</td>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 text-xs">Accessible title for the sheet</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">SheetDescription</td>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 text-xs">Accessible description for the sheet</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">SheetFooter</td>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 text-xs">Container for action buttons</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">SheetClose</td>
                <td className="p-3 font-mono text-xs">asChild</td>
                <td className="p-3 text-xs">Button that closes the sheet</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
