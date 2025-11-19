# Frequently Asked Questions

Common questions and answers about the design system.

## General

### What is this design system?

A production-ready, npm-publishable component library based on Shadcn UI for three portals (Family, Advisor, Admin) with shared components and portal-specific themes.

### What makes this different from regular Shadcn UI?

- ✅ Pre-configured for multi-portal use
- ✅ Ready to publish to npm
- ✅ Monorepo setup included
- ✅ Three theme variants out of the box
- ✅ Automated versioning and publishing
- ✅ Showcase app included

### Do I need to know Shadcn UI to use this?

No, but it helps. The components follow Shadcn UI patterns but are packaged for easy consumption.

## Installation & Setup

### What do I need to install first?

1. Node.js 18+ ([download](https://nodejs.org/))
2. pnpm ([install](https://pnpm.io/installation))

```bash
npm install -g pnpm
```

### How do I get started?

```bash
cd design-system
pnpm install
pnpm build
pnpm dev
```

See [QUICKSTART.md](./QUICKSTART.md) for details.

### Can I use npm or yarn instead of pnpm?

Yes, but pnpm is recommended for monorepos. If using npm/yarn:

1. Delete `pnpm-lock.yaml`
2. Update `package.json` scripts
3. Remove pnpm references from CI

### Where do I put the font files?

Copy your PP Object Sans fonts to:
```
packages/ui/fonts/PPObjectSans/
```

Or see [fonts README](./packages/ui/fonts/PPObjectSans/README.md) to use system fonts.

## Customization

### How do I change the package names?

Replace `@your-org` everywhere:

```bash
# macOS/Linux
find . -type f -name "*.json" -exec sed -i '' 's/@your-org/@mycompany/g' {} +

# Or manually update each package.json
```

### How do I change the portal colors?

Edit CSS files in `packages/themes/src/`:

```css
/* packages/themes/src/family.css */
:root {
  --primary: [hue] [saturation]% [lightness]%;
}
```

Convert your hex color to HSL at [hslpicker.com](https://hslpicker.com/).

### How do I add a new component?

1. Create folder: `packages/ui/src/components/my-component/`
2. Add `my-component.tsx` (implementation)
3. Add `index.ts` (exports)
4. Export from `packages/ui/src/components/index.ts`
5. Build: `pnpm build`
6. Add to showcase for testing

### Can I add a fourth portal?

Yes! Create `packages/themes/src/new-portal.css`:

```css
:root {
  --primary: [your-color-hsl];
  --primary-foreground: 0 0% 100%;
}
```

Update `packages/themes/package.json` exports:

```json
"exports": {
  "./new-portal": "./dist/new-portal.css"
}
```

## Development

### Why isn't my component showing up?

Check:
1. Did you build? `pnpm build`
2. Is it exported from `packages/ui/src/index.ts`?
3. Are types generated? Check `packages/ui/dist/index.d.ts`
4. Clear cache: `pnpm clean && pnpm build`

### How do I test my components?

1. Use the showcase app: `pnpm dev`
2. Or link to a test project:
   ```bash
   cd packages/ui
   pnpm link --global

   cd /path/to/test-app
   pnpm link --global @your-org/ui
   ```

### The build is slow, how can I speed it up?

Turborepo caches builds. First build is slow, subsequent builds are fast.

Tips:
- Use `pnpm dev` for watch mode
- Only build what changed
- Keep dependencies minimal

### How do I add dark mode?

Dark mode is already configured! Just add the `dark` class:

```tsx
<div className="dark">
  {/* Dark mode active */}
</div>
```

## Publishing

### How do I publish to npm?

See [PUBLISHING.md](./PUBLISHING.md) for full guide.

Quick version:
1. Create npm account and org
2. Generate npm token
3. Add token to GitHub secrets
4. Run `pnpm changeset`
5. Commit and push
6. CI handles the rest

### What's a changeset?

A changeset is a file describing what changed and the version bump type (major/minor/patch).

Create one with:
```bash
pnpm changeset
```

### Do I need to publish all packages together?

No, changesets can version packages independently. Only changed packages are published.

### How do I unpublish a package?

```bash
npm unpublish @your-org/ui@1.0.0 --force
```

Warning: Only unpublish within 72 hours. After that, you can only deprecate.

### Can I publish to a private registry?

Yes, update `publishConfig` in package.json:

```json
"publishConfig": {
  "registry": "https://your-registry.com"
}
```

## Usage

### How do I use this in my Next.js app?

```bash
npm install @your-org/ui @your-org/themes
```

```tsx
// app/layout.tsx
import '@your-org/ui/styles';
import '@your-org/themes/family';

// app/page.tsx
import { Button } from '@your-org/ui';

export default function Page() {
  return <Button>Hello</Button>;
}
```

### Does this work with Vite?

Yes! Same installation, similar setup:

```tsx
// main.tsx
import '@your-org/ui/styles';
import '@your-org/themes/advisor';
```

### What about Remix?

Yes, import styles in `app/root.tsx`:

```tsx
import styles from '@your-org/ui/styles';
export const links = () => [{ rel: 'stylesheet', href: styles }];
```

### Can I use only some components?

Yes, tree-shaking works automatically:

```tsx
import { Button } from '@your-org/ui'; // Only Button is bundled
```

### How do I override styles?

Use the `className` prop:

```tsx
<Button className="bg-purple-500 hover:bg-purple-600">
  Custom Purple Button
</Button>
```

## Troubleshooting

### pnpm install fails

Try:
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build fails with TypeScript errors

1. Check your TypeScript version: `tsc --version`
2. Ensure it's 5.x
3. Run `pnpm build` from root, not package directories

### Components don't have styles

Check:
1. Imported global styles? `import '@your-org/ui/styles'`
2. Imported theme? `import '@your-org/themes/family'`
3. Tailwind configured? Check `tailwind.config.js`

### Dark mode not working

1. Add `dark` class to parent element
2. Check theme includes dark mode styles
3. Ensure Tailwind has `darkMode: ['class']`

### Icons not showing

1. Did you install? `npm install @your-org/icons`
2. Did you import? `import { Heart } from '@your-org/icons'`
3. Check console for errors

### Showcase app won't start

1. Build packages first: `pnpm build`
2. Check Node version: `node -v` (need 18+)
3. Clear Next cache: `rm -rf apps/showcase/.next`

### GitHub Actions failing

1. Check npm token is set in secrets
2. Ensure token has publish permission
3. Check package names are available on npm
4. Review action logs for specific errors

## Performance

### How big are the bundles?

Approximate sizes (minified):
- `@your-org/ui`: ~50KB + components used
- `@your-org/themes`: ~2KB per theme
- `@your-org/icons`: ~5KB + icons used

Tree-shaking reduces actual bundle size.

### Can I make it smaller?

Yes:
1. Import only what you need
2. Use dynamic imports for large components
3. Enable Tailwind JIT (already configured)
4. Use production builds

### Is it fast enough for production?

Yes! It uses:
- No runtime CSS-in-JS (pure CSS)
- Minimal JavaScript
- Static Tailwind classes
- React 18 features

## Advanced

### How do I add ESLint rules?

Update `.eslintrc.json` in each package:

```json
{
  "rules": {
    "your-rule": "error"
  }
}
```

### Can I use this with TypeScript strict mode?

Yes, it's already enabled in all packages!

### How do I add tests?

Install testing library:
```bash
pnpm add -D vitest @testing-library/react
```

Add test script to package.json:
```json
"scripts": {
  "test": "vitest"
}
```

### Can I use Storybook?

Yes, add Storybook to the monorepo:

```bash
cd apps
npx storybook@latest init
```

Configure to use workspace packages.

### How do I deploy showcase somewhere else?

The showcase is a static Next.js export. Deploy to:
- Vercel: `vercel deploy`
- Netlify: Drag `apps/showcase/out` folder
- S3: Upload `out` folder
- Any static host

## Contributing

### How can I contribute?

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### I found a bug, what do I do?

1. Check if it's already reported
2. Create an issue with:
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details
3. Submit a PR if you can fix it!

### Can I add more components?

Yes! Follow the contribution guidelines and existing patterns.

## Still Have Questions?

1. Check all documentation files in the root
2. Search existing issues on GitHub
3. Create a new issue with your question
4. Check [Shadcn UI docs](https://ui.shadcn.com) for component patterns

---

**Last Updated**: 2025-01-19
