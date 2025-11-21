"use client";

import * as React from "react";
import { AspectRatio } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function AspectRatioPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Aspect Ratio</h1>
        <p className="text-lg text-muted-foreground">
          Displays content within a desired ratio.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { AspectRatio } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use 16:9 ratio for video content and hero images",
            "Use 1:1 ratio for avatars and profile pictures",
            "Use 4:3 ratio for classic photography displays",
            "Combine with responsive container widths",
            "Use for consistent image grids and galleries",
            "Apply rounded corners and backgrounds for better aesthetics",
          ]}
          donts={[
            "Don't use arbitrary ratios that distort content",
            "Don't nest aspect ratios unnecessarily",
            "Don't use without considering mobile viewports",
            "Don't apply to text-heavy content",
            "Don't forget to handle image loading states",
            "Don't use fixed pixel dimensions instead of ratios",
          ]}
        />
      </section>

      {/* 16:9 */}
      <section className="space-y-4">
        <h2 id="16-9" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          16:9
        </h2>
        <p className="text-muted-foreground">
          Common ratio for video content.
        </p>
        <CodePreview
          code={`<div className="w-full max-w-md">
  <AspectRatio ratio={16 / 9} className="bg-muted rounded-md flex items-center justify-center">
    <span className="text-sm text-muted-foreground">16:9</span>
  </AspectRatio>
</div>`}
        >
          <div className="w-full max-w-md">
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-md flex items-center justify-center">
              <span className="text-sm text-muted-foreground">16:9</span>
            </AspectRatio>
          </div>
        </CodePreview>
      </section>

      {/* 1:1 */}
      <section className="space-y-4">
        <h2 id="1-1" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          1:1
        </h2>
        <p className="text-muted-foreground">
          Square ratio for avatars or thumbnails.
        </p>
        <CodePreview
          code={`<div className="w-full max-w-xs">
  <AspectRatio ratio={1} className="bg-muted rounded-md flex items-center justify-center">
    <span className="text-sm text-muted-foreground">1:1</span>
  </AspectRatio>
</div>`}
        >
          <div className="w-full max-w-xs">
            <AspectRatio ratio={1} className="bg-muted rounded-md flex items-center justify-center">
              <span className="text-sm text-muted-foreground">1:1</span>
            </AspectRatio>
          </div>
        </CodePreview>
      </section>

      {/* 4:3 */}
      <section className="space-y-4">
        <h2 id="4-3" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          4:3
        </h2>
        <p className="text-muted-foreground">
          Classic photo ratio.
        </p>
        <CodePreview
          code={`<div className="w-full max-w-sm">
  <AspectRatio ratio={4 / 3} className="bg-muted rounded-md flex items-center justify-center">
    <span className="text-sm text-muted-foreground">4:3</span>
  </AspectRatio>
</div>`}
        >
          <div className="w-full max-w-sm">
            <AspectRatio ratio={4 / 3} className="bg-muted rounded-md flex items-center justify-center">
              <span className="text-sm text-muted-foreground">4:3</span>
            </AspectRatio>
          </div>
        </CodePreview>
      </section>

      {/* 21:9 */}
      <section className="space-y-4">
        <h2 id="21-9" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          21:9
        </h2>
        <p className="text-muted-foreground">
          Ultra-wide ratio for cinematic content.
        </p>
        <CodePreview
          code={`<div className="w-full max-w-lg">
  <AspectRatio ratio={21 / 9} className="bg-muted rounded-md flex items-center justify-center">
    <span className="text-sm text-muted-foreground">21:9</span>
  </AspectRatio>
</div>`}
        >
          <div className="w-full max-w-lg">
            <AspectRatio ratio={21 / 9} className="bg-muted rounded-md flex items-center justify-center">
              <span className="text-sm text-muted-foreground">21:9</span>
            </AspectRatio>
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
                <td className="p-3 font-mono text-xs">ratio</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">1</td>
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
