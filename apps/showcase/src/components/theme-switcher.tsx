'use client';

import { Button } from '@your-org/ui';

interface ThemeSwitcherProps {
  currentTheme: 'family' | 'advisor' | 'admin';
  onThemeChange: (theme: 'family' | 'advisor' | 'admin') => void;
}

export default function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  const themes = [
    { id: 'family' as const, name: 'Family Portal', color: '#FB6428' },
    { id: 'advisor' as const, name: 'Advisor Portal', color: '#005CCD' },
    { id: 'admin' as const, name: 'Admin Portal', color: '#8FCD00' },
  ];

  const handleThemeChange = (themeId: 'family' | 'advisor' | 'admin') => {
    onThemeChange(themeId);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {themes.map((theme) => (
        <Button
          key={theme.id}
          variant={currentTheme === theme.id ? 'default' : 'outline'}
          onClick={() => handleThemeChange(theme.id)}
          className="flex items-center gap-2"
        >
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: theme.color }}
          />
          {theme.name}
        </Button>
      ))}
    </div>
  );
}
