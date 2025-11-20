"use client";

import * as React from "react";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  Progress,
  Separator,
} from "@reluna-ui/ui";
import {
  ArrowRight,
  Bell,
  Home,
  Mail,
  MoreHorizontal,
  Plus,
  Printer,
  Settings,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const constitutionSections = [
  {
    title: "Preamble & Principles",
    type: "Preamble",
    status: "Completed",
    updated: "15 Jul, 2025 · 05:56 PM",
  },
  {
    title: "Family Governance Council",
    type: "Governance",
    status: "Completed",
    updated: "15 Jul, 2025 · 05:56 PM",
  },
  {
    title: "Decision Making Framework",
    type: "Process",
    status: "Review",
    updated: "12 Jul, 2025 · 01:12 PM",
  },
  {
    title: "Conflict Resolution Principles",
    type: "Guideline",
    status: "In progress",
    updated: "10 Jul, 2025 · 03:45 PM",
  },
  {
    title: "Education & Next Gen",
    type: "Development",
    status: "Completed",
    updated: "08 Jul, 2025 · 11:20 AM",
  },
  {
    title: "Legacy & Philanthropy",
    type: "Legacy",
    status: "Draft",
    updated: "05 Jul, 2025 · 09:10 AM",
  },
];

const quickActions = [
  { label: "Create New Section", icon: Plus },
  { label: "Manage Constitutions", icon: Settings },
  { label: "Generate Full PDF", icon: Printer },
];

export default function ConstitutionTemplate() {
  return (
    <div className="bg-muted/40 py-8 sm:py-12">
      <div className="container space-y-6">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Template</p>
          <h1 className="text-3xl font-medium">Family Constitution</h1>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Manage the sections, quick actions, and AI guidance that shape your
            family governance constitution all within a focused workspace.
          </p>
        </div>
        <div className="overflow-hidden rounded-[32px] border bg-background shadow-2xl ring-1 ring-black/5">
          <div className="min-h-[720px] bg-muted/30">
            {/* Top Navigation */}
            <div className="border-b bg-background">
              <div className="container max-w-[1048px] flex h-14 items-center justify-between">
                <div className="flex items-center gap-6">
                  <Link
                    href="/templates/dashboard"
                    className="font-medium text-xl flex items-center gap-1"
                  >
                    <span className="text-primary">(RE:</span>
                    <span>Family</span>
                  </Link>
                  <nav className="hidden md:flex items-center gap-1">
                    <Link href="/templates/dashboard">
                      <Button variant="ghost" size="sm">
                        Dashboard
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm">
                      Governance
                    </Button>
                    <Button variant="ghost" size="sm">
                      Development
                    </Button>
                    <Button variant="ghost" size="sm">
                      Family Affairs
                    </Button>
                    <Button variant="ghost" size="sm">
                      Tools
                    </Button>
                  </nav>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Bell className="h-4 w-4" />
                  </Button>
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                      alt="User"
                    />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>

            {/* Breadcrumb */}
            <div className="border-b bg-background">
              <div className="container max-w-[1048px] flex h-12 items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Home className="h-4 w-4" />
                  <span>Page Name</span>
                  <span>›</span>
                  <span>Family Constitution</span>
                </div>
                <Button variant="ghost" size="sm">
                  Manage Access
                </Button>
              </div>
            </div>

            <div className="container max-w-[1048px] py-4 space-y-4">
              <div className="grid gap-4 lg:grid-cols-3">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-4">
                  <Card>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-base">
                        Constitution Sections
                      </CardTitle>
                      <CardDescription>
                        Track each section and keep your governance documents up to date.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {constitutionSections.map((section) => (
                        <div
                          key={section.title}
                          className="rounded-xl border bg-background p-4 shadow-sm"
                        >
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <p className="font-medium">{section.title}</p>
                                <Badge
                                  variant="secondary"
                                  className={
                                    section.status === "Completed"
                                      ? "bg-emerald-50 text-emerald-700"
                                      : "bg-amber-50 text-amber-700"
                                  }
                                >
                                  {section.status}
                                </Badge>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground">
                                <span>
                                  Type{" "}
                                  <span className="font-medium text-foreground">
                                    {section.type}
                                  </span>
                                </span>
                                <span>
                                  Updated{" "}
                                  <span className="font-medium text-foreground">
                                    {section.updated}
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm">
                                View Section
                              </Button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-muted-foreground"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>Edit</DropdownMenuItem>
                                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                                  <DropdownMenuItem>Archive</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="mt-4">
                    <CardContent className="py-6">
                      <div className="grid gap-6 md:grid-cols-2 items-center">
                        <div className="space-y-3">
                          <h3 className="text-lg font-medium">Stay Updated</h3>
                          <p className="text-sm text-muted-foreground">
                            Get insights and updates on family governance best practices
                            delivered every two weeks.
                          </p>
                          <div className="flex gap-2 flex-col sm:flex-row">
                            <Input
                              placeholder="Your Email Address"
                              className="max-w-xs"
                            />
                            <Button>
                              Subscribe
                              <Mail className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-center md:justify-end">
                          <Card className="w-full max-w-[220px] bg-muted">
                            <CardContent className="flex flex-col items-center py-8">
                              <Mail className="h-10 w-10 text-muted-foreground" />
                              <p className="mt-3 text-sm text-muted-foreground text-center">
                                Governance digest straight to your inbox.
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Quick Actions</CardTitle>
                      <CardDescription>
                        Manage sections, exports, and governance reviews.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {quickActions.map((action) => (
                        <Button key={action.label} variant="outline" className="w-full justify-between">
                          <span className="flex items-center gap-2">
                            <action.icon className="h-4 w-4" />
                            {action.label}
                          </span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        About Family Constitution
                      </CardTitle>
                      <CardDescription>
                        Establish shared values and procedures.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        Develop and refine your constitution to create a resilient
                        governance foundation for the family.
                      </p>
                      <Button variant="ghost" className="justify-start px-0">
                        View Guidelines
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">Constitution Status</CardTitle>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          25%
                        </Badge>
                      </div>
                      <CardDescription>3 of 12 sections complete</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Progress value={25} />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Conflict Resolution Frameworks
                      </CardTitle>
                      <CardDescription>
                        Define approaches for resolving conflicts.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full justify-between">
                        View Frameworks
                        <ShieldCheck className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-primary to-orange-400 text-white">
                    <CardHeader>
                      <CardTitle className="text-base">
                        Try our AI-Guided Constitution Creator
                      </CardTitle>
                      <CardDescription className="text-white/80">
                        Answer questions about your values, governance preferences, and goals.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-white/90 pb-4">
                        <Sparkles className="h-4 w-4" />
                        Personalized draft ready in minutes.
                      </div>
                      <Button variant="secondary" className="w-full bg-white text-primary">
                        Start AI-Guided Creation
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Footer */}
              <footer className="space-y-6">
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <div className="font-medium text-lg mb-4 flex items-center gap-1">
                      <span className="text-primary">(RE:</span>
                      <span>Family</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Reluna Family platform for managing family wealth, governance,
                      and knowledge transfer across generations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Platform</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Family Constitution</li>
                      <li>Family Council</li>
                      <li>Decision Making</li>
                      <li>Conflict Resolution</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Education</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Learning Paths</li>
                      <li>Mentorship</li>
                      <li>Resources</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Legal</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Privacy Policy</li>
                      <li>Terms of Service</li>
                      <li>Data Processing</li>
                      <li>Cookies</li>
                    </ul>
                  </div>
                </div>
                <Separator className="mb-4" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground gap-2">
                  <span>© 2025 Reluna Family. All rights reserved v0.1.3 Beta</span>
                  <div className="flex items-center gap-2">
                    <span>Sitemap</span>
                    <span>·</span>
                    <span>☼</span>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
