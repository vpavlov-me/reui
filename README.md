# Design System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue)](https://tailwindcss.com/)

Production-ready design system with 40+ components built on Shadcn UI for Family, Advisor, and Admin portals.

> 🚀 **[START HERE](./START_HERE.md)** - Complete getting started guide
> 📖 **[Documentation](./INDEX.md)** - Full documentation index
> 🎬 **[Live Demo](https://vpavlov-me.github.io/reui/)** - Interactive component showcase

## 🎨 Portal Themes

- **Family Portal** - Orange accent (#FB6428) - Perfect for family governance
- **Advisor Portal** - Blue accent (#005CCD) - Professional advisor interface
- **Admin Portal** - Lime accent (#8FCD00) - Administrative control panel

## 📦 Packages

- `@reluna-ui/ui` - 40+ production-ready UI components based on Shadcn UI
- `@reluna-ui/themes` - Portal-specific theme configurations with dark mode
- `@reluna-ui/icons` - Complete icon library with Lucide Icons

## 🚀 Installation

```bash
npm install @reluna-ui/ui @reluna-ui/themes @reluna-ui/icons
# or
pnpm add @reluna-ui/ui @reluna-ui/themes @reluna-ui/icons
# or
yarn add @reluna-ui/ui @reluna-ui/themes @reluna-ui/icons
```

## 📖 Usage

### 1. Import theme CSS

Choose the appropriate theme for your portal:

```tsx
// Family Portal
import '@reluna-ui/themes/family';

// Advisor Portal
import '@reluna-ui/themes/advisor';

// Admin Portal
import '@reluna-ui/themes/admin';
```

### 2. Import base styles

```tsx
import '@reluna-ui/ui/styles';
```

### 3. Configure Tailwind

Create or update your `tailwind.config.js`:

```js
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@reluna-ui/ui/dist/**/*.{js,mjs}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PP Object Sans', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
};
```

### 4. Use components

```tsx
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Input } from '@reluna-ui/ui';
import { Heart, Settings, Users } from '@reluna-ui/icons';
import { useState } from 'react';

export default function MyApp() {
  const [value, setValue] = useState('');
  
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
        <CardDescription>Enter your information</CardDescription>
      </CardHeader>
      <CardContent>
        <Input 
          placeholder="Enter text" 
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </CardContent>
      <CardFooter>
        <Button>
          <Heart className="mr-2 h-4 w-4" />
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
```

## 🎨 Dark Mode

Add dark mode support:

```tsx
'use client';

import { useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>
    </div>
  );
}
```

## 🖼️ Components

See live examples at: [https://vpavlov-me.github.io/reui/](https://vpavlov-me.github.io/reui/)

### Available Components (40+)

**Atomic Components**
- Button, Input, Label, Badge, Separator, Skeleton, Avatar, AspectRatio

**Form Components**
- Checkbox, RadioGroup, Select, Textarea, Switch, Toggle, ToggleGroup, Combobox, MultiSelect, FileUpload, InputOTP, Slider, Progress, Form

**Container Components**
- Card, Alert, AlertDialog, Popover, HoverCard, Sheet, Dialog, Tabs, Accordion, Collapsible, Resizable, ScrollArea

**Navigation**
- Breadcrumb, NavigationMenu, Pagination, Menubar, DropdownMenu, ContextMenu, Stepper

**Complex Components**
- Table, DataTable, Calendar, DateRangePicker, Carousel, Chart

**Feedback**
- Toast (Sonner), Tooltip

**All components include:**
- TypeScript support
- Accessibility (WCAG 2.1 AA)
- Dark mode
- Responsive design
- All variants and sizes

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Start development server (showcase + watch mode)
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test

# Type check
pnpm type-check

# Lint code
pnpm lint

# Create a changeset
pnpm changeset

# Version packages
pnpm version-packages

# Publish to npm
pnpm release
```

## 📝 Framework Examples

### Next.js

```tsx
// app/layout.tsx
import '@reluna-ui/ui/styles';
import '@reluna-ui/themes/family';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### Vite + React

```tsx
// main.tsx
import '@reluna-ui/ui/styles';
import '@reluna-ui/themes/advisor';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(<App />);
```

### Remix

```tsx
// app/root.tsx
import styles from '@reluna-ui/ui/styles';
import theme from '@reluna-ui/themes/admin';

export const links = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'stylesheet', href: theme },
];

export default function App() {
  return (
    <html>
      <head>
        <Links />
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  );
}
```

## 📄 License

MIT

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for:
- Development setup
- Creating new components
- Submitting pull requests
- Code style guidelines
- Review process

## 📚 Additional Resources

- [Quick Start](./QUICKSTART.md) - Get up and running in 5 minutes
- [Setup Guide](./SETUP.md) - Detailed installation and configuration
- [Project Structure](./PROJECT_STRUCTURE.md) - File organization
- [Architecture](./ARCHITECTURE.md) - System design and decisions
- [FAQ](./FAQ.md) - Frequently asked questions
