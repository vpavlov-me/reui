# Font Files

This directory should contain the PP Object Sans font files.

## Required Files

```
fonts/
├── PPObjectSans-Regular.woff2
├── PPObjectSans-Medium.woff2
└── PPObjectSans-Bold.woff2
```

## Where to Get Fonts

PP Object Sans is a commercial font available from [Pangram Pangram](https://pangrampangram.com/).

## Alternative: Use System Fonts

If you don't have PP Object Sans, the app will gracefully fall back to system fonts.

To use system fonts only, update [src/app/layout.tsx](../app/layout.tsx):

```tsx
// Remove font import
// import localFont from "next/font/local";

// Remove font configuration
// const ppObjectSans = localFont({ ... });

// Update body className
<body className="font-sans antialiased">
```

Then update [tailwind.config.ts](../../tailwind.config.ts):

```ts
fontFamily: {
  sans: ['system-ui', 'sans-serif'],
},
```

## Font Loading

Fonts are loaded using Next.js `next/font/local` for optimal performance:

- Automatic subsetting
- Font preloading
- No layout shift
- Optimized file size
