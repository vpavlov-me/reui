"use client";

import * as React from "react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Separator,
} from "@reluna-ui/ui";
import { Mail, Send, Sun, Moon } from "lucide-react";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";
import Link from "next/link";

export default function AppFooterPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">AppFooter</h1>
        <p className="text-lg text-muted-foreground">
          A comprehensive application footer component with newsletter subscription, link columns, copyright information, and theme toggle. Part of the template/organism tier in atomic design.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <p className="text-muted-foreground">
          AppFooter is typically imported from your application components.
        </p>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { AppFooter } from "@/components/blocks/app-footer"`}</code>
        </pre>
      </section>

      {/* Atomic Design Info */}
      <section className="space-y-4">
        <h2 id="atomic-design" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Atomic Design Classification
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Organism / Template Level</CardTitle>
            <CardDescription>
              AppFooter is a composition of multiple atoms and molecules
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Composed From:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• <code>Button</code> - Atom (Links and actions)</li>
                <li>• <code>Input</code> - Atom (Newsletter email input)</li>
                <li>• <code>Card</code> - Molecule (Newsletter section container)</li>
                <li>• <code>Separator</code> - Atom (Visual divider)</li>
                <li>• <code>Badge</code> - Atom (Status indicator)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Scope:</h3>
              <p className="text-sm text-muted-foreground">
                Global footer for the entire application. Should be placed at the bottom of every page layout.
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
            "Place AppFooter at the bottom of every page",
            "Include logo for brand consistency",
            "Organize links into logical categories",
            "Show copyright and version information",
            "Include theme toggle for accessibility",
            "Add newsletter subscription when applicable",
            "Make footer responsive with grid layout",
            "Keep footer content non-intrusive and supplementary",
          ]}
          donts={[
            "Don't place multiple footers on one page",
            "Don't use footer for primary navigation",
            "Don't hide important information in footer",
            "Don't overload footer with too many links",
            "Don't forget mobile responsive design",
            "Don't use footer for time-sensitive content",
            "Don't duplicate information from header",
            "Don't make footer links external without indication",
          ]}
        />
      </section>

      {/* Structure */}
      <section className="space-y-4">
        <h2 id="structure" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Footer Structure
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Layout Sections</CardTitle>
            <CardDescription>
              AppFooter organizes content into distinct sections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto mb-4">
              <code>{`┌─────────────────────────────────────────────────────────────┐
│ AppFooter                                                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ Newsletter Section (Optional)                               │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Stay Updated                       [Email Input][Send]  │ │
│ │ Get insights delivered...                               │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ [Logo]          [Links]     [Links]     [Links]             │
│ Description     Category 1  Category 2  Category 3          │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ © 2025 Company  |  v0.1.3  [Beta]  [Theme Toggle]           │
│                                                              │
└─────────────────────────────────────────────────────────────┘`}</code>
            </pre>
            <div className="space-y-2 text-sm mt-4">
              <div>
                <span className="font-medium">Newsletter:</span>
                <span className="text-muted-foreground"> Email subscription card (optional)</span>
              </div>
              <div>
                <span className="font-medium">Links Section:</span>
                <span className="text-muted-foreground"> Logo, description, and organized link columns</span>
              </div>
              <div>
                <span className="font-medium">Copyright Bar:</span>
                <span className="text-muted-foreground"> Copyright, version, and theme toggle</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Newsletter */}
      <section className="space-y-4">
        <h2 id="newsletter" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Newsletter Section
        </h2>
        <CodePreview
          code={`<AppFooter
  newsletter={{
    title: "Stay Updated",
    description: "Get insights delivered every two weeks",
    onSubscribe: async (email) => {
      await subscribeToNewsletter(email);
    },
  }}
  // ... other props
/>`}
        >
          <div className="rounded-lg border p-4">
            <div className="bg-card flex flex-col md:flex-row gap-4 items-start justify-between overflow-hidden p-5 rounded-lg">
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="font-medium">Stay Updated</h3>
                <p className="text-sm text-muted-foreground">
                  Get insights and updates on family governance best practices delivered every two weeks
                </p>
              </div>
              <form className="flex gap-2 items-center w-full md:w-auto">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="h-9 text-sm"
                />
                <Button size="sm" className="shrink-0">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </CodePreview>
      </section>

      {/* Link Columns */}
      <section className="space-y-4">
        <h2 id="links" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Link Columns
        </h2>
        <CodePreview
          code={`<AppFooter
  columns={[
    {
      title: "Platform",
      links: [
        { label: "Family Constitution", href: "/constitution" },
        { label: "Family Council", href: "/council" },
        { label: "Decision Making", href: "/decisions" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Support", href: "/support" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ]}
  // ... other props
/>`}
        >
          <div className="rounded-lg border p-4">
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Platform</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-xs text-muted-foreground hover:text-primary">Family Constitution</Link></li>
                  <li><Link href="#" className="text-xs text-muted-foreground hover:text-primary">Family Council</Link></li>
                  <li><Link href="#" className="text-xs text-muted-foreground hover:text-primary">Decision Making</Link></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Resources</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-xs text-muted-foreground hover:text-primary">Documentation</Link></li>
                  <li><Link href="#" className="text-xs text-muted-foreground hover:text-primary">Support</Link></li>
                  <li><Link href="#" className="text-xs text-muted-foreground hover:text-primary">FAQ</Link></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Legal</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-xs text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                  <li><Link href="#" className="text-xs text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </CodePreview>
      </section>

      {/* Copyright & Meta */}
      <section className="space-y-4">
        <h2 id="copyright" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Copyright & Version
        </h2>
        <CodePreview
          code={`<AppFooter
  copyright="© 2025 Your Company. All rights reserved."
  version="v1.0.0"
  showThemeToggle={true}
  // ... other props
/>`}
        >
          <div className="rounded-lg border p-4">
            <Separator className="mb-4" />
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>© 2025 Your Company</span>
                <Badge variant="secondary" className="text-xs">v1.0.0</Badge>
                <Badge variant="outline" className="text-xs">Beta</Badge>
              </div>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </div>
        </CodePreview>
      </section>

      {/* Full Example */}
      <section className="space-y-4">
        <h2 id="example" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Complete Example
        </h2>
        <CodePreview
          code={`import { AppFooter } from "@/components/blocks/app-footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Page content */}
      </main>

      <AppFooter
        logo={<YourLogo />}
        description="Reluna Family platform for managing family wealth, governance, and knowledge transfer across generations."
        columns={[
          {
            title: "Platform",
            links: [
              { label: "Family Constitution", href: "/constitution" },
              { label: "Family Council", href: "/council" },
            ],
          },
          {
            title: "Resources",
            links: [
              { label: "Learning Paths", href: "/learn" },
              { label: "Documentation", href: "/docs" },
            ],
          },
          {
            title: "Legal",
            links: [
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ],
          },
        ]}
        newsletter={{
          title: "Stay Updated",
          description: "Get insights delivered every two weeks",
          onSubscribe: async (email) => {
            // Handle subscription
          },
        }}
        copyright={\`© \${new Date().getFullYear()} Reluna Family\`}
        version="v0.1.3"
        showThemeToggle={true}
      />
    </div>
  );
}`}
        >
          <div className="rounded-lg border bg-muted/30 p-4 space-y-4">
            <p className="text-xs text-muted-foreground">Footer preview would be displayed here</p>
          </div>
        </CodePreview>
      </section>

      {/* Responsive Design */}
      <section className="space-y-4">
        <h2 id="responsive" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Responsive Design
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Mobile Adaptations</CardTitle>
            <CardDescription>
              AppFooter adjusts layout for different screen sizes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <span className="font-medium">Desktop (≥1024px):</span>
              <p className="text-muted-foreground">Full newsletter card, 3-column link grid, all elements visible</p>
            </div>
            <div>
              <span className="font-medium">Tablet (768px - 1023px):</span>
              <p className="text-muted-foreground">Newsletter card, 2-column link grid, logo visible</p>
            </div>
            <div>
              <span className="font-medium">Mobile (&lt;768px):</span>
              <p className="text-muted-foreground">Stacked layout, single-column links, compact newsletter form, theme toggle preserved</p>
            </div>
            <div className="mt-4 rounded-lg border p-3 bg-muted/30">
              <p className="text-xs text-muted-foreground">
                Use CSS Grid with responsive columns and Tailwind breakpoints for proper display adaptation.
              </p>
            </div>
          </CardContent>
        </Card>
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
                <td className="p-3 font-mono text-xs">logo</td>
                <td className="p-3 font-mono text-xs">React.ReactNode (optional)</td>
                <td className="p-3 text-xs">Logo element or component</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">description</td>
                <td className="p-3 font-mono text-xs">string (optional)</td>
                <td className="p-3 text-xs">Company/app description</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">columns</td>
                <td className="p-3 font-mono text-xs">FooterColumn[] (optional)</td>
                <td className="p-3 text-xs">Link column configuration</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">newsletter</td>
                <td className="p-3 font-mono text-xs">NewsletterConfig (optional)</td>
                <td className="p-3 text-xs">Newsletter subscription settings</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">copyright</td>
                <td className="p-3 font-mono text-xs">string (optional)</td>
                <td className="p-3 text-xs">Copyright notice text</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">version</td>
                <td className="p-3 font-mono text-xs">string (optional)</td>
                <td className="p-3 text-xs">Application version number</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">showThemeToggle</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 text-xs">Show theme toggle button</td>
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
              <CardTitle className="text-base">1. Organize Links Logically</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Group related links into 3-4 categories. Use clear, consistent naming for link categories.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">2. Newsletter Strategy</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Newsletter is optional but recommended for user engagement. Ensure proper email validation and privacy compliance.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">3. Keep Footer Accessible</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Footer links should be keyboard navigable and announced properly for screen readers.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">4. Mobile-First Design</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Test footer layout on mobile devices. Ensure all links are easily tappable (minimum 44x44px targets).
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
