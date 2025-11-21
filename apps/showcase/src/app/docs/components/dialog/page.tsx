"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
  Input,
  Label,
} from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function DialogPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Dialog</h1>
        <p className="text-lg text-muted-foreground">
          A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
            "Use dialogs for important interactions that require user attention",
            "Include a clear title and description of the dialog's purpose",
            "Provide obvious ways to close the dialog (X button, cancel)",
            "Keep dialog content focused on a single task",
            "Use appropriate dialog sizes for the content",
            "Trap focus within the dialog for accessibility",
          ]}
          donts={[
            "Don't use dialogs for non-essential information",
            "Don't stack multiple dialogs on top of each other",
            "Don't make dialogs too large or fill the entire screen",
            "Don't hide the close button or make closing difficult",
            "Don't use dialogs for content that should be inline",
            "Don't auto-open dialogs without user action",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic dialog with title, description, and actions.
        </p>
        <CodePreview
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
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
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
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
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CodePreview>
      </section>

      {/* Custom Close Button */}
      <section className="space-y-4">
        <h2 id="custom-close" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Custom Close Button
        </h2>
        <p className="text-muted-foreground">
          Dialog with custom close behavior.
        </p>
        <CodePreview
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Share</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>Share link</DialogTitle>
      <DialogDescription>
        Anyone who has this link will be able to view this.
      </DialogDescription>
    </DialogHeader>
    <div className="flex items-center space-x-2">
      <div className="grid flex-1 gap-2">
        <Label htmlFor="link" className="sr-only">
          Link
        </Label>
        <Input
          id="link"
          defaultValue="https://ui.shadcn.com/docs/installation"
          readOnly
        />
      </div>
      <Button type="submit" size="sm" className="px-3">
        Copy
      </Button>
    </div>
    <DialogFooter className="sm:justify-start">
      <Button type="button" variant="secondary">
        Close
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button>Share</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Share link</DialogTitle>
                <DialogDescription>
                  Anyone who has this link will be able to view this.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>
                  <Input
                    id="link"
                    defaultValue="https://ui.shadcn.com/docs/installation"
                    readOnly
                  />
                </div>
                <Button type="submit" size="sm" className="px-3">
                  Copy
                </Button>
              </div>
              <DialogFooter className="sm:justify-start">
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
                <th className="p-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">Dialog</td>
                <td className="p-3 text-xs">The root component that manages dialog state</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">DialogTrigger</td>
                <td className="p-3 text-xs">The button that opens the dialog</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">DialogContent</td>
                <td className="p-3 text-xs">The container for dialog content</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">DialogHeader</td>
                <td className="p-3 text-xs">Contains the title and description</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">DialogTitle</td>
                <td className="p-3 text-xs">The dialog's heading</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">DialogDescription</td>
                <td className="p-3 text-xs">Secondary text describing the dialog</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">DialogFooter</td>
                <td className="p-3 text-xs">Contains action buttons</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
