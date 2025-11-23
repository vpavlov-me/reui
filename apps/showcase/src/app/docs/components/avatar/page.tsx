"use client";

import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function AvatarPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Avatar</h1>
        <p className="text-lg text-muted-foreground">
          An image element with a fallback for representing the user. Avatars help personalize the interface and identify users visually.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Avatar, AvatarFallback, AvatarImage } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Always provide a fallback for when the image fails to load",
            "Use initials that represent the user (first and last name)",
            "Maintain consistent avatar sizes within the same context",
            "Add border when overlapping avatars in a group",
            "Use appropriate image resolution for the avatar size",
            "Include alt text for accessibility when using images",
          ]}
          donts={[
            "Don't use avatars without fallback content",
            "Don't use more than 2-3 characters for initials",
            "Don't mix different shapes (round vs square) in the same view",
            "Don't use low-resolution images that appear pixelated",
            "Don't show too many avatars in a group (use +N indicator)",
            "Don't forget to handle image loading errors gracefully",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          Avatar with image and fallback.
        </p>
        <CodePreview
          code={`<Avatar>
  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
        >
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </CodePreview>
      </section>

      {/* Fallback */}
      <section className="space-y-4">
        <h2 id="fallback" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Fallback
        </h2>
        <p className="text-muted-foreground">
          When no image is available, initials are displayed.
        </p>
        <CodePreview
          code={`<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback>AB</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
        >
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CodePreview>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 id="sizes" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Sizes
        </h2>
        <p className="text-muted-foreground">
          Avatars can be sized using className.
        </p>
        <CodePreview
          code={`<Avatar className="h-6 w-6">
  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=24&h=24&fit=crop&crop=face" />
  <AvatarFallback className="text-xs">SM</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" />
  <AvatarFallback>MD</AvatarFallback>
</Avatar>
<Avatar className="h-14 w-14">
  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=56&h=56&fit=crop&crop=face" />
  <AvatarFallback className="text-lg">LG</AvatarFallback>
</Avatar>
<Avatar className="h-20 w-20">
  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face" />
  <AvatarFallback className="text-xl">XL</AvatarFallback>
</Avatar>`}
        >
          <div className="flex items-center gap-4">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=24&h=24&fit=crop&crop=face" />
              <AvatarFallback className="text-xs">SM</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar className="h-14 w-14">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=56&h=56&fit=crop&crop=face" />
              <AvatarFallback className="text-lg">LG</AvatarFallback>
            </Avatar>
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face" />
              <AvatarFallback className="text-xl">XL</AvatarFallback>
            </Avatar>
          </div>
        </CodePreview>
      </section>

      {/* Avatar Group */}
      <section className="space-y-4">
        <h2 id="group" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Avatar Group
        </h2>
        <p className="text-muted-foreground">
          Display multiple avatars in a stacked group.
        </p>
        <CodePreview
          code={`<div className="flex -space-x-4">
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" />
    <AvatarFallback>A1</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" />
    <AvatarFallback>A2</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" />
    <AvatarFallback>A3</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>+3</AvatarFallback>
  </Avatar>
</div>`}
        >
          <div className="flex -space-x-4">
            <Avatar className="border-2 border-background">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" />
              <AvatarFallback>A1</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" />
              <AvatarFallback>A2</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" />
              <AvatarFallback>A3</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarFallback>+3</AvatarFallback>
            </Avatar>
          </div>
        </CodePreview>
      </section>

      {/* With Name */}
      <section className="space-y-4">
        <h2 id="with-name" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Name
        </h2>
        <p className="text-muted-foreground">
          Avatar paired with user information.
        </p>
        <CodePreview
          code={`<div className="flex items-center gap-3">
  <Avatar>
    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" />
    <AvatarFallback>SC</AvatarFallback>
  </Avatar>
  <div>
    <p className="text-sm font-medium">Sofia Clark</p>
    <p className="text-xs text-muted-foreground">sofia@example.com</p>
  </div>
</div>
<div className="flex items-center gap-3">
  <Avatar>
    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <div>
    <p className="text-sm font-medium">Jackson Davis</p>
    <p className="text-xs text-muted-foreground">jackson@example.com</p>
  </div>
</div>`}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Sofia Clark</p>
                <p className="text-xs text-muted-foreground">sofia@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Jackson Davis</p>
                <p className="text-xs text-muted-foreground">jackson@example.com</p>
              </div>
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
                <th className="p-3 text-left font-medium">Component</th>
                <th className="p-3 text-left font-medium">Prop</th>
                <th className="p-3 text-left font-medium">Type</th>
                <th className="p-3 text-left font-medium">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">Avatar</td>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">AvatarImage</td>
                <td className="p-3 font-mono text-xs">src</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">AvatarImage</td>
                <td className="p-3 font-mono text-xs">alt</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">AvatarImage</td>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">AvatarFallback</td>
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
