import { Button } from "@reluna-ui/ui";
import { Check, Settings, User, Mail, ArrowRight, Loader2 } from "lucide-react";
import { HighlightedCodePreview } from "@/components/highlighted-code-preview";
import { UsageGuidelines } from "@/components/code-preview";
import { PropsTable } from "@/components/props-table";
import { highlightCode } from "@/lib/highlight";

export default async function ButtonPage() {
  const installCode = await highlightCode(`import { Button } from "@reluna-ui/ui";`);

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Button</h1>
        <p className="text-lg text-muted-foreground">
          Displays a button or a component that looks like a button. Buttons allow users to take actions and make choices with a single tap.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <div
          className="rounded-lg overflow-x-auto text-sm [&_pre]:p-4 [&_pre]:m-0 [&_pre]:bg-muted/50 [&_code]:bg-transparent"
          dangerouslySetInnerHTML={{ __html: installCode }}
        />
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use primary button for the main action on a page",
            "Use destructive variant for dangerous actions like delete",
            "Include icons to provide visual context when helpful",
            "Use disabled state for unavailable actions",
            "Add loading state for async operations",
            "Keep button labels short and action-oriented",
          ]}
          donts={[
            "Don't use multiple primary buttons in the same section",
            "Don't use ghost buttons for primary actions",
            "Don't disable buttons without clear reason",
            "Don't use long text labels that wrap",
            "Don't mix different button sizes in the same group",
            "Don't use destructive variant for non-destructive actions",
          ]}
        />
      </section>

      {/* Variants */}
      <section className="space-y-4">
        <h2 id="variants" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Variants
        </h2>
        <p className="text-muted-foreground">
          Button comes with multiple visual variants to indicate different types of actions.
        </p>
        <HighlightedCodePreview
          code={`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
        >
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </HighlightedCodePreview>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 id="sizes" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Sizes
        </h2>
        <p className="text-muted-foreground">
          Buttons are available in different sizes for various use cases.
        </p>
        <HighlightedCodePreview
          code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
        >
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </HighlightedCodePreview>
      </section>

      {/* With Icon */}
      <section className="space-y-4">
        <h2 id="with-icon" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Icon
        </h2>
        <p className="text-muted-foreground">
          Combine buttons with icons to provide visual context for the action.
        </p>
        <HighlightedCodePreview
          code={`import { Mail, Check, ArrowRight } from "lucide-react";

<Button>
  <Mail className="mr-2 h-4 w-4" />
  Login with Email
</Button>
<Button variant="secondary">
  Save
  <Check className="ml-2 h-4 w-4" />
</Button>
<Button variant="outline">
  Continue
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>`}
        >
          <Button>
            <Mail className="mr-2 h-4 w-4" />
            Login with Email
          </Button>
          <Button variant="secondary">
            Save
            <Check className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </HighlightedCodePreview>
      </section>

      {/* Icon Only */}
      <section className="space-y-4">
        <h2 id="icon-only" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Icon Only
        </h2>
        <p className="text-muted-foreground">
          Use icon-only buttons for compact interfaces or toolbar actions. Always include sr-only text for accessibility.
        </p>
        <HighlightedCodePreview
          code={`import { Settings, User, Mail } from "lucide-react";

<Button size="icon">
  <Settings className="h-4 w-4" />
  <span className="sr-only">Settings</span>
</Button>
<Button size="icon" variant="outline">
  <User className="h-4 w-4" />
  <span className="sr-only">Profile</span>
</Button>
<Button size="icon" variant="secondary">
  <Mail className="h-4 w-4" />
  <span className="sr-only">Send email</span>
</Button>`}
        >
          <Button size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <User className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary">
            <Mail className="h-4 w-4" />
          </Button>
        </HighlightedCodePreview>
      </section>

      {/* Loading State */}
      <section className="space-y-4">
        <h2 id="loading" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Loading State
        </h2>
        <p className="text-muted-foreground">
          Show loading state to indicate that an action is in progress. Disable the button to prevent multiple submissions.
        </p>
        <HighlightedCodePreview
          code={`import { Loader2 } from "lucide-react";

<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`}
        >
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        </HighlightedCodePreview>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled
        </h2>
        <p className="text-muted-foreground">
          Disabled buttons prevent user interaction and indicate unavailable actions.
        </p>
        <HighlightedCodePreview
          code={`<Button disabled>Default</Button>
<Button variant="secondary" disabled>Secondary</Button>
<Button variant="destructive" disabled>Destructive</Button>
<Button variant="outline" disabled>Outline</Button>`}
        >
          <Button disabled>Default</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="destructive" disabled>Destructive</Button>
          <Button variant="outline" disabled>Outline</Button>
        </HighlightedCodePreview>
      </section>

      {/* TypeScript Usage */}
      <section className="space-y-4">
        <h2 id="typescript" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          TypeScript
        </h2>
        <p className="text-muted-foreground">
          Button is fully typed with TypeScript. Here are common usage patterns with proper typing.
        </p>
        <HighlightedCodePreview
          code={`import { Button, ButtonProps } from "@reluna-ui/ui";
import { MouseEvent } from "react";

// Event handler with proper typing
function handleClick(event: MouseEvent<HTMLButtonElement>) {
  console.log("Clicked:", event.currentTarget.textContent);
}

// Custom button component extending ButtonProps
interface SubmitButtonProps extends ButtonProps {
  isLoading?: boolean;
}

function SubmitButton({ isLoading, children, ...props }: SubmitButtonProps) {
  return (
    <Button disabled={isLoading} {...props}>
      {isLoading ? "Loading..." : children}
    </Button>
  );
}

// Usage
<Button onClick={handleClick}>Click me</Button>
<SubmitButton isLoading={false}>Submit</SubmitButton>`}
        >
          <Button onClick={(e) => console.log("Clicked", e.currentTarget.textContent)}>
            Click me
          </Button>
        </HighlightedCodePreview>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 id="api" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          API Reference
        </h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"',
              default: '"default"',
              description: "The visual style variant of the button"
            },
            {
              name: "size",
              type: '"default" | "sm" | "lg" | "icon"',
              default: '"default"',
              description: "The size of the button"
            },
            {
              name: "asChild",
              type: "boolean",
              default: "false",
              description: "Render as child element using Radix Slot"
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Whether the button is disabled"
            },
          ]}
        />
      </section>
    </div>
  );
}
