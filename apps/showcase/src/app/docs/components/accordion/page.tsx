"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function AccordionPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Accordion</h1>
        <p className="text-lg text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a section of content.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use accordions for FAQ sections or long lists of related content",
            "Keep trigger labels clear and descriptive of the content within",
            "Use collapsible type when users may want to close all items",
            "Consider defaulting the first item open for better discoverability",
            "Group related content together in meaningful sections",
            "Use multiple type when users need to compare content across items",
          ]}
          donts={[
            "Don't nest accordions within accordions",
            "Don't hide critical actions or primary content in accordions",
            "Don't use accordions for very short content (use plain text instead)",
            "Don't use vague trigger labels like 'Click here' or 'More info'",
            "Don't overload accordions with too many items (consider pagination)",
            "Don't use accordions for navigation or menu structures",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          Single accordion that allows one item open at a time.
        </p>
        <CodePreview
          code={`<Accordion type="single" collapsible className="w-full max-w-md">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other components' aesthetic.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It's animated by default, but you can disable it if you prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible className="w-full max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other components' aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CodePreview>
      </section>

      {/* Multiple */}
      <section className="space-y-4">
        <h2 id="multiple" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Multiple
        </h2>
        <p className="text-muted-foreground">
          Allow multiple items to be open simultaneously.
        </p>
        <CodePreview
          code={`<Accordion type="multiple" className="w-full max-w-md">
  <AccordionItem value="item-1">
    <AccordionTrigger>Can I open multiple?</AccordionTrigger>
    <AccordionContent>
      Yes. You can open multiple items at the same time.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How does it work?</AccordionTrigger>
    <AccordionContent>
      Set the type prop to "multiple" instead of "single".
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it keyboard accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. Use arrow keys to navigate and Enter/Space to toggle.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="multiple" className="w-full max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can I open multiple?</AccordionTrigger>
              <AccordionContent>
                Yes. You can open multiple items at the same time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does it work?</AccordionTrigger>
              <AccordionContent>
                Set the type prop to "multiple" instead of "single".
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it keyboard accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. Use arrow keys to navigate and Enter/Space to toggle.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
                <td className="p-3 font-mono text-xs">Accordion</td>
                <td className="p-3 font-mono text-xs">type</td>
                <td className="p-3 font-mono text-xs">single | multiple</td>
                <td className="p-3 font-mono text-xs">single</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">Accordion</td>
                <td className="p-3 font-mono text-xs">collapsible</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">Accordion</td>
                <td className="p-3 font-mono text-xs">defaultValue</td>
                <td className="p-3 font-mono text-xs">string | string[]</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">Accordion</td>
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs">string | string[]</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">AccordionItem</td>
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">required</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">AccordionItem</td>
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
