"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@reluna-ui/ui";
import { Check, Copy, Search } from "lucide-react";

// Color categories with semantic grouping
const colorCategories = [
  {
    id: "base",
    label: "Base",
    description: "Core background and text colors",
    colors: [
      { name: "background", variable: "--background", description: "Default background" },
      { name: "foreground", variable: "--foreground", description: "Default text" },
      { name: "card", variable: "--card", description: "Card background" },
      { name: "card-foreground", variable: "--card-foreground", description: "Card text" },
      { name: "popover", variable: "--popover", description: "Popover background" },
      { name: "popover-foreground", variable: "--popover-foreground", description: "Popover text" },
    ],
  },
  {
    id: "brand",
    label: "Brand",
    description: "Primary and secondary brand colors",
    colors: [
      { name: "primary", variable: "--primary", description: "Primary actions" },
      { name: "primary-foreground", variable: "--primary-foreground", description: "Primary text" },
      { name: "secondary", variable: "--secondary", description: "Secondary actions" },
      { name: "secondary-foreground", variable: "--secondary-foreground", description: "Secondary text" },
    ],
  },
  {
    id: "ui",
    label: "UI Elements",
    description: "Muted and accent colors for UI",
    colors: [
      { name: "muted", variable: "--muted", description: "Muted background" },
      { name: "muted-foreground", variable: "--muted-foreground", description: "Muted text" },
      { name: "accent", variable: "--accent", description: "Accent background" },
      { name: "accent-foreground", variable: "--accent-foreground", description: "Accent text" },
    ],
  },
  {
    id: "status",
    label: "Status Colors",
    description: "Colors for different states and feedback",
    colors: [
      { name: "destructive", variable: "--destructive", description: "Error/danger" },
      { name: "destructive-foreground", variable: "--destructive-foreground", description: "Error text" },
      { name: "success", variable: "--success", description: "Success state" },
      { name: "success-foreground", variable: "--success-foreground", description: "Success text" },
      { name: "warning", variable: "--warning", description: "Warning state" },
      { name: "warning-foreground", variable: "--warning-foreground", description: "Warning text" },
      { name: "info", variable: "--info", description: "Info state" },
      { name: "info-foreground", variable: "--info-foreground", description: "Info text" },
    ],
  },
  {
    id: "borders",
    label: "Borders & Focus",
    description: "Border and interactive state colors",
    colors: [
      { name: "border", variable: "--border", description: "Default border" },
      { name: "input", variable: "--input", description: "Input border" },
      { name: "ring", variable: "--ring", description: "Focus ring" },
    ],
  },
  {
    id: "chart",
    label: "Chart Colors",
    description: "Colors for data visualization",
    colors: [
      { name: "chart-1", variable: "--chart-1", description: "Chart series 1" },
      { name: "chart-2", variable: "--chart-2", description: "Chart series 2" },
      { name: "chart-3", variable: "--chart-3", description: "Chart series 3" },
      { name: "chart-4", variable: "--chart-4", description: "Chart series 4" },
      { name: "chart-5", variable: "--chart-5", description: "Chart series 5" },
    ],
  },
];

// Portal-specific colors
const portalColors = [
  {
    key: "family",
    name: "Family Portal",
    primary: "#FB6428",
    description: "Warm orange theme for family users",
  },
  {
    key: "advisor",
    name: "Advisor Portal",
    primary: "#005CCD",
    description: "Professional blue theme for advisors",
  },
  {
    key: "admin",
    name: "Admin Portal",
    primary: "#8FCD00",
    description: "Vibrant lime theme for administrators",
  },
];

function ColorSwatch({
  name,
  variable,
  description,
}: {
  name: string;
  variable: string;
  description: string;
}) {
  const [copied, setCopied] = React.useState(false);
  const [computedColor, setComputedColor] = React.useState("");

  // Update computed color on mount and theme changes
  React.useEffect(() => {
    const updateColor = () => {
      const root = document.documentElement;
      const style = getComputedStyle(root);
      const value = style.getPropertyValue(variable).trim();
      setComputedColor(value ? `hsl(${value})` : "");
    };

    updateColor();

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class" || mutation.attributeName === "style") {
          updateColor();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    return () => observer.disconnect();
  }, [variable]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(`var(${variable})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const isForeground = name.includes("foreground");
  const baseName = name.replace("-foreground", "");

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={copyToClipboard}
          className="group relative flex flex-col gap-3 p-4 rounded-xl border bg-card hover:bg-accent/50 hover:border-primary/50 transition-all duration-200"
        >
          {/* Color preview with foreground text */}
          <div
            className="h-14 w-full rounded-lg border flex items-center justify-center text-xs font-medium"
            style={{
              backgroundColor: isForeground ? `hsl(var(--${baseName}))` : computedColor || `hsl(var(${variable}))`,
              color: isForeground ? computedColor || `hsl(var(${variable}))` : `hsl(var(--${baseName}-foreground))`,
            }}
          >
            {isForeground ? "Aa" : "Aa"}
          </div>

          {/* Color info */}
          <div className="space-y-1 text-left">
            <div className="font-medium text-sm truncate">{name}</div>
            <div className="text-xs text-muted-foreground truncate">{description}</div>
          </div>

          {/* Copy indicator */}
          {copied && (
            <div className="absolute inset-0 flex items-center justify-center bg-primary rounded-xl animate-in fade-in zoom-in duration-200">
              <Check className="h-5 w-5 text-primary-foreground" />
            </div>
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="text-xs">
        <p>Click to copy: <code className="bg-muted px-1 rounded">var({variable})</code></p>
      </TooltipContent>
    </Tooltip>
  );
}

function PortalColorCard({
  name,
  primary,
  description,
}: {
  name: string;
  primary: string;
  description: string;
}) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(primary);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={copyToClipboard}
          className="group text-left w-full"
        >
          <Card className="hover:border-primary/50 transition-colors relative overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div
                  className="h-12 w-12 rounded-full shrink-0 ring-2 ring-border"
                  style={{ backgroundColor: primary }}
                />
                <div className="min-w-0">
                  <CardTitle className="text-base font-medium">{name}</CardTitle>
                  <code className="text-xs text-muted-foreground">{primary}</code>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
            {copied && (
              <div className="absolute inset-0 flex items-center justify-center bg-primary animate-in fade-in zoom-in duration-200">
                <Check className="h-5 w-5 text-primary-foreground" />
              </div>
            )}
          </Card>
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="text-xs">
        <p>Click to copy HEX: <code className="bg-muted px-1 rounded">{primary}</code></p>
      </TooltipContent>
    </Tooltip>
  );
}

export default function ColorsPage() {
  const [searchQuery, setSearchQuery] = React.useState("");

  // Filter colors based on search
  const filteredCategories = React.useMemo(() => {
    if (!searchQuery.trim()) return colorCategories;

    const query = searchQuery.toLowerCase();
    return colorCategories
      .map((category) => ({
        ...category,
        colors: category.colors.filter(
          (color) =>
            color.name.toLowerCase().includes(query) ||
            color.description.toLowerCase().includes(query) ||
            color.variable.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.colors.length > 0);
  }, [searchQuery]);

  const totalColors = filteredCategories.reduce((acc, cat) => acc + cat.colors.length, 0);

  return (
    <TooltipProvider delayDuration={300}>
      <div className="space-y-8">
          {/* Hero */}
          <div className="space-y-4">
            <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
              Colors
            </h1>
            <p className="text-lg text-muted-foreground">
              Theme colors that adapt to your selected portal. Click any color to copy the CSS variable.
            </p>
          </div>

          {/* Search */}
          <div className="sticky top-14 z-10 bg-background/95 backdrop-blur -mx-4 px-4 py-4 border-b">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search colors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {totalColors} colors found
            </p>
          </div>

          {/* Portal Colors */}
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-medium">Portal Themes</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Click to copy the primary HEX color
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {portalColors.map((portal) => (
                <PortalColorCard
                  key={portal.key}
                  name={portal.name}
                  primary={portal.primary}
                  description={portal.description}
                />
              ))}
            </div>
          </section>

          {/* Theme Colors by Category */}
          {filteredCategories.map((category) => (
            <section key={category.id} className="space-y-4">
              <div>
                <h2 className="text-xl font-medium">{category.label}</h2>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
              <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.colors.map((color) => (
                  <ColorSwatch
                    key={color.name}
                    name={color.name}
                    variable={color.variable}
                    description={color.description}
                  />
                ))}
              </div>
            </section>
          ))}

          {/* Empty state */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No colors found for &quot;{searchQuery}&quot;</p>
            </div>
          )}

          {/* Usage */}
          <section className="space-y-4 border-t pt-8">
            <h2 className="text-2xl font-medium">Usage</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base font-medium">In Tailwind Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="overflow-x-auto rounded bg-muted p-4 text-sm">
                    <code>{`<div className="bg-primary text-primary-foreground">
  Primary button
</div>

<p className="text-muted-foreground">
  Muted text
</p>

<div className="bg-success text-success-foreground">
  Success message
</div>

<div className="bg-warning text-warning-foreground">
  Warning alert
</div>`}</code>
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base font-medium">In Custom CSS</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="overflow-x-auto rounded bg-muted p-4 text-sm">
                    <code>{`.custom-element {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border: 1px solid hsl(var(--border));
}

.status-success {
  background: hsl(var(--success));
  color: hsl(var(--success-foreground));
}

.status-warning {
  background: hsl(var(--warning));
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </section>
      </div>
    </TooltipProvider>
  );
}
