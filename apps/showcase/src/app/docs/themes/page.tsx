"use client";

import { Button } from "@your-org/ui";

export default function ThemesPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-[980px] space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Themes
          </h1>
          <p className="text-lg text-muted-foreground">
            reui supports multi-portal theming with CSS variables. Switch between
            portals using the header switcher.
          </p>
        </div>

        {/* Portal Colors */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Portal Colors</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-6">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full"
                  style={{ backgroundColor: "#FB6428" }}
                />
                <div>
                  <h3 className="font-bold">Family Portal</h3>
                  <code className="text-xs text-muted-foreground">#FB6428</code>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Warm orange theme designed for family users. Friendly and
                approachable.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full"
                  style={{ backgroundColor: "#005CCD" }}
                />
                <div>
                  <h3 className="font-bold">Advisor Portal</h3>
                  <code className="text-xs text-muted-foreground">#005CCD</code>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional blue theme for advisors. Trustworthy and
                authoritative.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full"
                  style={{ backgroundColor: "#8FCD00" }}
                />
                <div>
                  <h3 className="font-bold">Admin Portal</h3>
                  <code className="text-xs text-muted-foreground">#8FCD00</code>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Vibrant lime theme for administrators. Active and action-oriented.
              </p>
            </div>
          </div>
        </section>

        {/* Live Preview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Live Preview</h2>
          <p className="text-muted-foreground">
            These elements use the current portal theme. Switch portals in the
            header to see them change.
          </p>
          <div className="rounded-lg border bg-card p-6">
            <div className="space-y-6">
              {/* Buttons */}
              <div className="space-y-2">
                <h3 className="font-medium">Buttons</h3>
                <div className="flex flex-wrap gap-2">
                  <Button>Primary Button</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>

              {/* Color Swatches */}
              <div className="space-y-2">
                <h3 className="font-medium">Color Variables</h3>
                <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-primary" />
                    <span className="text-sm">Primary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-secondary" />
                    <span className="text-sm">Secondary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-muted" />
                    <span className="text-sm">Muted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-accent" />
                    <span className="text-sm">Accent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-destructive" />
                    <span className="text-sm">Destructive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded border bg-background" />
                    <span className="text-sm">Background</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-foreground" />
                    <span className="text-sm">Foreground</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded border bg-card" />
                    <span className="text-sm">Card</span>
                  </div>
                </div>
              </div>

              {/* Ring Focus */}
              <div className="space-y-2">
                <h3 className="font-medium">Focus Ring</h3>
                <p className="text-sm text-muted-foreground">
                  Tab to see the focus ring color change with the theme.
                </p>
                <input
                  type="text"
                  placeholder="Focus me"
                  className="rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Usage</h2>
          <div className="rounded-lg border bg-muted/50 p-6">
            <h3 className="mb-2 font-medium">CSS Variables</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Theme colors are defined as CSS variables in HSL format without the
              hsl() wrapper:
            </p>
            <pre className="overflow-x-auto rounded bg-background p-4 text-sm">
              <code>{`.theme-family {
  --primary: 14 97% 57%;
  --primary-foreground: 0 0% 100%;
  --ring: 14 97% 57%;
}

.theme-advisor {
  --primary: 213 100% 40%;
  --primary-foreground: 0 0% 100%;
  --ring: 213 100% 40%;
}

.theme-admin {
  --primary: 78 100% 40%;
  --primary-foreground: 0 0% 0%;
  --ring: 78 100% 40%;
}`}</code>
            </pre>
          </div>

          <div className="rounded-lg border bg-muted/50 p-6">
            <h3 className="mb-2 font-medium">Applying Themes</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Add the theme class to the root element to switch portals:
            </p>
            <pre className="overflow-x-auto rounded bg-background p-4 text-sm">
              <code>{`// Apply theme class to document element
document.documentElement.classList.add('theme-family');
// or
document.documentElement.classList.add('theme-advisor');
// or
document.documentElement.classList.add('theme-admin');`}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
