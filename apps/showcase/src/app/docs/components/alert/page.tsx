"use client";

import * as React from "react";
import { Alert, AlertDescription, AlertTitle } from "@reluna-ui/ui";
import { AlertCircle, CheckCircle, Info, AlertTriangle, Rocket } from "lucide-react";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function AlertPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Alert</h1>
        <p className="text-lg text-muted-foreground">
          Displays a callout for user attention. Alerts communicate important information, feedback, or guidance to users.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Alert, AlertDescription, AlertTitle } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use alerts to communicate important information that requires user attention",
            "Include a clear, concise title that summarizes the alert message",
            "Use appropriate variants to match the message severity (error, warning, info)",
            "Include actionable information in the description when relevant",
            "Use icons to provide visual context for the alert type",
            "Keep alert messages brief and scannable",
          ]}
          donts={[
            "Don't use alerts for non-essential information that can be shown inline",
            "Don't stack multiple alerts of the same type together",
            "Don't use destructive variant for informational messages",
            "Don't make alerts dismissible if the information is critical",
            "Don't use alerts as a replacement for form validation messages",
            "Don't use overly technical language in alert messages",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic alert with title and description.
        </p>
        <CodePreview
          code={`<Alert>
  <Rocket className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`}
        >
          <Alert className="max-w-lg">
            <Rocket className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
        </CodePreview>
      </section>

      {/* Destructive */}
      <section className="space-y-4">
        <h2 id="destructive" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Destructive
        </h2>
        <p className="text-muted-foreground">
          Use destructive variant for errors or critical warnings.
        </p>
        <CodePreview
          code={`<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again to continue.
  </AlertDescription>
</Alert>`}
        >
          <Alert variant="destructive" className="max-w-lg">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again to continue.
            </AlertDescription>
          </Alert>
        </CodePreview>
      </section>

      {/* Success */}
      <section className="space-y-4">
        <h2 id="success" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Success
        </h2>
        <p className="text-muted-foreground">
          Custom styled alert for success messages.
        </p>
        <CodePreview
          code={`<Alert className="border-emerald-200 bg-emerald-50 text-emerald-900 [&>svg]:text-emerald-600">
  <CheckCircle className="h-4 w-4" />
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>`}
        >
          <Alert className="max-w-lg border-emerald-200 bg-emerald-50 text-emerald-900 [&>svg]:text-emerald-600">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>
        </CodePreview>
      </section>

      {/* Warning */}
      <section className="space-y-4">
        <h2 id="warning" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Warning
        </h2>
        <p className="text-muted-foreground">
          Custom styled alert for warnings.
        </p>
        <CodePreview
          code={`<Alert className="border-amber-200 bg-amber-50 text-amber-900 [&>svg]:text-amber-600">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    Your subscription will expire in 3 days. Please renew to avoid service interruption.
  </AlertDescription>
</Alert>`}
        >
          <Alert className="max-w-lg border-amber-200 bg-amber-50 text-amber-900 [&>svg]:text-amber-600">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Your subscription will expire in 3 days. Please renew to avoid service interruption.
            </AlertDescription>
          </Alert>
        </CodePreview>
      </section>

      {/* Info */}
      <section className="space-y-4">
        <h2 id="info" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Info
        </h2>
        <p className="text-muted-foreground">
          Custom styled alert for informational messages.
        </p>
        <CodePreview
          code={`<Alert className="border-blue-200 bg-blue-50 text-blue-900 [&>svg]:text-blue-600">
  <Info className="h-4 w-4" />
  <AlertTitle>Note</AlertTitle>
  <AlertDescription>
    This feature is currently in beta. Some functionality may change.
  </AlertDescription>
</Alert>`}
        >
          <Alert className="max-w-lg border-blue-200 bg-blue-50 text-blue-900 [&>svg]:text-blue-600">
            <Info className="h-4 w-4" />
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
              This feature is currently in beta. Some functionality may change.
            </AlertDescription>
          </Alert>
        </CodePreview>
      </section>

      {/* Without Icon */}
      <section className="space-y-4">
        <h2 id="no-icon" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Without Icon
        </h2>
        <p className="text-muted-foreground">
          Alerts can be used without icons.
        </p>
        <CodePreview
          code={`<Alert>
  <AlertTitle>Update Available</AlertTitle>
  <AlertDescription>
    A new software update is available. Download version 2.0.4 now.
  </AlertDescription>
</Alert>`}
        >
          <Alert className="max-w-lg">
            <AlertTitle>Update Available</AlertTitle>
            <AlertDescription>
              A new software update is available. Download version 2.0.4 now.
            </AlertDescription>
          </Alert>
        </CodePreview>
      </section>

      {/* Description Only */}
      <section className="space-y-4">
        <h2 id="description-only" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Description Only
        </h2>
        <p className="text-muted-foreground">
          Simple alert with just description text.
        </p>
        <CodePreview
          code={`<Alert>
  <AlertDescription>
    Your trial ends in 7 days. Upgrade now to keep access to all features.
  </AlertDescription>
</Alert>`}
        >
          <Alert className="max-w-lg">
            <AlertDescription>
              Your trial ends in 7 days. Upgrade now to keep access to all features.
            </AlertDescription>
          </Alert>
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
                <td className="p-3 font-mono text-xs">Alert</td>
                <td className="p-3 font-mono text-xs">variant</td>
                <td className="p-3 font-mono text-xs">default | destructive</td>
                <td className="p-3 font-mono text-xs">default</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">Alert</td>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">AlertTitle</td>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">AlertDescription</td>
                <td className="p-3 font-mono text-xs">className</td>
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
