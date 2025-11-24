"use client";

import * as React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Button,
  Input,
  Textarea,
  Badge,
  Separator,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Progress,
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
  Phone,
  MapPin,
  User,
  Building2,
  Calendar,
  Heart,
  Pencil,
  Camera,
  Trash2,
  House,
  ArrowRight,
  MoreVertical,
  Plus,
  Printer,
  Settings,
  ShieldCheck,
  Sparkles,
  ArrowLeft,
  ChevronLeft,
  Calendar as CalendarIcon,
} from "lucide-react";
import { AppHeader } from "@/components/blocks/app-header";
import { HeroBanner } from "@/components/blocks/hero-banner";

// Dashboard Template Data
const dashboardLogo = (
  <Link href="/templates" className="font-medium text-xl flex items-center gap-1">
    <span className="text-primary">(RE:</span>
    <span>Family</span>
  </Link>
);

const dashboardNavItems = [
  { label: "Dashboard", href: "/templates" },
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

// Profile Template Data
const profileLogo = (
  <Link href="/templates" className="font-medium text-xl flex items-center gap-1">
    <span className="text-primary">(RE:</span>
    <span>Family</span>
  </Link>
);

const profileNavItems = [
  { label: "Dashboard", href: "/templates" },
  { label: "Governance", href: "#" },
  { label: "Development", href: "#" },
  { label: "Family Affairs", href: "#" },
  { label: "Tools", href: "#" },
];

const profileUser = {
  name: "Logan Roy",
  email: "logan@example.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
  initials: "LR",
};

// Constitution Template Data
const constitutionLogo = (
  <Link href="/templates" className="flex items-center">
    <svg className="h-8 w-auto" viewBox="0 0 127 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M46.6857 10.0846C40.1027 3.09614 30.189 0.12264 20.7416 2.30298C11.2941 4.48331 3.77699 11.4796 1.06912 20.6123C-1.63874 29.745 0.882305 39.5989 7.66672 46.4L10.3064 43.979C1.45768 34.8436 1.84245 20.4091 11.1658 11.7388C20.4891 3.0684 35.2204 3.44542 44.0691 12.5809L46.6857 10.0846Z" className="fill-foreground" />
      <path d="M11.2455 35.6786V19.671H18.9213C20.1705 19.671 21.2617 19.8884 22.1949 20.323C23.143 20.7577 23.873 21.3722 24.3847 22.1666C24.9115 22.961 25.1749 23.8828 25.1749 24.932C25.1749 25.7863 24.9792 26.5657 24.5879 27.2701C24.2116 27.9596 23.6849 28.5217 23.0076 28.9563C22.3454 29.391 21.5853 29.6608 20.7274 29.7657L20.5468 29.7882L25.6941 35.6786H21.4047L16.7992 30.058H14.9931V35.6786H11.2455ZM18.4247 27.4275C19.3428 27.4275 20.0727 27.2102 20.6145 26.7755C21.1714 26.3259 21.4498 25.7188 21.4498 24.9544C21.4498 24.205 21.1714 23.613 20.6145 23.1783C20.0577 22.7287 19.3277 22.5038 18.4247 22.5038H14.9931V27.4275H18.4247Z" className="fill-foreground" />
      <path d="M39.8146 35.6786H27.7365V19.671H39.5889V22.6837H31.3938V26.2135H38.9793V28.8439H31.3938V32.666H39.8146V35.6786Z" className="fill-foreground" />
      <path d="M46.0585 25.8302C45.4865 25.8302 45.02 25.6578 44.6588 25.3131C44.2976 24.9534 44.1169 24.4962 44.1169 23.9416C44.1169 23.4021 44.2976 22.9599 44.6588 22.6152C45.035 22.2554 45.5016 22.0756 46.0585 22.0756C46.6153 22.0756 47.0744 22.2554 47.4356 22.6152C47.8119 22.9599 48 23.4021 48 23.9416C48 24.4962 47.8194 24.9534 47.4582 25.3131C47.097 25.6578 46.6304 25.8302 46.0585 25.8302ZM46.0585 33.6316C45.4865 33.6316 45.02 33.4593 44.6588 33.1145C44.2976 32.7548 44.1169 32.2977 44.1169 31.7431C44.1169 31.1885 44.2976 30.7389 44.6588 30.3941C45.02 30.0344 45.4865 29.8546 46.0585 29.8546C46.6304 29.8546 47.097 30.0344 47.4582 30.3941C47.8194 30.7389 48 31.1885 48 31.7431C48 32.2977 47.8194 32.7548 47.4582 33.1145C47.097 33.4593 46.6304 33.6316 46.0585 33.6316Z" className="fill-foreground" />
      <path d="M57.497 36H53.656V19.624H65.386V22.89H57.497V26.501H64.397V29.491H57.497V36ZM70.5039 36.299C69.2772 36.299 68.2882 36 67.5369 35.402C66.8009 34.7887 66.4329 33.9607 66.4329 32.918C66.4329 30.6947 68.2882 29.353 71.9989 28.893L74.5059 28.594V28.111C74.5059 27.5437 74.3142 27.0913 73.9309 26.754C73.5629 26.4013 73.0415 26.225 72.3669 26.225C71.7382 26.225 71.2322 26.3937 70.8489 26.731C70.4655 27.053 70.2815 27.5053 70.2969 28.088H66.9619C66.9619 26.8 67.4525 25.7727 68.4339 25.006C69.4305 24.2393 70.7569 23.856 72.4129 23.856C74.0842 23.856 75.4182 24.2547 76.4149 25.052C77.4115 25.834 77.9099 26.892 77.9099 28.226V36H74.5059V34.505H74.2759C73.9079 35.0877 73.3942 35.5323 72.7349 35.839C72.0909 36.1457 71.3472 36.299 70.5039 36.299ZM71.6309 34.068C72.4742 34.068 73.1642 33.8227 73.7009 33.332C74.2375 32.8413 74.5059 32.228 74.5059 31.492V30.664L72.0909 30.963C71.2935 31.055 70.7032 31.2543 70.3199 31.561C69.9519 31.8523 69.7679 32.2127 69.7679 32.642C69.7679 33.0867 69.9289 33.4393 70.2509 33.7C70.5882 33.9453 71.0482 34.068 71.6309 34.068ZM80.331 36V24.224H83.712V25.972H83.942C84.2793 25.328 84.747 24.8143 85.345 24.431C85.943 24.0477 86.61 23.856 87.346 23.856C88.1126 23.856 88.8256 24.063 89.485 24.477C90.1596 24.8757 90.6503 25.4123 90.957 26.087H91.187C91.555 25.397 92.0533 24.8603 92.682 24.477C93.326 24.0783 94.062 23.879 94.89 23.879C95.7486 23.879 96.5153 24.086 97.19 24.5C97.8646 24.8987 98.3936 25.466 98.777 26.202C99.1603 26.938 99.352 27.7737 99.352 28.709V36H95.948V29.284C95.948 28.5633 95.741 27.973 95.327 27.513C94.913 27.0377 94.384 26.7923 93.74 26.777C93.0806 26.777 92.5363 27.0147 92.107 27.49C91.693 27.95 91.486 28.548 91.486 29.284V36H88.059V29.284C88.059 28.5173 87.8673 27.9117 87.484 27.467C87.1006 27.007 86.587 26.777 85.943 26.777C85.2683 26.777 84.7316 27.007 84.333 27.467C83.9343 27.927 83.735 28.5327 83.735 29.284V36H80.331ZM103.599 22.591C103.001 22.591 102.51 22.407 102.127 22.039C101.743 21.6557 101.552 21.1727 101.552 20.59C101.552 20.0073 101.743 19.532 102.127 19.164C102.51 18.7807 103.001 18.589 103.599 18.589C104.197 18.589 104.687 18.7807 105.071 19.164C105.454 19.532 105.646 20.0073 105.646 20.59C105.646 21.1727 105.454 21.6557 105.071 22.039C104.687 22.407 104.197 22.591 103.599 22.591ZM105.301 36H101.897V24.224H105.301V36ZM111.407 36H108.003V18.934H111.407V36ZM116.553 41.313C116.17 41.313 115.748 41.2747 115.288 41.198C114.828 41.1213 114.437 41.0217 114.115 40.899L114.138 38.162C114.384 38.2693 114.667 38.3537 114.989 38.415C115.327 38.4763 115.626 38.507 115.886 38.507C116.546 38.507 117.052 38.3 117.404 37.886C117.757 37.472 118.087 36.8817 118.393 36.115L112.85 24.224H116.507L119.658 31.745H119.888L122.441 24.224H125.983L121.429 36.414C120.816 38.0547 120.141 39.2813 119.405 40.094C118.685 40.9067 117.734 41.313 116.553 41.313Z" className="fill-foreground" />
    </svg>
  </Link>
);

const constitutionNavItems = [
  { label: "Dashboard", href: "/templates" },
  { label: "Governance", href: "#" },
  { label: "Development", href: "#" },
  { label: "Family Affairs", href: "#" },
  { label: "Tools", href: "#" },
];

const constitutionUser = {
  name: "Logan Johns",
  email: "logan@example.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
  initials: "LJ",
};

const constitutionSections = [
  {
    title: "Preamble",
    type: "Preamble",
    status: "Not Started",
    updated: "2025-11-14",
  },
  {
    title: "Values and Mission",
    type: "Values And Mission",
    status: "Not Started",
    updated: "2025-11-14",
  },
  {
    title: "Governance Structure",
    type: "Governance Structure",
    status: "Not Started",
    updated: "2025-11-14",
  },
  {
    title: "Wealth Management",
    type: "Asset Management Principles",
    status: "Not Started",
    updated: "2025-11-14",
  },
  {
    title: "Education and Development",
    type: "Education And Development",
    status: "Not Started",
    updated: "2025-11-14",
  },
  {
    title: "Decision Making Process",
    type: "Decision Making Process",
    status: "Not Started",
    updated: "2025-11-14",
  },
  {
    title: "Succession Planning",
    type: "Succession",
    status: "Not Started",
    updated: "2025-11-14",
  },
  {
    title: "Philanthropy",
    type: "Philanthropy",
    status: "Not Started",
    updated: "2025-11-14",
  },
  {
    title: "Conflict Resolution",
    type: "Conflict Resolution",
    status: "Not Started",
    updated: "2025-11-14",
  },
  {
    title: "Voting Rules and Procedures",
    type: "Voting Rules And Procedures",
    status: "Not Started",
    updated: "2025-11-14",
  },
  {
    title: "Constitution Amendment Process",
    type: "Amendment",
    status: "Not Started",
    updated: "2025-11-14",
  },
  {
    title: "Communication and Family Meetings",
    type: "Communication And Family Meetings",
    status: "Not Started",
    updated: "2025-11-14",
  },
];

const constitutionQuickActions = [
  { label: "Create New Section", icon: Plus },
  { label: "Manage Constitutions", icon: Settings },
  { label: "Generate Full PDF", icon: Printer },
];

// Auth Template Data
const authSlides = [
  {
    title: "Welcome to Reluna Family Governance",
    description: "Your guide to preserving your family's wealth, values, and harmony to thrive across generations.",
  },
  {
    title: "Secure Family Documents",
    description: "Store and manage your family constitution, agreements, and important documents in one secure place.",
  },
  {
    title: "Collaborative Decision Making",
    description: "Engage family members in transparent voting and decision-making processes.",
  },
  {
    title: "Next Generation Education",
    description: "Prepare the next generation with structured learning paths and mentorship programs.",
  },
  {
    title: "Family Meeting Management",
    description: "Schedule, organize, and document family council meetings with ease.",
  },
];

// Dashboard Content Component
function DashboardContent() {
  return (
    <div className="min-h-[720px] bg-muted/30">
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
      </div>
    </div>
  );
}

// Profile Content Component
function ProfileContent() {
  const [isEditOpen, setIsEditOpen] = React.useState(false);

  return (
    <div className="min-h-[720px] bg-muted/30">
      <AppHeader
        logo={profileLogo}
        navItems={profileNavItems}
        user={profileUser}
      />

      {/* Breadcrumb */}
      <div className="border-b bg-background">
        <div className="container max-w-[1048px] flex h-12 items-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Home className="h-4 w-4" />
            <ChevronRight className="h-3 w-3" />
            <span>Page Name</span>
            <ChevronRight className="h-3 w-3" />
          </div>
        </div>
      </div>

      <div className="container max-w-[1048px] py-4">
        <h1 className="text-2xl font-medium mb-4">Profile</h1>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            {/* Tabs */}
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4 mt-4">
                {/* About Me */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">About Me</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      As the head of the family, I focus on long-term governance, ensuring that our values and legacy are preserved across generations. I oversee strategic decisions, mentor next-gen members, and lead discussions on wealth management and philanthropy.
                    </p>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Contact Information</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Mail className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Email</div>
                          <div className="text-sm font-medium">loganroy@sucession.com</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Phone className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Phone</div>
                          <div className="text-sm font-medium">+1 (234) 56-78</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <MapPin className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Adress</div>
                          <div className="text-sm font-medium">123 Park Avenue, New York, NY 10022, USA</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Personal Details */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Personal Details</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <User className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Full Name</div>
                          <div className="text-sm font-medium">Logan Roy</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Users className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Family</div>
                          <div className="text-sm font-medium">Roys</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Building2 className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Company</div>
                          <div className="text-sm font-medium">Reluna</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Calendar className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Birthdate</div>
                          <div className="text-sm font-medium">July 1, 2025</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Information */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Additional Information</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <GraduationCap className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Education</div>
                          <div className="text-sm font-medium">Harvard Business School (Executive Program)</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Heart className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Interests</div>
                          <div className="text-sm font-medium">Philanthropy, Traveling, Sailing</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="mt-4">
                <Card>
                  <CardContent className="py-10 text-center text-muted-foreground">
                    Security settings content...
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences" className="mt-4">
                <Card>
                  <CardContent className="py-10 text-center text-muted-foreground">
                    Preferences content...
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="mt-4">
                <Card>
                  <CardContent className="py-10 text-center text-muted-foreground">
                    Activity history content...
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Profile Card */}
          <div>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face" alt="Logan Roy" />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-medium">Logan Roy</h3>
                  <p className="text-sm text-muted-foreground">Family Member · Roys</p>
                  <p className="text-sm text-muted-foreground">Member since July 2025</p>

                  <div className="w-full mt-6 space-y-2">
                    <Sheet open={isEditOpen} onOpenChange={setIsEditOpen}>
                      <SheetTrigger asChild>
                        <Button className="w-full" variant="default">
                          <Pencil className="h-4 w-4 mr-2" />
                          Edit Profile
                        </Button>
                      </SheetTrigger>
                      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
                        <SheetHeader className="pb-4">
                          <div className="flex items-center justify-between">
                            <SheetTitle className="text-xl">Edit Profile</SheetTitle>
                          </div>
                        </SheetHeader>

                        <div className="space-y-6">
                          {/* About Me Section */}
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-base">About Me</CardTitle>
                              <Separator />
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <Label htmlFor="bio">Bio</Label>
                                <Textarea
                                  id="bio"
                                  placeholder="Enter Text"
                                  className="min-h-[100px] resize-y"
                                />
                              </div>
                            </CardContent>
                          </Card>

                          {/* Contact Information */}
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-base">Contact Information</CardTitle>
                              <Separator />
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="email">
                                  Email <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                  id="email"
                                  type="email"
                                  defaultValue="loganroy@sucession.com"
                                  disabled
                                />
                                <p className="text-xs text-muted-foreground">Email cannot be changed</p>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <div className="flex gap-2">
                                  <Select defaultValue="us">
                                    <SelectTrigger className="w-[100px]">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="us">+1</SelectItem>
                                      <SelectItem value="uk">+44</SelectItem>
                                      <SelectItem value="de">+49</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <Input
                                    id="phone"
                                    placeholder="(234) 45-67 988"
                                    defaultValue="(234) 45-67 988"
                                    className="flex-1"
                                  />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Textarea
                                  id="address"
                                  placeholder="Enter Address"
                                  className="min-h-[80px] resize-y"
                                />
                              </div>
                            </CardContent>
                          </Card>

                          {/* Personal Details */}
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-base">Personal Details</CardTitle>
                              <Separator />
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="firstName">First Name</Label>
                                  <Input id="firstName" placeholder="Enter Your Name" />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="lastName">Last Name</Label>
                                  <Input id="lastName" placeholder="Enter Your Last Name" />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="birthdate">Birthdate</Label>
                                <div className="relative">
                                  <Input id="birthdate" placeholder="Enter Your Birthdate" />
                                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="family">Family</Label>
                                  <Input id="family" defaultValue="Reluna" disabled />
                                  <p className="text-xs text-muted-foreground">Family cannot be changed</p>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="company">Company</Label>
                                  <Input id="company" defaultValue="Reluna" />
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Additional Information */}
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-base">Additional Information</CardTitle>
                              <Separator />
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="education">Education</Label>
                                <Input id="education" placeholder="Enter Your Education" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="interests">Interests</Label>
                                <Input id="interests" placeholder="Enter Your Interests" />
                              </div>
                            </CardContent>
                          </Card>

                          {/* Save Button */}
                          <Button className="w-full" size="lg" onClick={() => setIsEditOpen(false)}>
                            Save
                          </Button>
                        </div>
                      </SheetContent>
                    </Sheet>

                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        <Camera className="h-4 w-4 mr-2" />
                        Change Photo
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove Photo
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stay Updated */}
        <Card className="mt-4">
          <CardContent className="py-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Stay Updated</h3>
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
      </div>
    </div>
  );
}

// Constitution Content Component
function ConstitutionContent() {
  return (
    <div className="min-h-[720px] flex flex-col">
      <AppHeader
        logo={constitutionLogo}
        navItems={constitutionNavItems}
        user={constitutionUser}
      />

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/templates" className="flex items-center gap-2">
                    <House className="h-4 w-4" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-3.5 w-3.5" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <span className="font-normal text-foreground">Family Constitution</span>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Page Title */}
          <div className="mb-4">
            <h1 className="text-3xl font-medium text-foreground">Family Constitution</h1>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-4">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <Card className="rounded-[10px]">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-medium">Constitution Sections</CardTitle>
                </CardHeader>
                <Separator />
                <CardContent className="pt-3">
                  <div className="space-y-1">
                    {constitutionSections.map((section) => (
                      <div
                        key={section.title}
                        className="bg-muted/50 rounded-[10px] p-5 transition-colors hover:bg-muted/70"
                      >
                        <div className="flex gap-4 items-center justify-between w-full">
                          <div className="flex-1 flex flex-col gap-2 min-w-0">
                            <div className="text-sm font-normal">{section.title}</div>
                            <div className="flex gap-1 items-center flex-wrap">
                              <Badge variant="secondary" className="rounded-full text-xs font-normal">
                                {section.type}
                              </Badge>
                              <Badge variant="secondary" className="rounded-full text-xs font-normal">
                                Updated: {section.updated}
                              </Badge>
                              <Badge variant="secondary" className="rounded-full text-xs font-normal">
                                {section.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex gap-1 items-center">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon" className="h-[34px] w-[34px] rounded-[10px]">
                                  <MoreVertical className="h-5 w-5" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                                <DropdownMenuItem>Archive</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                            <Button variant="outline" size="icon" className="h-[34px] w-[34px] rounded-[10px]">
                              <ChevronRight className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-4">
              {/* Quick Actions */}
              <Card className="rounded-[10px]">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-medium">Quick Actions</CardTitle>
                  <CardDescription>
                    Manage sections, exports, and governance reviews.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {constitutionQuickActions.map((action) => (
                    <Button key={action.label} variant="outline" className="w-full justify-between rounded-[10px]">
                      <span className="flex items-center gap-2">
                        <action.icon className="h-4 w-4" />
                        {action.label}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* About */}
              <Card className="rounded-[10px]">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-medium">
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
                  <Button variant="ghost" className="justify-start px-0 h-auto">
                    View Guidelines
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Constitution Status */}
              <Card className="rounded-[10px]">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium">Constitution Status</CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      0%
                    </Badge>
                  </div>
                  <CardDescription>0 of 12 sections complete</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={0} />
                </CardContent>
              </Card>

              {/* Conflict Resolution */}
              <Card className="rounded-[10px]">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-medium">
                    Conflict Resolution Frameworks
                  </CardTitle>
                  <CardDescription>
                    Define approaches for resolving conflicts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full justify-between rounded-[10px]">
                    View Frameworks
                    <ShieldCheck className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* AI Creator CTA */}
              <Card className="bg-gradient-to-br from-primary to-orange-400 text-white rounded-[10px]">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-medium">
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
                  <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90 rounded-[10px]">
                    Start AI-Guided Creation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Authentication Content Component
function AuthContent() {
  const [step, setStep] = React.useState(1);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className="min-h-[720px] bg-[#F5F5F5] flex items-center justify-center p-8">
      <div className="grid lg:grid-cols-2 gap-6 w-full max-w-[1000px]">
        {/* Left Side - Form */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            {/* Back Button */}
            <Button variant="ghost" size="icon" className="mb-6 -ml-2 rounded-full bg-muted">
              <ArrowLeft className="h-4 w-4" />
            </Button>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-semibold mb-2">Create Account</h1>
              <p className="text-sm text-muted-foreground">
                You're about to create a new family<br />
                as a Family Owner.
              </p>
            </div>

            {/* Social Login */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Separator className="flex-1" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Sign up faster with</span>
                <Separator className="flex-1" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <Button variant="outline" className="h-11">
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"/>
                    <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"/>
                    <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"/>
                    <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"/>
                  </svg>
                </Button>
                <Button variant="outline" className="h-11">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </Button>
                <Button variant="outline" className="h-11">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Button>
              </div>
            </div>

            {/* OR Divider */}
            <div className="flex items-center gap-3 mb-6">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">OR</span>
              <Separator className="flex-1" />
            </div>

            {/* Step Indicator */}
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                  1
                </div>
                <span className={`text-sm ${step >= 1 ? 'text-foreground' : 'text-muted-foreground'}`}>Personal Info</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                  2
                </div>
                <span className={`text-sm ${step >= 2 ? 'text-foreground' : 'text-muted-foreground'}`}>Account Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${step >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                  3
                </div>
                <span className={`text-sm ${step >= 3 ? 'text-foreground' : 'text-muted-foreground'}`}>Family Details</span>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthdate">Birthdate</Label>
                <div className="relative">
                  <Input id="birthdate" placeholder="08/27/2025" />
                  <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-11">
                Back
              </Button>
              <Button className="h-11" onClick={() => setStep(Math.min(step + 1, 3))}>
                Continue
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Right Side - Image Carousel */}
        <div className="hidden lg:block">
          <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50">
            {/* Background Image Placeholder */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=1000&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="relative h-full flex flex-col justify-end p-8">
              <div className="text-white mb-8">
                <h2 className="text-3xl font-semibold mb-3">
                  {authSlides[currentSlide].title}
                </h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  {authSlides[currentSlide].description}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/30 text-white hover:bg-black/50 hover:text-white"
                  onClick={() => setCurrentSlide(prev => prev === 0 ? authSlides.length - 1 : prev - 1)}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {authSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? 'w-6 bg-white'
                          : 'w-2 bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/30 text-white hover:bg-black/50 hover:text-white"
                  onClick={() => setCurrentSlide(prev => prev === authSlides.length - 1 ? 0 : prev + 1)}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Templates Page
export default function TemplatesPage() {
  return (
    <div className="bg-muted/40 py-6 sm:py-8 lg:py-12">
      <div className="container space-y-4 md:space-y-6 px-4">
        <div className="space-y-1 md:space-y-2">d:space-y-2">
          <p className="text-xs md:text-sm text-muted-foreground">Showcase</p>
          <h1 className="text-2xl md:text-3xl font-medium">Templates</h1>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl">
            Explore complete page templates built with Reluna UI components. These templates demonstrate
            real-world layouts for dashboards, profiles, governance tools, and authentication flows.
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-4 md:mb-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="constitution">Constitution</TabsTrigger>
            <TabsTrigger value="auth">Authentication</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <div className="overflow-hidden rounded-2xl md:rounded-[32px] border bg-background shadow-2xl ring-1 ring-black/5">
              <DashboardContent />
            </div>
          </TabsContent>

          <TabsContent value="profile">
            <div className="overflow-hidden rounded-[32px] border bg-background shadow-2xl ring-1 ring-black/5">
              <ProfileContent />
            </div>
          </TabsContent>

          <TabsContent value="constitution">
            <div className="overflow-hidden rounded-[32px] border bg-background shadow-2xl ring-1 ring-black/5">
              <ConstitutionContent />
            </div>
          </TabsContent>

          <TabsContent value="auth">
            <div className="overflow-hidden rounded-[32px] border bg-background shadow-2xl ring-1 ring-black/5">
              <AuthContent />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
