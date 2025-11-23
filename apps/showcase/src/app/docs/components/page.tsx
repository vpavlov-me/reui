"use client";

import * as React from "react";
import Link from "next/link";
import {
  Badge,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@reluna-ui/ui";

const components = [
  // Atomic Components
  { name: "Accordion", href: "/docs/components/accordion", description: "A vertically stacked set of interactive headings that reveal content." },
  { name: "Alert", href: "/docs/components/alert", description: "Callouts for important information, feedback, or warnings." },
  { name: "Alert Dialog", href: "/docs/components/alert-dialog", description: "Modal dialog that interrupts the user with important content." },
  { name: "Aspect Ratio", href: "/docs/components/aspect-ratio", description: "Displays content within a desired ratio." },
  { name: "Avatar", href: "/docs/components/avatar", description: "Image elements with fallbacks for representing users visually." },
  { name: "Badge", href: "/docs/components/badge", description: "Labels and status indicators in a compact format." },
  { name: "Breadcrumb", href: "/docs/components/breadcrumb", description: "Displays the path to the current resource using a hierarchy of links." },
  { name: "Button", href: "/docs/components/button", description: "Clickable buttons with multiple variants, sizes, and states." },
  { name: "Calendar", href: "/docs/components/calendar", description: "A date field component for selecting dates." },
  { name: "Card", href: "/docs/components/card", description: "Container components for grouping related content and actions." },
  { name: "Checkbox", href: "/docs/components/checkbox", description: "Toggle controls for multiple selections or binary choices." },
  { name: "Collapsible", href: "/docs/components/collapsible", description: "An interactive component which expands/collapses a panel." },
  { name: "Combobox", href: "/docs/components/combobox", description: "Autocomplete input with searchable dropdown options." },
  { name: "Command", href: "/docs/components/command", description: "Fast, composable command menu for React." },
  { name: "Context Menu", href: "/docs/components/context-menu", description: "Displays a menu on right-click or long-press." },
  { name: "Data Table", href: "/docs/components/data-table", description: "Advanced table with sorting, filtering, and pagination." },
  { name: "Date Range Picker", href: "/docs/components/date-range-picker", description: "A component for selecting date ranges." },
  { name: "Dialog", href: "/docs/components/dialog", description: "A window overlaid on the primary window for user interaction." },
  { name: "Drawer", href: "/docs/components/drawer", description: "A panel that slides in from the edge of the screen." },
  { name: "Dropdown Menu", href: "/docs/components/dropdown-menu", description: "Displays a menu of actions or options triggered by a button." },
  { name: "File Upload", href: "/docs/components/file-upload", description: "Drag and drop file upload component." },
  { name: "Form", href: "/docs/components/form", description: "Building forms with React Hook Form and Zod validation." },
  { name: "Hover Card", href: "/docs/components/hover-card", description: "For sighted users to preview content behind a link." },
  { name: "Input", href: "/docs/components/input", description: "Text input fields for collecting user data." },
  { name: "Input OTP", href: "/docs/components/input-otp", description: "Accessible one-time password component with copy paste." },
  { name: "Label", href: "/docs/components/label", description: "Accessible labels associated with form controls." },
  { name: "Menubar", href: "/docs/components/menubar", description: "A visually persistent menu common in desktop applications." },
  { name: "Multi Select", href: "/docs/components/multi-select", description: "Select multiple items from a list with tags." },
  { name: "Navigation Menu", href: "/docs/components/navigation-menu", description: "A collection of links for navigating websites." },
  { name: "Pagination", href: "/docs/components/pagination", description: "Navigation for paginated content." },
  { name: "Popover", href: "/docs/components/popover", description: "Displays rich content in a portal, triggered by a button." },
  { name: "Progress", href: "/docs/components/progress", description: "Indicators showing completion progress of tasks." },
  { name: "Radio Group", href: "/docs/components/radio-group", description: "Groups of radio buttons for mutually exclusive selections." },
  { name: "Resizable", href: "/docs/components/resizable", description: "Accessible resizable panel groups and layouts." },
  { name: "Scroll Area", href: "/docs/components/scroll-area", description: "Custom, cross-browser scroll functionality." },
  { name: "Select", href: "/docs/components/select", description: "Dropdown menus for selecting from predefined options." },
  { name: "Separator", href: "/docs/components/separator", description: "Visual dividers for creating boundaries between sections." },
  { name: "Sheet", href: "/docs/components/sheet", description: "Extends Dialog to display complementary content." },
  { name: "Skeleton", href: "/docs/components/skeleton", description: "Placeholder to show while content is loading." },
  { name: "Slider", href: "/docs/components/slider", description: "An input for selecting a value from within a range." },
  { name: "Sonner Toast", href: "/docs/components/sonner", description: "An opinionated toast notification system." },
  { name: "Stepper", href: "/docs/components/stepper", description: "A component for multi-step workflows." },
  { name: "Switch", href: "/docs/components/switch", description: "Toggle switches for immediate on/off binary settings." },
  { name: "Table", href: "/docs/components/table", description: "Responsive tables for displaying tabular data." },
  { name: "Tabs", href: "/docs/components/tabs", description: "Tabbed navigation for organizing content into groups." },
  { name: "Textarea", href: "/docs/components/textarea", description: "Multi-line text input for longer-form content." },
  { name: "Toggle", href: "/docs/components/toggle", description: "Two-state buttons for toolbar actions." },
  { name: "Toggle Group", href: "/docs/components/toggle-group", description: "A set of two-state buttons that can be toggled." },
  { name: "Tooltip", href: "/docs/components/tooltip", description: "Popup that displays information on hover or focus." },
  { name: "Typography", href: "/docs/components/typography", description: "Styles for headings, paragraphs, lists, and text elements." },

  // Layout Components
  { name: "App Header", href: "/docs/components/app-header", description: "Application header with navigation and actions." },
  { name: "App Layout", href: "/docs/components/app-layout", description: "Full application layout with sidebar and header." },
  { name: "App Footer", href: "/docs/components/app-footer", description: "Application footer with links and copyright." },
  { name: "Page Header", href: "/docs/components/page-header", description: "Page header with title, description, and actions." },
];

export default function ComponentsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Badge variant="secondary">Component Library</Badge>
        <h1 className="text-4xl font-medium tracking-tight">
          Components
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Explore all Reluna UI components. Each component page shows supported variants,
          sizes, and interaction states with detailed documentation.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Link key={component.href} href={component.href}>
            <Card className="h-full transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="text-base">{component.name}</CardTitle>
                <CardDescription className="text-sm">
                  {component.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
