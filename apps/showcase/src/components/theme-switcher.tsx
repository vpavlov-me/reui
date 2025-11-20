"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@reluna-ui/ui";

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
      <span className="text-sm text-muted-foreground">Portal:</span>
      <Select
        value={portalTheme}
        onValueChange={(value) => setPortalTheme(value as PortalTheme)}
      >
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Select portal" />
        </SelectTrigger>
        <SelectContent align="end">
          <SelectItem value="family">Family</SelectItem>
          <SelectItem value="advisor">Advisor</SelectItem>
          <SelectItem value="admin">Admin</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
