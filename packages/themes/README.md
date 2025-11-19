# @your-org/themes

Portal-specific theme configurations for the design system.

## Installation

```bash
npm install @your-org/themes
# or
pnpm add @your-org/themes
# or
yarn add @your-org/themes
```

## Available Themes

### Family Portal (Orange)

```tsx
import '@your-org/themes/family';
```

Primary color: `#FB6428` (Orange)

### Advisor Portal (Blue)

```tsx
import '@your-org/themes/advisor';
```

Primary color: `#005CCD` (Blue)

### Admin Portal (Lime)

```tsx
import '@your-org/themes/admin';
```

Primary color: `#8FCD00` (Lime)

## Usage

### With Next.js

```tsx
// app/layout.tsx
import '@your-org/ui/styles';
import '@your-org/themes/family'; // or advisor, admin

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
    link.href = `/@your-org/themes/${theme}.css`;
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

These variables are used by the `@your-org/ui` components.

## License

MIT
