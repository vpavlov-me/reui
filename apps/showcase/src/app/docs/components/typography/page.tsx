"use client";

import * as React from "react";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function TypographyPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Typography</h1>
        <p className="text-lg text-muted-foreground">
          Styles for headings, paragraphs, lists, and other text elements. Typography creates visual hierarchy and improves readability across your application.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`// Typography uses Tailwind CSS utility classes
// No additional imports required`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use semantic heading levels (h1-h6) in proper hierarchy",
            "Maintain consistent spacing between text elements",
            "Use muted text for secondary or supporting content",
            "Apply lead paragraph style for introductory content",
            "Use inline code for technical terms and commands",
            "Ensure sufficient color contrast for accessibility",
          ]}
          donts={[
            "Don't skip heading levels for visual styling",
            "Don't use multiple h1 elements on a single page",
            "Don't make body text too small (min 14px)",
            "Don't use low contrast text colors",
            "Don't mix too many font sizes in one section",
            "Don't ignore line height and letter spacing",
          ]}
        />
      </section>

      {/* Headings */}
      <section className="space-y-4">
        <h2 id="headings" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Headings
        </h2>
        <p className="text-muted-foreground">
          Semantic heading elements with consistent sizing and weight.
        </p>
        <CodePreview
          code={`<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
  Heading 1
</h1>
<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
  Heading 2
</h2>
<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
  Heading 3
</h3>
<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
  Heading 4
</h4>`}
        >
          <div className="space-y-4 w-full">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Heading 1
            </h1>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Heading 2
            </h2>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Heading 3
            </h3>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Heading 4
            </h4>
          </div>
        </CodePreview>
      </section>

      {/* Paragraph */}
      <section className="space-y-4">
        <h2 id="paragraph" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Paragraph
        </h2>
        <p className="text-muted-foreground">
          Body text with appropriate line height and spacing.
        </p>
        <CodePreview
          code={`<p className="leading-7 [&:not(:first-child)]:mt-6">
  The king, seeing how much happier his subjects were, realized the error of his ways
  and promised to be a better ruler. He repealed the joke tax and instead implemented
  a system of voluntary donations.
</p>`}
        >
          <div className="w-full">
            <p className="leading-7">
              The king, seeing how much happier his subjects were, realized the error of his ways
              and promised to be a better ruler. He repealed the joke tax and instead implemented
              a system of voluntary donations. The people, in turn, showed their appreciation by
              being more generous with their humor.
            </p>
          </div>
        </CodePreview>
      </section>

      {/* Lead Paragraph */}
      <section className="space-y-4">
        <h2 id="lead" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Lead Paragraph
        </h2>
        <p className="text-muted-foreground">
          Larger introductory paragraph for emphasizing important content.
        </p>
        <CodePreview
          code={`<p className="text-xl text-muted-foreground">
  A modal dialog that interrupts the user with important content and expects a response.
</p>`}
        >
          <p className="text-xl text-muted-foreground">
            A modal dialog that interrupts the user with important content and expects a response.
          </p>
        </CodePreview>
      </section>

      {/* Large Text */}
      <section className="space-y-4">
        <h2 id="large" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Large Text
        </h2>
        <p className="text-muted-foreground">
          Larger text for emphasis or callouts.
        </p>
        <CodePreview
          code={`<div className="text-lg font-semibold">Are you absolutely sure?</div>`}
        >
          <div className="text-lg font-semibold">Are you absolutely sure?</div>
        </CodePreview>
      </section>

      {/* Small Text */}
      <section className="space-y-4">
        <h2 id="small" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Small Text
        </h2>
        <p className="text-muted-foreground">
          Smaller text for captions, labels, or secondary information.
        </p>
        <CodePreview
          code={`<small className="text-sm font-medium leading-none">Email address</small>`}
        >
          <small className="text-sm font-medium leading-none">Email address</small>
        </CodePreview>
      </section>

      {/* Muted Text */}
      <section className="space-y-4">
        <h2 id="muted" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Muted Text
        </h2>
        <p className="text-muted-foreground">
          De-emphasized text for hints or secondary content.
        </p>
        <CodePreview
          code={`<p className="text-sm text-muted-foreground">Enter your email address.</p>`}
        >
          <p className="text-sm text-muted-foreground">Enter your email address.</p>
        </CodePreview>
      </section>

      {/* Blockquote */}
      <section className="space-y-4">
        <h2 id="blockquote" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Blockquote
        </h2>
        <p className="text-muted-foreground">
          Quoted text with visual distinction.
        </p>
        <CodePreview
          code={`<blockquote className="mt-6 border-l-2 pl-6 italic">
  "After all," he said, "everyone enjoys a good joke, so it's only fair that
  they should pay for the privilege."
</blockquote>`}
        >
          <blockquote className="border-l-2 pl-6 italic">
            "After all," he said, "everyone enjoys a good joke, so it's only fair that
            they should pay for the privilege."
          </blockquote>
        </CodePreview>
      </section>

      {/* Lists */}
      <section className="space-y-4">
        <h2 id="lists" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Lists
        </h2>
        <p className="text-muted-foreground">
          Unordered and ordered lists with proper spacing.
        </p>
        <CodePreview
          code={`<ul className="my-6 ml-6 list-disc [&>li]:mt-2">
  <li>1st level of hierarchy</li>
  <li>2nd level of hierarchy
    <ul className="ml-6 list-disc [&>li]:mt-2">
      <li>2nd level item</li>
      <li>2nd level item</li>
    </ul>
  </li>
  <li>1st level of hierarchy</li>
</ul>

<ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>`}
        >
          <div className="grid gap-6 md:grid-cols-2 w-full">
            <div>
              <h4 className="text-sm font-medium mb-2">Unordered List</h4>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>1st level of hierarchy</li>
                <li>2nd level of hierarchy
                  <ul className="ml-6 list-disc [&>li]:mt-2">
                    <li>2nd level item</li>
                    <li>2nd level item</li>
                  </ul>
                </li>
                <li>1st level of hierarchy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Ordered List</h4>
              <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
                <li>Fourth item</li>
              </ol>
            </div>
          </div>
        </CodePreview>
      </section>

      {/* Inline Code */}
      <section className="space-y-4">
        <h2 id="inline-code" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Inline Code
        </h2>
        <p className="text-muted-foreground">
          Code snippets within text content.
        </p>
        <CodePreview
          code={`<p className="leading-7">
  You can use the <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
    @apply
  </code> directive to inline any existing utility classes.
</p>`}
        >
          <p className="leading-7">
            You can use the <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              @apply
            </code> directive to inline any existing utility classes into your own custom CSS.
          </p>
        </CodePreview>
      </section>

      {/* Code Block */}
      <section className="space-y-4">
        <h2 id="code-block" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Code Block
        </h2>
        <p className="text-muted-foreground">
          Multi-line code blocks for longer snippets.
        </p>
        <CodePreview
          code={`<pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted p-4">
  <code className="relative rounded font-mono text-sm">
    {codeString}
  </code>
</pre>`}
        >
          <pre className="overflow-x-auto rounded-lg border bg-muted p-4 w-full">
            <code className="relative rounded font-mono text-sm">
{`import { Button } from "@reluna-ui/ui"

export function MyComponent() {
  return (
    <Button variant="outline">
      Click me
    </Button>
  )
}`}
            </code>
          </pre>
        </CodePreview>
      </section>

      {/* Table */}
      <section className="space-y-4">
        <h2 id="table" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Table
        </h2>
        <p className="text-muted-foreground">
          Prose-style table for documentation content.
        </p>
        <CodePreview
          code={`<table className="w-full">
  <thead>
    <tr className="m-0 border-t p-0 even:bg-muted">
      <th className="border px-4 py-2 text-left font-bold">Header 1</th>
      <th className="border px-4 py-2 text-left font-bold">Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr className="m-0 border-t p-0 even:bg-muted">
      <td className="border px-4 py-2 text-left">Cell 1</td>
      <td className="border px-4 py-2 text-left">Cell 2</td>
    </tr>
  </tbody>
</table>`}
        >
          <div className="w-full overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                    King's Treasury
                  </th>
                  <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                    People's Happiness
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Empty
                  </td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Overflowing
                  </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Modest
                  </td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Satisfied
                  </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Full
                  </td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Ecstatic
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CodePreview>
      </section>

      {/* Link */}
      <section className="space-y-4">
        <h2 id="link" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Link
        </h2>
        <p className="text-muted-foreground">
          Styled anchor links for navigation.
        </p>
        <CodePreview
          code={`<a
  href="#"
  className="font-medium text-primary underline underline-offset-4"
>
  typography guidelines
</a>`}
        >
          <p className="leading-7">
            Read more about{" "}
            <a
              href="#"
              className="font-medium text-primary underline underline-offset-4"
            >
              typography guidelines
            </a>{" "}
            in our documentation.
          </p>
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
                <th className="p-3 text-left font-medium">Element</th>
                <th className="p-3 text-left font-medium">Classes</th>
                <th className="p-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">h1</td>
                <td className="p-3 font-mono text-xs">text-4xl font-extrabold tracking-tight</td>
                <td className="p-3 text-xs">Page title</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">h2</td>
                <td className="p-3 font-mono text-xs">text-3xl font-semibold tracking-tight</td>
                <td className="p-3 text-xs">Section heading</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">h3</td>
                <td className="p-3 font-mono text-xs">text-2xl font-semibold tracking-tight</td>
                <td className="p-3 text-xs">Subsection heading</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">p</td>
                <td className="p-3 font-mono text-xs">leading-7</td>
                <td className="p-3 text-xs">Body text</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">lead</td>
                <td className="p-3 font-mono text-xs">text-xl text-muted-foreground</td>
                <td className="p-3 text-xs">Intro paragraph</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">muted</td>
                <td className="p-3 font-mono text-xs">text-sm text-muted-foreground</td>
                <td className="p-3 text-xs">Secondary text</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">code</td>
                <td className="p-3 font-mono text-xs">bg-muted px-[0.3rem] py-[0.2rem] font-mono</td>
                <td className="p-3 text-xs">Inline code</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
