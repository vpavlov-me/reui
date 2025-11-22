"use client";

import Link from "next/link";
import { Badge } from "@reluna-ui/ui";
import { Check, Clock, AlertTriangle, FileText, TestTube } from "lucide-react";

type ComponentStatus = "stable" | "beta" | "experimental" | "deprecated";

interface ComponentInfo {
  name: string;
  status: ComponentStatus;
  version: string;
  docsPath?: string;
  hasTests: boolean;
  category: string;
}

const components: ComponentInfo[] = [
  // Form Components
  { name: "Button", status: "stable", version: "0.1.0", docsPath: "/docs/components/button", hasTests: true, category: "Form" },
  { name: "Input", status: "stable", version: "0.1.0", docsPath: "/docs/components/input", hasTests: true, category: "Form" },
  { name: "Textarea", status: "stable", version: "0.1.0", docsPath: "/docs/components/textarea", hasTests: false, category: "Form" },
  { name: "Select", status: "stable", version: "0.1.0", docsPath: "/docs/components/select", hasTests: false, category: "Form" },
  { name: "Checkbox", status: "stable", version: "0.1.0", docsPath: "/docs/components/checkbox", hasTests: true, category: "Form" },
  { name: "Radio Group", status: "stable", version: "0.1.0", docsPath: "/docs/components/radio-group", hasTests: false, category: "Form" },
  { name: "Switch", status: "stable", version: "0.1.0", docsPath: "/docs/components/switch", hasTests: true, category: "Form" },
  { name: "Slider", status: "stable", version: "0.1.0", docsPath: "/docs/components/slider", hasTests: false, category: "Form" },
  { name: "Toggle", status: "stable", version: "0.1.0", docsPath: "/docs/components/toggle", hasTests: false, category: "Form" },
  { name: "Toggle Group", status: "stable", version: "0.1.0", docsPath: "/docs/components/toggle-group", hasTests: false, category: "Form" },
  { name: "Label", status: "stable", version: "0.1.0", docsPath: "/docs/components/label", hasTests: false, category: "Form" },
  { name: "Input OTP", status: "stable", version: "0.1.0", docsPath: "/docs/components/input-otp", hasTests: false, category: "Form" },

  // Layout Components
  { name: "Card", status: "stable", version: "0.1.0", docsPath: "/docs/components/card", hasTests: true, category: "Layout" },
  { name: "Separator", status: "stable", version: "0.1.0", docsPath: "/docs/components/separator", hasTests: false, category: "Layout" },
  { name: "Scroll Area", status: "stable", version: "0.1.0", docsPath: "/docs/components/scroll-area", hasTests: false, category: "Layout" },
  { name: "Resizable", status: "stable", version: "0.1.0", docsPath: "/docs/components/resizable", hasTests: false, category: "Layout" },
  { name: "Aspect Ratio", status: "stable", version: "0.1.0", docsPath: "/docs/components/aspect-ratio", hasTests: false, category: "Layout" },

  // Feedback Components
  { name: "Alert", status: "stable", version: "0.1.0", docsPath: "/docs/components/alert", hasTests: true, category: "Feedback" },
  { name: "Badge", status: "stable", version: "0.1.0", docsPath: "/docs/components/badge", hasTests: true, category: "Feedback" },
  { name: "Progress", status: "stable", version: "0.1.0", docsPath: "/docs/components/progress", hasTests: false, category: "Feedback" },
  { name: "Skeleton", status: "stable", version: "0.1.0", docsPath: "/docs/components/skeleton", hasTests: false, category: "Feedback" },
  { name: "Tooltip", status: "stable", version: "0.1.0", docsPath: "/docs/components/tooltip", hasTests: false, category: "Feedback" },

  // Overlay Components
  { name: "Dialog", status: "stable", version: "0.1.0", docsPath: "/docs/components/dialog", hasTests: false, category: "Overlay" },
  { name: "Alert Dialog", status: "stable", version: "0.1.0", docsPath: "/docs/components/alert-dialog", hasTests: false, category: "Overlay" },
  { name: "Sheet", status: "stable", version: "0.1.0", docsPath: "/docs/components/sheet", hasTests: false, category: "Overlay" },
  { name: "Drawer", status: "stable", version: "0.1.0", docsPath: "/docs/components/drawer", hasTests: false, category: "Overlay" },
  { name: "Popover", status: "stable", version: "0.1.0", docsPath: "/docs/components/popover", hasTests: false, category: "Overlay" },
  { name: "Hover Card", status: "stable", version: "0.1.0", docsPath: "/docs/components/hover-card", hasTests: false, category: "Overlay" },
  { name: "Dropdown Menu", status: "stable", version: "0.1.0", docsPath: "/docs/components/dropdown-menu", hasTests: false, category: "Overlay" },
  { name: "Context Menu", status: "stable", version: "0.1.0", docsPath: "/docs/components/context-menu", hasTests: false, category: "Overlay" },

  // Navigation Components
  { name: "Tabs", status: "stable", version: "0.1.0", docsPath: "/docs/components/tabs", hasTests: false, category: "Navigation" },
  { name: "Accordion", status: "stable", version: "0.1.0", docsPath: "/docs/components/accordion", hasTests: false, category: "Navigation" },
  { name: "Breadcrumb", status: "stable", version: "0.1.0", docsPath: "/docs/components/breadcrumb", hasTests: false, category: "Navigation" },
  { name: "Pagination", status: "stable", version: "0.1.0", docsPath: "/docs/components/pagination", hasTests: false, category: "Navigation" },
  { name: "Collapsible", status: "stable", version: "0.1.0", docsPath: "/docs/components/collapsible", hasTests: false, category: "Navigation" },
  { name: "Command", status: "stable", version: "0.1.0", docsPath: "/docs/components/command", hasTests: false, category: "Navigation" },
  { name: "Combobox", status: "stable", version: "0.1.0", docsPath: "/docs/components/combobox", hasTests: false, category: "Navigation" },

  // Data Display
  { name: "Avatar", status: "stable", version: "0.1.0", docsPath: "/docs/components/avatar", hasTests: false, category: "Data Display" },
  { name: "Table", status: "stable", version: "0.1.0", docsPath: "/docs/components/table", hasTests: false, category: "Data Display" },
  { name: "Calendar", status: "stable", version: "0.1.0", docsPath: "/docs/components/calendar", hasTests: false, category: "Data Display" },

  // Enterprise Components
  { name: "Data Table", status: "beta", version: "0.1.0", docsPath: "/docs/components/data-table", hasTests: true, category: "Enterprise" },
  { name: "Date Range Picker", status: "beta", version: "0.1.0", docsPath: "/docs/components/date-range-picker", hasTests: true, category: "Enterprise" },
  { name: "File Upload", status: "beta", version: "0.1.0", docsPath: "/docs/components/file-upload", hasTests: true, category: "Enterprise" },
  { name: "Multi Select", status: "beta", version: "0.1.0", docsPath: "/docs/components/multi-select", hasTests: true, category: "Enterprise" },
  { name: "Stepper", status: "beta", version: "0.1.0", docsPath: "/docs/components/stepper", hasTests: true, category: "Enterprise" },

  // Other Components
  { name: "Chart", status: "stable", version: "0.1.0", docsPath: "/docs/charts", hasTests: false, category: "Data Display" },
  { name: "Carousel", status: "stable", version: "0.1.0", hasTests: false, category: "Other" },
  { name: "Form", status: "stable", version: "0.1.0", hasTests: false, category: "Form" },
  { name: "Navigation Menu", status: "stable", version: "0.1.0", hasTests: false, category: "Navigation" },
  { name: "Menubar", status: "stable", version: "0.1.0", hasTests: false, category: "Navigation" },
  { name: "Sonner", status: "stable", version: "0.1.0", hasTests: false, category: "Feedback" },
];

function StatusBadge({ status }: { status: ComponentStatus }) {
  const variants: Record<ComponentStatus, { variant: "default" | "secondary" | "destructive" | "outline"; icon: React.ReactNode }> = {
    stable: { variant: "default", icon: <Check className="h-3 w-3 mr-1" /> },
    beta: { variant: "secondary", icon: <Clock className="h-3 w-3 mr-1" /> },
    experimental: { variant: "outline", icon: <TestTube className="h-3 w-3 mr-1" /> },
    deprecated: { variant: "destructive", icon: <AlertTriangle className="h-3 w-3 mr-1" /> },
  };

  const { variant, icon } = variants[status];

  return (
    <Badge variant={variant} className="capitalize">
      {icon}
      {status}
    </Badge>
  );
}

export default function ComponentStatusPage() {
  const categories = [...new Set(components.map(c => c.category))];
  const totalComponents = components.length;
  const stableComponents = components.filter(c => c.status === "stable").length;
  const betaComponents = components.filter(c => c.status === "beta").length;
  const documentedComponents = components.filter(c => c.docsPath).length;
  const testedComponents = components.filter(c => c.hasTests).length;

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Component Status</h1>
        <p className="text-lg text-muted-foreground">
          Overview of all components in the Reluna UI library with their current status, version, and documentation availability.
        </p>
      </div>

      {/* Summary Stats */}
      <section className="space-y-4">
        <h2 id="summary" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Summary
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="rounded-lg border p-4">
            <div className="text-2xl font-bold">{totalComponents}</div>
            <div className="text-sm text-muted-foreground">Total Components</div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="text-2xl font-bold text-green-600">{stableComponents}</div>
            <div className="text-sm text-muted-foreground">Stable</div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="text-2xl font-bold text-yellow-600">{betaComponents}</div>
            <div className="text-sm text-muted-foreground">Beta</div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="text-2xl font-bold text-blue-600">{documentedComponents}</div>
            <div className="text-sm text-muted-foreground">Documented</div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="text-2xl font-bold text-purple-600">{testedComponents}</div>
            <div className="text-sm text-muted-foreground">With Tests</div>
          </div>
        </div>
      </section>

      {/* Status Legend */}
      <section className="space-y-4">
        <h2 id="legend" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Status Legend
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <StatusBadge status="stable" />
            <div>
              <div className="font-medium">Stable</div>
              <div className="text-sm text-muted-foreground">
                Production-ready. API is stable and well-tested.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <StatusBadge status="beta" />
            <div>
              <div className="font-medium">Beta</div>
              <div className="text-sm text-muted-foreground">
                Ready for use but API may change in minor versions.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <StatusBadge status="experimental" />
            <div>
              <div className="font-medium">Experimental</div>
              <div className="text-sm text-muted-foreground">
                Work in progress. Not recommended for production use.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <StatusBadge status="deprecated" />
            <div>
              <div className="font-medium">Deprecated</div>
              <div className="text-sm text-muted-foreground">
                Will be removed in a future version. Use alternative.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components by Category */}
      {categories.map((category) => (
        <section key={category} className="space-y-4">
          <h2 id={category.toLowerCase().replace(/\s+/g, '-')} className="text-2xl font-semibold tracking-tight scroll-mt-20">
            {category}
          </h2>
          <div className="rounded-lg border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-3 text-left font-medium">Component</th>
                  <th className="p-3 text-left font-medium">Status</th>
                  <th className="p-3 text-left font-medium">Version</th>
                  <th className="p-3 text-left font-medium">Docs</th>
                  <th className="p-3 text-left font-medium">Tests</th>
                </tr>
              </thead>
              <tbody>
                {components
                  .filter(c => c.category === category)
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((component) => (
                    <tr key={component.name} className="border-b last:border-0">
                      <td className="p-3 font-medium">{component.name}</td>
                      <td className="p-3">
                        <StatusBadge status={component.status} />
                      </td>
                      <td className="p-3 font-mono text-xs">{component.version}</td>
                      <td className="p-3">
                        {component.docsPath ? (
                          <Link
                            href={component.docsPath}
                            className="inline-flex items-center text-primary hover:underline"
                          >
                            <FileText className="h-4 w-4 mr-1" />
                            View
                          </Link>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="p-3">
                        {component.hasTests ? (
                          <Check className="h-4 w-4 text-green-600" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {/* Changelog Preview */}
      <section className="space-y-4">
        <h2 id="changelog" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Recent Changes
        </h2>
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">v0.1.0</Badge>
              <span className="text-sm text-muted-foreground">Initial Release</span>
            </div>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Initial release of Reluna UI component library</li>
              <li>• {totalComponents} components available</li>
              <li>• Built on Radix UI primitives</li>
              <li>• Full TypeScript support</li>
              <li>• Multiple theme support (Family, Advisor, Admin)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
