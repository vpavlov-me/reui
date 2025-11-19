# Contributing to Design System

Thank you for your interest in contributing to our design system!

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/design-system.git`
3. Install dependencies: `pnpm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## 📦 Project Structure

```
design-system/
├── packages/
│   ├── ui/           # UI components
│   ├── themes/       # Portal themes
│   └── icons/        # Icon components
└── apps/
    └── showcase/     # Component showcase
```

## 🛠️ Development Workflow

### 1. Make Your Changes

- **Adding a new component**: Create it in `packages/ui/src/components/`
- **Modifying a theme**: Edit files in `packages/themes/src/`
- **Updating icons**: Modify `packages/icons/src/`

### 2. Test Your Changes

```bash
# Start development server
pnpm dev

# Build packages
pnpm build

# Test in showcase
cd apps/showcase
pnpm dev
```

### 3. Create a Changeset

When you're ready to commit your changes, create a changeset:

```bash
pnpm changeset
```

This will prompt you to:
1. Select which packages have changed
2. Specify the type of change (major, minor, patch)
3. Write a description of your changes

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add new button variant"
git push origin feature/your-feature-name
```

### 5. Open a Pull Request

1. Go to the original repository
2. Click "New Pull Request"
3. Select your branch
4. Fill out the PR template
5. Wait for review

## 📝 Coding Standards

### Component Guidelines

- Use TypeScript for all components
- Export types alongside components
- Follow Shadcn UI patterns
- Use `cn()` utility for className merging

Example:

```tsx
import * as React from 'react';
import { cn } from '../../lib/utils';

export interface MyComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'custom';
}

const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('base-classes', className)}
        {...props}
      />
    );
  }
);

MyComponent.displayName = 'MyComponent';

export { MyComponent };
```

### Naming Conventions

- Components: PascalCase (e.g., `Button`, `CardHeader`)
- Files: kebab-case (e.g., `button.tsx`, `card-header.tsx`)
- CSS variables: kebab-case (e.g., `--primary`, `--primary-foreground`)

### Accessibility

- Use semantic HTML
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Test with screen readers

## 🎨 Adding New Themes

To add a new portal theme:

1. Create a new CSS file in `packages/themes/src/`:

```css
/* packages/themes/src/new-portal.css */
:root {
  --primary: [hue] [saturation]% [lightness]%;
  --primary-foreground: 0 0% 100%;
}

.dark {
  --primary: [hue] [saturation]% [lightness]%;
  --primary-foreground: 0 0% 100%;
}
```

2. Update `packages/themes/package.json` exports:

```json
{
  "exports": {
    "./new-portal": "./dist/new-portal.css"
  }
}
```

## 🧪 Testing

Before submitting a PR:

1. Build all packages: `pnpm build`
2. Check for TypeScript errors: `pnpm lint`
3. Test in the showcase app
4. Test with all three themes
5. Test in both light and dark modes

## 📚 Documentation

When adding new features:

1. Update component documentation
2. Add examples to the showcase app
3. Update README.md if needed
4. Document props and usage

## ❓ Questions?

If you have questions, please:

1. Check existing issues
2. Read the documentation
3. Open a new issue with the "question" label

## 🐛 Reporting Bugs

When reporting bugs, include:

1. Description of the issue
2. Steps to reproduce
3. Expected behavior
4. Actual behavior
5. Screenshots (if applicable)
6. Environment details (OS, browser, versions)

## 💡 Feature Requests

We welcome feature requests! Please:

1. Check if it already exists
2. Describe the feature
3. Explain the use case
4. Provide examples if possible

## 📋 Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Code follows project conventions
- [ ] TypeScript types are properly defined
- [ ] Components are accessible
- [ ] Changeset is created
- [ ] Documentation is updated
- [ ] Tests pass
- [ ] PR description is clear

## 🎉 Recognition

Contributors will be recognized in:

- Release notes
- GitHub contributors list
- Project README

Thank you for contributing!
