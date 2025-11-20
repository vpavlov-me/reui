"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type PortalTheme = "family" | "advisor" | "admin";

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const [portalTheme, setPortalTheme] = React.useState<PortalTheme>("family");

  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-family", "theme-advisor", "theme-admin");
    root.classList.add(`theme-${portalTheme}`);
  }, [portalTheme]);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-sm font-medium text-muted-foreground">Portal:</span>
      <div className="flex rounded-md border bg-muted p-1">
        <button
          onClick={() => setPortalTheme("family")}
          className={cn(
            "rounded px-3 py-1.5 text-sm font-medium transition-colors",
            portalTheme === "family"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Family
        </button>
        <button
          onClick={() => setPortalTheme("advisor")}
          className={cn(
            "rounded px-3 py-1.5 text-sm font-medium transition-colors",
            portalTheme === "advisor"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Advisor
        </button>
        <button
          onClick={() => setPortalTheme("admin")}
          className={cn(
            "rounded px-3 py-1.5 text-sm font-medium transition-colors",
            portalTheme === "admin"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Admin
        </button>
      </div>
    </div>
  );
}
