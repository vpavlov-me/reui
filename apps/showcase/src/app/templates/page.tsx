"use client";

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
  Input,
  Progress,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@reluna-ui/ui";
import {
  ArrowRight,
  Bell,
  ChevronDown,
  ChevronRight,
  Home,
  LayoutDashboard,
  Plus,
  Printer,
  ScrollText,
  Settings,
  ShieldCheck,
  User
} from "lucide-react";

const templates = [
  {
    title: "Dashboard",
    description: "Family governance dashboard with overview cards, meetings, activities, and quick actions",
    href: "/templates/dashboard",
    icon: LayoutDashboard,
    components: ["Card", "Avatar", "Tabs", "Progress"],
  },
  {
    title: "Profile",
    description: "User profile page with tabs, contact info, personal details, and edit profile sheet modal",
    href: "/templates/profile",
    icon: User,
    components: ["Tabs", "Sheet", "Avatar", "Input"],
  },
  {
    title: "Constitution",
    description: "Family constitution workspace with sections, quick actions, and governance guidance",
    href: "/templates/constitution",
    icon: ScrollText,
    components: ["Progress", "Badge", "Card", "Button"],
  },
  {
    title: "Authentication",
    description: "Multi-step onboarding flow with social auth, carousel, and progress tracker",
    href: "/templates/auth",
    icon: ShieldCheck,
    components: ["Input", "Button", "Separator", "Card"],
  },
];

// Mini preview components for each template
function DashboardPreview() {
  return (
    <div className="rounded-lg border bg-muted/30 overflow-hidden">
      {/* Header */}
      <div className="border-b bg-background px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">(RE: Family</span>
          <div className="hidden sm:flex items-center gap-1">
            {["Dashboard", "Governance", "Development"].map((item, i) => (
              <span key={item} className={`text-xs px-2 py-1 ${i === 0 ? "font-medium" : "text-muted-foreground"}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Bell className="h-3.5 w-3.5 text-muted-foreground" />
          <div className="h-6 w-6 rounded-full bg-muted" />
        </div>
      </div>

      {/* Content */}
      <div className="p-3 space-y-3">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card rounded-md p-2">
              <div className="h-2 w-8 bg-muted rounded mb-1.5" />
              <div className="h-3 w-6 bg-primary/20 rounded" />
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-card rounded-md p-2 space-y-1.5">
            <div className="h-2 w-16 bg-muted rounded" />
            <div className="h-2 w-12 bg-muted/60 rounded" />
          </div>
          <div className="bg-card rounded-md p-2 space-y-1.5">
            <div className="h-2 w-14 bg-muted rounded" />
            <div className="h-2 w-10 bg-muted/60 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfilePreview() {
  return (
    <div className="rounded-lg border bg-muted/30 overflow-hidden">
      {/* Header */}
      <div className="border-b bg-background px-4 py-2.5 flex items-center justify-between">
        <span className="text-sm font-medium">(RE: Family</span>
        <div className="h-6 w-6 rounded-full bg-muted" />
      </div>

      {/* Profile Header */}
      <div className="border-b bg-background p-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/20" />
          <div>
            <div className="h-2.5 w-20 bg-foreground/20 rounded mb-1" />
            <div className="h-2 w-16 bg-muted rounded" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b bg-background px-3 py-2">
        <div className="flex gap-4">
          {["Overview", "Activity", "Settings"].map((tab, i) => (
            <span key={tab} className={`text-xs ${i === 0 ? "text-primary font-medium" : "text-muted-foreground"}`}>
              {tab}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-3 space-y-2">
        <div className="bg-card rounded-md p-2">
          <div className="h-2 w-16 bg-muted rounded mb-1.5" />
          <div className="h-2 w-24 bg-muted/60 rounded" />
        </div>
        <div className="bg-card rounded-md p-2">
          <div className="h-2 w-12 bg-muted rounded mb-1.5" />
          <div className="h-2 w-20 bg-muted/60 rounded" />
        </div>
      </div>
    </div>
  );
}

function ConstitutionPreview() {
  return (
    <div className="rounded-lg border bg-muted/30 overflow-hidden">
      {/* Header */}
      <div className="border-b bg-background px-4 py-2.5 flex items-center justify-between">
        <span className="text-sm font-medium">(RE: Family</span>
        <div className="h-6 w-6 rounded-full bg-muted" />
      </div>

      {/* Breadcrumb */}
      <div className="border-b bg-background px-3 py-1.5">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Home className="h-3 w-3" />
          <ChevronRight className="h-2.5 w-2.5" />
          <span>Constitution</span>
        </div>
      </div>

      {/* Title */}
      <div className="border-b bg-background px-3 py-2">
        <div className="h-3 w-32 bg-foreground/20 rounded" />
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 bg-card rounded-md p-2 space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary/30" />
                <div className="h-2 flex-1 bg-muted rounded" />
              </div>
            ))}
          </div>
          <div className="bg-card rounded-md p-2">
            <div className="h-2 w-12 bg-muted rounded mb-2" />
            <div className="h-1.5 w-full bg-primary/20 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AuthPreview() {
  return (
    <div className="rounded-lg border bg-muted/30 overflow-hidden">
      <div className="p-4 flex items-center justify-center min-h-[140px]">
        <div className="bg-card rounded-lg p-4 w-full max-w-[200px] space-y-3">
          {/* Logo */}
          <div className="text-center">
            <span className="text-xs font-medium">(RE: Family</span>
          </div>

          {/* Form */}
          <div className="space-y-2">
            <div className="h-6 w-full bg-muted/50 rounded border" />
            <div className="h-6 w-full bg-muted/50 rounded border" />
            <div className="h-6 w-full bg-primary rounded" />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-muted" />
            <span className="text-[8px] text-muted-foreground">or</span>
            <div className="h-px flex-1 bg-muted" />
          </div>

          {/* Social */}
          <div className="flex gap-2">
            <div className="h-6 flex-1 bg-muted rounded" />
            <div className="h-6 flex-1 bg-muted rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

const previewComponents: Record<string, () => JSX.Element> = {
  Dashboard: DashboardPreview,
  Profile: ProfilePreview,
  Constitution: ConstitutionPreview,
  Authentication: AuthPreview,
};

export default function TemplatesPage() {
  return (
    <div className="container py-10">
      <div className="space-y-4 mb-8">
        <Badge variant="secondary" className="w-fit">
          Templates
        </Badge>
        <h1 className="text-4xl font-medium tracking-tight">Page Templates</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Complete page examples built with Reluna UI components for a Family Governance Portal.
          Each template demonstrates real-world usage patterns and best practices.
        </p>
      </div>

      <div className="space-y-6">
        {templates.map((template) => {
          const PreviewComponent = previewComponents[template.title];
          return (
            <Card key={template.href}>
              <CardHeader className="gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <template.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{template.title}</CardTitle>
                      <CardDescription className="mt-1">{template.description}</CardDescription>
                    </div>
                  </div>
                  <Link href={template.href}>
                    <Button variant="outline" size="sm" className="gap-1.5">
                      View Full
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {template.components.map((component) => (
                    <Badge key={component} variant="outline">
                      {component}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <PreviewComponent />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
