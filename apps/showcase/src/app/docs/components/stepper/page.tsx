"use client";

import * as React from "react";
import { Stepper } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

const basicSteps = [
  { id: "1", title: "Account", description: "Create your account" },
  { id: "2", title: "Profile", description: "Set up your profile" },
  { id: "3", title: "Review", description: "Review and confirm" },
];

const optionalSteps = [
  { id: "1", title: "Details", description: "Enter details" },
  { id: "2", title: "Preferences", description: "Set preferences", optional: true },
  { id: "3", title: "Confirm", description: "Confirm submission" },
];

export default function StepperPage() {
  const [currentStep, setCurrentStep] = React.useState(1);

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Stepper</h1>
        <p className="text-lg text-muted-foreground">
          A wizard/stepper component for multi-step workflows with progress indication and step navigation.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Stepper } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Keep steps to a reasonable number (3-7)",
            "Provide clear step titles and descriptions",
            "Show progress with completed checkmarks",
            "Allow navigation to previous steps",
            "Mark optional steps clearly",
            "Use vertical orientation for complex forms",
          ]}
          donts={[
            "Don't create too many steps",
            "Don't skip steps without user action",
            "Don't hide step descriptions on mobile",
            "Don't use for simple single-page forms",
            "Don't prevent going back without reason",
            "Don't auto-advance without confirmation",
          ]}
        />
      </section>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 id="basic" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Basic Usage
        </h2>
        <p className="text-muted-foreground">
          Simple horizontal stepper with step descriptions.
        </p>
        <CodePreview
          code={`const steps = [
  { id: "1", title: "Account", description: "Create your account" },
  { id: "2", title: "Profile", description: "Set up your profile" },
  { id: "3", title: "Review", description: "Review and confirm" },
];

<Stepper steps={steps} currentStep={1} />`}
        >
          <Stepper steps={basicSteps} currentStep={1} />
        </CodePreview>
      </section>

      {/* Interactive Stepper */}
      <section className="space-y-4">
        <h2 id="interactive" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Interactive Navigation
        </h2>
        <p className="text-muted-foreground">
          Allow users to navigate between steps by clicking.
        </p>
        <CodePreview
          code={`const [currentStep, setCurrentStep] = React.useState(1);

<Stepper
  steps={steps}
  currentStep={currentStep}
  onStepClick={setCurrentStep}
/>`}
        >
          <div className="space-y-4">
            <Stepper
              steps={basicSteps}
              currentStep={currentStep}
              onStepClick={setCurrentStep}
            />
            <p className="text-sm text-muted-foreground text-center">
              Click on a step to navigate (Current: Step {currentStep + 1})
            </p>
          </div>
        </CodePreview>
      </section>

      {/* Completed Steps */}
      <section className="space-y-4">
        <h2 id="completed" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Completed Steps
        </h2>
        <p className="text-muted-foreground">
          Steps before the current step are marked as completed.
        </p>
        <CodePreview
          code={`<Stepper steps={steps} currentStep={2} />`}
        >
          <Stepper steps={basicSteps} currentStep={2} />
        </CodePreview>
      </section>

      {/* Vertical Orientation */}
      <section className="space-y-4">
        <h2 id="vertical" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Vertical Orientation
        </h2>
        <p className="text-muted-foreground">
          Use vertical layout for detailed step descriptions or mobile views.
        </p>
        <CodePreview
          code={`<Stepper
  steps={steps}
  currentStep={1}
  orientation="vertical"
/>`}
        >
          <Stepper
            steps={basicSteps}
            currentStep={1}
            orientation="vertical"
          />
        </CodePreview>
      </section>

      {/* Optional Steps */}
      <section className="space-y-4">
        <h2 id="optional" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Optional Steps
        </h2>
        <p className="text-muted-foreground">
          Mark steps as optional to indicate they can be skipped.
        </p>
        <CodePreview
          code={`const steps = [
  { id: "1", title: "Details", description: "Enter details" },
  { id: "2", title: "Preferences", description: "Set preferences", optional: true },
  { id: "3", title: "Confirm", description: "Confirm submission" },
];

<Stepper steps={steps} currentStep={0} />`}
        >
          <Stepper steps={optionalSteps} currentStep={0} />
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
                <th className="p-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">steps</td>
                <td className="p-3 font-mono text-xs">Step[]</td>
                <td className="p-3 font-mono text-xs">required</td>
                <td className="p-3">Array of step objects</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">currentStep</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">required</td>
                <td className="p-3">Current step index (0-based)</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">orientation</td>
                <td className="p-3 font-mono text-xs">"horizontal" | "vertical"</td>
                <td className="p-3 font-mono text-xs">"horizontal"</td>
                <td className="p-3">Stepper orientation</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">onStepClick</td>
                <td className="p-3 font-mono text-xs">(index: number) =&gt; void</td>
                <td className="p-3 font-mono text-xs">-</td>
                <td className="p-3">Step click handler</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
                <td className="p-3">Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
