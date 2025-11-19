# Showcase Components

Complete list of all components displayed in the showcase application.

## 🎨 Live Demo

Visit the showcase at: **[https://vpavlov-me.github.io/reui/](https://vpavlov-me.github.io/reui/)**

## 📦 Components Included

### 1. Button Component

**Variants (6 total):**
- ✅ Default (primary color)
- ✅ Secondary
- ✅ Destructive (danger/error)
- ✅ Outline
- ✅ Ghost (transparent)
- ✅ Link (text style)

**Sizes (4 total):**
- ✅ Small (sm)
- ✅ Default
- ✅ Large (lg)
- ✅ Icon (square)

**States:**
- ✅ Default
- ✅ Hover
- ✅ Disabled
- ✅ With Icon

**Examples shown:**
```tsx
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Heart /></Button>

<Button><Mail className="mr-2 h-4 w-4" />With Icon</Button>
<Button disabled>Disabled</Button>
```

### 2. Card Component

**Parts (6 total):**
- ✅ Card (container)
- ✅ CardHeader
- ✅ CardTitle
- ✅ CardDescription
- ✅ CardContent
- ✅ CardFooter

**Examples shown:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Feature 1</CardTitle>
    <CardDescription>A simple card example</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is a card with content.</p>
  </CardContent>
</Card>
```

**Layout variations:**
- ✅ Single card
- ✅ Grid layout (3 columns)
- ✅ Nested cards

### 3. Input Component

**Types shown:**
- ✅ Text (default)
- ✅ Email
- ✅ Password

**States:**
- ✅ Default
- ✅ Focus
- ✅ Disabled
- ✅ With placeholder

**Examples shown:**
```tsx
<Input placeholder="Email" type="email" />
<Input placeholder="Password" type="password" />
<Input placeholder="Disabled" disabled />
```

### 4. Icons

**Integration:**
- ✅ Lucide Icons library
- ✅ Icon sizes
- ✅ Icon colors (inherit from text color)

**Examples shown:**
- ✅ Heart
- ✅ Share2
- ✅ Settings
- ✅ Mail

```tsx
<Heart className="h-6 w-6" />
<Share2 className="h-6 w-6" />
<Settings className="h-6 w-6" />
<Mail className="h-6 w-6" />
```

## 🎭 Theme Variants

All components are shown with:

### Portal Themes (3 total)
- ✅ Family Portal (Orange #FB6428)
- ✅ Advisor Portal (Blue #005CCD)
- ✅ Admin Portal (Lime #8FCD00)

### Dark Mode
- ✅ Light mode (default)
- ✅ Dark mode (via toggle)

**Theme switcher:**
- Interactive buttons to switch between portals
- Visual color indicators
- Instant theme switching

**Dark mode toggle:**
- Sun/Moon icon button
- Persists across theme changes
- Smooth transitions

## 🎨 Interactive Features

### Theme Switcher
```tsx
<ThemeSwitcher 
  currentTheme={theme} 
  onThemeChange={setTheme} 
/>
```

Features:
- Visual theme preview (colored dots)
- Active theme highlighting
- One-click theme switching

### Dark Mode Toggle
```tsx
<Button onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? <Sun /> : <Moon />}
</Button>
```

Features:
- Icon indicates current mode
- Applies to entire app
- Works with all themes

## 📱 Responsive Design

All components are tested and displayed:
- ✅ Desktop (1280px+)
- ✅ Tablet (768px - 1279px)
- ✅ Mobile (320px - 767px)

Layout adjustments:
- Card grids: 3 columns → 2 columns → 1 column
- Button groups: Wrap on small screens
- Input fields: Full width on mobile

## 🎯 Component Coverage

**Total components in library:** 3 base components
- Button ✅ 100% coverage
- Card ✅ 100% coverage  
- Input ✅ 100% coverage

**Variants shown:**
- Button: 6/6 variants ✅
- Button: 4/4 sizes ✅
- Card: 6/6 parts ✅
- Input: 3/3 types shown ✅

**States shown:**
- Default ✅
- Hover ✅
- Focus ✅
- Disabled ✅
- Active ✅

## 🚀 What's Not Included (Yet)

Potential components to add:
- [ ] Checkbox
- [ ] Radio
- [ ] Select/Dropdown
- [ ] Textarea
- [ ] Switch/Toggle
- [ ] Tabs
- [ ] Dialog/Modal
- [ ] Toast/Notification
- [ ] Badge
- [ ] Alert
- [ ] Progress
- [ ] Skeleton
- [ ] Tooltip
- [ ] Popover
- [ ] Accordion
- [ ] Dropdown Menu
- [ ] Navigation Menu
- [ ] Sheet/Drawer
- [ ] Calendar
- [ ] Date Picker
- [ ] Table
- [ ] Pagination

## 📊 Statistics

**Current showcase:**
- 3 component families
- 16+ component variants
- 3 theme variations
- 2 color modes (light/dark)
- 4+ icons demonstrated
- 100% of existing components shown

**Coverage:**
- ✅ All components exported
- ✅ All variants demonstrated
- ✅ All sizes shown
- ✅ All states visible
- ✅ All themes working
- ✅ Dark mode functional

## 🎨 Visual Examples

The showcase demonstrates:

1. **Component Organization**
   - Clear sections for each component
   - Descriptive titles and descriptions
   - Logical grouping

2. **Visual Hierarchy**
   - Cards contain related examples
   - Proper spacing and padding
   - Consistent styling

3. **Accessibility**
   - Proper contrast ratios
   - Focus indicators
   - Semantic HTML

4. **Responsiveness**
   - Flexible layouts
   - Touch-friendly targets
   - Mobile optimization

## 🔗 Related Files

- Component source: `packages/ui/src/components/`
- Showcase code: `apps/showcase/src/components/component-showcase.tsx`
- Theme switcher: `apps/showcase/src/components/theme-switcher.tsx`
- Main page: `apps/showcase/src/app/page.tsx`

## ✅ Quality Checklist

- ✅ All components render correctly
- ✅ No console errors
- ✅ Themes switch properly
- ✅ Dark mode works
- ✅ Icons display
- ✅ Hover states work
- ✅ Disabled states shown
- ✅ Responsive on all screens
- ✅ Accessible keyboard navigation
- ✅ Proper focus management

The showcase is **complete and production-ready**! 🎉
