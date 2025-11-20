# Design System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue)](https://tailwindcss.com/)

Multi-portal design system based on Shadcn UI for Family, Advisor, and Admin portals.

> 🚀 **[START HERE](./START_HERE.md)** - Complete getting started guide
> 📖 **[Documentation](./INDEX.md)** - Full documentation index
> 🎬 **[Live Demo](https://vpavlov-me.github.io/reui/)** - Interactive component showcase

## 🎨 Portals

- **Family Portal** - Orange accent (#FB6428)
- **Advisor Portal** - Blue accent (#005CCD)
- **Admin Portal** - Lime accent (#8FCD00)

## 📦 Packages

- `@reluna-ui/ui` - Core UI components based on Shadcn UI
- `@reluna-ui/themes` - Portal-specific theme configurations
- `@reluna-ui/icons` - Icon components using Lucide Icons

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
import { Button, Card, Input } from '@reluna-ui/ui';
import { Heart, Settings } from '@reluna-ui/icons';

export default function MyApp() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>
        <Heart className="mr-2 h-4 w-4" />
        Submit
      </Button>
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

See live examples at: [https://reluna-ui.github.io/design-system/](https://reluna-ui.github.io/design-system/)

### Available Components

- Button
- Card
- Input
- And more...

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Build all packages
pnpm build

# Create a changeset
pnpm changeset

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

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.
