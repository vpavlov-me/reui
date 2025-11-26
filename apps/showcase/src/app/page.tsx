"use client";

import * as React from "react";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Label,
  Progress,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
} from "@reluna-ui/ui";
import {
  Bell,
  Calendar as CalendarIcon,
  Check,
  ChevronRight,
  FileText,
  Mail,
  Plus,
  Settings,
  Shield,
  Users,
  Vote,
} from "lucide-react";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [emailDigest, setEmailDigest] = React.useState(false);

  return (
    <div className="container py-6 md:py-10">
      {/* Hero Section */}
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-6 md:py-8 lg:py-24 lg:pb-20">
        <Badge variant="secondary" className="mb-2 md:mb-4 text-xs md:text-sm">
          Reluna UI - 40+ Components
        </Badge>
        <h1 className="text-center text-2xl md:text-4xl lg:text-6xl font-medium leading-tight tracking-tighter lg:leading-[1.1]">
          Production-ready component library
        </h1>
        <span className="max-w-[750px] text-center text-base md:text-lg text-muted-foreground px-4">
          40+ beautifully designed, fully accessible components with TypeScript support. 
          Built on Shadcn UI and Radix UI for Family, Advisor, and Admin portals.
        </span>
        <div className="flex w-full flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 py-4 md:pb-10 px-4">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/docs/components">
              Browse all Components
            </Link>
          </Button>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/docs/installation">
              Installation Guide
            </Link>
          </Button>
        </div>
      </section>

      {/* Component Demo Grid */}
      <section className="mx-auto max-w-[1200px] py-6 md:py-8 px-4">
        <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Family Member Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Add Family Member
              </CardTitle>
              <CardDescription>
                Invite a new member to your family portal
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="name@family.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Family Role</Label>
                <Select defaultValue="member">
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="patriarch">Patriarch</SelectItem>
                    <SelectItem value="matriarch">Matriarch</SelectItem>
                    <SelectItem value="member">Member</SelectItem>
                    <SelectItem value="advisor">Advisor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Send Invitation
              </Button>
            </CardFooter>
          </Card>

          {/* Governance Document Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Family Constitution
              </CardTitle>
              <CardDescription>
                Core governance document status
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Document completion</span>
                  <span className="font-medium">78%</span>
                </div>
                <Progress value={78} />
              </div>
              <Separator />
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Mission Statement</span>
                  </div>
                  <Badge variant="secondary">Complete</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Values & Principles</span>
                  </div>
                  <Badge variant="secondary">Complete</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                    <span className="text-sm">Succession Planning</span>
                  </div>
                  <Badge variant="outline">In Progress</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <FileText className="mr-2 h-4 w-4" />
                View Document
              </Button>
            </CardFooter>
          </Card>

          {/* Meeting Scheduler */}
          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                Family Meeting
              </CardTitle>
              <CardDescription>
                Schedule your next family council
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
            <CardFooter>
              <Button className="w-full">Schedule Meeting</Button>
            </CardFooter>
          </Card>

          {/* Active Members */}
          <Card>
            <CardHeader>
              <CardTitle>Active Members</CardTitle>
              <CardDescription>
                Family members currently online
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Eleanor Thompson", role: "Matriarch", avatar: "ET", status: "online" },
                { name: "James Thompson", role: "Member", avatar: "JT", status: "online" },
                { name: "Sarah Thompson", role: "Member", avatar: "ST", status: "away" },
                { name: "Michael Chen", role: "Advisor", avatar: "MC", status: "online" },
              ].map((member) => (
                <div key={member.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>{member.avatar}</AvatarFallback>
                      </Avatar>
                      <span
                        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${
                          member.status === "online" ? "bg-green-500" : "bg-yellow-500"
                        }`}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Voting Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Vote className="h-5 w-5" />
                Active Vote
              </CardTitle>
              <CardDescription>
                Family council decision pending
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-medium">Investment Proposal</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Approve allocation of $50,000 to sustainable energy fund
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Votes received</span>
                  <span className="font-medium">4 of 6</span>
                </div>
                <Progress value={67} />
              </div>
              <div className="flex gap-2">
                <Button className="flex-1" variant="outline">
                  Abstain
                </Button>
                <Button className="flex-1" variant="destructive">
                  Against
                </Button>
                <Button className="flex-1">
                  Approve
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
              <CardDescription>
                Manage your alert preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push Notifications</Label>
                  <p className="text-xs text-muted-foreground">
                    Receive alerts on your device
                  </p>
                </div>
                <Switch
                  checked={notificationsEnabled}
                  onCheckedChange={setNotificationsEnabled}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Digest</Label>
                  <p className="text-xs text-muted-foreground">
                    Weekly summary of activities
                  </p>
                </div>
                <Switch
                  checked={emailDigest}
                  onCheckedChange={setEmailDigest}
                />
              </div>
              <Separator />
              <div className="space-y-3">
                <Label>Notify me about</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="meetings" defaultChecked />
                    <label htmlFor="meetings" className="text-sm">
                      Meeting invitations
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="votes" defaultChecked />
                    <label htmlFor="votes" className="text-sm">
                      New voting items
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="documents" />
                    <label htmlFor="documents" className="text-sm">
                      Document updates
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions with Tabs */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common governance tasks at your fingertips
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="documents">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                  <TabsTrigger value="requests">Requests</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>
                <TabsContent value="documents" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="doc-title">Document Title</Label>
                    <Input id="doc-title" placeholder="Enter document title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="doc-type">Document Type</Label>
                    <Select defaultValue="policy">
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="policy">Policy</SelectItem>
                        <SelectItem value="minutes">Meeting Minutes</SelectItem>
                        <SelectItem value="agreement">Agreement</SelectItem>
                        <SelectItem value="report">Report</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Document
                  </Button>
                </TabsContent>
                <TabsContent value="requests" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="request-type">Request Type</Label>
                    <Select defaultValue="access">
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="access">Access Request</SelectItem>
                        <SelectItem value="funds">Fund Request</SelectItem>
                        <SelectItem value="meeting">Meeting Request</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="request-desc">Description</Label>
                    <Textarea
                      id="request-desc"
                      placeholder="Describe your request..."
                      rows={3}
                    />
                  </div>
                  <Button className="w-full">Submit Request</Button>
                </TabsContent>
                <TabsContent value="reports" className="space-y-4 pt-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Monthly Activity Report</p>
                        <p className="text-sm text-muted-foreground">
                          November 2024
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Financial Summary</p>
                        <p className="text-sm text-muted-foreground">Q3 2024</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    View All Reports
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security
              </CardTitle>
              <CardDescription>
                Protect your family portal
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Two-Factor Auth</p>
                    <p className="text-xs text-muted-foreground">Enabled</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Backup Codes</p>
                    <p className="text-xs text-muted-foreground">8 remaining</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-yellow-100 p-2 dark:bg-yellow-900">
                    <Bell className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Login Alerts</p>
                    <p className="text-xs text-muted-foreground">Configure</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-[980px] py-8 md:py-12 px-4">
        <h2 className="mb-6 md:mb-8 text-center text-xl md:text-2xl font-medium">
          40+ Components Organized Atomically
        </h2>
        <div className="grid gap-3 md:gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[120px] md:h-[140px] flex-col justify-between rounded-md p-4 md:p-6">
              <Users className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              <div className="space-y-1">
                <h3 className="text-sm md:text-base font-medium">Atomic Primitives</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  8 basic components: Button, Input, Label, Badge, Separator, Skeleton, Avatar
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[120px] md:h-[140px] flex-col justify-between rounded-md p-4 md:p-6">
              <FileText className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              <div className="space-y-1">
                <h3 className="text-sm md:text-base font-medium">Form Components</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  13 form controls: Checkbox, Select, Textarea, Switch, Combobox, FileUpload
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[120px] md:h-[140px] flex-col justify-between rounded-md p-4 md:p-6">
              <Vote className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              <div className="space-y-1">
                <h3 className="text-sm md:text-base font-medium">Complex Components</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Table, DataTable, Calendar, Chart, Carousel, DateRangePicker
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-8 grid gap-3 md:gap-4 sm:grid-cols-2">
          <div className="rounded-lg border bg-card p-4 md:p-6">
            <h3 className="text-sm md:text-base font-semibold">100% TypeScript</h3>
            <p className="mt-2 text-xs md:text-sm text-muted-foreground">
              Full type safety with excellent IDE support and autocompletion.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4 md:p-6">
            <h3 className="text-sm md:text-base font-semibold">WCAG 2.1 AA Compliant</h3>
            <p className="mt-2 text-xs md:text-sm text-muted-foreground">
              Accessible by default with keyboard navigation and ARIA support.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4 md:p-6">
            <h3 className="text-sm md:text-base font-semibold">3 Portal Themes</h3>
            <p className="mt-2 text-xs md:text-sm text-muted-foreground">
              Family (Orange), Advisor (Blue), Admin (Lime) with full dark mode support.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4 md:p-6">
            <h3 className="text-sm md:text-base font-semibold">Production Ready</h3>
            <p className="mt-2 text-xs md:text-sm text-muted-foreground">
              Tree-shakeable, optimized bundle, CJS and ESM builds, source maps.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
