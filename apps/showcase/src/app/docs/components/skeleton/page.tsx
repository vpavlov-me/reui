"use client";

import * as React from "react";
import { Skeleton } from "@reluna-ui/ui";

export default function SkeletonPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Skeleton</h1>
        <p className="text-lg text-muted-foreground">
          Use to show a placeholder while content is loading.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          Basic skeleton shapes.
        </p>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="card" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Card
        </h2>
        <p className="text-muted-foreground">
          Skeleton for card content loading state.
        </p>
        <div className="flex flex-col space-y-3 max-w-sm">
          <Skeleton className="h-[125px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[80%]" />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="list" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          List
        </h2>
        <p className="text-muted-foreground">
          Skeleton for list items.
        </p>
        <div className="space-y-4 max-w-md">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center space-x-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[60%]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="table" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Table
        </h2>
        <p className="text-muted-foreground">
          Skeleton for table rows.
        </p>
        <div className="space-y-2 max-w-lg">
          <Skeleton className="h-8 w-full" />
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      </section>
    </div>
  );
}
