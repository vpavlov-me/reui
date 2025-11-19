'use client';

import { useState } from 'react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Input } from '@your-org/ui';
import { Palette, Moon, Sun } from '@your-org/icons';
import ComponentShowcase from '@/components/component-showcase';
import ThemeSwitcher from '@/components/theme-switcher';

export default function Home() {
  const [theme, setTheme] = useState<'family' | 'advisor' | 'admin'>('family');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'dark' : ''} theme-${theme}`}>
      <main className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Design System</h1>
                <p className="text-muted-foreground mt-1">
                  Multi-portal design system based on Shadcn UI
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Theme Switcher */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Portal Themes
              </CardTitle>
              <CardDescription>
                Switch between different portal themes to see the design system in action
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />
            </CardContent>
          </Card>

          {/* Component Showcase */}
          <ComponentShowcase />
        </div>
      </main>
    </div>
  );
}
