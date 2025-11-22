'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  cn,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@reluna-ui/ui';

const docsSections = [
  {
    title: 'Getting Started',
    items: [
      { label: 'Installation', href: '/docs/installation' },
      { label: 'Quick Start', href: '/docs' },
    ],
  },
  {
    title: 'Components',
    items: [
      { label: 'Overview', href: '/docs/components' },
      { label: 'Atomic', href: '/docs/components?category=atomic' },
      { label: 'Forms', href: '/docs/components?category=forms' },
      { label: 'Containers', href: '/docs/components?category=containers' },
      { label: 'Navigation', href: '/docs/components?category=navigation' },
      { label: 'Complex', href: '/docs/components?category=complex' },
      { label: 'Feedback', href: '/docs/components?category=feedback' },
    ],
  },
  {
    title: 'Design',
    items: [
      { label: 'Themes', href: '/docs/themes' },
      { label: 'Colors', href: '/docs/colors' },
      { label: 'Design Tokens', href: '/docs/tokens' },
      { label: 'Icons', href: '/docs/icons' },
    ],
  },
];

export function DocsNav() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card pt-20 overflow-y-auto">
      <nav className="space-y-8 px-6 py-8">
        {docsSections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted',
                      pathname === item.href
                        ? 'bg-muted font-semibold text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

// Breadcrumb segment labels
const segmentLabels: Record<string, string> = {
  docs: 'Documentation',
  components: 'Components',
  installation: 'Installation',
  themes: 'Themes',
  colors: 'Colors',
  icons: 'Icons',
  tokens: 'Design Tokens',
  charts: 'Charts',
  status: 'Component Status',
  // Component names
  accordion: 'Accordion',
  alert: 'Alert',
  'alert-dialog': 'Alert Dialog',
  'aspect-ratio': 'Aspect Ratio',
  avatar: 'Avatar',
  badge: 'Badge',
  breadcrumb: 'Breadcrumb',
  button: 'Button',
  calendar: 'Calendar',
  card: 'Card',
  checkbox: 'Checkbox',
  collapsible: 'Collapsible',
  combobox: 'Combobox',
  command: 'Command',
  'context-menu': 'Context Menu',
  'data-table': 'Data Table',
  'date-range-picker': 'Date Range Picker',
  dialog: 'Dialog',
  drawer: 'Drawer',
  'dropdown-menu': 'Dropdown Menu',
  'file-upload': 'File Upload',
  'hover-card': 'Hover Card',
  input: 'Input',
  'input-otp': 'Input OTP',
  label: 'Label',
  'multi-select': 'Multi Select',
  pagination: 'Pagination',
  popover: 'Popover',
  progress: 'Progress',
  'radio-group': 'Radio Group',
  resizable: 'Resizable',
  'scroll-area': 'Scroll Area',
  select: 'Select',
  separator: 'Separator',
  sheet: 'Sheet',
  skeleton: 'Skeleton',
  slider: 'Slider',
  stepper: 'Stepper',
  switch: 'Switch',
  table: 'Table',
  tabs: 'Tabs',
  textarea: 'Textarea',
  toggle: 'Toggle',
  'toggle-group': 'Toggle Group',
  tooltip: 'Tooltip',
  typography: 'Typography',
};

interface BreadcrumbSegment {
  label: string;
  href: string;
}

export function DocsBreadcrumb() {
  const pathname = usePathname();

  const segments = React.useMemo(() => {
    const parts = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbSegment[] = [];

    let currentPath = '';
    parts.forEach((part) => {
      currentPath += `/${part}`;
      breadcrumbs.push({
        label: segmentLabels[part] || part.charAt(0).toUpperCase() + part.slice(1),
        href: currentPath,
      });
    });

    return breadcrumbs;
  }, [pathname]);

  if (segments.length <= 1) {
    return null;
  }

  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, index) => (
          <React.Fragment key={segment.href}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {index === segments.length - 1 ? (
                <BreadcrumbPage>{segment.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={segment.href}>{segment.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
