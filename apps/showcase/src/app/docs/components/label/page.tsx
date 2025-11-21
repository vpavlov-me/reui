"use client";

import * as React from "react";
import { Label, Input, Checkbox, RadioGroup, RadioGroupItem } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function LabelPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Label</h1>
        <p className="text-lg text-muted-foreground">
          Renders an accessible label associated with form controls. Labels improve usability by clearly identifying form fields and making them clickable.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Label } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Always associate labels with form controls using htmlFor",
            "Use clear and concise label text that describes the input",
            "Mark required fields with a visual indicator like an asterisk",
            "Position labels consistently above or beside inputs",
            "Include helper text for complex fields when needed",
            "Make the entire label clickable to focus the input",
          ]}
          donts={[
            "Don't use placeholder text as a replacement for labels",
            "Don't use vague labels like 'Enter value here'",
            "Don't hide labels - they're essential for accessibility",
            "Don't use all caps for label text",
            "Don't place labels far from their associated inputs",
            "Don't forget to indicate optional fields when most are required",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          Basic label associated with an input field.
        </p>
        <CodePreview
          code={`<div className="max-w-sm space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Email address" />
</div>`}
        >
          <div className="max-w-sm space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Email address" />
          </div>
        </CodePreview>
      </section>

      {/* With Checkbox */}
      <section className="space-y-4">
        <h2 id="with-checkbox" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Checkbox
        </h2>
        <p className="text-muted-foreground">
          Label paired with checkbox control.
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

      {/* With Radio Group */}
      <section className="space-y-4">
        <h2 id="with-radio" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Radio Group
        </h2>
        <p className="text-muted-foreground">
          Labels for radio button options.
        </p>
        <CodePreview
          code={`<RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>`}
        >
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Compact</Label>
            </div>
          </RadioGroup>
        </CodePreview>
      </section>

      {/* Required Field */}
      <section className="space-y-4">
        <h2 id="required" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Required Field
        </h2>
        <p className="text-muted-foreground">
          Indicate required fields with an asterisk.
        </p>
        <CodePreview
          code={`<div className="max-w-sm space-y-2">
  <Label htmlFor="name">
    Name <span className="text-destructive">*</span>
  </Label>
  <Input id="name" required />
</div>`}
        >
          <div className="max-w-sm space-y-2">
            <Label htmlFor="name">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input id="name" required />
          </div>
        </CodePreview>
      </section>

      {/* With Description */}
      <section className="space-y-4">
        <h2 id="with-description" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Description
        </h2>
        <p className="text-muted-foreground">
          Label with additional helper text.
        </p>
        <CodePreview
          code={`<div className="max-w-sm space-y-2">
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="johndoe" />
  <p className="text-sm text-muted-foreground">
    This will be your public display name.
  </p>
</div>`}
        >
          <div className="max-w-sm space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="johndoe" />
            <p className="text-sm text-muted-foreground">
              This will be your public display name.
            </p>
          </div>
        </CodePreview>
      </section>

      {/* Disabled State */}
      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled State
        </h2>
        <p className="text-muted-foreground">
          Label styling for disabled inputs.
        </p>
        <CodePreview
          code={`<div className="max-w-sm space-y-2">
  <Label htmlFor="disabled" className="text-muted-foreground">
    Disabled field
  </Label>
  <Input id="disabled" disabled placeholder="Cannot edit" />
</div>`}
        >
          <div className="max-w-sm space-y-2">
            <Label htmlFor="disabled" className="text-muted-foreground">
              Disabled field
            </Label>
            <Input id="disabled" disabled placeholder="Cannot edit" />
          </div>
        </CodePreview>
      </section>

      {/* Form Example */}
      <section className="space-y-4">
        <h2 id="form-example" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Form Example
        </h2>
        <p className="text-muted-foreground">
          Multiple labeled fields in a form layout.
        </p>
        <CodePreview
          code={`<div className="max-w-sm space-y-4">
  <div className="space-y-2">
    <Label htmlFor="first-name">First name</Label>
    <Input id="first-name" placeholder="John" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="last-name">Last name</Label>
    <Input id="last-name" placeholder="Doe" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="form-email">Email</Label>
    <Input id="form-email" type="email" placeholder="john@example.com" />
  </div>
</div>`}
        >
          <div className="max-w-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="form-email">Email</Label>
              <Input id="form-email" type="email" placeholder="john@example.com" />
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
                <td className="p-3 font-mono text-xs">htmlFor</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">children</td>
                <td className="p-3 font-mono text-xs">React.ReactNode</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
