"use client";

import Link from "next/link";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@reluna-ui/ui";
import {
  ChevronRight,
} from "lucide-react";

interface BlockItem {
  title: string;
  description: string;
  classification: string;
  composedFrom: string[];
  href: string;
}

const blocks: BlockItem[] = [
  {
    title: "AppHeader",
    description: "Configurable application header with navigation, user menu, and notifications. The primary navigation and branding component.",
    classification: "Organism / Template",
    composedFrom: ["Button", "Avatar", "DropdownMenu", "Badge"],
    href: "/docs/components/app-header",
  },
  {
    title: "PageHeader",
    description: "Page header with breadcrumb navigation, title, and optional actions. Manages local page context within layout.",
    classification: "Molecule / Organism",
    composedFrom: ["Breadcrumb", "Button", "Separator"],
    href: "/docs/components/page-header",
  },
  {
    title: "AppFooter",
    description: "Application footer with newsletter subscription, link columns, copyright, and theme toggle. Global footer component.",
    classification: "Organism / Template",
    composedFrom: ["Button", "Input", "Card", "Badge", "Separator"],
    href: "/docs/components/app-footer",
  },
  {
    title: "AppLayout",
    description: "Complete page layout wrapper combining header, footer, page header, and optional sidebar. Top-level template component.",
    classification: "Template / Page",
    composedFrom: ["AppHeader", "PageHeader", "AppFooter", "Sidebar"],
    href: "/docs/components/app-layout",
  },
];

export default function BlocksPage() {
  return (
    <div className="bg-muted/40 py-8 sm:py-12">
      <div className="container space-y-10">
        {/* Header */}
        <div className="space-y-4">
        <Badge variant="secondary" className="w-fit">
          Blocks / Organisms
        </Badge>
        <h1 className="text-4xl font-medium tracking-tight">Layout Blocks</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Ready-to-use template and organism-level components that compose multiple atoms and molecules. These blocks provide complete layout solutions for building consistent page structures across your application.
        </p>
      </div>

      {/* Atomic Design Explanation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Atomic Design Hierarchy</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Component Classification</CardTitle>
            <CardDescription>
              Layout blocks are compositions of lower-level components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
              <code>{`Atoms (Basic Building Blocks)
├── Button, Input, Badge, Separator, Avatar
└── Text, Icon, Label

Molecules (Simple Component Groups)
├── Breadcrumb, DropdownMenu, Card
└── Form Groups, Tooltips

Organisms (Complex Components)
├── AppHeader - Composes Button + Avatar + DropdownMenu
├── PageHeader - Composes Breadcrumb + Button + Separator
└── AppFooter - Composes Button + Input + Card + Badge

Templates (Page-Level Layouts)
└── AppLayout - Orchestrates Header + PageHeader + Footer + Sidebar`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Blocks Grid */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Available Blocks</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {blocks.map((block) => (
            <Link key={block.title} href={block.href}>
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {block.title}
                      </CardTitle>
                      <Badge variant="outline" className="w-fit">
                        {block.classification}
                      </Badge>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {block.description}
                  </CardDescription>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Composed From:</p>
                    <div className="flex flex-wrap gap-2">
                      {block.composedFrom.map((component) => (
                        <Badge key={component} variant="secondary" className="text-xs">
                          {component}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full mt-4" size="sm">
                    View Documentation
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Key Principles */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Design System Principles</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Atomic Design</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Components are built in layers from atoms (basic) to templates (complex). Each level reuses lower-level components for consistency.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Reusability</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Blocks are fully reusable across all pages. Customize through props without manual code modifications.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Consistency</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              All blocks follow the same patterns, styling conventions, and responsive behavior for a cohesive user experience.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Composition</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Blocks can be composed together. AppLayout orchestrates AppHeader, PageHeader, and AppFooter with content areas.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Start */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Quick Start</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Building a Page with Blocks</CardTitle>
            <CardDescription>
              Use AppLayout as the root wrapper for all authenticated pages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto mb-4">
              <code>{`import { AppLayout } from "@/components/blocks/app-layout";
import { AppHeader } from "@/components/blocks/app-header";
import { PageHeader } from "@/components/blocks/page-header";
import { AppFooter } from "@/components/blocks/app-footer";

export default function Page() {
  return (
    <AppLayout
      header={<AppHeader {...headerProps} />}
      pageHeader={<PageHeader title="Page Title" />}
      footer={<AppFooter {...footerProps} />}
    >
      {/* Your page content */}
    </AppLayout>
  );
}`}</code>
            </pre>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>1. Wrap your page with <code className="bg-muted px-2 py-1 rounded">AppLayout</code></p>
              <p>2. Configure <code className="bg-muted px-2 py-1 rounded">AppHeader</code> with navigation and user info</p>
              <p>3. Set <code className="bg-muted px-2 py-1 rounded">PageHeader</code> with breadcrumbs and title</p>
              <p>4. Add <code className="bg-muted px-2 py-1 rounded">AppFooter</code> with links and info</p>
              <p>5. Place your content in the children prop</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* View All Components */}
      <section>
        <Link href="/docs/components">
          <Button variant="outline" size="lg" className="w-full">
            View All Components
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>
      </div>
    </div>
  );
}

// Legacy code snippets - kept for reference (not used)
/*
const headerCode = `import { AppHeader } from "@/components/blocks/app-header"
// ... legacy code
*/

