import Link from "next/link";

export default function Home() {
  return (
    <div className="container py-10">
      {/* Hero Section */}
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Build your component library
        </h1>
        <span className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          A collection of beautifully designed, accessible components built with
          Radix UI and Tailwind CSS. Themed for Family, Advisor, and Admin
          portals.
        </span>
        <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
          <Link
            href="/docs/components"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Browse Components
          </Link>
          <Link
            href="/docs/themes"
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View Themes
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div className="space-y-2">
              <h3 className="font-bold">Multi-Portal Theming</h3>
              <p className="text-sm text-muted-foreground">
                Switch between Family, Advisor, and Admin themes with CSS
                variables.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div className="space-y-2">
              <h3 className="font-bold">Accessible Components</h3>
              <p className="text-sm text-muted-foreground">
                Built on Radix UI primitives for full accessibility support.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div className="space-y-2">
              <h3 className="font-bold">TypeScript First</h3>
              <p className="text-sm text-muted-foreground">
                Full TypeScript support with proper type definitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Preview */}
      <section className="mx-auto max-w-[980px] py-8 md:py-12">
        <h2 className="mb-4 text-center text-2xl font-bold">Theme Preview</h2>
        <p className="mb-8 text-center text-muted-foreground">
          Use the portal switcher in the header to see how the primary color
          changes across different portals.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-lg border p-6">
            <div className="h-16 w-16 rounded-full bg-primary" />
            <span className="font-medium">Primary</span>
            <span className="text-xs text-muted-foreground">
              --primary color
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border p-6">
            <div className="h-16 w-16 rounded-full bg-secondary" />
            <span className="font-medium">Secondary</span>
            <span className="text-xs text-muted-foreground">
              --secondary color
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border p-6">
            <div className="h-16 w-16 rounded-full bg-destructive" />
            <span className="font-medium">Destructive</span>
            <span className="text-xs text-muted-foreground">
              --destructive color
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
