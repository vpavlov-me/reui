"use client";

import * as React from "react";
import { Badge } from "@reluna-ui/ui";

export default function BadgePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Badge</h1>
        <p className="text-lg text-muted-foreground">
          Displays a badge or label. Badges are used to highlight status, categories, or other metadata in a compact format.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="variants" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Variants
        </h2>
        <p className="text-muted-foreground">
          Badges come in different variants for various contexts.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="status" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Status Badges
        </h2>
        <p className="text-muted-foreground">
          Custom colored badges for status indicators.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
            Active
          </Badge>
          <Badge className="bg-amber-50 text-amber-700 hover:bg-amber-100">
            Pending
          </Badge>
          <Badge className="bg-red-50 text-red-700 hover:bg-red-100">
            Error
          </Badge>
          <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100">
            Info
          </Badge>
          <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">
            Draft
          </Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-dot" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Dot Indicator
        </h2>
        <p className="text-muted-foreground">
          Badges with colored dot indicators.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Online
          </Badge>
          <Badge variant="outline" className="gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            Away
          </Badge>
          <Badge variant="outline" className="gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Busy
          </Badge>
          <Badge variant="outline" className="gap-1.5">
            <span className="h-2 w-2 rounded-full bg-gray-400" />
            Offline
          </Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="categories" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Categories
        </h2>
        <p className="text-muted-foreground">
          Using badges as category labels.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Design</Badge>
          <Badge variant="secondary">Development</Badge>
          <Badge variant="secondary">Marketing</Badge>
          <Badge variant="secondary">Product</Badge>
          <Badge variant="secondary">Research</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-count" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Count
        </h2>
        <p className="text-muted-foreground">
          Badges displaying numeric counts.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge>3</Badge>
          <Badge variant="secondary">12</Badge>
          <Badge variant="destructive">99+</Badge>
          <Badge variant="outline">New</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="inline" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Inline Usage
        </h2>
        <p className="text-muted-foreground">
          Badges used inline with text.
        </p>
        <div className="space-y-3">
          <p className="text-sm">
            This feature is <Badge className="mx-1">New</Badge> and available now.
          </p>
          <p className="text-sm">
            Task status: <Badge variant="secondary" className="ml-1">In Progress</Badge>
          </p>
          <p className="text-sm">
            Priority: <Badge variant="destructive" className="ml-1">High</Badge>
          </p>
        </div>
      </section>
    </div>
  );
}
