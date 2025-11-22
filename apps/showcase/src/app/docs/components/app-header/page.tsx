"use client";

import * as React from "react";
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
} from "@reluna-ui/ui";
import {
  Bell,
  ChevronDown,
  Menu,
  House,
} from "lucide-react";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";
import Link from "next/link";

export default function AppHeaderPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">AppHeader</h1>
        <p className="text-lg text-muted-foreground">
          A configurable application header component that combines logo, navigation, notifications, and user menu. Part of the template/organism tier in atomic design.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <p className="text-muted-foreground">
          The AppHeader component is typically imported from your application components, not directly from @reluna-ui/ui, as it's an organism-level component.
        </p>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { AppHeader } from "@/components/blocks/app-header"`}</code>
        </pre>
      </section>

      {/* Atomic Design Info */}
      <section className="space-y-4">
        <h2 id="atomic-design" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Atomic Design Classification
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Organism / Template Level</CardTitle>
            <CardDescription>
              AppHeader is a composition of multiple atoms and molecules
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Composed From:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• <code>Button</code> - Atom (Navigation and action buttons)</li>
                <li>• <code>Avatar</code> - Atom (User profile picture)</li>
                <li>• <code>DropdownMenu</code> - Molecule (Navigation dropdowns)</li>
                <li>• <code>Badge</code> - Atom (Notification indicator)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Reusability:</h3>
              <p className="text-sm text-muted-foreground">
                Can be reused across all template pages. Manages its own composition and delegates to lower-level components.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Place AppHeader at the top level of your layout",
            "Configure navigation items for your application structure",
            "Include user profile information for authenticated pages",
            "Show notification badge when there are pending items",
            "Use consistent logo and branding",
            "Handle responsive behavior with mobile menu",
            "Keep header sticky for persistent access to navigation",
            "Provide logout and profile actions through user dropdown",
          ]}
          donts={[
            "Don't place multiple AppHeaders on the same page",
            "Don't overload the header with too many navigation items",
            "Don't hide critical navigation behind dropdowns unnecessarily",
            "Don't use AppHeader for local page-level actions",
            "Don't disable the user menu on authenticated pages",
            "Don't mix different header styles in the same application",
            "Don't place content below the header without proper spacing",
            "Don't use header for form inputs or major content",
          ]}
        />
      </section>

      {/* Structure & Zones */}
      <section className="space-y-4">
        <h2 id="structure" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Header Structure & Zones
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Layout Zones</CardTitle>
            <CardDescription>
              AppHeader divides into distinct functional zones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto mb-4">
              <code>{`┌─────────────────────────────────────────────────────────────┐
│ AppHeader                                                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  [Logo]          [Nav Items...]          [Bell] [Avatar]    │
│                                                              │
│  ◄─ Left Zone ──► ◄──────── Center Zone ────────► ◄─ Right ►│
│                                                              │
└─────────────────────────────────────────────────────────────┘`}</code>
            </pre>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium">Left Zone:</span>
                <span className="text-muted-foreground"> Logo and branding</span>
              </div>
              <div>
                <span className="font-medium">Center Zone:</span>
                <span className="text-muted-foreground"> Primary navigation (hidden on mobile)</span>
              </div>
              <div>
                <span className="font-medium">Right Zone:</span>
                <span className="text-muted-foreground"> Notifications, user menu, mobile menu toggle</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Configuration */}
      <section className="space-y-4">
        <h2 id="configuration" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Configuration
        </h2>
        <p className="text-muted-foreground">
          Configure AppHeader through props to customize navigation, branding, and user information.
        </p>
        <CodePreview
          code={`import { AppHeader } from "@/components/blocks/app-header";
import { House, Settings } from "lucide-react";

<AppHeader
  logo={<YourLogo />}
  navItems={[
    { 
      label: "Dashboard", 
      href: "/dashboard", 
      icon: House 
    },
    {
      label: "Governance",
      items: [
        { label: "Constitution", href: "/governance/constitution" },
        { label: "Council", href: "/governance/council" },
      ],
    },
    {
      label: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ]}
  user={{
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatar.jpg",
  }}
  showNotifications={true}
  onNotificationClick={() => console.log("Notifications")}
  onSignOut={() => console.log("Sign out")}
/>`}
        >
          <HeaderPreview />
        </CodePreview>
      </section>

      {/* Navigation Items */}
      <section className="space-y-4">
        <h2 id="navigation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Navigation Items
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Simple vs Dropdown Navigation</CardTitle>
            <CardDescription>
              Support both single links and dropdown menus
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodePreview
              code={`// Simple navigation item
{ 
  label: "Dashboard", 
  href: "/dashboard", 
  icon: House 
}

// Dropdown navigation item
{
  label: "Governance",
  items: [
    { label: "Constitution", href: "/governance/constitution" },
    { label: "Council", href: "/governance/council" },
    { label: "Voting", href: "/governance/voting" },
  ],
}`}
            >
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <p className="text-sm text-muted-foreground mb-3">Simple Item:</p>
                  <Button variant="ghost" size="sm" className="h-8 px-4">
                    <House className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-sm text-muted-foreground mb-3">Dropdown Item:</p>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 px-4">
                        Governance
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Constitution</DropdownMenuItem>
                      <DropdownMenuItem>Council</DropdownMenuItem>
                      <DropdownMenuItem>Voting</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CodePreview>
          </CardContent>
        </Card>
      </section>

      {/* Responsive Behavior */}
      <section className="space-y-4">
        <h2 id="responsive" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Responsive Behavior
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Mobile Adaptations</CardTitle>
            <CardDescription>
              AppHeader automatically adapts to mobile screens
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <span className="font-medium">Desktop (≥768px):</span>
              <p className="text-muted-foreground">Full navigation menu visible, all items shown</p>
            </div>
            <div>
              <span className="font-medium">Mobile (&lt;768px):</span>
              <p className="text-muted-foreground">Navigation collapsed into hamburger menu, logo and user menu remain visible</p>
            </div>
            <div className="mt-4 rounded-lg border p-3 bg-muted/30">
              <p className="text-xs text-muted-foreground">
                Use media queries and responsive containers to ensure proper display across all screen sizes
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* User Menu */}
      <section className="space-y-4">
        <h2 id="user-menu" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          User Menu
        </h2>
        <CodePreview
          code={`// User profile object structure
user={{
  name: "John Doe",
  email: "john@example.com",
  avatar: "/avatar.jpg",      // Optional
  initials: "JD",              // Fallback if avatar missing
}}

// Menu actions
<UserMenu
  user={user}
  onProfileClick={() => navigate("/profile")}
  onSettingsClick={() => navigate("/settings")}
  onSignOut={() => signOut()}
/>`}
        >
          <div className="rounded-lg border p-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                      alt="User avatar"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CodePreview>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 id="api" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          API Reference
        </h2>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-3 text-left font-medium">Prop</th>
                <th className="p-3 text-left font-medium">Type</th>
                <th className="p-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">logo</td>
                <td className="p-3 font-mono text-xs">React.ReactNode</td>
                <td className="p-3 text-xs">Logo element or component</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">navItems</td>
                <td className="p-3 font-mono text-xs">NavItem[]</td>
                <td className="p-3 text-xs">Navigation items configuration</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">user</td>
                <td className="p-3 font-mono text-xs">UserProfile</td>
                <td className="p-3 text-xs">Current user information</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">showNotifications</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 text-xs">Show notifications bell icon</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">onNotificationClick</td>
                <td className="p-3 font-mono text-xs">() =&gt; void</td>
                <td className="p-3 text-xs">Notification button callback</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">onSignOut</td>
                <td className="p-3 font-mono text-xs">() =&gt; void</td>
                <td className="p-3 text-xs">Sign out button callback</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 text-xs">Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 id="best-practices" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Best Practices
        </h2>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">1. Keep Navigation Simple</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Limit navigation items to primary sections. Use dropdowns for sub-items to avoid cognitive overload.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">2. Consistent Branding</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Use the same logo and colors across all pages. Ensure logo links to homepage for user expectations.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">3. Accessibility</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Provide aria-labels for icon buttons, ensure keyboard navigation works, use semantic HTML.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">4. Sticky Positioning</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Keep header sticky for persistent access to navigation and user actions without scrolling.
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

function HeaderPreview() {
  return (
    <header className="sticky top-0 z-50 w-full rounded-t-xl border border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-lg font-medium">
              RE:UI
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="h-8 px-4 rounded-[10px]">
              <House className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 px-4 rounded-[10px]">
                  Governance
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Family Constitution</DropdownMenuItem>
                <DropdownMenuItem>Family Council</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bell className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full p-0">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                      alt="User"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
