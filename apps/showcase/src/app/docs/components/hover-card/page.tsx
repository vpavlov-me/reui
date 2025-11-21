"use client";

import * as React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
} from "@reluna-ui/ui";
import { CalendarDays, MapPin, Link as LinkIcon } from "lucide-react";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function HoverCardPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Hover Card</h1>
        <p className="text-lg text-muted-foreground">
          For sighted users to preview content available behind a link.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use for previewing linked content without navigation",
            "Show relevant supplementary information",
            "Keep content concise and scannable",
            "Use appropriate delay to avoid accidental triggers",
            "Position content to avoid viewport overflow",
            "Include clear visual hierarchy in the card",
          ]}
          donts={[
            "Don't use for critical information that must be seen",
            "Don't include interactive elements that require clicks",
            "Don't make hover cards too large or complex",
            "Don't use as a replacement for tooltips",
            "Don't trigger on touch devices without alternative",
            "Don't hide essential content behind hover interactions",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A hover card showing user profile information.
        </p>
        <CodePreview
          code={`import { CalendarDays } from "lucide-react";

<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@nextjs</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm">
          The React Framework – created and maintained by @vercel.
        </p>
        <div className="flex items-center pt-2">
          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
        >
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@nextjs</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@nextjs</h4>
                  <p className="text-sm">
                    The React Framework – created and maintained by @vercel.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </CodePreview>
      </section>

      {/* With More Details */}
      <section className="space-y-4">
        <h2 id="detailed" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With More Details
        </h2>
        <p className="text-muted-foreground">
          A hover card with additional metadata like location and links.
        </p>
        <CodePreview
          code={`import { CalendarDays, MapPin, Link as LinkIcon } from "lucide-react";

<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@shadcn</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@shadcn</h4>
        <p className="text-sm">
          Building beautiful UIs with Radix and Tailwind CSS.
        </p>
        <div className="flex items-center pt-2">
          <MapPin className="mr-2 h-4 w-4 opacity-70" />
          <span className="text-xs text-muted-foreground">
            San Francisco, CA
          </span>
        </div>
        <div className="flex items-center">
          <LinkIcon className="mr-2 h-4 w-4 opacity-70" />
          <span className="text-xs text-muted-foreground">
            ui.shadcn.com
          </span>
        </div>
        <div className="flex items-center">
          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
          <span className="text-xs text-muted-foreground">
            Joined January 2020
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
        >
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@shadcn</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@shadcn</h4>
                  <p className="text-sm">
                    Building beautiful UIs with Radix and Tailwind CSS.
                  </p>
                  <div className="flex items-center pt-2">
                    <MapPin className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-muted-foreground">
                      San Francisco, CA
                    </span>
                  </div>
                  <div className="flex items-center">
                    <LinkIcon className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-muted-foreground">
                      ui.shadcn.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-muted-foreground">
                      Joined January 2020
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
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
                <td className="p-3 font-mono text-xs">open</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">defaultOpen</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">onOpenChange</td>
                <td className="p-3 font-mono text-xs">(open: boolean) =&gt; void</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">openDelay</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">700</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">closeDelay</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">300</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
