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
    <div className="container py-10">
      <div className="mx-auto max-w-[800px] space-y-8">
        {/* Hero */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <GitCommit className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-medium tracking-tight">Changelog</h1>
              <p className="text-sm text-muted-foreground">All notable changes to Reluna UI</p>
            </div>
          </div>
        </div>

        {/* Releases */}
        <div className="space-y-6">
          {releases.map((release, index) => (
            <Card key={release.version}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    v{release.version}
                  </CardTitle>
                  <time className="text-sm text-muted-foreground">{release.date}</time>
                </div>
                {index === 0 && (
                  <Badge variant="default" className="w-fit mt-2">Latest</Badge>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {release.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="flex items-start gap-3">
                      <Badge
                        variant={getChangeBadgeVariant(change.type)}
                        className="shrink-0 mt-0.5 gap-1"
                      >
                        {getChangeIcon(change.type)}
                        {getChangeLabel(change.type)}
                      </Badge>
                      <div className="flex-1">
                        <span className="text-sm">{change.description}</span>
                        {change.component && (
                          <Badge variant="outline" className="ml-2 text-xs">
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
