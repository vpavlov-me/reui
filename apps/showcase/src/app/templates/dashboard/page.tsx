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
  Separator,
  Badge,
} from "@reluna-ui/ui";
import {
  Home,
  ChevronRight,
  Bell,
  RefreshCw,
  Keyboard,
  Users,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  FileText,
  Vote,
  Mail,
} from "lucide-react";

// Mock data
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
    <div className="min-h-screen bg-muted/30">
      {/* Top Navigation */}
      <div className="border-b bg-background">
        <div className="container max-w-[1048px] flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/templates/dashboard" className="font-medium text-xl flex items-center gap-1">
              <span className="text-primary">(RE:</span>
              <span>Family</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              <Button variant="ghost" size="sm">Dashboard</Button>
              <Button variant="ghost" size="sm">
                Governance <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm">
                Development <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm">
                Family Affairs <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm">
                Tools <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Link href="/templates/profile">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="User" />
                <AvatarFallback>LJ</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </div>

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
        <Card className="bg-gradient-to-r from-primary/80 to-primary border-0 text-white overflow-hidden">
          <CardContent className="py-4">
            <div className="flex items-center gap-3">
              <span className="text-lg">Welcome Back,</span>
              <Avatar className="h-6 w-6 border-2 border-white/50">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face" alt="User" />
                <AvatarFallback className="text-xs">LJ</AvatarFallback>
              </Avatar>
              <span className="font-semibold">Logan Johns</span>
              <span>You Have</span>
              <CalendarDays className="h-4 w-4" />
              <span className="font-semibold">3 Meetings</span>
              <CheckCircle2 className="h-4 w-4" />
              <span className="font-semibold">2 Tasks</span>
              <span>and</span>
              <span className="font-semibold">✦ 3 Pending Decisions</span>
            </div>
          </CardContent>
        </Card>

        {/* Family Overview */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-semibold">Family Overview</CardTitle>
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
            <CardTitle className="text-base font-semibold">Quick Actions</CardTitle>
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
                <CardTitle className="text-base font-semibold">Upcoming Meetings</CardTitle>
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
                <CardTitle className="text-base font-semibold">Recent Activity</CardTitle>
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

        {/* Stay Updated */}
        <Card>
          <CardContent className="py-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Stay Updated</h3>
                <p className="text-sm text-muted-foreground">
                  Get insights and update on family governance best practices delivered every two weeks
                </p>
                <div className="flex gap-2">
                  <Input placeholder="Your Email Address" className="max-w-xs" />
                  <Button>
                    Subscribe <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <div className="w-32 h-24 bg-muted rounded-lg flex items-center justify-center">
                    <Mail className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <Badge className="absolute -top-2 -right-2 bg-primary">1</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="pt-6 border-t">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-medium text-lg mb-4 flex items-center gap-1">
                <span className="text-primary">(RE:</span>
                <span>Family</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Reluna Family platform for managing family wealth, governance, and knowledge transfer across generations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Family Constitution</li>
                <li>Family Council</li>
                <li>Decision Making</li>
                <li>Conflict Resolution</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Education</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Learning Paths</li>
                <li>Mentorship</li>
                <li>Resources</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Data Processing</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <Separator className="mb-4" />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
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
  );
}
