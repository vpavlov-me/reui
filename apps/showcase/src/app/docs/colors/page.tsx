"use client";

import * as React from "react";
import { Button, Card, CardContent, CardHeader, CardTitle } from "@reluna-ui/ui";
import { Check, Copy } from "lucide-react";

// Theme color variables
const themeColors = [
  { name: "background", variable: "--background", description: "Default background color" },
  { name: "foreground", variable: "--foreground", description: "Default foreground color" },
  { name: "card", variable: "--card", description: "Card background color" },
  { name: "card-foreground", variable: "--card-foreground", description: "Card foreground color" },
  { name: "popover", variable: "--popover", description: "Popover background color" },
  { name: "popover-foreground", variable: "--popover-foreground", description: "Popover foreground color" },
  { name: "primary", variable: "--primary", description: "Primary color" },
  { name: "primary-foreground", variable: "--primary-foreground", description: "Primary foreground color" },
  { name: "secondary", variable: "--secondary", description: "Secondary color" },
  { name: "secondary-foreground", variable: "--secondary-foreground", description: "Secondary foreground color" },
  { name: "muted", variable: "--muted", description: "Muted background color" },
  { name: "muted-foreground", variable: "--muted-foreground", description: "Muted foreground color" },
  { name: "accent", variable: "--accent", description: "Accent color" },
  { name: "accent-foreground", variable: "--accent-foreground", description: "Accent foreground color" },
  { name: "destructive", variable: "--destructive", description: "Destructive color" },
  { name: "destructive-foreground", variable: "--destructive-foreground", description: "Destructive foreground color" },
  { name: "border", variable: "--border", description: "Border color" },
  { name: "input", variable: "--input", description: "Input border color" },
  { name: "ring", variable: "--ring", description: "Focus ring color" },
];

// Portal-specific colors
const portalColors = {
  family: {
    name: "Family Portal",
    primary: "#FB6428",
    description: "Warm orange theme for family users",
  },
  advisor: {
    name: "Advisor Portal",
    primary: "#005CCD",
    description: "Professional blue theme for advisors",
  },
  admin: {
    name: "Admin Portal",
    primary: "#8FCD00",
    description: "Vibrant lime theme for administrators",
  },
};

function ColorSwatch({
  name,
  variable,
  description,
}: {
  name: string;
  variable: string;
  description: string;
}) {
  const [copied, setCopied] = React.useState(false);
  const [computedColor, setComputedColor] = React.useState("");

  React.useEffect(() => {
    const root = document.documentElement;
    const style = getComputedStyle(root);
    const value = style.getPropertyValue(variable).trim();
    setComputedColor(value ? `hsl(${value})` : "");
  }, [variable]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(`var(${variable})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const isForeground = name.includes("foreground");

  return (
    <button
      onClick={copyToClipboard}
      className="group flex items-center gap-4 p-3 rounded-lg border hover:bg-muted/50 transition-colors text-left w-full"
    >
      <div
        className="h-10 w-10 rounded-md border shrink-0"
        style={{ backgroundColor: computedColor || `hsl(var(${variable}))` }}
      />
      <div className="flex-1 min-w-0">
        <div className="font-medium text-sm">{name}</div>
        <div className="text-xs text-muted-foreground truncate">{description}</div>
      </div>
      <div className="text-xs text-muted-foreground font-mono hidden sm:block">
        {copied ? <Check className="h-4 w-4 text-primary" /> : `var(${variable})`}
      </div>
    </button>
  );
}

export default function ColorsPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-[1200px] space-y-8">
        {/* Hero */}
        <div className="space-y-4">
          <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
            Colors
          </h1>
          <p className="text-lg text-muted-foreground">
            Theme colors that adapt to your selected portal. Click any color to copy the CSS variable.
          </p>
        </div>

        {/* Portal Colors */}
        <section className="space-y-4">
          <h2 className="text-2xl font-medium">Portal Themes</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {Object.entries(portalColors).map(([key, portal]) => (
              <Card key={key}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-10 w-10 rounded-full"
                      style={{ backgroundColor: portal.primary }}
                    />
                    <div>
                      <CardTitle className="text-base font-medium">{portal.name}</CardTitle>
                      <code className="text-xs text-muted-foreground">{portal.primary}</code>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{portal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Theme Colors */}
        <section className="space-y-4">
          <h2 className="text-2xl font-medium">Theme Colors</h2>
          <p className="text-muted-foreground">
            These colors adapt based on the selected portal theme. Switch themes using the header switcher.
          </p>
          <div className="grid gap-2 md:grid-cols-2">
            {themeColors.map((color) => (
              <ColorSwatch
                key={color.name}
                name={color.name}
                variable={color.variable}
                description={color.description}
              />
            ))}
          </div>
        </section>

        {/* Usage */}
        <section className="space-y-4 border-t pt-8">
          <h2 className="text-2xl font-medium">Usage</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base font-medium">In Tailwind Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="overflow-x-auto rounded bg-muted p-4 text-sm">
                  <code>{`<div className="bg-primary">
  Primary background
</div>

<p className="text-muted-foreground">
  Muted text
</p>

<div className="border-destructive">
  Destructive border
</div>`}</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base font-medium">In Custom CSS</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="overflow-x-auto rounded bg-muted p-4 text-sm">
                  <code>{`.custom-element {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border: 1px solid hsl(var(--border));
}

.custom-element:focus {
  ring-color: hsl(var(--ring));
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
