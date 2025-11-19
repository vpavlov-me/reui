# Complete Project Tree

Visual representation of the entire design system structure.

## Full Directory Structure

```
design-system/
│
├── 📄 Configuration Files
│   ├── package.json              Root workspace config
│   ├── pnpm-workspace.yaml       Workspace definition
│   ├── turbo.json               Build orchestration
│   ├── .gitignore               Git ignore rules
│   ├── .npmrc                   npm settings
│   ├── .nvmrc                   Node.js version (20)
│   └── LICENSE                  MIT License
│
├── 📚 Documentation (11 files)
│   ├── README.md                Main documentation
│   ├── QUICKSTART.md            5-minute start guide
│   ├── SETUP.md                 Detailed setup
│   ├── CONTRIBUTING.md          Contribution guide
│   ├── PUBLISHING.md            Publishing guide
│   ├── PROJECT_STRUCTURE.md     File structure
│   ├── ARCHITECTURE.md          System architecture
│   ├── SUMMARY.md               Complete summary
│   ├── FAQ.md                   Q&A reference
│   ├── INDEX.md                 Doc navigation
│   └── TREE.md                  This file
│
├── 🔄 .changeset/               Version management
│   ├── config.json              Changesets config
│   ├── README.md                Usage instructions
│   └── example.md               Example changeset
│
├── ⚙️ .github/workflows/        CI/CD automation
│   ├── publish.yml              npm publishing
│   └── deploy.yml               GitHub Pages
│
├── 📦 packages/                 Publishable packages
│   │
│   ├── 🎨 ui/                   Component library
│   │   ├── package.json         Package config
│   │   ├── tsconfig.json        TypeScript config
│   │   ├── tsup.config.ts       Build config
│   │   ├── .eslintrc.json       Linting rules
│   │   ├── README.md            Package docs
│   │   │
│   │   ├── src/
│   │   │   ├── index.ts         Main entry point
│   │   │   │
│   │   │   ├── components/
│   │   │   │   ├── index.ts     All exports
│   │   │   │   │
│   │   │   │   ├── button/
│   │   │   │   │   ├── button.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   │
│   │   │   │   ├── card/
│   │   │   │   │   ├── card.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   │
│   │   │   │   └── input/
│   │   │   │       ├── input.tsx
│   │   │   │       └── index.ts
│   │   │   │
│   │   │   ├── lib/
│   │   │   │   └── utils.ts     cn() utility
│   │   │   │
│   │   │   └── styles/
│   │   │       └── globals.css  Base styles
│   │   │
│   │   ├── fonts/
│   │   │   └── PPObjectSans/
│   │   │       └── README.md    Font instructions
│   │   │
│   │   └── dist/                Build output
│   │       ├── index.js         CJS bundle
│   │       ├── index.mjs        ESM bundle
│   │       ├── index.d.ts       Type definitions
│   │       └── styles/          CSS output
│   │
│   ├── 🎨 themes/               Portal themes
│   │   ├── package.json         Package config
│   │   ├── README.md            Package docs
│   │   │
│   │   ├── src/
│   │   │   ├── family.css       Orange theme
│   │   │   ├── advisor.css      Blue theme
│   │   │   └── admin.css        Lime theme
│   │   │
│   │   └── dist/                Build output
│   │       ├── family.css       Built theme
│   │       ├── advisor.css      Built theme
│   │       └── admin.css        Built theme
│   │
│   └── 🎭 icons/                Icon library
│       ├── package.json         Package config
│       ├── tsconfig.json        TypeScript config
│       ├── README.md            Package docs
│       │
│       ├── src/
│       │   ├── icon-wrapper.tsx Wrapper component
│       │   └── index.ts         Re-exports
│       │
│       └── dist/                Build output
│           ├── index.js         CJS bundle
│           ├── index.mjs        ESM bundle
│           └── index.d.ts       Type definitions
│
└── 🎬 apps/                     Applications
    │
    └── showcase/                Next.js showcase
        ├── package.json         App config
        ├── tsconfig.json        TypeScript config
        ├── next.config.mjs      Next.js config
        ├── tailwind.config.ts   Tailwind config
        ├── postcss.config.mjs   PostCSS config
        │
        ├── src/
        │   ├── app/
        │   │   ├── layout.tsx   Root layout
        │   │   ├── page.tsx     Home page
        │   │   └── globals.css  Global styles
        │   │
        │   ├── components/
        │   │   ├── theme-switcher.tsx
        │   │   └── component-showcase.tsx
        │   │
        │   └── fonts/
        │       └── README.md    Font instructions
        │
        ├── public/              Static assets
        │
        └── out/                 Build output
            └── (static HTML)
```

## File Count Summary

```
📦 Packages (3)
   ├── @your-org/ui      (15 files)
   ├── @your-org/themes  (6 files)
   └── @your-org/icons   (5 files)

🎬 Apps (1)
   └── showcase          (10 files)

📚 Documentation
   ├── Root level        (11 .md files)
   └── Package READMEs   (5 .md files)

⚙️ Configuration
   ├── Root configs      (6 files)
   ├── Package configs   (9 files)
   └── App configs       (5 files)

🔄 Workflows
   ├── Changesets        (3 files)
   └── GitHub Actions    (2 files)

📊 Total: ~65 source files
```

## Component Structure Detail

```
Button Component
├── button.tsx           Implementation
│   ├── ButtonProps      Interface
│   ├── buttonVariants   CVA config
│   └── Button           React component
└── index.ts            Exports

Card Component
├── card.tsx            Implementation
│   ├── Card            Container
│   ├── CardHeader      Header section
│   ├── CardTitle       Title text
│   ├── CardDescription Description text
│   ├── CardContent     Main content
│   └── CardFooter      Footer section
└── index.ts           Exports

Input Component
├── input.tsx          Implementation
│   ├── InputProps     Interface
│   └── Input          React component
└── index.ts          Exports
```

## Build Output Structure

```
packages/ui/dist/
├── index.js           CJS entry
├── index.mjs          ESM entry
├── index.d.ts         TypeScript types
├── index.js.map       Source map (CJS)
├── index.mjs.map      Source map (ESM)
└── styles/
    └── globals.css    Compiled styles

packages/themes/dist/
├── family.css         Family theme
├── advisor.css        Advisor theme
└── admin.css          Admin theme

packages/icons/dist/
├── index.js           CJS entry
├── index.mjs          ESM entry
├── index.d.ts         TypeScript types
├── index.js.map       Source map (CJS)
└── index.mjs.map      Source map (ESM)

apps/showcase/out/
├── index.html         Home page
├── _next/
│   ├── static/        Static assets
│   └── ...
└── ...                Other pages
```

## Import Map

```
User Code                           Package File
────────────────────────────────────────────────────────
import { Button }                   packages/ui/dist/index.mjs
  from '@your-org/ui';              └─ src/components/button/button.tsx

import '@your-org/ui/styles';       packages/ui/dist/styles/globals.css
                                    └─ src/styles/globals.css

import '@your-org/themes/family';   packages/themes/dist/family.css
                                    └─ src/family.css

import { Heart }                    packages/icons/dist/index.mjs
  from '@your-org/icons';           └─ re-export from lucide-react
```

## Dependency Graph

```
showcase
├── depends on → ui (workspace)
├── depends on → themes (workspace)
└── depends on → icons (workspace)

ui
├── depends on → @radix-ui/react-slot
├── depends on → class-variance-authority
├── depends on → clsx
└── depends on → tailwind-merge

themes
└── (no dependencies)

icons
└── depends on → lucide-react (peer)
```

## Development Flow

```
1. Edit Source
   └─ packages/ui/src/components/button/button.tsx

2. Build
   └─ pnpm build
      └─ tsup (via turbo)
         └─ packages/ui/dist/index.mjs

3. Test in Showcase
   └─ apps/showcase imports from workspace
      └─ Hot reload active

4. Publish
   └─ pnpm changeset
      └─ git commit
         └─ GitHub Actions
            └─ npm publish
               └─ @your-org/ui@1.0.0
```

## Git Structure

```
.git/                  Git repository
.gitignore            Ignore rules
├── node_modules/     ✗ ignored
├── dist/             ✗ ignored
├── .next/            ✗ ignored
├── out/              ✗ ignored
├── *.log             ✗ ignored
└── .env*             ✗ ignored

Tracked Files:
├── src/              ✓ tracked
├── package.json      ✓ tracked
├── *.md              ✓ tracked
├── *.ts              ✓ tracked
├── *.tsx             ✓ tracked
└── *.css             ✓ tracked
```

## npm Package Structure

```
@your-org/ui
├── dist/             Compiled code
├── fonts/            Font files
├── package.json      Package metadata
├── README.md         Package docs
└── LICENSE           License file

@your-org/themes
├── dist/             CSS files
├── package.json      Package metadata
├── README.md         Package docs
└── LICENSE           License file

@your-org/icons
├── dist/             Compiled code
├── package.json      Package metadata
├── README.md         Package docs
└── LICENSE           License file
```

## Workspace Hierarchy

```
Root Workspace (design-system)
│
├── Package Workspace (packages/ui)
│   └── Dependencies
│       ├── @radix-ui/react-slot
│       ├── class-variance-authority
│       ├── clsx
│       └── tailwind-merge
│
├── Package Workspace (packages/themes)
│   └── (no dependencies)
│
├── Package Workspace (packages/icons)
│   └── Peer Dependencies
│       └── lucide-react
│
└── App Workspace (apps/showcase)
    └── Dependencies
        ├── @your-org/ui (workspace)
        ├── @your-org/themes (workspace)
        ├── @your-org/icons (workspace)
        ├── next
        ├── react
        └── react-dom
```

## TypeScript Compilation

```
Source TS/TSX               Built Output
─────────────────────────────────────────
button.tsx                  index.js (CJS)
  └─ TSC compile            index.mjs (ESM)
     └─ tsup bundle         index.d.ts (Types)
        └─ tree-shake
           └─ minify (optional)
              └─ source maps
```

## CSS Processing

```
Source CSS                  Built Output
─────────────────────────────────────────
globals.css                 dist/styles/globals.css
  └─ Copy to dist          (no processing)

family.css                  dist/family.css
advisor.css                 dist/advisor.css
admin.css                   dist/admin.css
  └─ Copy to dist          (no processing)

Note: Tailwind compilation happens at consumer level
```

## Navigation Tips

**Find a file quickly:**
```bash
# By name
find . -name "button.tsx"

# By extension
find . -name "*.tsx"

# By content
grep -r "Button" packages/ui/src
```

**VS Code:**
- Cmd/Ctrl + P → Quick file open
- Cmd/Ctrl + Shift + F → Search in files

**Terminal:**
```bash
# Change to package
cd packages/ui

# Back to root
cd ../..

# Jump to showcase
cd apps/showcase
```

This tree represents the complete, production-ready structure of your design system!
