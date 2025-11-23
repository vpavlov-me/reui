"use client";

import * as React from "react";
import { Progress } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function ProgressPage() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Progress</h1>
        <p className="text-lg text-muted-foreground">
          Displays an indicator showing the completion progress of a task. Progress bars provide visual feedback for loading states and task completion.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Progress } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use progress bars for tasks with measurable completion",
            "Include percentage or descriptive labels for clarity",
            "Animate transitions smoothly between values",
            "Place progress bars where users expect feedback",
            "Use consistent styling across similar contexts",
            "Provide context about what is being loaded or processed",
          ]}
          donts={[
            "Don't use progress bars for indeterminate loading states",
            "Don't update progress values too frequently causing jitter",
            "Don't show progress without explaining what is loading",
            "Don't use progress bars for instant actions",
            "Don't restart progress from 0 unless the task actually restarted",
            "Don't use misleading progress values that don't reflect actual state",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic progress bar with animated transition.
        </p>
        <CodePreview
          code={`<Progress value={66} className="max-w-md" />`}
        >
          <div className="w-full max-w-md">
            <Progress value={progress} />
          </div>
        </CodePreview>
      </section>

      {/* Different Values */}
      <section className="space-y-4">
        <h2 id="values" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Different Values
        </h2>
        <p className="text-muted-foreground">
          Progress bars at various completion levels.
        </p>
        <CodePreview
          code={`<div className="space-y-4">
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
</div>`}
        >
          <div className="space-y-4 w-full max-w-md">
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
        </CodePreview>
      </section>

      {/* With Label */}
      <section className="space-y-4">
        <h2 id="with-label" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Label
        </h2>
        <p className="text-muted-foreground">
          Progress bar with percentage label.
        </p>
        <CodePreview
          code={`<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Uploading...</span>
    <span className="text-muted-foreground">75%</span>
  </div>
  <Progress value={75} />
</div>`}
        >
          <div className="w-full max-w-md space-y-2">
            <div className="flex justify-between text-sm">
              <span>Uploading...</span>
              <span className="text-muted-foreground">75%</span>
            </div>
            <Progress value={75} />
          </div>
        </CodePreview>
      </section>

      {/* With Description */}
      <section className="space-y-4">
        <h2 id="with-description" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Description
        </h2>
        <p className="text-muted-foreground">
          Progress bar with contextual information.
        </p>
        <CodePreview
          code={`<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Storage</span>
    <span className="text-muted-foreground">8.5 GB of 10 GB used</span>
  </div>
  <Progress value={85} />
  <p className="text-xs text-muted-foreground">
    You've used 85% of your storage. Upgrade for more space.
  </p>
</div>`}
        >
          <div className="w-full max-w-md space-y-2">
            <div className="flex justify-between text-sm">
              <span>Storage</span>
              <span className="text-muted-foreground">8.5 GB of 10 GB used</span>
            </div>
            <Progress value={85} />
            <p className="text-xs text-muted-foreground">
              You've used 85% of your storage. Upgrade for more space.
            </p>
          </div>
        </CodePreview>
      </section>

      {/* Multiple Progress Bars */}
      <section className="space-y-4">
        <h2 id="multiple" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Multiple Progress Bars
        </h2>
        <p className="text-muted-foreground">
          Track multiple tasks simultaneously.
        </p>
        <CodePreview
          code={`<div className="space-y-4">
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
</div>`}
        >
          <div className="w-full max-w-md space-y-4">
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
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">0</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">max</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">100</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">getValueLabel</td>
                <td className="p-3 font-mono text-xs">(value: number, max: number) =&gt; string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr>
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
