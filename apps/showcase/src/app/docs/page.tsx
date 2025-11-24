"use client";

import Link from "next/link";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
} from "@reluna-ui/ui";
import { ArrowRight, Palette, Component, Sparkles } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="space-y-3 md:space-y-4">
        <Badge variant="secondary" className="text-xs md:text-sm">Documentation</Badge>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight">
          Reluna UI
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
          A modern React component library built on top of shadcn/ui and Radix primitives.
          Designed for building beautiful, accessible, and themeable applications.
        </p>
      </div>

      <div className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
              <Palette className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            </div>
            <CardTitle className="text-sm md:text-base">Foundation</CardTitle>
            <CardDescription>
              Design tokens, colors, themes, and icons that form the base of the system.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/docs/tokens">
              <Button variant="outline" className="w-full">
                Explore Foundation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
              <Component className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-base">Components</CardTitle>
            <CardDescription>
              35+ accessible components with variants, sizes, and interaction states.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/docs/components">
              <Button variant="outline" className="w-full">
                Browse Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-base">Templates</CardTitle>
            <CardDescription>
              Ready-to-use page templates for dashboards, profiles, and authentication.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/templates/dashboard">
              <Button variant="outline" className="w-full">
                View Templates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-3 md:space-y-4 border-t pt-6 md:pt-8">
        <h2 className="text-xl md:text-2xl font-medium">Features</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <div>
              <div className="text-sm md:text-base font-medium">Accessible by Default</div>
              <div className="text-xs md:text-sm text-muted-foreground">
                Built on Radix UI primitives with full keyboard navigation and ARIA support.
              </div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2" />
            <div>
              <div className="font-medium">Themeable</div>
              <div className="text-sm text-muted-foreground">
                Multiple portal themes with CSS variables for easy customization.
              </div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2" />
            <div>
              <div className="font-medium">Dark Mode</div>
              <div className="text-sm text-muted-foreground">
                Built-in dark mode support with next-themes integration.
              </div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2" />
            <div>
              <div className="font-medium">TypeScript</div>
              <div className="text-sm text-muted-foreground">
                Fully typed components with excellent IDE support.
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="space-y-3 md:space-y-4 border-t pt-6 md:pt-8">
        <h2 className="text-xl md:text-2xl font-medium">Quick Start</h2>
        <Card>
          <CardContent className="pt-6">
            <pre className="overflow-x-auto rounded bg-muted p-4 text-sm">
              <code>{`npm install @reluna-ui/ui

# or
pnpm add @reluna-ui/ui
yarn add @reluna-ui/ui`}</code>
            </pre>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="overflow-x-auto rounded bg-muted p-4 text-sm">
              <code>{`import { Button, Card, Input } from "@reluna-ui/ui";

export function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text..." />
      <Button>Submit</Button>
    </Card>
  );
}`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
