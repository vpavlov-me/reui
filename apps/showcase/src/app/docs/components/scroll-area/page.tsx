"use client";

import * as React from "react";
import { ScrollArea, ScrollBar, Separator } from "@reluna-ui/ui";

const tags = Array.from({ length: 50 }).map((_, i) => `Tag ${i + 1}`);

export default function ScrollAreaPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Scroll Area</h1>
        <p className="text-lg text-muted-foreground">
          Augments native scroll functionality for custom, cross-browser styling.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="vertical" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Vertical
        </h2>
        <p className="text-muted-foreground">
          Vertical scroll area with custom scrollbar.
        </p>
        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {tags.map((tag) => (
              <React.Fragment key={tag}>
                <div className="text-sm">{tag}</div>
                <Separator className="my-2" />
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </section>

      <section className="space-y-4">
        <h2 id="horizontal" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Horizontal
        </h2>
        <p className="text-muted-foreground">
          Horizontal scroll area for wide content.
        </p>
        <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <figure key={i} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <div className="h-32 w-48 bg-muted flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Image {i + 1}</span>
                  </div>
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  Photo by Artist {i + 1}
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </div>
  );
}
