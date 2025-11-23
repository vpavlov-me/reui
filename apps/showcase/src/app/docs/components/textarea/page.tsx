"use client";

import * as React from "react";
import { Textarea, Label, Button } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function TextareaPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Textarea</h1>
        <p className="text-lg text-muted-foreground">
          Displays a multi-line text input field. Textareas are ideal for longer-form content like comments, descriptions, or messages.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Textarea } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use textarea for multi-line text input like comments or descriptions",
            "Provide clear placeholder text that hints at expected content",
            "Set appropriate height based on expected content length",
            "Always pair with a label for accessibility",
            "Show character count for fields with limits",
            "Allow resizing when content length may vary significantly",
          ]}
          donts={[
            "Don't use textarea for single-line inputs like names or emails",
            "Don't set height too small for the expected content",
            "Don't disable resize when users might need more space",
            "Don't use placeholder as a substitute for labels",
            "Don't make textareas wider than the content area",
            "Don't forget to add helper text for formatting requirements",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic multi-line text input.
        </p>
        <CodePreview
          code={`<Textarea placeholder="Type your message here..." />`}
        >
          <div className="max-w-md w-full">
            <Textarea placeholder="Type your message here..." />
          </div>
        </CodePreview>
      </section>

      {/* With Label */}
      <section className="space-y-4">
        <h2 id="with-label" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Label
        </h2>
        <p className="text-muted-foreground">
          Pair textareas with labels for better accessibility.
        </p>
        <CodePreview
          code={`<div className="space-y-2">
  <Label htmlFor="message">Your Message</Label>
  <Textarea id="message" placeholder="Write your message..." />
</div>`}
        >
          <div className="max-w-md w-full space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea id="message" placeholder="Write your message..." />
          </div>
        </CodePreview>
      </section>

      {/* With Helper Text */}
      <section className="space-y-4">
        <h2 id="with-text" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Helper Text
        </h2>
        <p className="text-muted-foreground">
          Add helper text to provide additional context.
        </p>
        <CodePreview
          code={`<div className="space-y-2">
  <Label htmlFor="bio">Bio</Label>
  <Textarea id="bio" placeholder="Tell us about yourself..." />
  <p className="text-sm text-muted-foreground">
    Your bio will be displayed on your public profile.
  </p>
</div>`}
        >
          <div className="max-w-md w-full space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Tell us about yourself..." />
            <p className="text-sm text-muted-foreground">
              Your bio will be displayed on your public profile.
            </p>
          </div>
        </CodePreview>
      </section>

      {/* With Button */}
      <section className="space-y-4">
        <h2 id="with-button" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Button
        </h2>
        <p className="text-muted-foreground">
          Combine textarea with a submit button for forms.
        </p>
        <CodePreview
          code={`<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="feedback">Feedback</Label>
    <Textarea id="feedback" placeholder="Share your feedback..." />
  </div>
  <Button>Send Feedback</Button>
</div>`}
        >
          <div className="max-w-md w-full space-y-4">
            <div className="space-y-2">
              <Label htmlFor="feedback">Feedback</Label>
              <Textarea id="feedback" placeholder="Share your feedback..." />
            </div>
            <Button>Send Feedback</Button>
          </div>
        </CodePreview>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled
        </h2>
        <p className="text-muted-foreground">
          Disabled textarea to prevent user input.
        </p>
        <CodePreview
          code={`<Textarea disabled placeholder="This textarea is disabled" />`}
        >
          <div className="max-w-md w-full">
            <Textarea disabled placeholder="This textarea is disabled" />
          </div>
        </CodePreview>
      </section>

      {/* Custom Height */}
      <section className="space-y-4">
        <h2 id="custom-height" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Custom Height
        </h2>
        <p className="text-muted-foreground">
          Adjust the height using className or style props.
        </p>
        <CodePreview
          code={`<Textarea className="min-h-[200px]" placeholder="Large textarea..." />`}
        >
          <div className="max-w-md w-full">
            <Textarea className="min-h-[200px]" placeholder="Large textarea..." />
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
                <td className="p-3 font-mono text-xs">rows</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">3</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">value</td>
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
