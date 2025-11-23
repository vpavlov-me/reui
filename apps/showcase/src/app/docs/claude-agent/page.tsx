"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@reluna-ui/ui";
import { Bot, CheckCircle2, Code, FileCode2, Palette, Shield } from "lucide-react";

export default function ClaudeAgentPage() {
  return (
    <div className="space-y-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-medium tracking-tight">Claude Code Agent</h1>
              <p className="text-sm text-muted-foreground">Design Advocate</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground">
            Automated agent for validating correct usage of Reluna UI components.
            Works as a "design advocate" to ensure code consistency and quality.
          </p>
        </div>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <CardTitle className="text-sm font-medium">Import Validation</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Validates that all components are imported from @reluna-ui/ui, not from internal paths
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Palette className="h-4 w-4 text-primary" />
                <CardTitle className="text-sm font-medium">CSS Variables</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Ensures CSS variables are used instead of hardcoded colors
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                <CardTitle className="text-sm font-medium">Patterns</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Validates correct usage of component patterns
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Setup */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Setup</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCode2 className="h-4 w-4" />
              CLAUDE.md
            </CardTitle>
            <CardDescription>
              Add the CLAUDE.md file to the root of your project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Claude Code automatically reads this file when connecting to your project and uses
              the rules for code review.
            </p>
            <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
              <code>{`# Copy CLAUDE.md from Reluna UI repository
curl -o CLAUDE.md https://raw.githubusercontent.com/vpavlov-me/reui/main/CLAUDE.md`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Rules */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Validation Rules</h2>

        <Tabs defaultValue="imports" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="imports">Imports</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="a11y">A11y</TabsTrigger>
          </TabsList>

          <TabsContent value="imports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Import Rules</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="default" className="bg-green-500">Correct</Badge>
                  </div>
                  <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
                    <code>{`import { Button, Card, Input } from "@reluna-ui/ui";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@reluna-ui/ui";`}</code>
                  </pre>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="destructive">Incorrect</Badge>
                  </div>
                  <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
                    <code>{`// Don't import from internal paths
import { Button } from "@reluna-ui/ui/components/button";

// Don't use shadcn/ui directly
import { Button } from "@/components/ui/button";

// Don't use raw Radix components
import * as Dialog from "@radix-ui/react-dialog";`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="colors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Color Usage Rules</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="default" className="bg-green-500">Correct</Badge>
                  </div>
                  <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
                    <code>{`<div className="bg-primary text-primary-foreground" />
<div className="bg-muted text-muted-foreground" />
<div className="border-border" />
<div className="bg-card text-card-foreground" />`}</code>
                  </pre>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="destructive">Incorrect</Badge>
                  </div>
                  <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
                    <code>{`// Don't use hardcoded colors
<div className="bg-orange-500 text-white" />
<div className="bg-gray-100 text-gray-600" />
<div className="border-gray-200" />`}</code>
                  </pre>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">Available CSS variables:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-primary" />
                      <code>primary</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-secondary" />
                      <code>secondary</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-muted" />
                      <code>muted</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-accent" />
                      <code>accent</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-destructive" />
                      <code>destructive</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded border bg-background" />
                      <code>background</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="patterns" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Component Patterns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Forms</h4>
                  <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
                    <code>{`import { Label, Input, Button } from "@reluna-ui/ui";

<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="Enter email" />
  </div>
  <Button type="submit">Submit</Button>
</div>`}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Cards</h4>
                  <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
                    <code>{`import {
  Card, CardHeader, CardTitle,
  CardDescription, CardContent, CardFooter, Button,
} from "@reluna-ui/ui";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>{/* Content */}</CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="a11y" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Accessibility Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Always use Label with form inputs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Use asChild pattern for custom triggers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Add sr-only text for icon-only buttons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Follow heading hierarchy (h1 → h2 → h3)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Use semantic HTML elements</span>
                  </li>
                </ul>

                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">Icon-only button example:</h4>
                  <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
                    <code>{`import { Settings } from "lucide-react";

<Button variant="ghost" size="icon">
  <Settings className="h-4 w-4" />
  <span className="sr-only">Settings</span>
</Button>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <Separator />

      {/* Checklist */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Review Checklist</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              {[
                "All imports from @reluna-ui/ui",
                "Colors use CSS variables",
                "Forms have Label components",
                "Buttons have correct variants (default, outline, ghost, destructive)",
                "Cards use sub-components (Header, Content, Footer)",
                "Dialogs use complete component structure",
                "Icons have consistent sizes (h-4 w-4 or h-5 w-5)",
                "Spacing follows design system",
                "Accessibility attributes are present",
                "No duplication of existing components",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-4 w-4 rounded border mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Themes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Theme Support</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-4">
              The library supports multiple themes via CSS variables:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-lg border">
                <div className="text-sm font-medium">Default</div>
                <code className="text-xs text-muted-foreground">light/dark</code>
              </div>
              <div className="text-center p-4 rounded-lg border">
                <div className="text-sm font-medium">Family</div>
                <code className="text-xs text-muted-foreground">family</code>
              </div>
              <div className="text-center p-4 rounded-lg border">
                <div className="text-sm font-medium">Advisor</div>
                <code className="text-xs text-muted-foreground">advisor</code>
              </div>
              <div className="text-center p-4 rounded-lg border">
                <div className="text-sm font-medium">Admin</div>
                <code className="text-xs text-muted-foreground">admin</code>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
