"use client";

import * as React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Button,
  Input,
  Badge,
  Separator,
} from "@reluna-ui/ui";
import {
  Home,
  ChevronRight,
  RefreshCw,
  Keyboard,
  Users,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  FileText,
  Vote,
  Mail,
  Bell,
} from "lucide-react";
import { AppHeader } from "@/components/blocks/app-header";
import { AppFooter } from "@/components/blocks/app-footer";
import { HeroBanner } from "@/components/blocks/hero-banner";

// Mock data
const dashboardLogo = (
  <Link href="/templates/dashboard" className="font-medium text-xl flex items-center gap-1">
    <span className="text-primary">(RE:</span>
    <span>Family</span>
  </Link>
);

const dashboardNavItems = [
  { label: "Dashboard", href: "/templates/dashboard" },
  { label: "Governance", href: "#" },
  { label: "Development", href: "#" },
  { label: "Family Affairs", href: "#" },
  { label: "Tools", href: "#" },
];

const dashboardUser = {
  name: "Logan Johns",
  email: "logan@example.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
  initials: "LJ",
};

const familyOverview = [
  { label: "Family Members", value: 6, icon: Users },
  { label: "Upcoming Meetings", value: 2, icon: CalendarDays },
  { label: "Pending Decisions", value: 3, icon: CheckCircle2 },
  { label: "Education Modules", value: 0, icon: GraduationCap },
];

const quickActions = [
  { label: "Constitution", icon: FileText },
  { label: "Family Council", icon: Users },
  { label: "Decisions", icon: Vote },
  { label: "Education", icon: GraduationCap },
];

const upcomingMeetings = [
  { title: "Family Council Kick Off", date: "July 9, 2025", time: "06:00 PM — 7:00 PM" },
  { title: "Family Council Kick Off", date: "July 9, 2025", time: "06:00 PM — 7:00 PM" },
  { title: "Family Council Kick Off", date: "July 9, 2025", time: "06:00 PM — 7:00 PM" },
  { title: "Family Council Kick Off", date: "July 9, 2025", time: "06:00 PM — 7:00 PM" },
  { title: "Family Council Kick Off", date: "July 9, 2025", time: "06:00 PM — 7:00 PM" },
];

const recentActivity = [
  { title: "Family Council Kick Off", date: "July 9, 2026" },
  { title: "Family Council Kick Off", date: "July 9, 2026", time: "06:00 PM — 7:00 PM" },
  { title: "Family Council Kick Off", date: "July 9, 2026", time: "06:00 PM — 7:00 PM" },
  { title: "Family Council Kick Off", date: "July 9, 2026", time: "06:00 PM — 7:00 PM" },
  { title: "Family Council Kick Off", date: "July 9, 2026", time: "06:00 PM — 7:00 PM" },
];

export default function DashboardTemplate() {
  return (
    <div className="bg-muted/40 py-8 sm:py-12">
      <div className="container space-y-6">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Template</p>
          <h1 className="text-3xl font-medium">Family Dashboard</h1>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Monitor meetings, activities, and governance workstreams inside a focused portal
            canvas without leaving the showcase.
          </p>
        </div>
        <div className="overflow-hidden rounded-[32px] border bg-background shadow-2xl ring-1 ring-black/5">
          <div className="min-h-[720px] bg-muted/30">
      {/* Header with AppHeader component */}
      <AppHeader
        logo={dashboardLogo}
        navItems={dashboardNavItems}
        user={dashboardUser}
      />

      {/* Breadcrumb & Status Bar */}
      <div className="border-b bg-background">
        <div className="container max-w-[1048px] flex h-12 items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Home className="h-4 w-4" />
            <ChevronRight className="h-3 w-3" />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-muted-foreground">
              Last Updated <span className="text-foreground">1 Min Ago</span>{" "}
              <RefreshCw className="inline h-3 w-3 ml-1" />
            </span>
            <span>
              Auto-refresh <span className="text-primary font-medium">ON</span>{" "}
              <span className="text-primary">*</span>
            </span>
            <span className="text-muted-foreground">
              Press ? for Shortcuts <Keyboard className="inline h-3 w-3 ml-1" />
            </span>
          </div>
        </div>
      </div>

      <div className="container max-w-[1048px] py-4 space-y-4">
        {/* Welcome Banner */}
        <HeroBanner
          user={{
            name: "Logan Roy",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face",
            initials: "LR",
          }}
          stats={[
            { icon: CalendarDays, value: 3, label: "Meetings" },
            { icon: CheckCircle2, value: 2, label: "Tasks" },
            { value: "3", label: "Pending Decisions" },
          ]}
        />

        {/* Family Overview */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-base">Family Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {familyOverview.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/50"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-medium">{item.value}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <Button variant="link" className="h-auto p-0 text-primary text-sm">
                      See More <ChevronRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-base">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action) => (
                <div
                  key={action.label}
                  className="flex flex-col items-center gap-2 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                >
                  <div className="p-3 rounded-lg bg-background">
                    <action.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium">{action.label}</span>
                  <Button variant="link" className="h-auto p-0 text-primary text-sm">
                    See More <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Meetings & Activity */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Upcoming Meetings */}
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Upcoming Meetings</CardTitle>
                <Button variant="link" className="h-auto p-0 text-primary text-sm">
                  View All <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-0">
              {upcomingMeetings.map((meeting, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-l-2 border-primary pl-4"
                >
                  <div>
                    <div className="font-medium text-sm">{meeting.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {meeting.date} · {meeting.time}
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Recent Activity</CardTitle>
                <Button variant="link" className="h-auto p-0 text-primary text-sm">
                  View All <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-0">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-muted">
                      <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{activity.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {activity.date}
                        {activity.time && ` · ${activity.time}`}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Footer with AppFooter component */}
        <AppFooter
          logo={dashboardLogo}
          description="Reluna Family platform for managing family wealth, governance, and knowledge transfer across generations."
          columns={[
            {
              title: "Platform",
              links: [
                { label: "Family Constitution", href: "#" },
                { label: "Family Council", href: "#" },
                { label: "Decision Making", href: "#" },
                { label: "Conflict Resolution", href: "#" },
              ],
            },
            {
              title: "Education",
              links: [
                { label: "Learning Paths", href: "#" },
                { label: "Mentorship", href: "#" },
                { label: "Resources", href: "#" },
              ],
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Data Processing", href: "#" },
                { label: "Cookies", href: "#" },
              ],
            },
          ]}
          copyright="© 2025 Reluna Family. All rights reserved"
          version="v0.1.3"
        />
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}
