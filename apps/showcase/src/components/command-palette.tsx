'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Search, LayoutGrid, FileText, Palette, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CommandItem {
  id: string;
  title: string;
  description: string;
  category: 'component' | 'documentation' | 'page' | 'theme';
  href: string;
  icon: React.ReactNode;
  keywords: string[];
}

const commandItems: CommandItem[] = [
  // Documentation pages
  {
    id: 'docs-overview',
    title: 'Documentation',
    description: 'Get started with Reluna UI',
    category: 'documentation',
    href: '/docs',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['docs', 'overview', 'introduction'],
  },
  {
    id: 'docs-install',
    title: 'Installation',
    description: 'How to install and setup Reluna UI',
    category: 'documentation',
    href: '/docs/installation',
    icon: <Zap className="h-4 w-4" />,
    keywords: ['install', 'setup', 'getting started'],
  },
  {
    id: 'docs-components',
    title: 'Components',
    description: 'Browse all 40+ components',
    category: 'documentation',
    href: '/docs/components',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['components', 'ui', 'library'],
  },
  {
    id: 'docs-themes',
    title: 'Themes',
    description: 'Portal themes and customization',
    category: 'documentation',
    href: '/docs/themes',
    icon: <Palette className="h-4 w-4" />,
    keywords: ['themes', 'portal', 'colors'],
  },
  {
    id: 'docs-colors',
    title: 'Colors',
    description: 'Complete color palette reference',
    category: 'documentation',
    href: '/docs/colors',
    icon: <Palette className="h-4 w-4" />,
    keywords: ['colors', 'palette', 'design'],
  },
  {
    id: 'docs-icons',
    title: 'Icons',
    description: '1000+ Lucide icons library',
    category: 'documentation',
    href: '/docs/icons',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['icons', 'lucide'],
  },
  {
    id: 'docs-tokens',
    title: 'Design Tokens',
    description: 'CSS variables and design system tokens',
    category: 'documentation',
    href: '/docs/tokens',
    icon: <Zap className="h-4 w-4" />,
    keywords: ['tokens', 'css', 'variables'],
  },

  // Atomic Components
  {
    id: 'comp-button',
    title: 'Button',
    description: 'Clickable button component with variants',
    category: 'component',
    href: '/docs/components/button',
    icon: <Zap className="h-4 w-4" />,
    keywords: ['button', 'click', 'action'],
  },
  {
    id: 'comp-input',
    title: 'Input',
    description: 'Text input field component',
    category: 'component',
    href: '/docs/components/input',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['input', 'text', 'form'],
  },
  {
    id: 'comp-label',
    title: 'Label',
    description: 'Form label component',
    category: 'component',
    href: '/docs/components/label',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['label', 'form'],
  },
  {
    id: 'comp-card',
    title: 'Card',
    description: 'Container component with sections',
    category: 'component',
    href: '/docs/components/card',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['card', 'container', 'section'],
  },
  {
    id: 'comp-checkbox',
    title: 'Checkbox',
    description: 'Checkbox form control',
    category: 'component',
    href: '/docs/components/checkbox',
    icon: <Zap className="h-4 w-4" />,
    keywords: ['checkbox', 'form', 'input'],
  },
  {
    id: 'comp-select',
    title: 'Select',
    description: 'Dropdown select component',
    category: 'component',
    href: '/docs/components/select',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['select', 'dropdown', 'form'],
  },
  {
    id: 'comp-dialog',
    title: 'Dialog',
    description: 'Modal dialog component',
    category: 'component',
    href: '/docs/components/dialog',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['dialog', 'modal', 'popup'],
  },
  {
    id: 'comp-tabs',
    title: 'Tabs',
    description: 'Tabbed interface component',
    category: 'component',
    href: '/docs/components/tabs',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['tabs', 'navigation'],
  },
  {
    id: 'comp-table',
    title: 'Table',
    description: 'Data table component',
    category: 'component',
    href: '/docs/components/table',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['table', 'data', 'rows'],
  },
  {
    id: 'comp-accordion',
    title: 'Accordion',
    description: 'Collapsible accordion component',
    category: 'component',
    href: '/docs/components/accordion',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['accordion', 'collapse', 'expand'],
  },
  {
    id: 'comp-alert',
    title: 'Alert',
    description: 'Alert notification component',
    category: 'component',
    href: '/docs/components/alert',
    icon: <Zap className="h-4 w-4" />,
    keywords: ['alert', 'notification', 'message'],
  },
  {
    id: 'comp-alert-dialog',
    title: 'Alert Dialog',
    description: 'Alert dialog component',
    category: 'component',
    href: '/docs/components/alert-dialog',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['alert', 'dialog', 'confirm'],
  },
  {
    id: 'comp-aspect-ratio',
    title: 'Aspect Ratio',
    description: 'Aspect ratio container',
    category: 'component',
    href: '/docs/components/aspect-ratio',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['aspect', 'ratio', 'container'],
  },
  {
    id: 'comp-avatar',
    title: 'Avatar',
    description: 'User avatar component',
    category: 'component',
    href: '/docs/components/avatar',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['avatar', 'user', 'profile'],
  },
  {
    id: 'comp-badge',
    title: 'Badge',
    description: 'Status and category badge',
    category: 'component',
    href: '/docs/components/badge',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['badge', 'status', 'tag'],
  },
  {
    id: 'comp-breadcrumb',
    title: 'Breadcrumb',
    description: 'Breadcrumb navigation',
    category: 'component',
    href: '/docs/components/breadcrumb',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['breadcrumb', 'navigation', 'path'],
  },
  {
    id: 'comp-calendar',
    title: 'Calendar',
    description: 'Date calendar component',
    category: 'component',
    href: '/docs/components/calendar',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['calendar', 'date', 'picker'],
  },
  {
    id: 'comp-collapsible',
    title: 'Collapsible',
    description: 'Collapsible content component',
    category: 'component',
    href: '/docs/components/collapsible',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['collapsible', 'collapse', 'expand'],
  },
  {
    id: 'comp-combobox',
    title: 'Combobox',
    description: 'Searchable select component',
    category: 'component',
    href: '/docs/components/combobox',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['combobox', 'autocomplete', 'search'],
  },
  {
    id: 'comp-command',
    title: 'Command',
    description: 'Command menu component',
    category: 'component',
    href: '/docs/components/command',
    icon: <Zap className="h-4 w-4" />,
    keywords: ['command', 'palette', 'menu'],
  },
  {
    id: 'comp-context-menu',
    title: 'Context Menu',
    description: 'Right-click context menu',
    category: 'component',
    href: '/docs/components/context-menu',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['context', 'menu', 'right-click'],
  },
  {
    id: 'comp-data-table',
    title: 'Data Table',
    description: 'Advanced data table',
    category: 'component',
    href: '/docs/components/data-table',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['data', 'table', 'advanced'],
  },
  {
    id: 'comp-date-range-picker',
    title: 'Date Range Picker',
    description: 'Date range selection',
    category: 'component',
    href: '/docs/components/date-range-picker',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['date', 'range', 'picker'],
  },
  {
    id: 'comp-drawer',
    title: 'Drawer',
    description: 'Slide-out drawer component',
    category: 'component',
    href: '/docs/components/drawer',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['drawer', 'slide', 'sidebar'],
  },
  {
    id: 'comp-dropdown-menu',
    title: 'Dropdown Menu',
    description: 'Dropdown menu component',
    category: 'component',
    href: '/docs/components/dropdown-menu',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['dropdown', 'menu', 'navigation'],
  },
  {
    id: 'comp-file-upload',
    title: 'File Upload',
    description: 'File upload component',
    category: 'component',
    href: '/docs/components/file-upload',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['file', 'upload', 'input'],
  },
  {
    id: 'comp-form',
    title: 'Form',
    description: 'Form builder component',
    category: 'component',
    href: '/docs/components/form',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['form', 'builder', 'input'],
  },
  {
    id: 'comp-hover-card',
    title: 'Hover Card',
    description: 'Hover card popover',
    category: 'component',
    href: '/docs/components/hover-card',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['hover', 'card', 'popover'],
  },
  {
    id: 'comp-input-otp',
    title: 'Input OTP',
    description: 'One-time password input',
    category: 'component',
    href: '/docs/components/input-otp',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['otp', 'input', 'password'],
  },
  {
    id: 'comp-menubar',
    title: 'Menubar',
    description: 'Application menubar',
    category: 'component',
    href: '/docs/components/menubar',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['menubar', 'menu', 'navigation'],
  },
  {
    id: 'comp-multi-select',
    title: 'Multi Select',
    description: 'Multiple selection component',
    category: 'component',
    href: '/docs/components/multi-select',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['multi', 'select', 'checkbox'],
  },
  {
    id: 'comp-navigation-menu',
    title: 'Navigation Menu',
    description: 'Main navigation menu',
    category: 'component',
    href: '/docs/components/navigation-menu',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['navigation', 'menu', 'main'],
  },
  {
    id: 'comp-pagination',
    title: 'Pagination',
    description: 'Pagination controls',
    category: 'component',
    href: '/docs/components/pagination',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['pagination', 'page', 'navigation'],
  },
  {
    id: 'comp-popover',
    title: 'Popover',
    description: 'Popover component',
    category: 'component',
    href: '/docs/components/popover',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['popover', 'popup', 'tooltip'],
  },
  {
    id: 'comp-progress',
    title: 'Progress',
    description: 'Progress bar component',
    category: 'component',
    href: '/docs/components/progress',
    icon: <Zap className="h-4 w-4" />,
    keywords: ['progress', 'bar', 'status'],
  },
  {
    id: 'comp-radio-group',
    title: 'Radio Group',
    description: 'Radio button group',
    category: 'component',
    href: '/docs/components/radio-group',
    icon: <Zap className="h-4 w-4" />,
    keywords: ['radio', 'group', 'select'],
  },
  {
    id: 'comp-resizable',
    title: 'Resizable',
    description: 'Resizable container',
    category: 'component',
    href: '/docs/components/resizable',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['resizable', 'container', 'layout'],
  },
  {
    id: 'comp-scroll-area',
    title: 'Scroll Area',
    description: 'Custom scroll area',
    category: 'component',
    href: '/docs/components/scroll-area',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['scroll', 'area', 'container'],
  },
  {
    id: 'comp-separator',
    title: 'Separator',
    description: 'Visual separator line',
    category: 'component',
    href: '/docs/components/separator',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['separator', 'divider', 'line'],
  },
  {
    id: 'comp-sheet',
    title: 'Sheet',
    description: 'Bottom sheet component',
    category: 'component',
    href: '/docs/components/sheet',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['sheet', 'drawer', 'modal'],
  },
  {
    id: 'comp-skeleton',
    title: 'Skeleton',
    description: 'Skeleton loader component',
    category: 'component',
    href: '/docs/components/skeleton',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['skeleton', 'loader', 'placeholder'],
  },
  {
    id: 'comp-slider',
    title: 'Slider',
    description: 'Range slider component',
    category: 'component',
    href: '/docs/components/slider',
    icon: <Zap className="h-4 w-4" />,
    keywords: ['slider', 'range', 'input'],
  },
  {
    id: 'comp-sonner',
    title: 'Sonner Toast',
    description: 'Toast notification system',
    category: 'component',
    href: '/docs/components/sonner',
    icon: <Zap className="h-4 w-4" />,
    keywords: ['sonner', 'toast', 'notification'],
  },
  {
    id: 'comp-stepper',
    title: 'Stepper',
    description: 'Step navigation component',
    category: 'component',
    href: '/docs/components/stepper',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['stepper', 'step', 'wizard'],
  },
  {
    id: 'comp-switch',
    title: 'Switch',
    description: 'Toggle switch component',
    category: 'component',
    href: '/docs/components/switch',
    icon: <Zap className="h-4 w-4" />,
    keywords: ['switch', 'toggle', 'input'],
  },
  {
    id: 'comp-textarea',
    title: 'Textarea',
    description: 'Multi-line text input',
    category: 'component',
    href: '/docs/components/textarea',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['textarea', 'text', 'input'],
  },
  {
    id: 'comp-toggle',
    title: 'Toggle',
    description: 'Toggle button component',
    category: 'component',
    href: '/docs/components/toggle',
    icon: <Zap className="h-4 w-4" />,
    keywords: ['toggle', 'button', 'switch'],
  },
  {
    id: 'comp-toggle-group',
    title: 'Toggle Group',
    description: 'Group of toggle buttons',
    category: 'component',
    href: '/docs/components/toggle-group',
    icon: <Zap className="h-4 w-4" />,
    keywords: ['toggle', 'group', 'button'],
  },
  {
    id: 'comp-tooltip',
    title: 'Tooltip',
    description: 'Tooltip hover component',
    category: 'component',
    href: '/docs/components/tooltip',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['tooltip', 'hover', 'help'],
  },
  {
    id: 'comp-typography',
    title: 'Typography',
    description: 'Typography styles and components',
    category: 'component',
    href: '/docs/components/typography',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['typography', 'text', 'styles'],
  },
  {
    id: 'comp-app-header',
    title: 'App Header',
    description: 'Application header component',
    category: 'component',
    href: '/docs/components/app-header',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['header', 'app', 'navigation'],
  },
  {
    id: 'comp-app-layout',
    title: 'App Layout',
    description: 'Application layout component',
    category: 'component',
    href: '/docs/components/app-layout',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['layout', 'app', 'container'],
  },
  {
    id: 'comp-page-header',
    title: 'Page Header',
    description: 'Page header component',
    category: 'component',
    href: '/docs/components/page-header',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['page', 'header', 'title'],
  },
  {
    id: 'comp-app-footer',
    title: 'App Footer',
    description: 'Application footer component',
    category: 'component',
    href: '/docs/components/app-footer',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['footer', 'app', 'navigation'],
  },

  // Pages
  {
    id: 'page-home',
    title: 'Home',
    description: 'Go to home page',
    category: 'page',
    href: '/',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['home', 'start'],
  },
  {
    id: 'page-blocks',
    title: 'Blocks',
    description: 'Component showcase and blocks',
    category: 'page',
    href: '/blocks',
    icon: <LayoutGrid className="h-4 w-4" />,
    keywords: ['blocks', 'showcase'],
  },
  {
    id: 'page-changelog',
    title: 'Changelog',
    description: 'View changes and updates',
    category: 'page',
    href: '/changelog',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['changelog', 'updates', 'history'],
  },
];

const categoryConfig = {
  component: { label: 'Components', color: 'text-blue-500' },
  documentation: { label: 'Documentation', color: 'text-purple-500' },
  page: { label: 'Pages', color: 'text-green-500' },
  theme: { label: 'Themes', color: 'text-orange-500' },
};

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const router = useRouter();

  const filtered = commandItems.filter((item) => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return (
      item.title.toLowerCase().includes(searchLower) ||
      item.description.toLowerCase().includes(searchLower) ||
      item.keywords.some((k) => k.toLowerCase().includes(searchLower))
    );
  });

  // Reset selected index when search changes
  React.useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  const handleSelect = (href: string) => {
    router.push(href);
    setOpen(false);
    setSearch('');
  };

  // Open with Cmd+K or Ctrl+K, close with ESC, navigate with arrows
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        e.preventDefault();
        setOpen((open) => !open);
      }

      if (!open) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
        setSearch('');
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filtered.length - 1 ? prev + 1 : 0
        );
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filtered.length - 1
        );
      }

      if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          handleSelect(filtered[selectedIndex].href);
        }
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, filtered, selectedIndex, handleSelect]);

  return (
    <>
      {/* Trigger Button - optional, for better UX */}
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search...</span>
        <kbd className="ml-auto hidden rounded border border-muted-foreground/30 px-1.5 py-0.5 text-xs font-medium sm:inline">
          ⌘K
        </kbd>
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setOpen(false)} />
      )}

      {/* Command Palette */}
      {open && (
        <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 transform">
          <div className="rounded-lg border border-border bg-background shadow-lg">
            {/* Search Input */}
            <div className="flex items-center border-b border-border px-4 py-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search components, docs, pages..."
                className="ml-3 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <kbd className="rounded border border-muted-foreground/30 px-2 py-1 text-xs text-muted-foreground">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                  No results found for "{search}"
                </div>
              ) : (
                <div className="p-2">
                  {(() => {
                    let globalIndex = 0;
                    return Object.entries(
                      filtered.reduce(
                        (acc, item) => {
                          if (!acc[item.category]) {
                            acc[item.category] = [];
                          }
                          acc[item.category].push(item);
                          return acc;
                        },
                        {} as Record<string, CommandItem[]>
                      )
                    ).map(([category, items]) => (
                      <div key={category}>
                        <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {categoryConfig[category as keyof typeof categoryConfig]?.label}
                        </div>
                        {items.map((item) => {
                          const currentIndex = globalIndex++;
                          const isSelected = currentIndex === selectedIndex;
                          return (
                            <button
                              key={item.id}
                              onClick={() => handleSelect(item.href)}
                              onMouseEnter={() => setSelectedIndex(currentIndex)}
                              className={cn(
                                "w-full rounded px-3 py-2.5 text-left transition-colors focus:outline-none",
                                isSelected ? "bg-muted" : "hover:bg-muted"
                              )}
                            >
                              <div className="flex items-start gap-3">
                                <div className="mt-0.5">{item.icon}</div>
                                <div className="flex-1">
                                  <div className="text-sm font-medium">{item.title}</div>
                                  <div className="text-xs text-muted-foreground">{item.description}</div>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {categoryConfig[item.category]?.label}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    ));
                  })()}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-border px-4 py-3 text-xs text-muted-foreground">
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1">
                    <kbd className="rounded border border-muted-foreground/30 px-1 py-0.5">
                      ↑↓
                    </kbd>
                    <span>Navigate</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <kbd className="rounded border border-muted-foreground/30 px-1 py-0.5">
                      ↵
                    </kbd>
                    <span>Select</span>
                  </div>
                </div>
                <span>{filtered.length} result(s)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
