# Changesets

This directory contains changeset files for version management and changelog generation.

## How to use

1. Make your changes to the codebase
2. Run `pnpm changeset` to create a new changeset
3. Describe your changes and select which packages are affected
4. Commit the changeset file along with your changes
5. When ready to release, run `pnpm version-packages` to bump versions
6. Finally, run `pnpm release` to publish to npm

## Learn more

- [Changesets documentation](https://github.com/changesets/changesets)
