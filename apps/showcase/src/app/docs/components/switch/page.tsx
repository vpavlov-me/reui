"use client";

import * as React from "react";
import { Switch, Label } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function SwitchPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Switch</h1>
        <p className="text-lg text-muted-foreground">
          A control that allows users to toggle between on and off states. Switches are ideal for immediate binary settings.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Switch } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use switches for settings that take effect immediately",
            "Place the switch on the right side of its label",
            "Use for binary on/off choices only",
            "Provide clear labels that describe the enabled state",
            "Use in settings pages for toggling features",
            "Show the current state visually (on/off position)",
          ]}
          donts={[
            "Don't use switches for choices that require form submission - use checkboxes",
            "Don't use switches for multiple selections - use checkboxes",
            "Don't use vague labels like 'Enable' without context",
            "Don't use switches for destructive actions",
            "Don't place multiple switches too close together",
            "Don't use switches for actions that can't be reversed",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic toggle switch.
        </p>
        <CodePreview
          code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
        >
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </CodePreview>
      </section>

      {/* Default Checked */}
      <section className="space-y-4">
        <h2 id="checked" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default Checked
        </h2>
        <p className="text-muted-foreground">
          Switch with default checked state.
        </p>
        <CodePreview
          code={`<div className="flex items-center space-x-2">
  <Switch id="wifi" defaultChecked />
  <Label htmlFor="wifi">WiFi</Label>
</div>`}
        >
          <div className="flex items-center space-x-2">
            <Switch id="wifi" defaultChecked />
            <Label htmlFor="wifi">WiFi</Label>
          </div>
        </CodePreview>
      </section>

      {/* With Description */}
      <section className="space-y-4">
        <h2 id="with-description" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Description
        </h2>
        <p className="text-muted-foreground">
          Add descriptive text for context.
        </p>
        <CodePreview
          code={`<div className="flex items-center justify-between rounded-lg border p-4 max-w-md">
  <div className="space-y-0.5">
    <Label htmlFor="notifications">Push Notifications</Label>
    <p className="text-sm text-muted-foreground">
      Receive notifications on your device.
    </p>
  </div>
  <Switch id="notifications" />
</div>`}
        >
          <div className="flex items-center justify-between rounded-lg border p-4 w-full max-w-md">
            <div className="space-y-0.5">
              <Label htmlFor="notifications">Push Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications on your device.
              </p>
            </div>
            <Switch id="notifications" />
          </div>
        </CodePreview>
      </section>

      {/* Settings List */}
      <section className="space-y-4">
        <h2 id="settings-list" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Settings List
        </h2>
        <p className="text-muted-foreground">
          Common pattern for settings pages.
        </p>
        <CodePreview
          code={`<div className="space-y-4 max-w-md">
  <div className="flex items-center justify-between rounded-lg border p-4">
    <div className="space-y-0.5">
      <Label htmlFor="email-notif">Email Notifications</Label>
      <p className="text-sm text-muted-foreground">
        Receive email updates.
      </p>
    </div>
    <Switch id="email-notif" defaultChecked />
  </div>
  <div className="flex items-center justify-between rounded-lg border p-4">
    <div className="space-y-0.5">
      <Label htmlFor="marketing">Marketing Emails</Label>
      <p className="text-sm text-muted-foreground">
        Receive marketing content.
      </p>
    </div>
    <Switch id="marketing" />
  </div>
  <div className="flex items-center justify-between rounded-lg border p-4">
    <div className="space-y-0.5">
      <Label htmlFor="security">Security Alerts</Label>
      <p className="text-sm text-muted-foreground">
        Get notified about security events.
      </p>
    </div>
    <Switch id="security" defaultChecked />
  </div>
</div>`}
        >
          <div className="space-y-4 w-full max-w-md">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="email-notif-list">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive email updates.
                </p>
              </div>
              <Switch id="email-notif-list" defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="marketing-list">Marketing Emails</Label>
                <p className="text-sm text-muted-foreground">
                  Receive marketing content.
                </p>
              </div>
              <Switch id="marketing-list" />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="security-list">Security Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about security events.
                </p>
              </div>
              <Switch id="security-list" defaultChecked />
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
          Disabled switches to prevent interaction.
        </p>
        <CodePreview
          code={`<div className="space-y-3">
  <div className="flex items-center space-x-2">
    <Switch id="disabled-off" disabled />
    <Label htmlFor="disabled-off" className="text-muted-foreground">
      Disabled off
    </Label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="disabled-on" disabled checked />
    <Label htmlFor="disabled-on" className="text-muted-foreground">
      Disabled on
    </Label>
  </div>
</div>`}
        >
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Switch id="disabled-off" disabled />
              <Label htmlFor="disabled-off" className="text-muted-foreground">
                Disabled off
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="disabled-on" disabled checked />
              <Label htmlFor="disabled-on" className="text-muted-foreground">
                Disabled on
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
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">defaultChecked</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">onCheckedChange</td>
                <td className="p-3 font-mono text-xs">(checked: boolean) =&gt; void</td>
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
