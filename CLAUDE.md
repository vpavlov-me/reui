# Reluna UI - Claude Code Guidelines

## Project Overview

Reluna UI is a React component library built on top of Radix UI primitives and styled with Tailwind CSS. It's designed for Family Governance portals with support for multiple themes (Family, Advisor, Admin).

## Package Structure

```
packages/
  ui/          # Core UI components (@reluna-ui/ui)
  themes/      # Theme CSS variables (@reluna-ui/themes)
  icons/       # Icon components (@reluna-ui/icons)
apps/
  showcase/    # Documentation and demo site
```

## Component Import Rules

### Correct Usage

```tsx
// Import components from @reluna-ui/ui
import { Button, Card, Input } from "@reluna-ui/ui";

// Import multiple components in one statement
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@reluna-ui/ui";
```

### Incorrect Usage

```tsx
// DON'T import from internal paths
import { Button } from "@reluna-ui/ui/components/button";

// DON'T import from shadcn/ui directly
import { Button } from "@/components/ui/button";

// DON'T use raw Radix components when Reluna UI wrapper exists
import * as Dialog from "@radix-ui/react-dialog";
```

## Available Components

All components are exported from `@reluna-ui/ui`:

### Form Components
- Button, Input, Textarea, Select, Checkbox, RadioGroup, Switch, Toggle, Label, Slider

### Layout Components
- Card (CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
- Separator, ScrollArea, ResizablePanel, AspectRatio

### Feedback Components
- Alert, Badge, Progress, Skeleton, Tooltip

### Overlay Components
- Dialog, AlertDialog, Sheet, Drawer, Popover, HoverCard, DropdownMenu

### Navigation Components
- Tabs, Accordion, Breadcrumb, Pagination

### Data Display
- Avatar, Table, Calendar

### Typography
- Use Tailwind classes for typography (text-xl, font-medium, etc.)

## Styling Guidelines

### Use CSS Variables

```tsx
// Correct - use semantic color variables
<div className="bg-primary text-primary-foreground" />
<div className="bg-muted text-muted-foreground" />
<div className="border-border" />

// Incorrect - hardcoded colors
<div className="bg-orange-500 text-white" />
<div className="bg-gray-100 text-gray-600" />
```

### Available Color Variables

- `primary` / `primary-foreground` - Brand color (orange)
- `secondary` / `secondary-foreground` - Secondary actions
- `muted` / `muted-foreground` - Subdued content
- `accent` / `accent-foreground` - Highlights
- `destructive` / `destructive-foreground` - Errors/warnings
- `background` / `foreground` - Base colors
- `card` / `card-foreground` - Card surfaces
- `popover` / `popover-foreground` - Floating elements
- `border` - Border color
- `input` - Input borders
- `ring` - Focus rings

### Border Radius

All interactive components use `rounded-[10px]`:
- Button
- Card
- Input
- Select
- Sheet
- Badge (uses `rounded-full` for pill style)

### Cards Without Borders

Cards don't use borders - contrast is achieved through background colors:
- Gray background (`bg-muted/30`) + white card (`bg-card`)
- White background (`bg-background`) + gray card (`bg-muted/50`)

### Input Default State

Inputs have gray background by default (`bg-muted/50`) with border.

### Spacing and Layout

```tsx
// Use consistent spacing scale
<div className="space-y-4" />      // Between sections
<div className="space-y-2" />      // Between related items
<div className="gap-6" />          // Grid/flex gaps
<div className="p-6" />            // Card padding
<div className="py-8 md:py-12" />  // Section padding
```

## Responsive Design

### Breakpoints

- `sm`: 640px - Mobile landscape
- `md`: 768px - Tablet
- `lg`: 1024px - Desktop
- `xl`: 1280px - Large desktop

### Component-Specific Responsive Rules

**Sheet (Side Panel)**
- Mobile: Full width (`w-full`)
- Desktop: Fixed width 700px (`sm:w-[700px]`)

**Navigation**
- Mobile: Hidden, use hamburger menu
- Desktop: Horizontal navigation with dropdowns

**Grid Layouts**
- Mobile: Single column
- Tablet: 2 columns
- Desktop: 3 columns for main content grids

```tsx
// Standard responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" />

// Main content with sidebar
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <div className="lg:col-span-2">{/* Main content */}</div>
  <div>{/* Sidebar */}</div>
</div>
```

### Container Max Widths

- Content pages: `max-w-screen-xl` (1280px)
- Internal app pages: `max-w-[1048px]`

### Typography Scaling

```tsx
// Page titles
<h1 className="text-2xl md:text-3xl font-medium" />

// Section titles
<h2 className="text-lg md:text-xl font-medium" />

// Card titles
<h3 className="text-base font-medium" />
```

### Mobile-First Approach

Always start with mobile styles and add responsive modifiers:

```tsx
// Correct - mobile first
<div className="flex flex-col sm:flex-row" />
<div className="p-4 md:p-6" />
<div className="hidden md:flex" />

// Incorrect - desktop first
<div className="flex-row sm:flex-col" />
```

## Component Patterns

### Forms

```tsx
import { Label, Input, Button } from "@reluna-ui/ui";

<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="Enter email" />
  </div>
  <Button type="submit">Submit</Button>
</div>
```

### Cards with Actions

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from "@reluna-ui/ui";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Dialogs

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from "@reluna-ui/ui";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Content */}
  </DialogContent>
</Dialog>
```

## Accessibility Requirements

1. Always use `Label` with form inputs
2. Use `asChild` pattern for custom trigger elements
3. Include `sr-only` text for icon-only buttons
4. Ensure proper heading hierarchy (h1 > h2 > h3)
5. Use semantic HTML elements

```tsx
// Icon-only button with screen reader text
<Button variant="ghost" size="icon">
  <Settings className="h-4 w-4" />
  <span className="sr-only">Settings</span>
</Button>
```

## Icon Usage

```tsx
import { ChevronRight, Plus, Check } from "lucide-react";

// Icons in buttons
<Button>
  <Plus className="mr-2 h-4 w-4" />
  Add Item
</Button>

// Standalone icons
<ChevronRight className="h-4 w-4 text-muted-foreground" />
```

## Common Mistakes to Avoid

1. **Don't mix component libraries** - Use only Reluna UI components
2. **Don't hardcode colors** - Use CSS variables
3. **Don't skip Label components** - Always label form inputs
4. **Don't use inline styles** - Use Tailwind classes
5. **Don't import from internal paths** - Use package exports only
6. **Don't recreate existing components** - Check if Reluna UI has it first

## File Organization

```
src/
  app/
    page.tsx           # Page components
    layout.tsx         # Layout wrappers
  components/
    feature-name/      # Feature-specific components
      index.tsx
      component.tsx
  lib/
    utils.ts           # Utility functions
```

## Design Review Checklist

When reviewing code for Reluna UI usage:

- [ ] All imports are from `@reluna-ui/ui`
- [ ] Colors use CSS variables, not hardcoded values
- [ ] Forms have proper Label components
- [ ] Buttons have appropriate variants (default, outline, ghost, destructive)
- [ ] Cards use proper sub-components (Header, Content, Footer)
- [ ] Dialogs use the complete component structure
- [ ] Icons are sized consistently (h-4 w-4 for small, h-5 w-5 for medium)
- [ ] Spacing is consistent with the design system
- [ ] Accessibility attributes are present
- [ ] No duplicate or recreated components

## Theme Support

The library supports multiple themes via CSS variables. Use the ThemeSwitcher component or set themes programmatically:

```tsx
// Theme classes are applied to html element
<html className="dark">  // Dark mode
<html className="family"> // Family portal theme
<html className="advisor"> // Advisor portal theme
<html className="admin"> // Admin portal theme
```
