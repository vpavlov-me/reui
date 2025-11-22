"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ChevronDown, Moon, Sun, Github, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./theme-switcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Sheet,
  SheetContent,
  SheetTrigger,
  ScrollArea,
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
              <div className="flex flex-col gap-3">
                <div className="font-medium text-sm text-muted-foreground">Documentation</div>
                <div className="flex flex-col gap-2 pl-2">
                  <Link href="/docs" className="text-sm hover:text-primary">Overview</Link>
                  <Link href="/docs/installation" className="text-sm hover:text-primary">Installation</Link>
                  <Link href="/docs/components" className="text-sm hover:text-primary">Components</Link>
                  <Link href="/docs/themes" className="text-sm hover:text-primary">Themes</Link>
                  <Link href="/docs/colors" className="text-sm hover:text-primary">Colors</Link>
                  <Link href="/docs/icons" className="text-sm hover:text-primary">Icons</Link>
                  <Link href="/docs/tokens" className="text-sm hover:text-primary">Design Tokens</Link>
                </div>
              </div>
              <Link href="/blocks" className="text-sm font-medium hover:text-primary">Blocks</Link>
              <div className="flex flex-col gap-3">
                <div className="font-medium text-sm text-muted-foreground">Templates</div>
                <div className="flex flex-col gap-2 pl-2">
                  <Link href="/templates/dashboard" className="text-sm hover:text-primary">Dashboard</Link>
                  <Link href="/templates/profile" className="text-sm hover:text-primary">Profile</Link>
                  <Link href="/templates/constitution" className="text-sm hover:text-primary">Constitution</Link>
                  <Link href="/templates/auth" className="text-sm hover:text-primary">Authentication</Link>
                </div>
              </div>
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
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-foreground/80 text-foreground/60">
                Docs
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/docs">Overview</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/docs/installation">Installation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/docs/components">Components</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/docs/themes">Themes</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/docs/colors">Colors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/docs/icons">Icons</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/docs/tokens">Design Tokens</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/blocks"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Blocks
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-foreground/80 text-foreground/60">
                Templates
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/templates/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/templates/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/templates/constitution">Constitution</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/templates/auth">Authentication</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
