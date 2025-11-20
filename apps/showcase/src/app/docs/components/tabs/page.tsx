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

export default function TabsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Tabs</h1>
        <p className="text-lg text-muted-foreground">
          A set of layered sections of content that are displayed one at a time. Tabs help organize content into related groups while conserving screen space.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          Basic tabs with content panels.
        </p>
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
      </section>

      <section className="space-y-4">
        <h2 id="full-width" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Full Width
        </h2>
        <p className="text-muted-foreground">
          Tabs that span the full width of their container.
        </p>
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
      </section>

      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled Tab
        </h2>
        <p className="text-muted-foreground">
          Individual tabs can be disabled.
        </p>
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
      </section>
    </div>
  );
}
