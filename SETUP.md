# Setup Guide

Quick start guide to get the design system up and running.

## Initial Setup

### 1. Install Dependencies

```bash
pnpm install
```

If you don't have pnpm installed:

```bash
npm install -g pnpm
```

### 2. Add Font Files

Copy your PP Object Sans font files to:

```
packages/ui/fonts/PPObjectSans/
├── PPObjectSans-Regular.woff2
├── PPObjectSans-Medium.woff2
└── PPObjectSans-Bold.woff2
```

If you don't have the font, the system will fall back to system fonts.

### 3. Build Packages

```bash
pnpm build
```

This builds all packages in the correct order.

### 4. Start Development

```bash
pnpm dev
```

This starts:
- Watch mode for all packages
- Next.js showcase app at [http://localhost:3000](http://localhost:3000)

## Customization

### Update Organization Name

Replace `@your-org` with your organization name:

1. Search and replace in all `package.json` files
2. Update imports in example code
3. Update documentation

Example with bash:

```bash
find . -type f -name "package.json" -exec sed -i '' 's/@your-org/@mycompany/g' {} +
```

### Update Portal Colors

Edit theme files in `packages/themes/src/`:

**Family Portal** (`family.css`):
```css
:root {
  --primary: 17 96% 57%; /* HSL for #FB6428 */
}
```

**Advisor Portal** (`advisor.css`):
```css
:root {
  --primary: 213 100% 40%; /* HSL for #005CCD */
}
```

**Admin Portal** (`admin.css`):
```css
:root {
  --primary: 78 100% 40%; /* HSL for #8FCD00 */
}
```

### Add More Components

1. Create component in `packages/ui/src/components/[component-name]/`
2. Follow the existing pattern (see Button example)
3. Export from `packages/ui/src/components/index.ts`
4. Add to showcase in `apps/showcase/`

## Testing Locally

### Test in Your Own App

#### Using Link

```bash
# In design-system directory
cd packages/ui
pnpm link --global

# In your app directory
pnpm link --global @your-org/ui
```

#### Using Relative Path

In your app's `package.json`:

```json
{
  "dependencies": {
    "@your-org/ui": "file:../design-system/packages/ui"
  }
}
```

### Test Installation Flow

1. Build packages: `pnpm build`
2. Pack packages: `cd packages/ui && npm pack`
3. Install in test project: `npm install /path/to/your-org-ui-0.1.0.tgz`

## Project Structure

```
design-system/
├── packages/              # Publishable packages
│   ├── ui/               # Component library
│   ├── themes/           # Theme CSS files
│   └── icons/            # Icon components
├── apps/                 # Applications
│   └── showcase/         # Component showcase
├── .changeset/           # Version management
├── .github/              # CI/CD workflows
└── docs/                 # Documentation
```

## Common Commands

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development
pnpm dev

# Clean build artifacts
pnpm clean

# Lint code
pnpm lint

# Create changeset
pnpm changeset

# Version packages
pnpm version-packages

# Publish to npm
pnpm release
```

## Environment Variables

For the showcase app, create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production:

```env
NEXT_PUBLIC_SITE_URL=https://your-org.github.io/design-system
```

## Troubleshooting

### pnpm install fails

Try:
```bash
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

### Build fails

1. Check TypeScript errors: `pnpm lint`
2. Ensure all dependencies are installed
3. Try clean build: `pnpm clean && pnpm build`

### Showcase doesn't start

1. Ensure packages are built: `pnpm build`
2. Check Node version: `node -v` (should be 18+)
3. Clear Next.js cache: `rm -rf apps/showcase/.next`

### Components not found

1. Build packages: `pnpm build`
2. Check exports in `package.json`
3. Verify import paths

## Next Steps

1. ✅ Read [README.md](./README.md) for usage instructions
2. ✅ Read [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines
3. ✅ Read [PUBLISHING.md](./PUBLISHING.md) for publishing instructions
4. ✅ Add your font files
5. ✅ Customize colors and themes
6. ✅ Add more components
7. ✅ Set up GitHub repository
8. ✅ Configure npm organization
9. ✅ Publish to npm

## Support

Need help? Check:

1. [GitHub Issues](https://github.com/your-org/design-system/issues)
2. [Shadcn UI Docs](https://ui.shadcn.com)
3. [Changesets Docs](https://github.com/changesets/changesets)
4. [Turborepo Docs](https://turbo.build/repo)

Enjoy building with the design system!
