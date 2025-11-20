# @reluna-ui/themes

Portal-specific theme configurations for the design system.

## Installation

```bash
npm install @reluna-ui/themes
# or
pnpm add @reluna-ui/themes
# or
yarn add @reluna-ui/themes
```

## Available Themes

### Family Portal (Orange)

```tsx
import '@reluna-ui/themes/family';
```

Primary color: `#FB6428` (Orange)

### Advisor Portal (Blue)

```tsx
import '@reluna-ui/themes/advisor';
```

Primary color: `#005CCD` (Blue)

### Admin Portal (Lime)

```tsx
import '@reluna-ui/themes/admin';
```

Primary color: `#8FCD00` (Lime)

## Usage

### With Next.js

```tsx
// app/layout.tsx
import '@reluna-ui/ui/styles';
import '@reluna-ui/themes/family'; // or advisor, admin

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

### Dynamic Theme Switching

```tsx
'use client';

import { useEffect } from 'react';

export function ThemeSwitcher({ theme }: { theme: 'family' | 'advisor' | 'admin' }) {
  useEffect(() => {
    // Remove existing theme
    const existingLink = document.querySelector('link[data-theme]');
    if (existingLink) {
      existingLink.remove();
    }

    // Add new theme
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `/@reluna-ui/themes/${theme}.css`;
    link.setAttribute('data-theme', theme);
    document.head.appendChild(link);
  }, [theme]);

  return null;
}
```

## Dark Mode

All themes include dark mode variants. Apply the `dark` class to enable:

```tsx
<div className="dark">
  {/* Dark mode activated */}
</div>
```

## CSS Variables

Each theme defines the following CSS variables:

- `--primary` - Primary brand color
- `--primary-foreground` - Text color on primary background

These variables are used by the `@reluna-ui/ui` components.

## License

MIT
