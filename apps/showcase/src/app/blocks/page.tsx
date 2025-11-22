"use client";

import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Separator,
} from "@reluna-ui/ui";
import {
  ArrowRight,
  Bell,
  ChevronDown,
  ChevronRight,
  Home,
  Mail,
  Plus,
  Printer,
  SendHorizontal,
  Settings,
  Sun,
} from "lucide-react";

export default function BlocksPage() {
  const blocks: BlockSection[] = [
    {
      title: "Application Header",
      description: "Global navigation shell with brand, section tabs, and quick actions.",
      components: ["Button", "Avatar", "Badge"],
      Preview: HeaderPreview,
    },
    {
      title: "Page Header",
      description: "Breadcrumbs and page title that sit above the main content.",
      components: ["Breadcrumb", "Separator"],
      Preview: PageHeaderPreview,
    },
    {
      title: "Application Footer",
      description: "Newsletter CTA, secondary navigation, and ownership details.",
      components: ["Card", "Input", "Button", "Badge", "Separator"],
      Preview: FooterPreview,
    },
    {
      title: "Template Layout Preview",
      description: "Complete page layout example combining all blocks into a cohesive template.",
      components: ["Card", "Button", "Progress", "Input", "Badge"],
      Preview: TemplateLayoutPreview,
    },
  ];

  return (
    <div className="container space-y-10 py-10">
      <div className="space-y-4">
        <Badge variant="secondary" className="w-fit">
          Blocks
        </Badge>
        <h1 className="text-4xl font-medium tracking-tight">Layout Blocks</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Pre-built application building blocks that combine multiple Reluna UI components for the most common layout needs.
          Drop them into any page to stay consistent with the showcase templates.
        </p>
      </div>

      <div className="space-y-6">
        {blocks.map(({ title, description, components, Preview }) => (
          <Card key={title}>
            <CardHeader className="gap-4">
              <div>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                {components.map((component) => (
                  <Badge key={component} variant="outline">
                    {component}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <Preview />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

interface BlockSection {
  title: string;
  description: string;
  components: string[];
  Preview: () => JSX.Element;
}

function HeaderPreview() {
  const navItems = [
    { label: "Dashboard", icon: null },
    { label: "Governance", icon: ChevronDown },
    { label: "Development", icon: ChevronDown },
    { label: "Family Affairs", icon: ChevronDown },
    { label: "Tools", icon: ChevronDown },
  ];

  return (
    <div className="rounded-xl border bg-background shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <Link href="/templates/dashboard" className="flex items-center gap-1 text-xl font-medium">
            <span className="text-primary">(RE:</span>
            <span>Family</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm transition ${
                  index === 0
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
                {item.icon && <item.icon className="h-3.5 w-3.5" />}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Bell className="h-4 w-4" />
          </Button>
          <Avatar className="h-9 w-9 border">
            <AvatarImage
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
              alt="User avatar"
            />
            <AvatarFallback>LJ</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

function PageHeaderPreview() {
  return (
    <div className="rounded-xl border bg-background shadow-sm">
      <div className="border-b px-6 py-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex items-center gap-1.5 text-muted-foreground">
                <Home className="h-4 w-4" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-3.5 w-3.5" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/templates/dashboard">Page Name</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-3.5 w-3.5" />
            </BreadcrumbSeparator>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-2xl font-semibold tracking-tight">Family Constitution</h1>
      </div>
    </div>
  );
}

function FooterPreview() {
  const columns = [
    {
      title: "Platform",
      links: ["Family Constitution", "Family Council", "Decision Making", "Conflict Resolution"],
    },
    {
      title: "Education",
      links: ["Learning Paths", "Mentorship", "Resources"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Data Processing", "Cookies"],
    },
  ];

  return (
    <div className="space-y-6 rounded-xl border bg-background p-6 shadow-sm">
      {/* Newsletter Section */}
      <div className="grid gap-6 rounded-xl bg-muted/40 p-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Stay Updated</h3>
          <p className="text-sm text-muted-foreground">
            Get insights and update on family governance best practices delivered every two weeks
          </p>
          <div className="flex flex-wrap gap-3">
            <Input placeholder="Your Email Address" className="h-10 flex-1 min-w-[200px]" />
            <Button className="h-10 gap-2">
              Subscribe <SendHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="flex h-20 w-28 items-center justify-center rounded-lg bg-muted">
              <Mail className="h-8 w-8 text-muted-foreground" />
            </div>
            <Badge className="absolute -right-2 -top-2 h-5 w-5 items-center justify-center rounded-full bg-primary p-0 text-xs">
              1
            </Badge>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid gap-8 border-t pt-6 md:grid-cols-4">
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-1 text-lg font-medium">
            <span className="text-primary">(RE:</span>
            <span>Family</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Reluna Family platform for managing family wealth, governance, and knowledge transfer across generations.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-medium">{column.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {column.links.map((link) => (
                <li key={link}>
                  <Link href="#" className="transition-colors hover:text-foreground">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <Separator />
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Reluna Family. All rights reserved</span>
          <span>v0.1.3</span>
          <span>Beta</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:text-foreground">Sitemap</Link>
          <Sun className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

function TemplateLayoutPreview() {
  const quickActions = [
    { label: "Create New Constitution", icon: Plus, variant: "default" as const },
    { label: "Manage Constitutions", icon: Settings, variant: "outline" as const },
    { label: "Generate Full PDF", icon: Printer, variant: "outline" as const },
  ];

  return (
    <div className="rounded-xl border bg-muted/30 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="border-b bg-background">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-6">
            <Link href="/templates/dashboard" className="flex items-center gap-1 text-lg font-medium">
              <span className="text-primary">(RE:</span>
              <span>Family</span>
            </Link>
            <nav className="hidden items-center gap-1 md:flex">
              {["Dashboard", "Governance", "Development", "Family Affairs", "Tools"].map((item, index) => (
                <button
                  key={item}
                  className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-sm transition ${
                    index === 0
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item}
                  {index > 0 && <ChevronDown className="h-3 w-3" />}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              <Bell className="h-4 w-4" />
            </Button>
            <Avatar className="h-8 w-8 border">
              <AvatarImage
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                alt="User"
              />
              <AvatarFallback>LJ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="border-b bg-background">
        <div className="flex items-center gap-2 px-6 py-2.5 text-sm text-muted-foreground">
          <Home className="h-4 w-4" />
          <span>Home</span>
          <ChevronRight className="h-3 w-3" />
          <span>Page Name</span>
          <ChevronRight className="h-3 w-3" />
        </div>
      </div>

      {/* Page Title */}
      <div className="border-b bg-background px-6 py-4">
        <h1 className="text-xl font-semibold">Family Constitution</h1>
      </div>

      {/* Main Content */}
      <div className="p-4">
        <div className="grid gap-4 lg:grid-cols-3">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Constitution Sections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-xl border bg-muted/30 p-8 text-center">
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Printer className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium">Create Your First Constitution</h3>
                  <h4 className="text-sm font-medium text-muted-foreground">with AI-Guided Creator</h4>
                  <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                    Answer questions about your family values, governance preferences, and goals. Our AI will generate a personalized family constitution tailored specifically for your family.
                  </p>
                  <Button variant="outline" className="mt-4 text-primary border-primary hover:bg-primary/5">
                    Start AI-Guided Creation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickActions.map((action, index) => (
                  <Button
                    key={action.label}
                    variant={index === 0 ? "outline" : "ghost"}
                    className={`w-full justify-start ${index === 0 ? "text-primary border-primary/30 hover:bg-primary/5" : ""}`}
                  >
                    <action.icon className="mr-2 h-4 w-4" />
                    {action.label}
                  </Button>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">About Family Constitution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your family constitution establishes shared values, governance structure, and decision-making processes. Develop and refine your constitution to create a strong foundation for your family governance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Constitution Status</CardTitle>
                  <span className="text-sm text-muted-foreground">0%</span>
                </div>
                <CardDescription>0 of 12 sections complete</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-full w-0 rounded-full bg-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Conflict Resolution Frameworks</CardTitle>
                <CardDescription>
                  Define approaches for resolving family conflicts and disagreements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full justify-between">
                  View Frameworks
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
