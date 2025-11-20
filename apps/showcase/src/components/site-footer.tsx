"use client";

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/90 backdrop-blur">
      <div className="container flex flex-col gap-3 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          Создано с любовью командой{" "}
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
      </div>
    </footer>
  );
}
