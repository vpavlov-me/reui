"use client";

import * as React from "react";
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@reluna-ui/ui";
import { GitCommit, Package, Sparkles, Bug, Wrench, AlertTriangle } from "lucide-react";

type ChangeType = "feature" | "fix" | "improvement" | "breaking" | "deprecation";

interface Change {
  type: ChangeType;
  description: string;
  component?: string;
}

interface Release {
  version: string;
  date: string;
  changes: Change[];
}

const releases: Release[] = [
  {
    version: "1.1.0",
    date: "2024-11-23",
    changes: [
      { type: "feature", description: "Added Card variants (default gray, elevated white with shadow)", component: "Card" },
      { type: "feature", description: "Added Command Palette with keyboard navigation (Cmd+K)", component: "CommandPalette" },
      { type: "improvement", description: "Updated Tabs component with rounded-[10px] styling", component: "Tabs" },
      { type: "improvement", description: "Changed --card CSS variable to gray for better contrast", component: "Tokens" },
      { type: "improvement", description: "Updated Label component to use regular font weight", component: "Label" },
      { type: "improvement", description: "Replaced all font-bold with font-medium across showcase", component: "Typography" },
      { type: "improvement", description: "Expanded components list to 54 items in /docs/components", component: "Documentation" },
    ],
  },
  {
    version: "1.0.0",
    date: "2024-11-21",
    changes: [
      { type: "feature", description: "Added Playwright E2E testing with 4 test suites", component: "Testing" },
      { type: "feature", description: "Added visual regression testing with screenshot comparison", component: "Testing" },
      { type: "feature", description: "Added performance benchmarks (LCP, CLS, load times)", component: "Performance" },
      { type: "feature", description: "Added GitHub Actions workflow for E2E tests", component: "CI/CD" },
      { type: "improvement", description: "Production readiness score: 100/100" },
      { type: "improvement", description: "Framework is fully production-ready" },
    ],
  },
  {
    version: "0.10.0",
    date: "2024-11-21",
    changes: [
      { type: "feature", description: "Added TypeDoc for API documentation generation", component: "Documentation" },
      { type: "feature", description: "Added size-limit for bundle size monitoring", component: "Performance" },
      { type: "feature", description: "Added GitHub Actions workflow for bundle size analysis on PRs", component: "CI/CD" },
      { type: "improvement", description: "Bundle size limits: 150kB total, 50kB core components, 30kB themes" },
      { type: "improvement", description: "Production readiness score increased to 90/100" },
    ],
  },
  {
    version: "0.9.0",
    date: "2024-11-21",
    changes: [
      { type: "feature", description: "Added documentation pages for all 5 enterprise components", component: "Documentation" },
      { type: "feature", description: "Added FileUpload, DataTable, Stepper, MultiSelect, DateRangePicker docs", component: "Documentation" },
      { type: "feature", description: "Added Enterprise section to sidebar navigation", component: "Documentation" },
      { type: "improvement", description: "All enterprise components now have Usage Guidelines, CodePreview, and API Reference" },
      { type: "improvement", description: "Total documented components increased to 58" },
    ],
  },
  {
    version: "0.8.0",
    date: "2024-11-21",
    changes: [
      { type: "feature", description: "Added tests for DataTable, MultiSelect, DateRangePicker components", component: "Testing" },
      { type: "feature", description: "Configured Changesets for semantic versioning with GitHub changelog", component: "CI/CD" },
      { type: "feature", description: "Added jsdom mocks for scrollIntoView, PointerEvent, pointer capture", component: "Testing" },
      { type: "improvement", description: "Expanded test coverage to 104 tests across 13 test files" },
      { type: "improvement", description: "All enterprise components now have comprehensive test coverage" },
    ],
  },
  {
    version: "0.7.0",
    date: "2024-11-21",
    changes: [
      { type: "feature", description: "Added tests for Alert, Card, Switch components", component: "Testing" },
      { type: "feature", description: "Added tests for enterprise FileUpload and Stepper components", component: "Testing" },
      { type: "feature", description: "Added accessibility tests with jest-axe for 8 components", component: "Testing" },
      { type: "feature", description: "Configured Dependabot for npm and GitHub Actions security updates", component: "CI/CD" },
      { type: "improvement", description: "Expanded test coverage to 68 tests across 10 test files" },
      { type: "improvement", description: "All core and enterprise components now have unit tests" },
    ],
  },
  {
    version: "0.6.0",
    date: "2024-11-21",
    changes: [
      { type: "feature", description: "Added Vitest testing framework with React Testing Library", component: "Testing" },
      { type: "feature", description: "Added unit tests for Button, Input, Checkbox, Badge components", component: "Testing" },
      { type: "feature", description: "Added GitHub Actions CI workflow with lint, typecheck, and test jobs", component: "CI/CD" },
      { type: "feature", description: "Added test coverage reporting", component: "Testing" },
      { type: "improvement", description: "Infrastructure ready for production with automated testing" },
    ],
  },
  {
    version: "0.5.0",
    date: "2024-11-21",
    changes: [
      { type: "feature", description: "Added FileUpload component with drag-and-drop support", component: "FileUpload" },
      { type: "feature", description: "Added DataTable component with sorting, filtering, and pagination", component: "DataTable" },
      { type: "feature", description: "Added Stepper/Wizard component for multi-step workflows", component: "Stepper" },
      { type: "feature", description: "Added MultiSelect component with search and badges", component: "MultiSelect" },
      { type: "feature", description: "Added DateRangePicker component", component: "DateRangePicker" },
      { type: "improvement", description: "Total components increased to 53 enterprise-ready components" },
    ],
  },
  {
    version: "0.4.0",
    date: "2024-11-21",
    changes: [
      { type: "feature", description: "Enhanced all 38 component documentation pages with Usage Guidelines", component: "Components" },
      { type: "feature", description: "Added CodePreview component for live code examples", component: "Components" },
      { type: "feature", description: "Added UsageGuidelines component with Do's and Don'ts patterns", component: "Components" },
      { type: "feature", description: "Added API Reference tables to all component pages", component: "Components" },
      { type: "improvement", description: "Standardized documentation structure across all components" },
      { type: "improvement", description: "Added comprehensive usage examples for each component" },
      { type: "improvement", description: "Improved accessibility guidance in component documentation" },
    ],
  },
  {
    version: "0.3.0",
    date: "2024-11-21",
    changes: [
      { type: "feature", description: "Added Icons gallery page with search and copy functionality", component: "Icons" },
      { type: "feature", description: "Added Colors page with semantic grouping and status colors", component: "Colors" },
      { type: "feature", description: "Added Design Tokens page with spacing, radius, shadows, typography", component: "Tokens" },
      { type: "feature", description: "Added Changelog page", component: "Changelog" },
      { type: "feature", description: "Added Claude Code agent documentation page", component: "Agent" },
      { type: "improvement", description: "Improved sticky search/filter bars across documentation pages" },
      { type: "improvement", description: "Added tooltips with copy hints for better UX" },
      { type: "improvement", description: "Theme colors now update on theme change via MutationObserver" },
    ],
  },
  {
    version: "0.2.0",
    date: "2024-11-20",
    changes: [
      { type: "feature", description: "Added Charts documentation with Recharts integration", component: "Charts" },
      { type: "feature", description: "Added multiple theme support (Family, Advisor, Admin portals)" },
      { type: "feature", description: "Added ThemeSwitcher component for portal theme selection" },
      { type: "feature", description: "Added Dashboard template", component: "Templates" },
      { type: "feature", description: "Added Profile template", component: "Templates" },
      { type: "feature", description: "Added Constitution template", component: "Templates" },
      { type: "feature", description: "Added Authentication template", component: "Templates" },
      { type: "improvement", description: "Fixed sticky sidebar behavior with self-start positioning" },
      { type: "improvement", description: "Added smooth scroll for anchor navigation" },
      { type: "fix", description: "Fixed GitHub repository URL in header" },
    ],
  },
  {
    version: "0.1.0",
    date: "2024-11-19",
    changes: [
      { type: "feature", description: "Initial release of Reluna UI showcase" },
      { type: "feature", description: "Added 35+ UI components based on shadcn/ui", component: "Components" },
      { type: "feature", description: "Added component documentation with variants and examples" },
      { type: "feature", description: "Added Themes page with theme customization" },
      { type: "feature", description: "Dark mode support with next-themes" },
      { type: "feature", description: "GitHub Pages deployment via GitHub Actions" },
    ],
  },
];

function getChangeIcon(type: ChangeType) {
  switch (type) {
    case "feature":
      return <Sparkles className="h-4 w-4" />;
    case "fix":
      return <Bug className="h-4 w-4" />;
    case "improvement":
      return <Wrench className="h-4 w-4" />;
    case "breaking":
      return <AlertTriangle className="h-4 w-4" />;
    case "deprecation":
      return <AlertTriangle className="h-4 w-4" />;
  }
}

function getChangeBadgeVariant(type: ChangeType): "default" | "secondary" | "destructive" | "outline" {
  switch (type) {
    case "feature":
      return "default";
    case "fix":
      return "secondary";
    case "improvement":
      return "outline";
    case "breaking":
      return "destructive";
    case "deprecation":
      return "destructive";
  }
}

function getChangeLabel(type: ChangeType) {
  switch (type) {
    case "feature":
      return "Feature";
    case "fix":
      return "Fix";
    case "improvement":
      return "Improvement";
    case "breaking":
      return "Breaking";
    case "deprecation":
      return "Deprecated";
  }
}

export default function ChangelogPage() {
  return (
    <div className="container py-6 md:py-10 px-4">
      <div className="mx-auto max-w-[800px] space-y-6 md:space-y-8">
        {/* Hero */}
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-primary/10">
              <GitCommit className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-medium tracking-tight">Changelog</h1>
              <p className="text-sm text-muted-foreground">All notable changes to Reluna UI</p>
            </div>
          </div>
        </div>

        {/* Releases */}
        <div className="space-y-4 md:space-y-6">
          {releases.map((release, index) => (
            <Card key={release.version}>
              <CardHeader className="pb-3 md:pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                    <Package className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    v{release.version}
                  </CardTitle>
                  <time className="text-sm text-muted-foreground">{release.date}</time>
                </div>
                {index === 0 && (
                  <Badge variant="default" className="w-fit mt-2">Latest</Badge>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 md:space-y-3">
                  {release.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="flex items-start gap-2 md:gap-3">
                      <Badge
                        variant={getChangeBadgeVariant(change.type)}
                        className="shrink-0 mt-0.5 gap-1 text-xs"
                      >
                        {getChangeIcon(change.type)}
                        {getChangeLabel(change.type)}
                      </Badge>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs md:text-sm">{change.description}</span>
                        {change.component && (
                          <Badge variant="outline" className="ml-1 md:ml-2 text-[10px] md:text-xs">
                            {change.component}
                          </Badge>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center text-sm text-muted-foreground pt-4 border-t">
          <p>
            For more details, see the{" "}
            <a
              href="https://github.com/vpavlov-me/reui/commits/main"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              commit history
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
