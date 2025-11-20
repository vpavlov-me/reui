"use client";

import * as React from "react";
import { Progress } from "@reluna-ui/ui";

export default function ProgressPage() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Progress</h1>
        <p className="text-lg text-muted-foreground">
          Displays an indicator showing the completion progress of a task. Progress bars provide visual feedback for loading states and task completion.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic progress bar with animated transition.
        </p>
        <Progress value={progress} className="max-w-md" />
      </section>

      <section className="space-y-4">
        <h2 id="values" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Different Values
        </h2>
        <p className="text-muted-foreground">
          Progress bars at various completion levels.
        </p>
        <div className="space-y-4 max-w-md">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>0%</span>
            </div>
            <Progress value={0} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>25%</span>
            </div>
            <Progress value={25} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>50%</span>
            </div>
            <Progress value={50} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>75%</span>
            </div>
            <Progress value={75} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>100%</span>
            </div>
            <Progress value={100} />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-label" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Label
        </h2>
        <p className="text-muted-foreground">
          Progress bar with percentage label.
        </p>
        <div className="max-w-md space-y-2">
          <div className="flex justify-between text-sm">
            <span>Uploading...</span>
            <span className="text-muted-foreground">75%</span>
          </div>
          <Progress value={75} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-description" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Description
        </h2>
        <p className="text-muted-foreground">
          Progress bar with contextual information.
        </p>
        <div className="max-w-md space-y-2">
          <div className="flex justify-between text-sm">
            <span>Storage</span>
            <span className="text-muted-foreground">8.5 GB of 10 GB used</span>
          </div>
          <Progress value={85} />
          <p className="text-xs text-muted-foreground">
            You've used 85% of your storage. Upgrade for more space.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="multiple" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Multiple Progress Bars
        </h2>
        <p className="text-muted-foreground">
          Track multiple tasks simultaneously.
        </p>
        <div className="max-w-md space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Design Phase</span>
              <span className="font-medium">100%</span>
            </div>
            <Progress value={100} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Development</span>
              <span className="font-medium">60%</span>
            </div>
            <Progress value={60} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Testing</span>
              <span className="font-medium">25%</span>
            </div>
            <Progress value={25} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Deployment</span>
              <span className="font-medium">0%</span>
            </div>
            <Progress value={0} />
          </div>
        </div>
      </section>
    </div>
  );
}
