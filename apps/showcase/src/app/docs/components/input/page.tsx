"use client";

import * as React from "react";
import { Input, Label, Button } from "@reluna-ui/ui";
import { Search, Mail, Eye, EyeOff } from "lucide-react";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function InputPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Input</h1>
        <p className="text-lg text-muted-foreground">
          Displays a form input field for collecting user data. Input components are the foundation of forms and can be customized for various data types.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Input } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Always pair inputs with labels for accessibility",
            "Use appropriate input types (email, password, number)",
            "Provide helpful placeholder text as hints",
            "Show clear validation feedback for errors",
            "Use icons to provide visual context when helpful",
            "Group related inputs together logically",
          ]}
          donts={[
            "Don't use placeholder text as a replacement for labels",
            "Don't make inputs too wide for their expected content",
            "Don't disable inputs without explaining why",
            "Don't use generic placeholder text like 'Enter value'",
            "Don't hide critical information in tooltips only",
            "Don't mix different input sizes in the same form",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          The default input field for text entry.
        </p>
        <CodePreview
          code={`<Input placeholder="Enter text..." />`}
        >
          <div className="w-full max-w-sm">
            <Input placeholder="Enter text..." />
          </div>
        </CodePreview>
      </section>

      {/* With Label */}
      <section className="space-y-4">
        <h2 id="with-label" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Label
        </h2>
        <p className="text-muted-foreground">
          Pair inputs with labels for accessibility and clarity.
        </p>
        <CodePreview
          code={`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="john@example.com" />
</div>`}
        >
          <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>
        </CodePreview>
      </section>

      {/* Input Types */}
      <section className="space-y-4">
        <h2 id="types" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Input Types
        </h2>
        <p className="text-muted-foreground">
          Different input types for specific data formats.
        </p>
        <CodePreview
          code={`<div className="space-y-2">
  <Label htmlFor="text">Text</Label>
  <Input id="text" type="text" placeholder="Enter text" />
</div>
<div className="space-y-2">
  <Label htmlFor="email-type">Email</Label>
  <Input id="email-type" type="email" placeholder="email@example.com" />
</div>
<div className="space-y-2">
  <Label htmlFor="password">Password</Label>
  <Input id="password" type="password" placeholder="Enter password" />
</div>
<div className="space-y-2">
  <Label htmlFor="number">Number</Label>
  <Input id="number" type="number" placeholder="0" />
</div>`}
        >
          <div className="grid gap-4 w-full max-w-sm">
            <div className="space-y-2">
              <Label htmlFor="text">Text</Label>
              <Input id="text" type="text" placeholder="Enter text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-type">Email</Label>
              <Input id="email-type" type="email" placeholder="email@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="number">Number</Label>
              <Input id="number" type="number" placeholder="0" />
            </div>
          </div>
        </CodePreview>
      </section>

      {/* With Icon */}
      <section className="space-y-4">
        <h2 id="with-icon" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Icon
        </h2>
        <p className="text-muted-foreground">
          Add icons to inputs for visual context.
        </p>
        <CodePreview
          code={`import { Search, Mail } from "lucide-react";

<div className="relative">
  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
  <Input className="pl-10" placeholder="Search..." />
</div>
<div className="relative">
  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
  <Input className="pl-10" type="email" placeholder="Email address" />
</div>`}
        >
          <div className="space-y-4 w-full max-w-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-10" placeholder="Search..." />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-10" type="email" placeholder="Email address" />
            </div>
          </div>
        </CodePreview>
      </section>

      {/* With Button */}
      <section className="space-y-4">
        <h2 id="with-button" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Button
        </h2>
        <p className="text-muted-foreground">
          Combine input with button for form actions.
        </p>
        <CodePreview
          code={`<div className="flex gap-2">
  <Input placeholder="Enter your email" />
  <Button>Subscribe</Button>
</div>`}
        >
          <div className="flex w-full max-w-md gap-2">
            <Input placeholder="Enter your email" />
            <Button>Subscribe</Button>
          </div>
        </CodePreview>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled
        </h2>
        <p className="text-muted-foreground">
          Disabled inputs prevent user interaction.
        </p>
        <CodePreview
          code={`<Input disabled placeholder="Disabled input" />`}
        >
          <div className="w-full max-w-sm">
            <Input disabled placeholder="Disabled input" />
          </div>
        </CodePreview>
      </section>

      {/* File Input */}
      <section className="space-y-4">
        <h2 id="file" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          File Input
        </h2>
        <p className="text-muted-foreground">
          File input for uploading documents.
        </p>
        <CodePreview
          code={`<div className="space-y-2">
  <Label htmlFor="file">Upload file</Label>
  <Input id="file" type="file" />
</div>`}
        >
          <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="file">Upload file</Label>
            <Input id="file" type="file" />
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
                <td className="p-3 font-mono text-xs">type</td>
                <td className="p-3 font-mono text-xs">text | email | password | number | file | ...</td>
                <td className="p-3 font-mono text-xs">text</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">placeholder</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">onChange</td>
                <td className="p-3 font-mono text-xs">ChangeEventHandler</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
