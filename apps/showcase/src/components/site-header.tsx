"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ChevronDown, Moon, Sun, Github, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./theme-switcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
} from "@reluna-ui/ui";

export function SiteHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-medium text-xl">Reluna UI</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/docs/components"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Components
            </Link>
            <Link
              href="/docs/themes"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Themes
            </Link>
            <Link
              href="/docs/colors"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Colors
            </Link>
            <Link
              href="/docs/charts"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Charts
            </Link>
            <Link
              href="/docs/claude-agent"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Agent
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
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search components..."
              className="h-9 w-64 pl-9 text-sm"
            />
          </div>
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
