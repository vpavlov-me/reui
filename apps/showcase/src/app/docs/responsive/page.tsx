"use client";

import * as React from "react";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@reluna-ui/ui";
import { Monitor, Smartphone, Tablet, Layout, Grid, Type } from "lucide-react";

export default function ResponsivePage() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="space-y-4">
        <Badge variant="secondary">Foundation</Badge>
        <h1 className="text-3xl font-medium tracking-tight">Responsive Design</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Guidelines for building adaptive interfaces that work across all device sizes.
          Reluna UI follows a mobile-first approach with consistent breakpoints.
        </p>
      </div>

      {/* Breakpoints */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium tracking-tight">Breakpoints</h2>
        <p className="text-muted-foreground">
          Standard breakpoints based on common device widths. Always design mobile-first
          and add responsive modifiers for larger screens.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-primary" />
                <CardTitle className="text-base">sm</CardTitle>
              </div>
              <CardDescription>640px</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Mobile landscape, small tablets
              </p>
              <code className="mt-2 block text-xs bg-muted px-2 py-1 rounded">
                sm:flex-row
              </code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Tablet className="h-4 w-4 text-primary" />
                <CardTitle className="text-base">md</CardTitle>
              </div>
              <CardDescription>768px</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Tablets, small laptops
              </p>
              <code className="mt-2 block text-xs bg-muted px-2 py-1 rounded">
                md:grid-cols-2
              </code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Monitor className="h-4 w-4 text-primary" />
                <CardTitle className="text-base">lg</CardTitle>
              </div>
              <CardDescription>1024px</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Desktop, large tablets
              </p>
              <code className="mt-2 block text-xs bg-muted px-2 py-1 rounded">
                lg:grid-cols-3
              </code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Monitor className="h-4 w-4 text-primary" />
                <CardTitle className="text-base">xl</CardTitle>
              </div>
              <CardDescription>1280px</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Large desktop displays
              </p>
              <code className="mt-2 block text-xs bg-muted px-2 py-1 rounded">
                xl:max-w-6xl
              </code>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Container Widths */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium tracking-tight">Container Widths</h2>
        <p className="text-muted-foreground">
          Standard container max-widths for different page types.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-medium">Context</th>
                <th className="text-left p-3 font-medium">Class</th>
                <th className="text-left p-3 font-medium">Max Width</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Marketing pages</td>
                <td className="p-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">max-w-screen-xl</code></td>
                <td className="p-3">1280px</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Application pages</td>
                <td className="p-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">max-w-[1048px]</code></td>
                <td className="p-3">1048px</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Content/Blog</td>
                <td className="p-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">max-w-3xl</code></td>
                <td className="p-3">768px</td>
              </tr>
              <tr>
                <td className="p-3">Dialogs/Modals</td>
                <td className="p-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">max-w-lg</code></td>
                <td className="p-3">512px</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Grid Layouts */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Grid className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-medium tracking-tight">Grid Layouts</h2>
        </div>
        <p className="text-muted-foreground">
          Common responsive grid patterns for different content types.
        </p>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Standard Content Grid</CardTitle>
            <CardDescription>Cards, features, products</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <code className="block text-xs bg-muted px-3 py-2 rounded overflow-x-auto">
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
            </code>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="h-20 bg-muted rounded-[10px]" />
              <div className="h-20 bg-muted rounded-[10px]" />
              <div className="h-20 bg-muted rounded-[10px]" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Main + Sidebar Layout</CardTitle>
            <CardDescription>Content with sidebar navigation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <code className="block text-xs bg-muted px-3 py-2 rounded overflow-x-auto">
              grid grid-cols-1 lg:grid-cols-3 gap-8
            </code>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 h-24 bg-muted rounded-[10px] flex items-center justify-center text-sm text-muted-foreground">
                Main Content
              </div>
              <div className="h-24 bg-muted rounded-[10px] flex items-center justify-center text-sm text-muted-foreground">
                Sidebar
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Two Column Layout</CardTitle>
            <CardDescription>Side-by-side content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <code className="block text-xs bg-muted px-3 py-2 rounded overflow-x-auto">
              flex flex-col sm:flex-row gap-4
            </code>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 h-20 bg-muted rounded-[10px]" />
              <div className="flex-1 h-20 bg-muted rounded-[10px]" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Typography Scaling */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Type className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-medium tracking-tight">Typography Scaling</h2>
        </div>
        <p className="text-muted-foreground">
          Responsive typography patterns for headings and body text.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-medium">Element</th>
                <th className="text-left p-3 font-medium">Mobile</th>
                <th className="text-left p-3 font-medium">Desktop (md+)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Page Title</td>
                <td className="p-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">text-2xl</code></td>
                <td className="p-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">md:text-3xl</code></td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Section Title</td>
                <td className="p-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">text-lg</code></td>
                <td className="p-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">md:text-xl</code></td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Card Title</td>
                <td className="p-3" colSpan={2}><code className="text-xs bg-muted px-1.5 py-0.5 rounded">text-base font-medium</code></td>
              </tr>
              <tr>
                <td className="p-3">Body Text</td>
                <td className="p-3" colSpan={2}><code className="text-xs bg-muted px-1.5 py-0.5 rounded">text-sm</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Component-Specific Rules */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Layout className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-medium tracking-tight">Component Rules</h2>
        </div>
        <p className="text-muted-foreground">
          Specific responsive behaviors for common components.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Sheet / Side Panel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Full width on mobile, fixed width on desktop.
              </p>
              <code className="block text-xs bg-muted px-2 py-1 rounded">
                w-full sm:w-[700px]
              </code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Navigation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Hamburger menu on mobile, horizontal on desktop.
              </p>
              <code className="block text-xs bg-muted px-2 py-1 rounded">
                hidden md:flex
              </code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Dialog / Modal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Full screen on mobile, centered on desktop.
              </p>
              <code className="block text-xs bg-muted px-2 py-1 rounded">
                w-full sm:max-w-lg
              </code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Padding / Spacing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Reduced padding on mobile for more content space.
              </p>
              <code className="block text-xs bg-muted px-2 py-1 rounded">
                p-4 md:p-6
              </code>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium tracking-tight">Best Practices</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="text-base text-green-600">Do</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Design mobile-first, then add breakpoint modifiers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Use semantic breakpoints (sm, md, lg, xl)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Test on real devices, not just browser resize</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Consider touch targets (min 44px) on mobile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Use flex/grid for responsive layouts</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="text-base text-red-600">Don't</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Use pixel-based widths for containers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Hide important content on mobile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Rely on hover states for essential functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Use horizontal scrolling for primary content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Nest too many responsive conditions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium tracking-tight">Code Examples</h2>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Responsive Page Layout</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-xs bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`<div className="container py-8 md:py-12">
  <div className="mx-auto max-w-screen-xl">
    <h1 className="text-2xl md:text-3xl font-medium">
      Page Title
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {items.map(item => (
        <Card key={item.id}>
          <CardContent className="p-4 md:p-6">
            {item.content}
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</div>`}</code>
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Responsive Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-xs bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`<nav className="flex items-center justify-between">
  <Logo />

  {/* Mobile menu button */}
  <Button
    variant="ghost"
    size="icon"
    className="md:hidden"
  >
    <Menu className="h-5 w-5" />
  </Button>

  {/* Desktop navigation */}
  <div className="hidden md:flex items-center gap-6">
    <Link href="/features">Features</Link>
    <Link href="/pricing">Pricing</Link>
    <Link href="/docs">Docs</Link>
  </div>
</nav>`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
