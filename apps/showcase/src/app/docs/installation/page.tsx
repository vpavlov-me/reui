"use client";

import Link from "next/link";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@reluna-ui/ui";
import { ArrowRight } from "lucide-react";

const installCommand = `npm install @reluna-ui/ui @reluna-ui/themes @reluna-ui/icons

# or
pnpm add @reluna-ui/ui @reluna-ui/themes @reluna-ui/icons
yarn add @reluna-ui/ui @reluna-ui/themes @reluna-ui/icons`;

const tailwindConfig = `import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@reluna-ui/ui/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PP Object Sans", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;`;

const usageExample = `import "@reluna-ui/themes/family";
import "@reluna-ui/ui/styles";
import { Button, Card, Input } from "@reluna-ui/ui";
import { Heart } from "@reluna-ui/icons";

export function Example() {
  return (
    <Card className="space-y-4 p-6">
      <Input placeholder="Enter something..." />
      <Button>
        <Heart className="mr-2 h-4 w-4" />
        Save changes
      </Button>
    </Card>
  );
}`;

export default function InstallationPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Badge variant="secondary" className="w-fit">
          Getting Started
        </Badge>
        <h1 className="text-4xl font-medium tracking-tight">Installation</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Set up Reluna UI in a Next.js project with a single install. This guide covers required packages,
          theme styles, Tailwind configuration, and a ready-to-copy usage example.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="requirements" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Requirements
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Node.js 18 or newer and a package manager (pnpm, npm, or yarn)</li>
              <li>Tailwind CSS configured in your application</li>
              <li>React 18 / Next.js 14 project (App Router recommended)</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 id="install-packages" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          1. Install the packages
        </h2>
        <p className="text-sm text-muted-foreground">
          Install the core components, portal themes, and icon library. You can remove packages you do not plan to use,
          but most projects pull in all three.
        </p>
        <Card>
          <CardContent className="pt-6">
            <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
              <code>{installCommand}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 id="styles" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          2. Import theme + base styles
        </h2>
        <p className="text-sm text-muted-foreground">
          Add the portal theme that matches your product and import the shared component styles in your root layout.
          Themes expose opinionated tokens (colors, fonts, spacing) so your app matches the showcase instantly.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Portal themes</CardTitle>
              <CardDescription>Select the brand palette that matches your experience.</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
                <code>{`import "@reluna-ui/themes/family";
import "@reluna-ui/themes/advisor";
import "@reluna-ui/themes/admin";`}</code>
              </pre>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Base styles</CardTitle>
              <CardDescription>Load component tokens, fonts, and utilities.</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
                <code>{`// app/layout.tsx
import "@reluna-ui/ui/styles";`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="tailwind" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          3. Configure Tailwind
        </h2>
        <p className="text-sm text-muted-foreground">
          Extend your Tailwind config with Reluna UI tokens so utilities stay in sync with the design system.
          The content paths ensure tree-shaking works while building your project or storybook.
        </p>
        <Card>
          <CardContent className="pt-6">
            <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-xs md:text-sm">
              <code>{tailwindConfig}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 id="usage" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          4. Use the components
        </h2>
        <p className="text-sm text-muted-foreground">
          Import any component or icon from the packages and compose them with Tailwind utilities.
        </p>
        <Card>
          <CardContent className="pt-6">
            <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
              <code>{usageExample}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4 border-t pt-8">
        <h2 id="next-steps" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Next steps
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Design tokens</CardTitle>
              <CardDescription>Browse spacing, colors, typography, and motion scales.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/docs/tokens">
                <Button variant="outline" className="w-full">
                  View tokens
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Components</CardTitle>
              <CardDescription>See live examples with guidelines and API tables.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/docs/components">
                <Button variant="outline" className="w-full">
                  Browse components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Themes</CardTitle>
              <CardDescription>Learn how to customize the Family, Advisor, and Admin palettes.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/docs/themes">
                <Button variant="outline" className="w-full">
                  Explore themes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
