"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@reluna-ui/ui";

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
    const timer = setTimeout(() => {
      const headings = document.querySelectorAll("h2[id], h3[id]");
      const items: TocItem[] = Array.from(headings).map((heading) => ({
        id: heading.id,
        text: heading.textContent || "",
        level: heading.tagName === "H2" ? 2 : 3,
      }));
      setToc(items);

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

interface NavItem {
  title: string;
  href: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const docsNavigation: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Foundation",
    items: [
      { title: "Design Tokens", href: "/docs/tokens" },
      { title: "Colors", href: "/docs/colors" },
      { title: "Themes", href: "/docs/themes" },
      { title: "Icons", href: "/docs/icons" },
      { title: "Typography", href: "/docs/components/typography" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Overview", href: "/docs/components" },
      { title: "Accordion", href: "/docs/components/accordion" },
      { title: "Alert", href: "/docs/components/alert" },
      { title: "Alert Dialog", href: "/docs/components/alert-dialog" },
      { title: "Aspect Ratio", href: "/docs/components/aspect-ratio" },
      { title: "Avatar", href: "/docs/components/avatar" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Breadcrumb", href: "/docs/components/breadcrumb" },
      { title: "Button", href: "/docs/components/button" },
      { title: "Calendar", href: "/docs/components/calendar" },
      { title: "Card", href: "/docs/components/card" },
      { title: "Checkbox", href: "/docs/components/checkbox" },
      { title: "Collapsible", href: "/docs/components/collapsible" },
      { title: "Dialog", href: "/docs/components/dialog" },
      { title: "Drawer", href: "/docs/components/drawer" },
      { title: "Dropdown Menu", href: "/docs/components/dropdown-menu" },
      { title: "Hover Card", href: "/docs/components/hover-card" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Input OTP", href: "/docs/components/input-otp" },
      { title: "Label", href: "/docs/components/label" },
      { title: "Pagination", href: "/docs/components/pagination" },
      { title: "Popover", href: "/docs/components/popover" },
      { title: "Progress", href: "/docs/components/progress" },
      { title: "Radio Group", href: "/docs/components/radio-group" },
      { title: "Resizable", href: "/docs/components/resizable" },
      { title: "Scroll Area", href: "/docs/components/scroll-area" },
      { title: "Select", href: "/docs/components/select" },
      { title: "Separator", href: "/docs/components/separator" },
      { title: "Sheet", href: "/docs/components/sheet" },
      { title: "Skeleton", href: "/docs/components/skeleton" },
      { title: "Slider", href: "/docs/components/slider" },
      { title: "Switch", href: "/docs/components/switch" },
      { title: "Table", href: "/docs/components/table" },
      { title: "Tabs", href: "/docs/components/tabs" },
      { title: "Textarea", href: "/docs/components/textarea" },
      { title: "Toggle", href: "/docs/components/toggle" },
      { title: "Toggle Group", href: "/docs/components/toggle-group" },
      { title: "Tooltip", href: "/docs/components/tooltip" },
    ],
  },
  {
    title: "Enterprise",
    items: [
      { title: "Data Table", href: "/docs/components/data-table" },
      { title: "Date Range Picker", href: "/docs/components/date-range-picker" },
      { title: "File Upload", href: "/docs/components/file-upload" },
      { title: "Multi Select", href: "/docs/components/multi-select" },
      { title: "Stepper", href: "/docs/components/stepper" },
    ],
  },
  {
    title: "Data Display",
    items: [
      { title: "Charts", href: "/docs/charts" },
    ],
  },
  {
    title: "Tools",
    items: [
      { title: "Claude Agent", href: "/docs/claude-agent" },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isComponentPage = pathname.startsWith("/docs/components/") && pathname !== "/docs/components";

  return (
    <div className={cn(
      "container flex-1 items-start md:grid md:gap-6 lg:gap-10",
      isComponentPage
        ? "md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)_200px]"
        : "md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]"
    )}>
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
        <ScrollArea className="h-full py-6 pr-6 lg:py-8">
          <nav className="grid gap-6">
            {docsNavigation.map((section) => (
              <div key={section.title} className="flex flex-col gap-2">
                <h4 className="font-medium text-sm">{section.title}</h4>
                <div className="grid gap-1">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "text-sm transition-colors hover:text-foreground",
                          isActive
                            ? "font-medium text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </ScrollArea>
      </aside>
      <main className="relative py-6 lg:gap-10 lg:py-8">
        <div className="mx-auto w-full min-w-0">
          {children}
        </div>
      </main>
      {isComponentPage && (
        <aside className="hidden text-sm lg:block lg:self-start lg:sticky lg:top-14">
          <div className="py-6 lg:py-8">
            <TableOfContents />
          </div>
        </aside>
      )}
    </div>
  );
}
