"use client";

import * as React from "react";
import { Button } from "@reluna-ui/ui";
import { Check, Settings, User, Mail, ArrowRight, Loader2 } from "lucide-react";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function ButtonPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Button</h1>
        <p className="text-lg text-muted-foreground">
          Displays a button or a component that looks like a button. Buttons allow users to take actions and make choices with a single tap.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Button } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use primary button for the main action on a page",
            "Use destructive variant for dangerous actions like delete",
            "Include icons to provide visual context when helpful",
            "Use disabled state for unavailable actions",
            "Add loading state for async operations",
            "Keep button labels short and action-oriented",
          ]}
          donts={[
            "Don't use multiple primary buttons in the same section",
            "Don't use ghost buttons for primary actions",
            "Don't disable buttons without clear reason",
            "Don't use long text labels that wrap",
            "Don't mix different button sizes in the same group",
            "Don't use destructive variant for non-destructive actions",
          ]}
        />
      </section>

      {/* Variants */}
      <section className="space-y-4">
        <h2 id="variants" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Variants
        </h2>
        <p className="text-muted-foreground">
          Button comes with multiple visual variants to indicate different types of actions.
        </p>
        <CodePreview
          code={`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
        >
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </CodePreview>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 id="sizes" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Sizes
        </h2>
        <p className="text-muted-foreground">
          Buttons are available in different sizes for various use cases.
        </p>
        <CodePreview
          code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
        >
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </CodePreview>
      </section>

      {/* With Icon */}
      <section className="space-y-4">
        <h2 id="with-icon" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Icon
        </h2>
        <p className="text-muted-foreground">
          Combine buttons with icons to provide visual context for the action.
        </p>
        <CodePreview
          code={`import { Mail, Check, ArrowRight } from "lucide-react";

<Button>
  <Mail className="mr-2 h-4 w-4" />
  Login with Email
</Button>
<Button variant="secondary">
  Save
  <Check className="ml-2 h-4 w-4" />
</Button>
<Button variant="outline">
  Continue
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>`}
        >
          <Button>
            <Mail className="mr-2 h-4 w-4" />
            Login with Email
          </Button>
          <Button variant="secondary">
            Save
            <Check className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CodePreview>
      </section>

      {/* Icon Only */}
      <section className="space-y-4">
        <h2 id="icon-only" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Icon Only
        </h2>
        <p className="text-muted-foreground">
          Use icon-only buttons for compact interfaces or toolbar actions. Always include sr-only text for accessibility.
        </p>
        <CodePreview
          code={`import { Settings, User, Mail } from "lucide-react";

<Button size="icon">
  <Settings className="h-4 w-4" />
  <span className="sr-only">Settings</span>
</Button>
<Button size="icon" variant="outline">
  <User className="h-4 w-4" />
  <span className="sr-only">Profile</span>
</Button>
<Button size="icon" variant="secondary">
  <Mail className="h-4 w-4" />
  <span className="sr-only">Send email</span>
</Button>`}
        >
          <Button size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <User className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary">
            <Mail className="h-4 w-4" />
          </Button>
        </CodePreview>
      </section>

      {/* Loading State */}
      <section className="space-y-4">
        <h2 id="loading" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Loading State
        </h2>
        <p className="text-muted-foreground">
          Show loading state to indicate that an action is in progress. Disable the button to prevent multiple submissions.
        </p>
        <CodePreview
          code={`import { Loader2 } from "lucide-react";

<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`}
        >
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        </CodePreview>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled
        </h2>
        <p className="text-muted-foreground">
          Disabled buttons prevent user interaction and indicate unavailable actions.
        </p>
        <CodePreview
          code={`<Button disabled>Default</Button>
<Button variant="secondary" disabled>Secondary</Button>
<Button variant="destructive" disabled>Destructive</Button>
<Button variant="outline" disabled>Outline</Button>`}
        >
          <Button disabled>Default</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="destructive" disabled>Destructive</Button>
          <Button variant="outline" disabled>Outline</Button>
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
                <td className="p-3 font-mono text-xs">variant</td>
                <td className="p-3 font-mono text-xs">default | secondary | destructive | outline | ghost | link</td>
                <td className="p-3 font-mono text-xs">default</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">size</td>
                <td className="p-3 font-mono text-xs">default | sm | lg | icon</td>
                <td className="p-3 font-mono text-xs">default</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">asChild</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">disabled</td>
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
