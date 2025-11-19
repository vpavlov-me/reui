# Architecture Overview

Visual guide to the design system architecture.

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Design System                           │
│                                                              │
│  ┌────────────────┐  ┌────────────────┐  ┌──────────────┐ │
│  │   @your-org/ui │  │@your-org/themes│  │@your-org/icons│ │
│  │                │  │                │  │              │ │
│  │  - Components  │  │  - Family CSS  │  │  - Lucide    │ │
│  │  - Utilities   │  │  - Advisor CSS │  │  - Wrapper   │ │
│  │  - Styles      │  │  - Admin CSS   │  │              │ │
│  └────────┬───────┘  └────────┬───────┘  └──────┬───────┘ │
│           │                   │                  │          │
└───────────┼───────────────────┼──────────────────┼──────────┘
            │                   │                  │
            └───────────────────┴──────────────────┘
                                │
                    ┌───────────▼───────────┐
                    │   Consumer Apps      │
                    │                       │
                    │  - Family Portal      │
                    │  - Advisor Portal     │
                    │  - Admin Portal       │
                    └───────────────────────┘
```

## Package Dependencies

```
@your-org/ui
├── @radix-ui/react-slot
├── class-variance-authority
├── clsx
├── tailwind-merge
└── lucide-react (peer)

@your-org/themes
└── (no dependencies)

@your-org/icons
└── lucide-react (peer)

@your-org/showcase
├── @your-org/ui (workspace)
├── @your-org/themes (workspace)
├── @your-org/icons (workspace)
├── next
├── react
└── react-dom
```

## Build Pipeline

```
Source Code
    │
    ├── packages/ui/src/
    │   └── TypeScript + React
    │       │
    │       ▼
    │   [tsup build]
    │       │
    │       ▼
    │   dist/
    │   ├── index.js (CJS)
    │   ├── index.mjs (ESM)
    │   ├── index.d.ts (Types)
    │   └── styles/ (CSS)
    │
    ├── packages/themes/src/
    │   └── CSS files
    │       │
    │       ▼
    │   [copy to dist]
    │       │
    │       ▼
    │   dist/
    │   ├── family.css
    │   ├── advisor.css
    │   └── admin.css
    │
    ├── packages/icons/src/
    │   └── TypeScript + React
    │       │
    │       ▼
    │   [tsup build]
    │       │
    │       ▼
    │   dist/
    │   ├── index.js
    │   ├── index.mjs
    │   └── index.d.ts
    │
    └── apps/showcase/src/
        └── Next.js App
            │
            ▼
        [next build]
            │
            ▼
        out/ (Static HTML)
```

## Component Architecture

```
┌─────────────────────────────────────────┐
│              Button Component           │
├─────────────────────────────────────────┤
│                                          │
│  ┌────────────────────────────────────┐ │
│  │     button.tsx (Implementation)    │ │
│  │                                    │ │
│  │  - Props interface                 │ │
│  │  - Variants (CVA)                  │ │
│  │  - Forward ref                     │ │
│  │  - Radix Slot integration          │ │
│  └────────────────────────────────────┘ │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │     index.ts (Exports)             │ │
│  │                                    │ │
│  │  - export { Button }               │ │
│  │  - export type { ButtonProps }     │ │
│  └────────────────────────────────────┘ │
│                                          │
└─────────────────────────────────────────┘
```

## Theme System

```
CSS Variables (Root)
    │
    ├── Light Mode (:root)
    │   ├── --primary
    │   ├── --primary-foreground
    │   ├── --background
    │   ├── --foreground
    │   └── ... (other colors)
    │
    └── Dark Mode (.dark)
        ├── --primary
        ├── --primary-foreground
        ├── --background
        ├── --foreground
        └── ... (other colors)

Theme Files
    │
    ├── family.css
    │   └── --primary: 17 96% 57% (Orange)
    │
    ├── advisor.css
    │   └── --primary: 213 100% 40% (Blue)
    │
    └── admin.css
        └── --primary: 78 100% 40% (Lime)

Tailwind Config
    │
    └── colors:
        ├── primary: hsl(var(--primary))
        ├── background: hsl(var(--background))
        └── ... (mapped to CSS vars)
```

## Data Flow

```
User Interaction
    │
    ▼
React Component
    │
    ├── Props
    │   ├── variant
    │   ├── size
    │   └── className
    │
    ▼
Class Variance Authority
    │
    ├── Generates base classes
    └── Applies variant classes
    │
    ▼
cn() Utility
    │
    ├── Merges classes with clsx
    └── Resolves conflicts with tailwind-merge
    │
    ▼
Tailwind CSS
    │
    ├── Reads CSS variables
    └── Generates utility classes
    │
    ▼
Browser Rendering
```

## State Management

```
Theme State
    │
    ├── Selected Theme
    │   ├── family
    │   ├── advisor
    │   └── admin
    │
    └── Dark Mode
        ├── light (default)
        └── dark (via .dark class)

Component State
    │
    └── React Component State
        ├── Local state (useState)
        ├── Props
        └── Forward refs
```

## Publishing Flow

```
Developer
    │
    ├── Make changes
    ├── Run: pnpm changeset
    └── Commit changeset
    │
    ▼
Git Push
    │
    ▼
GitHub Actions
    │
    ├── Install dependencies
    ├── Build all packages
    ├── Run tests/lint
    │
    ▼
Changesets Action
    │
    ├── Detect changesets
    ├── Bump versions
    ├── Generate changelogs
    │
    ▼
npm Publish
    │
    ├── @your-org/ui → npm
    ├── @your-org/themes → npm
    └── @your-org/icons → npm
    │
    ▼
GitHub Pages Deploy
    │
    └── Showcase app → GitHub Pages
```

## Import Resolution

```
User Code:
  import { Button } from '@your-org/ui';

Node.js Resolution:
  1. Check node_modules/@your-org/ui/
  2. Read package.json
  3. Use "exports" field:
     - ESM: dist/index.mjs
     - CJS: dist/index.js
  4. Load module
  5. Tree-shake unused code
```

## CSS Cascade

```
1. Base Styles (@your-org/ui/styles)
   ├── Tailwind base
   ├── CSS variables (neutral)
   └── Component defaults

2. Theme Override (@your-org/themes/[portal])
   ├── --primary color
   └── --primary-foreground color

3. Component Classes
   ├── Utility classes (Tailwind)
   └── Custom classes (from components)

4. User Overrides
   └── className prop
```

## Type System

```
TypeScript Types
    │
    ├── Component Props
    │   ├── HTML attributes
    │   ├── Custom props
    │   └── Variant props
    │
    ├── Utility Types
    │   └── ClassValue (clsx)
    │
    └── Icon Types
        └── LucideProps
```

## Optimization Strategy

```
Bundle Optimization
    │
    ├── Tree Shaking
    │   └── ESM modules
    │
    ├── Code Splitting
    │   └── Dynamic imports
    │
    └── CSS Purging
        └── Tailwind JIT

Build Optimization
    │
    ├── Turborepo Cache
    │   └── Shared cache
    │
    └── Parallel Builds
        └── Task dependencies
```

## Security Model

```
Dependency Security
    │
    ├── Peer Dependencies
    │   └── User provides (React, Tailwind)
    │
    ├── Direct Dependencies
    │   └── Pinned versions
    │
    └── Dev Dependencies
        └── Build tools only

Publishing Security
    │
    ├── npm Token (secret)
    ├── GitHub Actions
    └── Scoped packages
```

## Extensibility Points

```
Customization Options
    │
    ├── Theme Colors
    │   └── CSS variables
    │
    ├── Component Variants
    │   └── CVA configuration
    │
    ├── Tailwind Config
    │   └── Extended theme
    │
    └── Custom Components
        └── Use same patterns
```

## Performance Characteristics

```
Bundle Size
    │
    ├── @your-org/ui: ~50KB (minified)
    ├── @your-org/themes: ~2KB (each theme)
    └── @your-org/icons: ~5KB + icons used

Load Time
    │
    ├── Initial: Base styles + theme
    ├── Components: On demand
    └── Icons: Tree-shaken

Runtime Performance
    │
    ├── React reconciliation
    ├── CSS-in-JS: None (static CSS)
    └── Class computation: Memoized
```

## Deployment Targets

```
npm Registry
    │
    ├── @your-org/ui
    ├── @your-org/themes
    └── @your-org/icons

GitHub Pages
    │
    └── Showcase application

Consumer Applications
    │
    ├── Next.js
    ├── Vite
    ├── Remix
    └── Create React App
```

## Error Handling

```
Build Errors
    │
    ├── TypeScript errors → CI fails
    ├── Lint errors → CI fails
    └── Test failures → CI fails

Runtime Errors
    │
    ├── Invalid props → TypeScript warning
    ├── Missing theme → Fallback styles
    └── Missing icons → Console warning

Publishing Errors
    │
    ├── No changeset → Skip publish
    ├── Invalid version → CI fails
    └── npm auth failed → CI fails
```

## Monitoring & Analytics

```
Package Stats
    │
    ├── npm downloads
    ├── Bundle size
    └── Version adoption

Repository Stats
    │
    ├── GitHub stars
    ├── Issues opened/closed
    └── PR activity

Showcase Stats
    │
    ├── Page views
    ├── Time on page
    └── Browser usage
```

This architecture supports:
- ✅ Scalable component development
- ✅ Easy theme customization
- ✅ Efficient build pipeline
- ✅ Automated versioning
- ✅ Type-safe APIs
- ✅ Tree-shakeable bundles
- ✅ Framework agnostic
