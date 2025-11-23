"use client";

import * as React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Button,
} from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function TabsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Tabs</h1>
        <p className="text-lg text-muted-foreground">
          A set of layered sections of content that are displayed one at a time. Tabs help organize content into related groups while conserving screen space.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use tabs to organize related content into distinct sections",
            "Keep tab labels short and descriptive (1-2 words)",
            "Set a sensible default tab that users will most likely need first",
            "Use consistent content structure across all tab panels",
            "Consider using icons alongside labels for better recognition",
            "Ensure tab content is self-contained and doesn't require other tabs",
          ]}
          donts={[
            "Don't use tabs for sequential or wizard-like flows",
            "Don't nest tabs within tabs (use alternative patterns)",
            "Don't use more than 5-7 tabs in a single group",
            "Don't hide critical information in non-default tabs",
            "Don't use tabs when content is essential to see together",
            "Don't make tab labels so long they wrap or truncate",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          Basic tabs with content panels.
        </p>
        <CodePreview
          code={`<Tabs defaultValue="account" className="w-full max-w-lg">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account" className="mt-4">
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>
          Make changes to your account here.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="John Doe" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="@johndoe" />
        </div>
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="password" className="mt-4">
    <Card>
      <CardHeader>
        <CardTitle>Password</CardTitle>
        <CardDescription>
          Change your password here.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="current">Current password</Label>
          <Input id="current" type="password" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="new">New password</Label>
          <Input id="new" type="password" />
        </div>
      </CardContent>
    </Card>
  </TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="account" className="w-full max-w-lg">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@johndoe" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="password" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CodePreview>
      </section>

      {/* Full Width */}
      <section className="space-y-4">
        <h2 id="full-width" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Full Width
        </h2>
        <p className="text-muted-foreground">
          Tabs that span the full width of their container.
        </p>
        <CodePreview
          code={`<Tabs defaultValue="overview" className="w-full max-w-lg">
  <TabsList className="grid w-full grid-cols-3">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="reports">Reports</TabsTrigger>
  </TabsList>
  <TabsContent value="overview" className="mt-4">
    <Card>
      <CardContent className="py-6">
        <p className="text-sm text-muted-foreground">
          Overview content goes here. This shows a summary of your data.
        </p>
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="analytics" className="mt-4">
    <Card>
      <CardContent className="py-6">
        <p className="text-sm text-muted-foreground">
          Analytics content goes here. View detailed metrics and trends.
        </p>
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="reports" className="mt-4">
    <Card>
      <CardContent className="py-6">
        <p className="text-sm text-muted-foreground">
          Reports content goes here. Generate and export your reports.
        </p>
      </CardContent>
    </Card>
  </TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="overview" className="w-full max-w-lg">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <Card>
                <CardContent className="py-6">
                  <p className="text-sm text-muted-foreground">
                    Overview content goes here. This shows a summary of your data.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics" className="mt-4">
              <Card>
                <CardContent className="py-6">
                  <p className="text-sm text-muted-foreground">
                    Analytics content goes here. View detailed metrics and trends.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports" className="mt-4">
              <Card>
                <CardContent className="py-6">
                  <p className="text-sm text-muted-foreground">
                    Reports content goes here. Generate and export your reports.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CodePreview>
      </section>

      {/* Disabled Tab */}
      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled Tab
        </h2>
        <p className="text-muted-foreground">
          Individual tabs can be disabled.
        </p>
        <CodePreview
          code={`<Tabs defaultValue="tab1" className="w-full max-w-lg">
  <TabsList>
    <TabsTrigger value="tab1">Active</TabsTrigger>
    <TabsTrigger value="tab2">Available</TabsTrigger>
    <TabsTrigger value="tab3" disabled>Disabled</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1" className="mt-4">
    <Card>
      <CardContent className="py-6">
        <p className="text-sm text-muted-foreground">
          This is the first tab content.
        </p>
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="tab2" className="mt-4">
    <Card>
      <CardContent className="py-6">
        <p className="text-sm text-muted-foreground">
          This is the second tab content.
        </p>
      </CardContent>
    </Card>
  </TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="tab1" className="w-full max-w-lg">
            <TabsList>
              <TabsTrigger value="tab1">Active</TabsTrigger>
              <TabsTrigger value="tab2">Available</TabsTrigger>
              <TabsTrigger value="tab3" disabled>Disabled</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-4">
              <Card>
                <CardContent className="py-6">
                  <p className="text-sm text-muted-foreground">
                    This is the first tab content.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab2" className="mt-4">
              <Card>
                <CardContent className="py-6">
                  <p className="text-sm text-muted-foreground">
                    This is the second tab content.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
                <th className="p-3 text-left font-medium">Component</th>
                <th className="p-3 text-left font-medium">Prop</th>
                <th className="p-3 text-left font-medium">Type</th>
                <th className="p-3 text-left font-medium">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">Tabs</td>
                <td className="p-3 font-mono text-xs">defaultValue</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">Tabs</td>
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">Tabs</td>
                <td className="p-3 font-mono text-xs">onValueChange</td>
                <td className="p-3 font-mono text-xs">(value: string) =&gt; void</td>
                <td className="p-3 font-mono text-xs">-</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">TabsTrigger</td>
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">required</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">TabsTrigger</td>
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">TabsContent</td>
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">required</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
