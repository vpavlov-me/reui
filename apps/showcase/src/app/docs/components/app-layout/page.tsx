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
} from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function AppLayoutPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">AppLayout</h1>
        <p className="text-lg text-muted-foreground">
          A complete page layout wrapper component that orchestrates AppHeader, PageHeader, AppFooter, and optional sidebar. The top-level template component in atomic design that brings everything together.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <p className="text-muted-foreground">
          AppLayout is typically used at the root level of your page structure.
        </p>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { AppLayout } from "@/components/blocks/app-layout"`}</code>
        </pre>
      </section>

      {/* Atomic Design Info */}
      <section className="space-y-4">
        <h2 id="atomic-design" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Atomic Design Classification
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Template / Page Level</CardTitle>
            <CardDescription>
              AppLayout is the highest-level composition that brings all components together
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Composition Hierarchy:</h3>
              <pre className="rounded-lg bg-muted p-3 text-xs overflow-x-auto mb-4">
                <code>{`AppLayout (Template)
├── AppHeader (Organism)
│   ├── Button (Atom)
│   ├── Avatar (Atom)
│   └── DropdownMenu (Molecule)
├── PageHeader (Molecule/Organism)
│   ├── Breadcrumb (Molecule)
│   ├── Button (Atom)
│   └── Separator (Atom)
├── Main Content Area
│   └── Page Children (Varies)
├── Sidebar (Optional, Organism)
└── AppFooter (Organism)
    ├── Button (Atom)
    ├── Input (Atom)
    ├── Card (Molecule)
    └── Badge (Atom)`}</code>
              </pre>
            </div>
            <div>
              <h3 className="font-medium mb-2">Purpose:</h3>
              <p className="text-sm text-muted-foreground">
                Coordinates all layout components. Handles responsive behavior, spacing, and grid structure for the entire page.
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
            "Use AppLayout as root wrapper for all authenticated pages",
            "Pass children for page-specific content",
            "Include AppHeader on all pages for consistent navigation",
            "Add PageHeader for page context and breadcrumbs",
            "Include AppFooter on all pages",
            "Use sidebar for supplementary content (optional)",
            "Handle responsive sidebar positioning",
            "Configure max-width for content area",
            "Maintain consistent spacing and padding",
            "Use for authenticated page layouts only",
          ]}
          donts={[
            "Don't use AppLayout without AppHeader and AppFooter",
            "Don't place multiple AppLayouts on same page",
            "Don't use for public/marketing pages without modification",
            "Don't forget to configure max-width",
            "Don't overflow sidebar beyond page bounds",
            "Don't disable sticky header/footer unnecessarily",
            "Don't use non-responsive sidebar layouts",
            "Don't place form submissions in layout",
            "Don't override layout spacing without reason",
            "Don't skip PageHeader on inner pages",
          ]}
        />
      </section>

      {/* Structure & Layout */}
      <section className="space-y-4">
        <h2 id="structure" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Layout Structure
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Page Layout Diagram</CardTitle>
            <CardDescription>
              How AppLayout organizes all components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
              <code>{`┌─────────────────────────────────────────────┐
│            AppHeader (Sticky)               │
│   Logo  |  Navigation  |  Notifications    │
├─────────────────────────────────────────────┤
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │      PageHeader                       │  │
│  │ Breadcrumbs | Title | Actions         │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  ┌──────────────────┬────────────────────┐  │
│  │                  │  Sidebar           │  │
│  │  Main Content    │  (Optional,        │  │
│  │                  │   Right or Left)   │  │
│  │                  │                    │  │
│  │ - Hero Section   │  - Quick Links     │  │
│  │ - Cards          │  - Info Cards      │  │
│  │ - Tables         │  - Status          │  │
│  │ - Forms          │  - Related Items   │  │
│  │                  │                    │  │
│  └──────────────────┴────────────────────┘  │
│                                             │
├─────────────────────────────────────────────┤
│          AppFooter (Sticky)                 │
│  Links  |  Newsletter  |  Copyright         │
└─────────────────────────────────────────────┘`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 id="basic" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Basic Usage
        </h2>
        <CodePreview
          code={`import { AppLayout } from "@/components/blocks/app-layout";
import { AppHeader } from "@/components/blocks/app-header";
import { PageHeader } from "@/components/blocks/page-header";
import { AppFooter } from "@/components/blocks/app-footer";

export default function Page() {
  return (
    <AppLayout
      header={<AppHeader {...headerProps} />}
      footer={<AppFooter {...footerProps} />}
      pageHeader={
        <PageHeader
          title="Family Constitution"
          breadcrumbs={[...]}
        />
      }
    >
      {/* Your page content here */}
      <div className="space-y-6">
        {/* Main content */}
      </div>
    </AppLayout>
  );
}`}
        >
          <div className="rounded-lg border bg-muted/30 p-4">
            <p className="text-xs text-muted-foreground">
              AppLayout manages all component positioning and spacing. Your content goes in children.
            </p>
          </div>
        </CodePreview>
      </section>

      {/* With Sidebar */}
      <section className="space-y-4">
        <h2 id="sidebar" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Sidebar
        </h2>
        <CodePreview
          code={`import { AppLayout } from "@/components/blocks/app-layout";

export default function DashboardPage() {
  return (
    <AppLayout
      header={<AppHeader {...headerProps} />}
      pageHeader={<PageHeader title="Dashboard" />}
      footer={<AppFooter {...footerProps} />}
      sidebar={<DashboardSidebar />}
      sidebarPosition="right"
      sidebarWidth="w-80"
    >
      <div className="space-y-6">
        {/* Main dashboard content */}
      </div>
    </AppLayout>
  );
}

// Sidebar component
function DashboardSidebar() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Quick Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {/* Stats content */}
        </CardContent>
      </Card>
    </div>
  );
}`}
        >
          <div className="rounded-lg border bg-muted/30 p-4">
            <p className="text-xs text-muted-foreground">
              Sidebar can be positioned on left or right side and adjusts responsively on mobile.
            </p>
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
            <CardTitle className="text-base">Screen Size Adaptations</CardTitle>
            <CardDescription>
              AppLayout automatically adjusts for different screen sizes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <span className="font-medium">Desktop (≥1024px):</span>
              <p className="text-muted-foreground">Full sidebar visible, two-column layout, maximum content width applied</p>
            </div>
            <div>
              <span className="font-medium">Tablet (768px - 1023px):</span>
              <p className="text-muted-foreground">Sidebar narrower or moved below content, single column layout</p>
            </div>
            <div>
              <span className="font-medium">Mobile (&lt;768px):</span>
              <p className="text-muted-foreground">Sidebar hidden or collapsed, full-width content, header compacted, footer stacked</p>
            </div>
            <div className="mt-4 rounded-lg border p-3 bg-muted/30">
              <p className="text-xs text-muted-foreground">
                Use Tailwind breakpoints and CSS Grid for flexible responsive layout. Consider collapsible sidebar on mobile.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Configuration */}
      <section className="space-y-4">
        <h2 id="configuration" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Configuration Options
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Customization</CardTitle>
            <CardDescription>
              AppLayout supports multiple configuration options
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodePreview
              code={`<AppLayout
  // Components
  header={<AppHeader {...props} />}
  footer={<AppFooter {...props} />}
  pageHeader={<PageHeader {...props} />}
  sidebar={<YourSidebar />}
  
  // Sidebar config
  sidebarPosition="right"      // "left" | "right"
  sidebarWidth="w-80"          // Tailwind width class
  
  // Layout config
  maxWidth="max-w-[1280px]"    // Tailwind max-width class
  gapBetweenContentAndSidebar="gap-8"
  
  // Additional
  className="custom-class"
>
  {/* Page content */}
</AppLayout>`}
            >
              <div className="rounded-lg border p-4 bg-muted/30">
                <p className="text-xs text-muted-foreground space-y-2">
                  <div>• <strong>sidebarPosition:</strong> Controls whether sidebar appears on left or right</div>
                  <div>• <strong>sidebarWidth:</strong> Controls sidebar width with Tailwind classes</div>
                  <div>• <strong>maxWidth:</strong> Controls maximum content width</div>
                </p>
              </div>
            </CodePreview>
          </CardContent>
        </Card>
      </section>

      {/* Content Areas */}
      <section className="space-y-4">
        <h2 id="content-areas" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Content Areas & Best Practices
        </h2>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Header Content</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Place <code>AppHeader</code> prop with:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Logo and branding</li>
                <li>Global navigation</li>
                <li>Notifications and user menu</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Page Header Content</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Place <code>PageHeader</code> prop with:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Breadcrumb navigation</li>
                <li>Page title and description</li>
                <li>Page-level primary actions</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Main Content</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Place in <code>children</code>:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Hero sections</li>
                <li>Content cards and tables</li>
                <li>Forms and inputs</li>
                <li>Lists and data displays</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Sidebar Content</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Place in <code>sidebar</code> prop (optional):</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Quick action cards</li>
                <li>Supplementary information</li>
                <li>Related items or links</li>
                <li>Status indicators</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Full Page Example */}
      <section className="space-y-4">
        <h2 id="example" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Complete Page Example
        </h2>
        <CodePreview
          code={`import { AppLayout } from "@/components/blocks/app-layout";
import { AppHeader } from "@/components/blocks/app-header";
import { PageHeader } from "@/components/blocks/page-header";
import { AppFooter } from "@/components/blocks/app-footer";
import { Card, CardContent, Button } from "@reluna-ui/ui";
import { Plus } from "lucide-react";

export default function ConstitutionPage() {
  return (
    <AppLayout
      header={
        <AppHeader
          logo={<Logo />}
          navItems={NAV_ITEMS}
          user={USER_DATA}
          onNotificationClick={handleNotifications}
          onSignOut={handleSignOut}
        />
      }
      pageHeader={
        <PageHeader
          title="Family Constitution"
          description="Create and manage your family's governance document"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Governance", href: "/governance" },
            { label: "Constitution" },
          ]}
          actions={
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New
            </Button>
          }
        />
      }
      footer={
        <AppFooter
          logo={<Logo />}
          columns={FOOTER_COLUMNS}
          newsletter={NEWSLETTER_CONFIG}
          copyright={\`© \${new Date().getFullYear()} Reluna Family\`}
          version="v0.1.0"
          showThemeToggle
        />
      }
      sidebar={<ConstitutionSidebar />}
      sidebarPosition="right"
      sidebarWidth="w-80"
      maxWidth="max-w-[1280px]"
    >
      <div className="space-y-6">
        {/* Main content area */}
        <Card>
          <CardContent className="pt-6">
            {/* Your content */}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}`}
        >
          <div className="rounded-lg border bg-muted/30 p-4">
            <p className="text-xs text-muted-foreground">
              Complete example shows how to wire all components together with AppLayout as the root wrapper.
            </p>
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
                <td className="p-3 font-mono text-xs">children</td>
                <td className="p-3 font-mono text-xs">React.ReactNode</td>
                <td className="p-3 text-xs">Main page content</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">header</td>
                <td className="p-3 font-mono text-xs">React.ReactNode (optional)</td>
                <td className="p-3 text-xs">AppHeader component</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">footer</td>
                <td className="p-3 font-mono text-xs">React.ReactNode (optional)</td>
                <td className="p-3 text-xs">AppFooter component</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">pageHeader</td>
                <td className="p-3 font-mono text-xs">React.ReactNode (optional)</td>
                <td className="p-3 text-xs">PageHeader component</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">sidebar</td>
                <td className="p-3 font-mono text-xs">React.ReactNode (optional)</td>
                <td className="p-3 text-xs">Sidebar content</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">sidebarPosition</td>
                <td className="p-3 font-mono text-xs">"left" | "right"</td>
                <td className="p-3 text-xs">Sidebar positioning</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">sidebarWidth</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 text-xs">Tailwind width class for sidebar</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">maxWidth</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 text-xs">Tailwind max-width class</td>
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
              <CardTitle className="text-base">1. Consistent Layout Across Pages</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Use AppLayout on all authenticated pages to provide consistent header, footer, and navigation experience.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">2. Sidebar for Supplementary Content</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Reserve sidebar for secondary information that complements main content. Keep it optional when not needed.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">3. Responsive Sidebar Strategy</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              On mobile, move sidebar below content or hide it behind a toggle. Prioritize main content visibility.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">4. Content Max-Width</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Set appropriate max-width (typically 1280px or 1024px) to prevent content from becoming too wide on large screens.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">5. Semantic HTML Structure</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Use proper semantic HTML: &lt;header&gt;, &lt;main&gt;, &lt;aside&gt;, &lt;footer&gt; for accessibility and SEO.
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
