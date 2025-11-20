"use client";

import * as React from "react";
import { AspectRatio } from "@reluna-ui/ui";

export default function AspectRatioPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Aspect Ratio</h1>
        <p className="text-lg text-muted-foreground">
          Displays content within a desired ratio.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="16-9" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          16:9
        </h2>
        <p className="text-muted-foreground">
          Common ratio for video content.
        </p>
        <div className="w-full max-w-md">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-md flex items-center justify-center">
            <span className="text-sm text-muted-foreground">16:9</span>
          </AspectRatio>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="1-1" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          1:1
        </h2>
        <p className="text-muted-foreground">
          Square ratio for avatars or thumbnails.
        </p>
        <div className="w-full max-w-xs">
          <AspectRatio ratio={1} className="bg-muted rounded-md flex items-center justify-center">
            <span className="text-sm text-muted-foreground">1:1</span>
          </AspectRatio>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="4-3" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          4:3
        </h2>
        <p className="text-muted-foreground">
          Classic photo ratio.
        </p>
        <div className="w-full max-w-sm">
          <AspectRatio ratio={4 / 3} className="bg-muted rounded-md flex items-center justify-center">
            <span className="text-sm text-muted-foreground">4:3</span>
          </AspectRatio>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="21-9" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          21:9
        </h2>
        <p className="text-muted-foreground">
          Ultra-wide ratio for cinematic content.
        </p>
        <div className="w-full max-w-lg">
          <AspectRatio ratio={21 / 9} className="bg-muted rounded-md flex items-center justify-center">
            <span className="text-sm text-muted-foreground">21:9</span>
          </AspectRatio>
        </div>
      </section>
    </div>
  );
}
