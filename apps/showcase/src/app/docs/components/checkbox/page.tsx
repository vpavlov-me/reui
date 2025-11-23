"use client";

import * as React from "react";
import { Checkbox, Label } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function CheckboxPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Checkbox</h1>
        <p className="text-lg text-muted-foreground">
          A control that allows the user to toggle between checked and not checked states. Checkboxes are ideal for multiple selections or binary choices.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Checkbox } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use checkboxes for multiple selections from a list",
            "Always pair checkboxes with clear, descriptive labels",
            "Use for optional settings that don't require immediate action",
            "Group related checkboxes together visually",
            "Allow users to select none, one, or multiple options",
            "Use indeterminate state for parent checkboxes with partial child selection",
          ]}
          donts={[
            "Don't use checkboxes for mutually exclusive options - use radio buttons",
            "Don't use checkboxes for actions that take effect immediately - use a switch",
            "Don't place checkbox label on the left side",
            "Don't use negative language in labels (e.g., 'Don't send emails')",
            "Don't pre-check optional checkboxes without good reason",
            "Don't use checkboxes for navigation or triggering actions",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic checkbox that can be toggled.
        </p>
        <CodePreview
          code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
        >
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </CodePreview>
      </section>

      {/* With Description */}
      <section className="space-y-4">
        <h2 id="with-text" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Description
        </h2>
        <p className="text-muted-foreground">
          Add descriptive text for additional context.
        </p>
        <CodePreview
          code={`<div className="items-top flex space-x-2">
  <Checkbox id="newsletter" />
  <div className="grid gap-1.5 leading-none">
    <Label htmlFor="newsletter">Subscribe to newsletter</Label>
    <p className="text-sm text-muted-foreground">
      You agree to receive marketing emails from us.
    </p>
  </div>
</div>`}
        >
          <div className="items-top flex space-x-2">
            <Checkbox id="newsletter" />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="newsletter">Subscribe to newsletter</Label>
              <p className="text-sm text-muted-foreground">
                You agree to receive marketing emails from us.
              </p>
            </div>
          </div>
        </CodePreview>
      </section>

      {/* Multiple Options */}
      <section className="space-y-4">
        <h2 id="multiple" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Multiple Options
        </h2>
        <p className="text-muted-foreground">
          Use multiple checkboxes for selecting several options.
        </p>
        <CodePreview
          code={`<div className="space-y-3">
  <div className="flex items-center space-x-2">
    <Checkbox id="email-notif" defaultChecked />
    <Label htmlFor="email-notif">Email notifications</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="push-notif" />
    <Label htmlFor="push-notif">Push notifications</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="sms-notif" />
    <Label htmlFor="sms-notif">SMS notifications</Label>
  </div>
</div>`}
        >
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="email-notif" defaultChecked />
              <Label htmlFor="email-notif">Email notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="push-notif" />
              <Label htmlFor="push-notif">Push notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="sms-notif" />
              <Label htmlFor="sms-notif">SMS notifications</Label>
            </div>
          </div>
        </CodePreview>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled
        </h2>
        <p className="text-muted-foreground">
          Disabled checkboxes to prevent interaction.
        </p>
        <CodePreview
          code={`<div className="space-y-3">
  <div className="flex items-center space-x-2">
    <Checkbox id="disabled-unchecked" disabled />
    <Label htmlFor="disabled-unchecked" className="text-muted-foreground">
      Disabled unchecked
    </Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="disabled-checked" disabled checked />
    <Label htmlFor="disabled-checked" className="text-muted-foreground">
      Disabled checked
    </Label>
  </div>
</div>`}
        >
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled-unchecked" disabled />
              <Label htmlFor="disabled-unchecked" className="text-muted-foreground">
                Disabled unchecked
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled-checked" disabled checked />
              <Label htmlFor="disabled-checked" className="text-muted-foreground">
                Disabled checked
              </Label>
            </div>
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
                <td className="p-3 font-mono text-xs">checked</td>
                <td className="p-3 font-mono text-xs">boolean | &apos;indeterminate&apos;</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">defaultChecked</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">onCheckedChange</td>
                <td className="p-3 font-mono text-xs">(checked: boolean | &apos;indeterminate&apos;) =&gt; void</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">required</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">name</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
