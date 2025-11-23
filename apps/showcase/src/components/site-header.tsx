"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Github, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./theme-switcher";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@reluna-ui/ui";
import { CommandPalette } from "./command-palette";

export function SiteHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                "h-9 w-9 md:hidden mr-2"
              )}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <span className="font-medium text-xl">Reluna UI</span>
              </Link>
              <Link href="/docs" className="text-sm font-medium hover:text-primary">Docs</Link>
              <Link href="/blocks" className="text-sm font-medium hover:text-primary">Blocks</Link>
              <Link href="/templates" className="text-sm font-medium hover:text-primary">Templates</Link>
              <Link href="/changelog" className="text-sm font-medium hover:text-primary">Changelog</Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Mobile Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2 md:hidden">
          <span className="font-medium text-xl">Reluna UI</span>
        </Link>

        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-medium text-xl">Reluna UI</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/docs"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Docs
            </Link>
            <Link
              href="/blocks"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Blocks
            </Link>
            <Link
              href="/templates"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Templates
            </Link>
            <Link
              href="/changelog"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Changelog
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <CommandPalette />
          <ThemeSwitcher />
          <a
            href="https://github.com/vpavlov-me/reui"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              "h-9 w-9"
            )}
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </a>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn(
              "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              "h-9 w-9"
            )}
          >
            {mounted && (
              <>
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </>
            )}
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>
      </div>
    </header>
  );
}
