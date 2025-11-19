# Publishing Guide

This guide explains how to publish packages to npm.

## Prerequisites

1. **npm account**: Create an account at [npmjs.com](https://www.npmjs.com/)
2. **npm token**: Generate a token at [npmjs.com/settings/tokens](https://www.npmjs.com/settings/tokens)
3. **GitHub repository**: Push your code to GitHub
4. **Organization**: Create an npm organization (e.g., `@your-org`)

## Setup

### 1. Configure npm Token

Add `NPM_TOKEN` to your GitHub repository secrets:

1. Go to your repository settings
2. Navigate to Secrets and variables > Actions
3. Click "New repository secret"
4. Name: `NPM_TOKEN`
5. Value: Your npm token
6. Click "Add secret"

### 2. Update Package Names

Replace `@your-org` with your actual organization name in:

- All `package.json` files
- `README.md`
- Documentation files

Example:
```json
{
  "name": "@mycompany/ui"
}
```

### 3. Enable GitHub Pages

For the showcase deployment:

1. Go to repository Settings > Pages
2. Source: GitHub Actions
3. Save

## Publishing Process

### Manual Publishing

#### 1. Make Changes

Edit your code as needed.

#### 2. Create Changeset

```bash
pnpm changeset
```

Select:
- Which packages changed
- Version bump type (major, minor, patch)
- Description of changes

#### 3. Commit Changeset

```bash
git add .
git commit -m "feat: add new feature"
git push
```

#### 4. Version Packages

```bash
pnpm version-packages
```

This updates `package.json` versions and creates `CHANGELOG.md`.

#### 5. Commit Version Changes

```bash
git add .
git commit -m "chore: release packages"
git push
```

#### 6. Publish to npm

```bash
pnpm release
```

This builds and publishes all packages to npm.

### Automated Publishing

The GitHub Action automatically publishes when:

1. Changesets are detected in a PR
2. PR is merged to `main`
3. Changesets bot creates a version PR
4. Version PR is merged

## First-Time Publishing

### 1. Login to npm

```bash
npm login
```

### 2. Build Packages

```bash
pnpm build
```

### 3. Publish Manually

For first publish, you may need to publish manually:

```bash
cd packages/ui
npm publish --access public

cd ../themes
npm publish --access public

cd ../icons
npm publish --access public
```

## Versioning Strategy

Follow [Semantic Versioning](https://semver.org/):

- **Major (1.0.0)**: Breaking changes
- **Minor (0.1.0)**: New features (backwards compatible)
- **Patch (0.0.1)**: Bug fixes

### Examples

```bash
# Bug fix
pnpm changeset
# Select "patch"

# New feature
pnpm changeset
# Select "minor"

# Breaking change
pnpm changeset
# Select "major"
```

## Troubleshooting

### "Package already exists"

If you get this error, the package name is taken. Choose a different organization or package name.

### "You must be logged in"

Run `npm login` and try again.

### "No permission to publish"

Ensure you're a member of the npm organization.

### Build fails

Check TypeScript errors:
```bash
pnpm lint
```

## Post-Publishing Checklist

After publishing:

- [ ] Verify packages on npmjs.com
- [ ] Test installation: `npm install @your-org/ui`
- [ ] Check showcase deployment on GitHub Pages
- [ ] Update documentation if needed
- [ ] Announce release (Twitter, blog, etc.)

## Package Versions

Current versions are tracked in:
- `packages/ui/package.json`
- `packages/themes/package.json`
- `packages/icons/package.json`

## Changelog

Changelogs are automatically generated in each package:
- `packages/ui/CHANGELOG.md`
- `packages/themes/CHANGELOG.md`
- `packages/icons/CHANGELOG.md`

## Support

For issues:
1. Check [Changesets docs](https://github.com/changesets/changesets)
2. Review [npm publishing guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
3. Open an issue in the repository
