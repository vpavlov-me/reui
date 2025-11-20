export interface ComponentSection {
  id: string;
  title: string;
  description: string;
}

export interface ComponentGuide {
  slug: string;
  title: string;
  description: string;
  sections: ComponentSection[];
}

export const componentGuides: ComponentGuide[] = [
  {
    slug: "buttons",
    title: "Buttons",
    description: "Primary actions, secondary styles, and icon buttons.",
    sections: [
      {
        id: "variants",
        title: "Variants",
        description: "Every visual treatment from default to ghost and link.",
      },
      {
        id: "sizes",
        title: "Sizes",
        description: "Small, default, large, and icon-only buttons.",
      },
    ],
  },
  {
    slug: "inputs",
    title: "Inputs",
    description: "Text fields, selects, and form controls.",
    sections: [
      {
        id: "text-fields",
        title: "Text fields",
        description: "Default and disabled states.",
      },
      {
        id: "selects",
        title: "Selects & textarea",
        description: "Role selection and multi-line inputs.",
      },
    ],
  },
  {
    slug: "tabs",
    title: "Tabs",
    description: "Sectioned navigation for dashboards.",
    sections: [
      {
        id: "usage",
        title: "Usage",
        description: "Tabs with matching cards/content panes.",
      },
    ],
  },
  {
    slug: "toggles",
    title: "Toggles",
    description: "Switches, checkboxes, radios, and toggles.",
    sections: [
      {
        id: "switches",
        title: "Switches & checkboxes",
        description: "Preferences and notification toggles.",
      },
      {
        id: "radios",
        title: "Radios & button toggles",
        description: "Mode selection and formatting controls.",
      },
    ],
  },
  {
    slug: "cards",
    title: "Cards & Progress",
    description: "Metric cards with progress indicators and avatars.",
    sections: [
      {
        id: "metrics",
        title: "Metrics",
        description: "Dashed cards with progress bars.",
      },
      {
        id: "profiles",
        title: "Profiles",
        description: "Advisor spotlight with CTA.",
      },
    ],
  },
  {
    slug: "data-display",
    title: "Data Display",
    description: "Tables, badges, and contextual feedback.",
    sections: [
      {
        id: "table",
        title: "Table",
        description: "Sortable-like table layout.",
      },
      {
        id: "alert",
        title: "Alert",
        description: "Contextual info banners.",
      },
    ],
  },
  {
    slug: "messaging",
    title: "Messaging CTA",
    description: "Email capture strips and CTAs.",
    sections: [
      {
        id: "subscription",
        title: "Subscription",
        description: "Form layout with button.",
      },
    ],
  },
];

export function getComponentGuide(slug: string) {
  return componentGuides.find((guide) => guide.slug === slug);
}
