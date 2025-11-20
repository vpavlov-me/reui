"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@reluna-ui/ui";

const componentsList = [
  { name: "Accordion", href: "/docs/components/accordion", description: "Expandable content sections" },
  { name: "Alert", href: "/docs/components/alert", description: "Alert messages" },
  { name: "Alert Dialog", href: "/docs/components/alert-dialog", description: "Modal confirmation dialogs" },
  { name: "Aspect Ratio", href: "/docs/components/aspect-ratio", description: "Maintain aspect ratios" },
  { name: "Avatar", href: "/docs/components/avatar", description: "User avatars" },
  { name: "Badge", href: "/docs/components/badge", description: "Status badges" },
  { name: "Breadcrumb", href: "/docs/components/breadcrumb", description: "Navigation breadcrumbs" },
  { name: "Button", href: "/docs/components/button", description: "Clickable buttons with variants" },
  { name: "Calendar", href: "/docs/components/calendar", description: "Date picker calendar" },
  { name: "Card", href: "/docs/components/card", description: "Content containers" },
  { name: "Checkbox", href: "/docs/components/checkbox", description: "Toggle checkboxes" },
  { name: "Collapsible", href: "/docs/components/collapsible", description: "Expandable panels" },
  { name: "Dialog", href: "/docs/components/dialog", description: "Modal dialogs" },
  { name: "Drawer", href: "/docs/components/drawer", description: "Slide-in panels" },
  { name: "Dropdown Menu", href: "/docs/components/dropdown-menu", description: "Dropdown menus" },
  { name: "Hover Card", href: "/docs/components/hover-card", description: "Hover preview cards" },
  { name: "Input", href: "/docs/components/input", description: "Text input fields" },
  { name: "Input OTP", href: "/docs/components/input-otp", description: "One-time password input" },
  { name: "Label", href: "/docs/components/label", description: "Form labels" },
  { name: "Pagination", href: "/docs/components/pagination", description: "Page navigation" },
  { name: "Popover", href: "/docs/components/popover", description: "Floating content panels" },
  { name: "Progress", href: "/docs/components/progress", description: "Progress indicators" },
  { name: "Radio Group", href: "/docs/components/radio-group", description: "Radio button groups" },
  { name: "Resizable", href: "/docs/components/resizable", description: "Resizable panels" },
  { name: "Scroll Area", href: "/docs/components/scroll-area", description: "Custom scrollbars" },
  { name: "Select", href: "/docs/components/select", description: "Dropdown select menus" },
  { name: "Separator", href: "/docs/components/separator", description: "Visual dividers" },
  { name: "Sheet", href: "/docs/components/sheet", description: "Slide-out panels" },
  { name: "Skeleton", href: "/docs/components/skeleton", description: "Loading placeholders" },
  { name: "Slider", href: "/docs/components/slider", description: "Range sliders" },
  { name: "Switch", href: "/docs/components/switch", description: "Toggle switches" },
  { name: "Table", href: "/docs/components/table", description: "Data tables" },
  { name: "Tabs", href: "/docs/components/tabs", description: "Tabbed navigation" },
  { name: "Textarea", href: "/docs/components/textarea", description: "Multi-line text input" },
  { name: "Toggle", href: "/docs/components/toggle", description: "Toggle buttons" },
  { name: "Toggle Group", href: "/docs/components/toggle-group", description: "Grouped toggles" },
  { name: "Tooltip", href: "/docs/components/tooltip", description: "Hover tooltips" },
  { name: "Typography", href: "/docs/components/typography", description: "Text styles and headings" },
];

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function TableOfContents() {
  const [toc, setToc] = React.useState<TocItem[]>([]);
  const [activeId, setActiveId] = React.useState<string>("");
  const pathname = usePathname();

  React.useEffect(() => {
    // Wait for content to render
    const timer = setTimeout(() => {
      const headings = document.querySelectorAll("h2[id], h3[id]");
      const items: TocItem[] = Array.from(headings).map((heading) => ({
        id: heading.id,
        text: heading.textContent || "",
        level: heading.tagName === "H2" ? 2 : 3,
      }));
      setToc(items);

      // Set initial active id
      if (items.length > 0) {
        setActiveId(items[0].id);
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "-100px 0px -80% 0px" }
      );

      headings.forEach((heading) => observer.observe(heading));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (toc.length === 0) return null;

  return (
    <div className="space-y-2">
      <p className="font-medium text-sm">On This Page</p>
      <ul className="space-y-2 text-sm">
        {toc.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block text-muted-foreground hover:text-foreground transition-colors",
                item.level === 3 && "pl-4",
                activeId === item.id && "text-foreground font-medium"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isOverviewPage = pathname === "/docs/components";

  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)_200px] lg:gap-10">
      {/* Left Sidebar - Components List */}
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
        <ScrollArea className="h-full py-6 pr-6 lg:py-8">
          <div className="space-y-4">
            <div>
              <Link
                href="/docs/components"
                className={cn(
                  "block py-1 text-sm font-medium transition-colors hover:text-foreground",
                  isOverviewPage ? "text-foreground" : "text-muted-foreground"
                )}
              >
                Overview
              </Link>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground mb-2">Components</p>
              {componentsList.map((component) => (
                <Link
                  key={component.href}
                  href={component.href}
                  className={cn(
                    "block py-1 text-sm transition-colors hover:text-foreground",
                    pathname === component.href
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {component.name}
                </Link>
              ))}
            </div>
          </div>
        </ScrollArea>
      </aside>

      {/* Main Content */}
      <main className="relative py-6 lg:gap-10 lg:py-8">
        <div className="mx-auto w-full min-w-0">
          {children}
        </div>
      </main>

      {/* Right Sidebar - Table of Contents */}
      {!isOverviewPage && (
        <aside className="hidden lg:block">
          <nav className="sticky top-16 -mt-6 pt-6 text-sm">
            <TableOfContents />
          </nav>
        </aside>
      )}
    </div>
  );
}
