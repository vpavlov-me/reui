"use client";

import * as React from "react";
import { Toggle } from "@reluna-ui/ui";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export default function TogglePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Toggle</h1>
        <p className="text-lg text-muted-foreground">
          A two-state button that can be either on or off. Toggles are ideal for toolbar actions or binary options that need visual feedback.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic toggle button.
        </p>
        <Toggle aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
      </section>

      <section className="space-y-4">
        <h2 id="outline" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Outline
        </h2>
        <p className="text-muted-foreground">
          Toggle with outline variant.
        </p>
        <Toggle variant="outline" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
      </section>

      <section className="space-y-4">
        <h2 id="with-text" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Text
        </h2>
        <p className="text-muted-foreground">
          Toggle buttons can include text labels.
        </p>
        <div className="flex gap-2">
          <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4 mr-2" />
            Bold
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic className="h-4 w-4 mr-2" />
            Italic
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline className="h-4 w-4 mr-2" />
            Underline
          </Toggle>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="sizes" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Sizes
        </h2>
        <p className="text-muted-foreground">
          Available in different sizes.
        </p>
        <div className="flex items-center gap-2">
          <Toggle size="sm" aria-label="Toggle bold small">
            <Bold className="h-3 w-3" />
          </Toggle>
          <Toggle size="default" aria-label="Toggle bold default">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle bold large">
            <Bold className="h-5 w-5" />
          </Toggle>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="toolbar" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Toolbar Example
        </h2>
        <p className="text-muted-foreground">
          A text formatting toolbar using toggles.
        </p>
        <div className="flex gap-1 rounded-md border p-1 w-fit">
          <Toggle defaultPressed aria-label="Bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Underline">
            <Underline className="h-4 w-4" />
          </Toggle>
          <div className="w-px bg-border mx-1" />
          <Toggle aria-label="Align left">
            <AlignLeft className="h-4 w-4" />
          </Toggle>
          <Toggle defaultPressed aria-label="Align center">
            <AlignCenter className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Align right">
            <AlignRight className="h-4 w-4" />
          </Toggle>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled
        </h2>
        <p className="text-muted-foreground">
          Disabled toggle to prevent interaction.
        </p>
        <div className="flex gap-2">
          <Toggle disabled aria-label="Toggle disabled">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle disabled pressed aria-label="Toggle disabled pressed">
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      </section>
    </div>
  );
}
