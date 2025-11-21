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
  Separator,
} from "@reluna-ui/ui";
import {
  ArrowLeft,
  Bell,
  CalendarDays,
  ChevronRight,
  Clock,
  Home,
  LayoutDashboard,
  LucideIcon,
  MessageSquare,
  Users,
} from "lucide-react";

export default function BlocksPage() {
  return (
    <div className="space-y-10">
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
        <BlockCard
          title="Application Header"
          description="Global navigation shell with brand, section tabs, and quick actions."
        >
          <HeaderPreview />
        </BlockCard>

        <BlockCard
          title="Page Header"
          description="Breadcrumbs, context, and primary actions that sit above the main content."
        >
          <PageHeaderPreview />
        </BlockCard>

        <BlockCard
          title="Application Footer"
          description="Cross-portal footer with primary CTA, helpful links, and ownership details."
        >
          <FooterPreview />
        </BlockCard>
      </div>
    </div>
  );
}

interface BlockCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function BlockCard({ title, description, children }: BlockCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function HeaderPreview() {
  const navItems = [
    { label: "Dashboard", active: true },
    { label: "Governance" },
    { label: "Development" },
    { label: "Family Affairs" },
    { label: "Tools" },
  ];

  return (
    <div className="rounded-2xl border bg-background shadow-sm">
      <div className="flex flex-wrap items-center gap-4 px-6 py-4">
        <Link href="/templates/dashboard" className="flex items-center gap-2 font-semibold text-lg">
          <span className="text-primary">(RE:</span>
          <span>Family</span>
        </Link>
        <nav className="hidden flex-1 items-center gap-1 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? "secondary" : "ghost"}
              size="sm"
              className={item.active ? "bg-primary/10 text-primary" : ""}
            >
              {item.label}
              {!item.active && <ChevronRight className="ml-1 h-3 w-3 text-muted-foreground" />}
            </Button>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            + New Meeting
          </Button>
          <Avatar className="h-9 w-9">
            <AvatarImage
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
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
  const meta: { icon: LucideIcon; label: string; value: string }[] = [
    { icon: CalendarDays, label: "Date", value: "July 11, 2025" },
    { icon: Clock, label: "Time", value: "6:00 – 7:30 PM" },
    { icon: Users, label: "Attendees", value: "12 confirmed" },
  ];

  return (
    <div className="space-y-4 rounded-2xl border bg-background p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="ghost" size="sm" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="mr-1 inline h-3.5 w-3.5" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/templates/dashboard">Governance</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Annual Council</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">Annual Family Council Session</h2>
          <p className="text-sm text-muted-foreground">
            Plan agenda topics, confirm participants, and share prep materials in one place.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Quarterly Rhythm</Badge>
          <Badge className="bg-emerald-100 text-emerald-900">In Progress</Badge>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          {meta.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="h-4 w-4 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-wide">{item.label}</p>
                <p className="font-medium text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
          <Separator orientation="vertical" className="hidden h-8 md:block" />
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="font-medium text-foreground">Add agenda notes</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" size="sm">
            Share Brief
          </Button>
          <Button size="sm">Start Prep Session</Button>
        </div>
      </div>
    </div>
  );
}

function FooterPreview() {
  const columns = [
    {
      title: "Company",
      links: ["About", "Careers", "Press"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Guides", "Templates"],
    },
    {
      title: "Support",
      links: ["Contact", "Status", "Security"],
    },
  ];

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-6">
        <div>
          <p className="text-sm uppercase tracking-wide text-muted-foreground">Need a guided tour?</p>
          <h3 className="text-xl font-semibold">Schedule a family governance workshop</h3>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            View Templates
          </Button>
          <Button size="sm">Talk to Reluna</Button>
        </div>
      </div>

      <div className="grid gap-6 py-6 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <LayoutDashboard className="h-5 w-5 text-primary" />
            Reluna UI
          </Link>
          <p className="text-sm text-muted-foreground">
            Design system for modern family governance portals with React, Tailwind, and Radix primitives.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Reluna</span>
            <span>•</span>
            <span>Family · Advisor · Admin</span>
          </div>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold">{column.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {column.links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="transition-colors hover:text-foreground"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
