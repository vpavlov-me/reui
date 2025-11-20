# Project Structure

Complete overview of the design system monorepo.

## Directory Tree

```
design-system/
├── .changeset/                      # Version management
│   ├── config.json                  # Changesets configuration
│   ├── example.md                   # Example changeset
│   └── README.md                    # Changesets usage
│
├── .github/
│   └── workflows/
│       ├── deploy.yml               # Deploy showcase to GitHub Pages
│       └── publish.yml              # Publish packages to npm
│
├── packages/                        # Publishable packages
│   ├── ui/                          # Core component library
│   │   ├── src/
│   │   │   ├── components/         # UI components
│   │   │   │   ├── button/
│   │   │   │   │   ├── button.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── card/
│   │   │   │   ├── input/
│   │   │   │   └── index.ts        # Component exports
│   │   │   ├── lib/
│   │   │   │   └── utils.ts        # Utilities (cn)
│   │   │   ├── styles/
│   │   │   │   └── globals.css     # Base styles
│   │   │   └── index.ts            # Main entry point
│   │   ├── fonts/
│   │   │   └── PPObjectSans/       # Font files
│   │   ├── dist/                   # Build output (gitignored)
│   │   ├── package.json            # Package config
│   │   ├── tsconfig.json           # TypeScript config
│   │   ├── tsup.config.ts          # Build config
│   │   ├── .eslintrc.json          # Linting rules
│   │   └── README.md               # Package documentation
│   │
│   ├── themes/                      # Theme CSS files
│   │   ├── src/
│   │   │   ├── family.css          # Family portal theme
│   │   │   ├── advisor.css         # Advisor portal theme
│   │   │   └── admin.css           # Admin portal theme
│   │   ├── dist/                   # Build output
│   │   ├── package.json
│   │   └── README.md
│   │
│   └── icons/                       # Icon components
│       ├── src/
│       │   ├── icon-wrapper.tsx    # Icon wrapper component
│       │   └── index.ts            # Re-export Lucide icons
│       ├── dist/                   # Build output
│       ├── package.json
│       ├── tsconfig.json
│       └── README.md
│
├── apps/                           # Applications (not published)
│   └── showcase/                   # Next.js showcase app
│       ├── src/
│       │   ├── app/
│       │   │   ├── layout.tsx      # Root layout
│       │   │   ├── page.tsx        # Home page
│       │   │   └── globals.css     # Global styles
│       │   └── components/
│       │       ├── theme-switcher.tsx
│       │       └── component-showcase.tsx
│       ├── public/                 # Static assets
│       ├── package.json
│       ├── tsconfig.json
│       ├── next.config.mjs
│       ├── tailwind.config.ts
│       └── postcss.config.mjs
│
├── package.json                    # Root workspace config
├── pnpm-workspace.yaml             # Workspace definition
├── turbo.json                      # Turborepo configuration
├── .gitignore                      # Git ignore rules
├── .npmrc                          # npm configuration
├── .nvmrc                          # Node version
├── LICENSE                         # MIT license
├── README.md                       # Main documentation
├── CONTRIBUTING.md                 # Contribution guidelines
├── PUBLISHING.md                   # Publishing guide
├── SETUP.md                        # Setup instructions
├── QUICKSTART.md                   # Quick start guide
└── PROJECT_STRUCTURE.md            # This file
```

## Package Descriptions

### @reluna-ui/ui

Core component library with:
- Button component with multiple variants
- Card components (Card, CardHeader, CardTitle, etc.)
- Input component
- Utility functions (cn)
- Base Tailwind styles

**Entry points:**
- Main: `dist/index.js` (CJS) and `dist/index.mjs` (ESM)
- Styles: `dist/styles/globals.css`
- Types: `dist/index.d.ts`

### @reluna-ui/themes

Theme CSS files for three portals:
- Family Portal (orange #FB6428)
- Advisor Portal (blue #005CCD)
- Admin Portal (lime #8FCD00)

Each theme includes light and dark mode variants.

**Entry points:**
- `@reluna-ui/themes/family`
- `@reluna-ui/themes/advisor`
- `@reluna-ui/themes/admin`

### @reluna-ui/icons

Icon components wrapping Lucide Icons:
- Re-exports all Lucide icons
- Custom IconWrapper component
- Full TypeScript support

**Entry point:**
- Main: `dist/index.js` and `dist/index.mjs`

### @reluna-ui/showcase

Next.js application showcasing all components:
- Interactive theme switcher
- Dark mode toggle
- Component examples
- Live preview of all variants

**Not published to npm** (private package)

## Build System

### Turborepo

Manages build orchestration:
- Caches build outputs
- Parallel execution
- Dependency graph management

### tsup

Builds TypeScript packages:
- ESM and CJS outputs
- Type declarations
- Source maps
- Tree-shaking

### Next.js

Builds showcase application:
- Static site export
- Optimized for GitHub Pages
- Font optimization

## Version Management

### Changesets

Manages versioning and changelogs:
- Semantic versioning
- Automated changelog generation
- Coordinated releases

### Workflow

1. Make changes
2. Run `pnpm changeset`
3. Commit changeset file
4. Merge to main
5. CI creates version PR
6. Merge version PR
7. CI publishes to npm

## CI/CD

### GitHub Actions

**publish.yml**
- Triggers on push to main
- Builds all packages
- Publishes to npm via Changesets
- Creates release PRs

**deploy.yml**
- Triggers on push to main
- Builds showcase app
- Deploys to GitHub Pages

## Dependencies

### Workspace Dependencies

- `turbo`: Build orchestration
- `@changesets/cli`: Version management
- `typescript`: Type checking

### Package Dependencies

**UI Package:**
- `@radix-ui/react-slot`: Polymorphic components
- `class-variance-authority`: Variant management
- `clsx` + `tailwind-merge`: Class merging
- `lucide-react`: Icons (peer dependency)

**Icons Package:**
- `lucide-react`: Icon library (re-exported)

**Showcase App:**
- `next`: Framework
- `react` + `react-dom`: UI library
- `tailwindcss`: Styling
- All workspace packages

## File Conventions

### Naming

- Components: PascalCase (`Button.tsx`)
- Utilities: camelCase (`utils.ts`)
- CSS: kebab-case (`globals.css`)
- Config: lowercase (`tsconfig.json`)

### Exports

Each component has:
1. Implementation file (`button.tsx`)
2. Index file (`index.ts`)
3. Export from main index

Pattern:
```
components/
├── button/
│   ├── button.tsx       # Implementation
│   └── index.ts         # Local export
└── index.ts             # Global export
```

## Configuration Files

### package.json

Each package has:
- `name`: Package identifier
- `version`: Semantic version
- `main`: CJS entry point
- `module`: ESM entry point
- `types`: TypeScript declarations
- `exports`: Package exports map
- `files`: Published files
- `scripts`: Build/dev scripts
- `publishConfig`: npm settings

### tsconfig.json

TypeScript configuration:
- `strict`: Enabled
- `jsx`: react-jsx
- `moduleResolution`: bundler
- `paths`: Import aliases

### turbo.json

Build pipeline:
- `build`: Main build task
- `dev`: Development task
- `lint`: Linting task
- `clean`: Cleanup task

## Distribution

### npm

Packages are published to npm registry:
- Public access
- Scoped under organization
- Semantic versioning
- Automated via CI

### GitHub Pages

Showcase deployed to:
- Branch: gh-pages
- URL: https://reluna-ui.github.io/design-system/
- Updated on every main branch push

## Development Workflow

1. **Clone** repository
2. **Install** dependencies: `pnpm install`
3. **Build** packages: `pnpm build`
4. **Start** dev server: `pnpm dev`
5. **Make** changes
6. **Create** changeset: `pnpm changeset`
7. **Commit** and push
8. **Merge** to main
9. **Publish** via CI

## Best Practices

### Adding Components

1. Create in `packages/ui/src/components/[name]/`
2. Follow existing patterns
3. Export from component index
4. Export from main index
5. Add to showcase
6. Document usage
7. Create changeset

### Modifying Themes

1. Edit CSS files in `packages/themes/src/`
2. Use HSL color format
3. Include dark mode variant
4. Test in showcase
5. Create changeset

### Version Bumps

- **Patch**: Bug fixes, minor changes
- **Minor**: New features, backwards compatible
- **Major**: Breaking changes

## Maintenance

### Regular Tasks

- Update dependencies monthly
- Review and merge Dependabot PRs
- Test new versions in showcase
- Keep documentation current
- Monitor bundle sizes

### Monitoring

- npm download stats
- GitHub issues
- User feedback
- Performance metrics

## Support

For questions about:
- **Structure**: This file
- **Setup**: SETUP.md
- **Contributing**: CONTRIBUTING.md
- **Publishing**: PUBLISHING.md
- **Usage**: README.md
