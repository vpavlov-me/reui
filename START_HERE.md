# 👋 Start Here - Design System

Welcome! This is your complete, production-ready design system.

## 🎯 What Is This?

A **multi-portal design system** ready to publish to npm with:

- 🎨 **3 Portal Themes**: Family (orange), Advisor (blue), Admin (lime)
- 📦 **3 npm Packages**: Components, Themes, Icons
- 🎬 **Interactive Showcase**: Next.js demo site
- 🤖 **Automated Publishing**: CI/CD with GitHub Actions
- 📚 **Complete Docs**: Everything you need

## ⚡ Quick Start (5 minutes)

```bash
# 1. Install dependencies
pnpm install

# 2. Build everything
pnpm build

# 3. Start development
pnpm dev
```

Open http://localhost:3000 → See your design system in action!

## 📚 Documentation

### For First-Time Users
1. **[QUICKSTART.md](./QUICKSTART.md)** - Get running in 5 minutes
2. **[README.md](./README.md)** - Learn how to use the components
3. **[SETUP.md](./SETUP.md)** - Detailed setup instructions

### For Developers
4. **[CONTRIBUTING.md](./CONTRIBUTING.md)** - How to contribute
5. **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Where everything is
6. **[ARCHITECTURE.md](./ARCHITECTURE.md)** - How it works

### For Publishing
7. **[PUBLISHING.md](./PUBLISHING.md)** - Publish to npm
8. **[CHECKLIST.md](./CHECKLIST.md)** - Step-by-step launch guide

### Reference
9. **[FAQ.md](./FAQ.md)** - Common questions
10. **[INDEX.md](./INDEX.md)** - All documentation

## 📦 What's Included

### Packages (Ready to Publish)

**@reluna-ui/ui** - Component library
```bash
npm install @reluna-ui/ui
```
- Button (6 variants, 4 sizes)
- Card components
- Input fields
- Utility functions

**@reluna-ui/themes** - Portal themes
```bash
npm install @reluna-ui/themes
```
- Family Portal (orange)
- Advisor Portal (blue)
- Admin Portal (lime)

**@reluna-ui/icons** - Icon library
```bash
npm install @reluna-ui/icons
```
- All Lucide icons
- Type-safe wrapper

### Showcase App

Interactive demo at `apps/showcase/`
- Live component examples
- Theme switcher
- Dark mode toggle
- Ready for GitHub Pages

## 🎨 Usage Example

```tsx
import '@reluna-ui/ui/styles';
import '@reluna-ui/themes/family';
import { Button, Card } from '@reluna-ui/ui';
import { Heart } from '@reluna-ui/icons';

export default function App() {
  return (
    <Card>
      <Button>
        <Heart className="mr-2 h-4 w-4" />
        Hello World
      </Button>
    </Card>
  );
}
```

## 🚀 Next Steps

Choose your path:

### Path A: I want to use it locally
→ [QUICKSTART.md](./QUICKSTART.md)

### Path B: I want to publish to npm
→ [CHECKLIST.md](./CHECKLIST.md)

### Path C: I want to customize it
→ [SETUP.md](./SETUP.md)

### Path D: I want to understand it
→ [ARCHITECTURE.md](./ARCHITECTURE.md)

## 📁 Project Structure

```
design-system/
├── packages/
│   ├── ui/           Component library
│   ├── themes/       Portal themes
│   └── icons/        Icon components
├── apps/
│   └── showcase/     Demo application
├── .github/
│   └── workflows/    CI/CD automation
└── docs/             This documentation
```

See [TREE.md](./TREE.md) for complete structure.

## 🛠️ Commands

```bash
# Development
pnpm install          # Install dependencies
pnpm build            # Build all packages
pnpm dev              # Start dev server
pnpm clean            # Clean build files

# Publishing
pnpm changeset        # Create version changeset
pnpm version-packages # Bump versions
pnpm release          # Publish to npm
```

## ✨ Features

### Production Ready
- ✅ TypeScript throughout
- ✅ ESM and CJS builds
- ✅ Tree-shakeable
- ✅ Source maps
- ✅ Type declarations

### Developer Experience
- ✅ Monorepo setup
- ✅ Hot reload
- ✅ Fast builds
- ✅ Automated versioning
- ✅ Comprehensive docs

### Publishing
- ✅ GitHub Actions
- ✅ npm automation
- ✅ Changesets
- ✅ GitHub Pages

## 🎯 Your First Task

1. **Run the showcase:**
   ```bash
   pnpm install && pnpm build && pnpm dev
   ```

2. **See it work:**
   - Open http://localhost:3000
   - Click theme buttons (orange, blue, lime)
   - Toggle dark mode
   - Interact with components

3. **Next:** Choose your path above!

## 📊 Stats

- **65+** source files created
- **3** publishable packages
- **1** showcase application
- **12** documentation files
- **2** CI/CD pipelines
- **3** theme variants

## 🤔 Common Questions

**Q: Do I need to know Shadcn UI?**
A: No, but it helps. Components follow Shadcn patterns.

**Q: Can I use this in production?**
A: Yes! It's production-ready.

**Q: How do I change colors?**
A: Edit CSS files in `packages/themes/src/`

**Q: Where do I add components?**
A: `packages/ui/src/components/`

**Q: How do I publish?**
A: See [PUBLISHING.md](./PUBLISHING.md)

More questions? Check [FAQ.md](./FAQ.md)

## 💡 Tips

**VS Code Users:**
- Install recommended extensions
- Use Cmd+P to quickly open files
- Use Cmd+Shift+F to search

**Terminal Users:**
```bash
# Quick navigation
cd packages/ui      # Go to UI package
cd ../..            # Back to root
cd apps/showcase    # Go to showcase
```

**Reading Docs:**
- Start with QUICKSTART.md
- Reference README.md for usage
- Deep dive with ARCHITECTURE.md

## 🎓 Learning Path

### Beginner (30 min)
1. Run showcase locally
2. Read QUICKSTART.md
3. Try one component

### Intermediate (60 min)
1. Read SETUP.md
2. Add a component
3. Test in showcase

### Advanced (2 hours)
1. Read ARCHITECTURE.md
2. Customize themes
3. Publish to npm

## 📞 Need Help?

1. **Check docs**: Start with [INDEX.md](./INDEX.md)
2. **Read FAQ**: [FAQ.md](./FAQ.md)
3. **Search issues**: GitHub issues tab
4. **Create issue**: Describe your problem
5. **Contribute**: Fix it and submit PR!

## 🌟 What Makes This Special

Unlike starting from scratch:
- ✅ **No setup needed** - Everything configured
- ✅ **No decisions needed** - Best practices applied
- ✅ **No learning curve** - Comprehensive docs
- ✅ **No publishing hassle** - Automated workflow

Unlike basic Shadcn setup:
- ✅ **Multi-portal ready** - 3 themes included
- ✅ **npm ready** - Proper package structure
- ✅ **Monorepo ready** - Turborepo configured
- ✅ **CI/CD ready** - GitHub Actions included

## 🎉 You're Ready!

Everything is set up and ready to go:

- ✅ All packages configured
- ✅ Build system ready
- ✅ Documentation complete
- ✅ CI/CD pipelines ready
- ✅ Showcase working

**What are you waiting for?** 

Start with:
```bash
pnpm install && pnpm build && pnpm dev
```

Then open [QUICKSTART.md](./QUICKSTART.md) to learn more!

---

**Last Updated**: 2025-01-19  
**Version**: 0.1.0  
**License**: MIT  

**Made with ❤️ and ready to ship! 🚀**
