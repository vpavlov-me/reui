# Launch Checklist

Complete checklist for setting up and launching your design system.

## ✅ Phase 1: Initial Setup (5-10 minutes)

### Prerequisites
- [ ] Node.js 18+ installed (`node -v`)
- [ ] pnpm installed (`pnpm -v`)
- [ ] Git initialized (already done ✓)
- [ ] Code editor ready (VS Code recommended)

### Install Dependencies
```bash
cd /Users/pavlov/Documents/reui
pnpm install
```

- [ ] Dependencies installed successfully
- [ ] No errors in terminal

### First Build
```bash
pnpm build
```

- [ ] All packages built successfully
- [ ] `dist/` folders created in packages
- [ ] No TypeScript errors

### Test Development Mode
```bash
pnpm dev
```

- [ ] Showcase starts at http://localhost:3000
- [ ] No console errors
- [ ] Components render correctly
- [ ] Theme switcher works

## ✅ Phase 2: Customization (10-20 minutes)

### Update Organization Name

**Replace `@reluna-ui` with your actual organization:**

Files to update:
- [ ] `packages/ui/package.json`
- [ ] `packages/themes/package.json`
- [ ] `packages/icons/package.json`
- [ ] `apps/showcase/package.json`
- [ ] All README.md files
- [ ] Documentation examples

**Quick replace (macOS/Linux):**
```bash
find . -type f \( -name "*.json" -o -name "*.md" -o -name "*.tsx" -o -name "*.ts" \) \
  -not -path "*/node_modules/*" \
  -not -path "*/.git/*" \
  -exec sed -i '' 's/@reluna-ui/@mycompany/g' {} +
```

**After replacing:**
- [ ] Search project for `@reluna-ui` - should find nothing
- [ ] Reinstall: `rm -rf node_modules pnpm-lock.yaml && pnpm install`
- [ ] Rebuild: `pnpm build`

### Add Font Files (Optional)

If you have PP Object Sans:
- [ ] Copy font files to `packages/ui/fonts/PPObjectSans/`
  - [ ] `PPObjectSans-Regular.woff2`
  - [ ] `PPObjectSans-Medium.woff2`
  - [ ] `PPObjectSans-Bold.woff2`

If using system fonts instead:
- [ ] Follow instructions in `packages/ui/fonts/PPObjectSans/README.md`
- [ ] Update `apps/showcase/src/app/layout.tsx`
- [ ] Update `apps/showcase/tailwind.config.ts`

### Customize Colors (Optional)

To change portal colors:
- [ ] Edit `packages/themes/src/family.css`
- [ ] Edit `packages/themes/src/advisor.css`
- [ ] Edit `packages/themes/src/admin.css`
- [ ] Rebuild: `pnpm build`
- [ ] Test in showcase

## ✅ Phase 3: Git & GitHub (5-10 minutes)

### Create GitHub Repository

- [ ] Create new repo on GitHub
- [ ] Name it (e.g., "design-system")
- [ ] Keep it public or private
- [ ] Don't initialize with README (already exists)

### Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/design-system.git
git branch -M main
git add .
git commit -m "feat: initial design system setup"
git push -u origin main
```

- [ ] Code pushed to GitHub
- [ ] All files visible on GitHub
- [ ] No sensitive data committed

### Enable GitHub Pages

- [ ] Go to repo Settings → Pages
- [ ] Source: GitHub Actions
- [ ] Save

## ✅ Phase 4: npm Setup (10-15 minutes)

### Create npm Account

- [ ] Sign up at [npmjs.com](https://www.npmjs.com/)
- [ ] Verify email
- [ ] Enable 2FA (recommended)

### Create npm Organization

- [ ] Create organization: https://www.npmjs.com/org/create
- [ ] Name must match your package names (e.g., "mycompany")
- [ ] Free tier is fine for public packages

### Generate npm Token

- [ ] Go to [npm access tokens](https://www.npmjs.com/settings/tokens)
- [ ] Generate New Token → Classic Token
- [ ] Type: Automation
- [ ] Copy token (you won't see it again!)

### Add Token to GitHub

- [ ] Go to your repo → Settings → Secrets and variables → Actions
- [ ] New repository secret
- [ ] Name: `NPM_TOKEN`
- [ ] Value: (paste your token)
- [ ] Add secret

## ✅ Phase 5: First Publish (10-15 minutes)

### Login to npm Locally
```bash
npm login
```

- [ ] Logged in successfully
- [ ] Correct username shown

### Create Initial Changeset
```bash
pnpm changeset
```

- [ ] Select all three packages
- [ ] Choose "minor" for initial release
- [ ] Write description: "Initial release"
- [ ] Changeset file created in `.changeset/`

### Version Packages
```bash
pnpm version-packages
```

- [ ] Versions bumped to 0.1.0 (or your choice)
- [ ] CHANGELOG.md files created
- [ ] package.json files updated

### Build Before Publishing
```bash
pnpm build
```

- [ ] All packages built successfully
- [ ] No errors

### Publish to npm
```bash
pnpm release
```

Or manually:
```bash
cd packages/ui && npm publish --access public
cd ../themes && npm publish --access public
cd ../icons && npm publish --access public
```

- [ ] Packages published successfully
- [ ] No errors in terminal

### Verify on npm

Check your packages are live:
- [ ] Visit `https://www.npmjs.com/package/@mycompany/ui`
- [ ] Visit `https://www.npmjs.com/package/@mycompany/themes`
- [ ] Visit `https://www.npmjs.com/package/@mycompany/icons`

## ✅ Phase 6: Test Installation (5 minutes)

### Create Test Project
```bash
cd ~/Desktop
npx create-next-app@latest test-design-system
cd test-design-system
```

### Install Your Packages
```bash
npm install @mycompany/ui @mycompany/themes @mycompany/icons
```

- [ ] Packages installed successfully
- [ ] Check `node_modules/@mycompany/`

### Test Import
```tsx
// app/page.tsx
import '@mycompany/ui/styles';
import '@mycompany/themes/family';
import { Button } from '@mycompany/ui';

export default function Home() {
  return <Button>It Works!</Button>;
}
```

- [ ] No import errors
- [ ] Button renders correctly
- [ ] Styles applied

## ✅ Phase 7: CI/CD Setup (Already Done!)

The GitHub Actions are already configured. They will:

- [ ] Run on every push to `main`
- [ ] Publish new versions to npm automatically
- [ ] Deploy showcase to GitHub Pages

Test by:
- [ ] Making a small change
- [ ] Creating a changeset: `pnpm changeset`
- [ ] Committing and pushing
- [ ] Check GitHub Actions tab
- [ ] Verify CI passes

## ✅ Phase 8: Documentation (5 minutes)

### Update Documentation

- [ ] Update `README.md` with your organization name
- [ ] Add your GitHub repo URL
- [ ] Add your npm package URLs
- [ ] Update showcase URL

### Optional Updates

- [ ] Add logo/banner image
- [ ] Add screenshots to README
- [ ] Update CONTRIBUTING.md
- [ ] Customize LICENSE if needed

## ✅ Phase 9: Showcase Deployment

After first push to GitHub:
- [ ] Check Actions tab for deploy workflow
- [ ] Wait for deployment to complete
- [ ] Visit showcase at: `https://YOUR_USERNAME.github.io/design-system/`
- [ ] Verify all components work
- [ ] Test theme switching
- [ ] Test dark mode

## ✅ Phase 10: Share & Launch

### Announce

- [ ] Share on Twitter/X
- [ ] Share on LinkedIn
- [ ] Post in relevant Discord/Slack communities
- [ ] Add to awesome lists

### Add Badges to README

```markdown
[![npm version](https://badge.fury.io/js/%40mycompany%2Fui.svg)](https://www.npmjs.com/package/@mycompany/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
```

### Set Up Monitoring (Optional)

- [ ] Enable Dependabot for security updates
- [ ] Set up npm download tracking
- [ ] Monitor GitHub stars
- [ ] Track issues and questions

## 🎯 Success Criteria

Your design system is successfully launched when:

- ✅ All packages published to npm
- ✅ Showcase deployed and accessible
- ✅ Can install and use in test project
- ✅ CI/CD pipeline working
- ✅ Documentation complete
- ✅ No critical bugs

## 🚨 Troubleshooting

### Common Issues

**pnpm install fails:**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Build fails:**
```bash
pnpm clean
pnpm build
```

**npm publish fails:**
- Check package names are available
- Verify npm token is correct
- Ensure you're logged in: `npm whoami`

**Showcase doesn't load:**
- Check GitHub Pages is enabled
- Wait 2-3 minutes for deployment
- Check Actions tab for errors

**Can't import packages:**
- Verify packages are public on npm
- Check package.json dependencies
- Try clearing cache: `npm cache clean --force`

## 📋 Maintenance Checklist

### Weekly
- [ ] Check for new issues
- [ ] Review PRs
- [ ] Monitor npm downloads

### Monthly
- [ ] Update dependencies
- [ ] Review and merge Dependabot PRs
- [ ] Check for security issues
- [ ] Update documentation

### Per Release
- [ ] Create changeset
- [ ] Update CHANGELOG
- [ ] Test in showcase
- [ ] Publish to npm
- [ ] Tag release on GitHub
- [ ] Announce update

## 🎉 Congratulations!

If you've completed all these steps, your design system is:

- ✅ **Published** - Available on npm
- ✅ **Documented** - Comprehensive docs
- ✅ **Automated** - CI/CD pipeline
- ✅ **Showcased** - Live demo site
- ✅ **Professional** - Production ready
- ✅ **Maintainable** - Good DX

**Now go build something amazing!** 🚀

## 📞 Need Help?

- Check [FAQ.md](./FAQ.md)
- Review [documentation](./INDEX.md)
- Search existing issues
- Create new issue
- Ask in community

---

**Tip**: Print this checklist and check off items as you complete them!

**Estimated Total Time**: 1-2 hours

**Last Updated**: 2025-01-19
