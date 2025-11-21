"use client";

import * as React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function AlertDialogPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Alert Dialog</h1>
        <p className="text-lg text-muted-foreground">
          A modal dialog that interrupts the user with important content and expects a response.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
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
            "Use for destructive actions that require confirmation",
            "Provide clear and concise title and description",
            "Include both cancel and confirm actions",
            "Use destructive button styling for dangerous actions",
            "Keep dialog content focused on a single decision",
            "Use appropriate action button labels (e.g., 'Delete' not 'OK')",
          ]}
          donts={[
            "Don't use for non-critical information or notifications",
            "Don't nest multiple alert dialogs",
            "Don't use vague button labels like 'Yes' or 'No'",
            "Don't overload with too much content or choices",
            "Don't use for routine actions that don't need confirmation",
            "Don't hide the cancel option from users",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          Confirmation dialog for destructive actions.
        </p>
        <CodePreview
          code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
        >
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CodePreview>
      </section>

      {/* Destructive Action */}
      <section className="space-y-4">
        <h2 id="destructive" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Destructive Action
        </h2>
        <p className="text-muted-foreground">
          Alert dialog with destructive action button.
        </p>
        <CodePreview
          code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete Account</AlertDialogTitle>
      <AlertDialogDescription>
        Are you sure you want to delete your account? All of your data
        will be permanently removed. This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
        Delete
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
        >
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete Account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Account</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to delete your account? All of your data
                  will be permanently removed. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
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
                <td className="p-3 font-mono text-xs">AlertDialog</td>
                <td className="p-3 text-xs">Root component that manages dialog state</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">AlertDialogTrigger</td>
                <td className="p-3 text-xs">Button that opens the dialog</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">AlertDialogContent</td>
                <td className="p-3 text-xs">Contains the dialog content</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">AlertDialogHeader</td>
                <td className="p-3 text-xs">Container for title and description</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">AlertDialogTitle</td>
                <td className="p-3 text-xs">Accessible title for the dialog</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">AlertDialogDescription</td>
                <td className="p-3 text-xs">Accessible description of the dialog</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">AlertDialogFooter</td>
                <td className="p-3 text-xs">Container for action buttons</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">AlertDialogCancel</td>
                <td className="p-3 text-xs">Button that closes the dialog</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">AlertDialogAction</td>
                <td className="p-3 text-xs">Button that confirms the action</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
