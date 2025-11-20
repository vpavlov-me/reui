"use client";

import * as React from "react";
import { Separator } from "@reluna-ui/ui";

export default function SeparatorPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Separator</h1>
        <p className="text-lg text-muted-foreground">
          Visually or semantically separates content. Separators help organize content by creating clear visual boundaries between sections.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="horizontal" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Horizontal
        </h2>
        <p className="text-muted-foreground">
          Default horizontal separator.
        </p>
        <div className="max-w-md">
          <div className="space-y-1">
            <h4 className="text-sm font-medium">Reluna UI</h4>
            <p className="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="vertical" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Vertical
        </h2>
        <p className="text-muted-foreground">
          Vertical separator for side-by-side content.
        </p>
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Home</div>
          <Separator orientation="vertical" />
          <div>Products</div>
          <Separator orientation="vertical" />
          <div>About</div>
          <Separator orientation="vertical" />
          <div>Contact</div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="in-list" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          In Lists
        </h2>
        <p className="text-muted-foreground">
          Use separators between list items.
        </p>
        <div className="max-w-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Push Notifications</p>
              <p className="text-xs text-muted-foreground">Receive notifications</p>
            </div>
            <span className="text-sm text-muted-foreground">On</span>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Email Updates</p>
              <p className="text-xs text-muted-foreground">Weekly digest</p>
            </div>
            <span className="text-sm text-muted-foreground">Off</span>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">SMS Alerts</p>
              <p className="text-xs text-muted-foreground">Critical only</p>
            </div>
            <span className="text-sm text-muted-foreground">On</span>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-text" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Text
        </h2>
        <p className="text-muted-foreground">
          Separator with centered text label.
        </p>
        <div className="max-w-md">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="decorative" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Decorative
        </h2>
        <p className="text-muted-foreground">
          Use decorative prop for purely visual separators.
        </p>
        <div className="max-w-md space-y-4">
          <p className="text-sm text-muted-foreground">
            This content is above the separator.
          </p>
          <Separator decorative />
          <p className="text-sm text-muted-foreground">
            This content is below the separator.
          </p>
        </div>
      </section>
    </div>
  );
}
