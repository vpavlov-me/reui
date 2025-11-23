"use client";

import * as React from "react";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Separator,
} from "@reluna-ui/ui";
import {
  Home,
  ChevronRight,
  Plus,
} from "lucide-react";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function PageHeaderPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">PageHeader</h1>
        <p className="text-lg text-muted-foreground">
          A page header component combining breadcrumb navigation, page title, and optional action buttons. Manages local page context within an AppLayout. Part of the molecule/organism tier in atomic design.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <p className="text-muted-foreground">
          PageHeader is typically imported from your application components.
        </p>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { PageHeader } from "@/components/blocks/page-header"`}</code>
        </pre>
      </section>

      {/* Atomic Design Info */}
      <section className="space-y-4">
        <h2 id="atomic-design" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Atomic Design Classification
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Molecule / Organism Level</CardTitle>
            <CardDescription>
              PageHeader composes atoms to create local page context
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Composed From:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• <code>Breadcrumb</code> - Molecule (Hierarchical navigation)</li>
                <li>• <code>Button</code> - Atom (Action buttons)</li>
                <li>• <code>Separator</code> - Atom (Visual divider)</li>
                <li>• Heading (h1) - Atom (Page title)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Hierarchy:</h3>
              <p className="text-sm text-muted-foreground">
                Always placed below AppHeader and above page content. Provides local context without duplicating global header.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Show breadcrumbs for pages deeper than first level",
            "Include page title in h1 heading tag",
            "Provide primary action button for page (Create, Add, etc.)",
            "Use for local page context separate from global header",
            "Update breadcrumbs dynamically based on route",
            "Include both visual and textual navigation",
            "Keep breadcrumbs clear and non-redundant",
            "Group related actions in the actions area",
          ]}
          donts={[
            "Don't duplicate global navigation in page header",
            "Don't use PageHeader for non-page elements",
            "Don't include too many action buttons (max 2-3)",
            "Don't make breadcrumbs non-clickable without reason",
            "Don't mix AppHeader and PageHeader content",
            "Don't use breadcrumbs for lateral navigation",
            "Don't place form inputs in page header",
            "Don't forget the home link in breadcrumbs",
          ]}
        />
      </section>

      {/* Structure */}
      <section className="space-y-4">
        <h2 id="structure" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Page Header Structure
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Layout Zones</CardTitle>
            <CardDescription>
              PageHeader divides into distinct content zones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto mb-4">
              <code>{`┌─────────────────────────────────────────────────────────────┐
│ PageHeader                                                  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ [Home] › [Section] › [Page]                 [Actions...]    │
│                                                              │
│ Breadcrumb Navigation                       Action Buttons  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ Page Title                                                  │
│ Optional description text                                   │
│                                                              │
└─────────────────────────────────────────────────────────────┘`}</code>
            </pre>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium">Breadcrumb Row:</span>
                <span className="text-muted-foreground"> Navigation hierarchy and action buttons</span>
              </div>
              <div>
                <span className="font-medium">Title Row:</span>
                <span className="text-muted-foreground"> Page h1 title and optional description</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Breadcrumbs */}
      <section className="space-y-4">
        <h2 id="breadcrumbs" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Breadcrumb Navigation
        </h2>
        <CodePreview
          code={`import { PageHeader } from "@/components/blocks/page-header";

<PageHeader
  title="Family Constitution"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Governance", href: "/governance" },
    { label: "Constitution" },  // Current page (no href)
  ]}
/>`}
        >
          <div className="rounded-lg border p-4 space-y-3">
            <p className="text-sm text-muted-foreground mb-3">Breadcrumb Example:</p>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="flex items-center gap-1.5">
                    <Home className="h-4 w-4" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-3.5 w-3.5" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/governance">Governance</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-3.5 w-3.5" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <span className="text-foreground font-medium">Constitution</span>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </CodePreview>
      </section>

      {/* Page Title */}
      <section className="space-y-4">
        <h2 id="title" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Page Title & Description
        </h2>
        <CodePreview
          code={`// With title only
<PageHeader
  title="Family Constitution"
/>

// With title and description
<PageHeader
  title="Family Constitution"
  description="Establish your family's core values, governance structure, and decision-making processes."
/>

// Full configuration
<PageHeader
  title="Family Constitution"
  description="Create and manage your family's constitution"
  breadcrumbs={[...]}
/>`}
        >
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Family Constitution</CardTitle>
                <CardDescription>
                  Establish your family's core values, governance structure, and decision-making processes.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </CodePreview>
      </section>

      {/* Action Buttons */}
      <section className="space-y-4">
        <h2 id="actions" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Action Buttons
        </h2>
        <CodePreview
          code={`<PageHeader
  title="Family Members"
  breadcrumbs={[...]}
  actions={
    <Button>
      <Plus className="mr-2 h-4 w-4" />
      Add Member
    </Button>
  }
/>

// Multiple actions
actions={
  <div className="flex gap-2">
    <Button variant="outline">
      Export
    </Button>
    <Button>
      <Plus className="mr-2 h-4 w-4" />
      Add New
    </Button>
  </div>
}`}
        >
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm text-muted-foreground">Actions Row:</h3>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Export
              </Button>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Member
              </Button>
            </div>
          </div>
        </CodePreview>
      </section>

      {/* Responsive Behavior */}
      <section className="space-y-4">
        <h2 id="responsive" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Responsive Behavior
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Mobile Adaptations</CardTitle>
            <CardDescription>
              PageHeader adjusts layout for smaller screens
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <span className="font-medium">Desktop (≥768px):</span>
              <p className="text-muted-foreground">Breadcrumbs and actions on same row, full title displayed</p>
            </div>
            <div>
              <span className="font-medium">Mobile (&lt;768px):</span>
              <p className="text-muted-foreground">Breadcrumbs collapse, title and actions may stack vertically, truncated text with ellipsis</p>
            </div>
            <div className="mt-4 rounded-lg border p-3 bg-muted/30">
              <p className="text-xs text-muted-foreground">
                Use Tailwind breakpoints to ensure proper display. Buttons may wrap to new line on mobile.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Full Example */}
      <section className="space-y-4">
        <h2 id="example" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Complete Example
        </h2>
        <CodePreview
          code={`import { PageHeader } from "@/components/blocks/page-header";
import { Plus } from "lucide-react";

export default function GovernancePage() {
  return (
    <div>
      <PageHeader
        title="Family Governance"
        description="Manage family governance structures and decision-making processes"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Family", href: "/family" },
          { label: "Governance" },
        ]}
        actions={
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create New
          </Button>
        }
      />
      
      {/* Page content */}
      <div className="mt-8">
        {/* Your page content here */}
      </div>
    </div>
  );
}`}
        >
          <div className="rounded-lg border">
            <div className="border-b px-6 py-3 bg-muted/50">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="flex items-center gap-1.5 text-muted-foreground">
                      <Home className="h-4 w-4" />
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/family" className="text-muted-foreground">
                      Family
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <span className="text-foreground font-medium">Governance</span>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-semibold tracking-tight mb-2">Family Governance</h1>
                  <p className="text-muted-foreground text-sm">
                    Manage family governance structures and decision-making processes
                  </p>
                </div>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Create New
                </Button>
              </div>
            </div>
          </div>
        </CodePreview>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 id="api" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          API Reference
        </h2>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-3 text-left font-medium">Prop</th>
                <th className="p-3 text-left font-medium">Type</th>
                <th className="p-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">title</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 text-xs">Page title displayed in h1</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">description</td>
                <td className="p-3 font-mono text-xs">string (optional)</td>
                <td className="p-3 text-xs">Subtitle or description text</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">breadcrumbs</td>
                <td className="p-3 font-mono text-xs">BreadcrumbItem[] (optional)</td>
                <td className="p-3 text-xs">Navigation breadcrumb items</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">actions</td>
                <td className="p-3 font-mono text-xs">React.ReactNode (optional)</td>
                <td className="p-3 text-xs">Action buttons or elements</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 text-xs">Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 id="best-practices" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Best Practices
        </h2>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">1. Hierarchical Breadcrumbs</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Breadcrumbs should show the full hierarchical path. Start with Home, never skip levels.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">2. Current Page in Breadcrumbs</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              The last breadcrumb should be the current page (without href). Show this visually as non-clickable.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">3. Primary Action Only</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Include the most important page action. Use primary button variant for main action.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">4. Clear Titles</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Page titles should be unique and descriptive. Avoid repeating words from breadcrumbs.
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
