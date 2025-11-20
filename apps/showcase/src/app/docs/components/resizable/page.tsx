"use client";

import * as React from "react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@reluna-ui/ui";

export default function ResizablePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Resizable</h1>
        <p className="text-lg text-muted-foreground">
          Accessible resizable panel groups and layouts with keyboard support.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="horizontal" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Horizontal
        </h2>
        <p className="text-muted-foreground">
          Horizontally resizable panels.
        </p>
        <ResizablePanelGroup
          direction="horizontal"
          className="max-w-md rounded-lg border"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>

      <section className="space-y-4">
        <h2 id="vertical" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Vertical
        </h2>
        <p className="text-muted-foreground">
          Vertically resizable panels.
        </p>
        <ResizablePanelGroup
          direction="vertical"
          className="min-h-[200px] max-w-md rounded-lg border"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Header</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>

      <section className="space-y-4">
        <h2 id="handle" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Handle
        </h2>
        <p className="text-muted-foreground">
          Resizable panels with visible handle.
        </p>
        <ResizablePanelGroup
          direction="horizontal"
          className="max-w-md rounded-lg border"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">Sidebar</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>
    </div>
  );
}
