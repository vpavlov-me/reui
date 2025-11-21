"use client";

import Link from "next/link";

import uiPackageJson from "../../../../packages/ui/package.json";

const uiVersion = uiPackageJson.version;

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/90 backdrop-blur">
      <div className="container flex flex-col gap-3 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          Built with love by{" "}
          <Link
            href="https://reluna.family/"
            className="text-foreground underline underline-offset-4"
          >
            Reluna
          </Link>
          .
        </p>
        <p className="flex flex-wrap gap-2">
          <span>Open sourced on</span>
          <Link
            href="https://github.com/vpavlov-me/reui"
            className="text-foreground underline underline-offset-4"
          >
            GitHub
          </Link>
          <span>· Inspired by</span>
          <Link
            href="https://github.com/shadcn/ui"
            className="text-foreground underline underline-offset-4"
          >
            shadcn/ui
          </Link>
        </p>
        <p className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          <span>Version</span>
          <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-foreground text-sm normal-case">
            v{uiVersion}
          </span>
          <Link
            href="/changelog"
            className="text-foreground underline underline-offset-4 normal-case"
          >
            View changelog
          </Link>
        </p>
      </div>
    </footer>
  );
}
