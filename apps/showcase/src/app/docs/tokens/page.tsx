"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Input,
} from "@reluna-ui/ui";
import { Check, Copy, Search } from "lucide-react";

// Spacing scale
const spacingTokens = [
  { name: "0", value: "0px", tailwind: "p-0, m-0, gap-0" },
  { name: "px", value: "1px", tailwind: "p-px, m-px, gap-px" },
  { name: "0.5", value: "2px", tailwind: "p-0.5, m-0.5, gap-0.5" },
  { name: "1", value: "4px", tailwind: "p-1, m-1, gap-1" },
  { name: "1.5", value: "6px", tailwind: "p-1.5, m-1.5, gap-1.5" },
  { name: "2", value: "8px", tailwind: "p-2, m-2, gap-2" },
  { name: "2.5", value: "10px", tailwind: "p-2.5, m-2.5, gap-2.5" },
  { name: "3", value: "12px", tailwind: "p-3, m-3, gap-3" },
  { name: "3.5", value: "14px", tailwind: "p-3.5, m-3.5, gap-3.5" },
  { name: "4", value: "16px", tailwind: "p-4, m-4, gap-4" },
  { name: "5", value: "20px", tailwind: "p-5, m-5, gap-5" },
  { name: "6", value: "24px", tailwind: "p-6, m-6, gap-6" },
  { name: "7", value: "28px", tailwind: "p-7, m-7, gap-7" },
  { name: "8", value: "32px", tailwind: "p-8, m-8, gap-8" },
  { name: "9", value: "36px", tailwind: "p-9, m-9, gap-9" },
  { name: "10", value: "40px", tailwind: "p-10, m-10, gap-10" },
  { name: "11", value: "44px", tailwind: "p-11, m-11, gap-11" },
  { name: "12", value: "48px", tailwind: "p-12, m-12, gap-12" },
  { name: "14", value: "56px", tailwind: "p-14, m-14, gap-14" },
  { name: "16", value: "64px", tailwind: "p-16, m-16, gap-16" },
  { name: "20", value: "80px", tailwind: "p-20, m-20, gap-20" },
  { name: "24", value: "96px", tailwind: "p-24, m-24, gap-24" },
];

// Border radius scale
const radiusTokens = [
  { name: "none", value: "0px", variable: "--radius-none", tailwind: "rounded-none" },
  { name: "sm", value: "2px", variable: "--radius-sm", tailwind: "rounded-sm" },
  { name: "DEFAULT", value: "4px", variable: "--radius", tailwind: "rounded" },
  { name: "md", value: "6px", variable: "--radius-md", tailwind: "rounded-md" },
  { name: "lg", value: "8px", variable: "--radius-lg", tailwind: "rounded-lg" },
  { name: "xl", value: "12px", variable: "--radius-xl", tailwind: "rounded-xl" },
  { name: "2xl", value: "16px", variable: "--radius-2xl", tailwind: "rounded-2xl" },
  { name: "3xl", value: "24px", variable: "--radius-3xl", tailwind: "rounded-3xl" },
  { name: "full", value: "9999px", variable: "--radius-full", tailwind: "rounded-full" },
];

// Shadow scale
const shadowTokens = [
  { name: "sm", value: "0 1px 2px 0 rgb(0 0 0 / 0.05)", tailwind: "shadow-sm" },
  { name: "DEFAULT", value: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", tailwind: "shadow" },
  { name: "md", value: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", tailwind: "shadow-md" },
  { name: "lg", value: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", tailwind: "shadow-lg" },
  { name: "xl", value: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", tailwind: "shadow-xl" },
  { name: "2xl", value: "0 25px 50px -12px rgb(0 0 0 / 0.25)", tailwind: "shadow-2xl" },
  { name: "inner", value: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", tailwind: "shadow-inner" },
  { name: "none", value: "0 0 #0000", tailwind: "shadow-none" },
];

// Typography scale
const fontSizeTokens = [
  { name: "xs", size: "12px", lineHeight: "16px", tailwind: "text-xs" },
  { name: "sm", size: "14px", lineHeight: "20px", tailwind: "text-sm" },
  { name: "base", size: "16px", lineHeight: "24px", tailwind: "text-base" },
  { name: "lg", size: "18px", lineHeight: "28px", tailwind: "text-lg" },
  { name: "xl", size: "20px", lineHeight: "28px", tailwind: "text-xl" },
  { name: "2xl", size: "24px", lineHeight: "32px", tailwind: "text-2xl" },
  { name: "3xl", size: "30px", lineHeight: "36px", tailwind: "text-3xl" },
  { name: "4xl", size: "36px", lineHeight: "40px", tailwind: "text-4xl" },
  { name: "5xl", size: "48px", lineHeight: "1", tailwind: "text-5xl" },
  { name: "6xl", size: "60px", lineHeight: "1", tailwind: "text-6xl" },
];

// Font weight scale
const fontWeightTokens = [
  { name: "thin", value: "100", tailwind: "font-thin" },
  { name: "extralight", value: "200", tailwind: "font-extralight" },
  { name: "light", value: "300", tailwind: "font-light" },
  { name: "normal", value: "400", tailwind: "font-normal" },
  { name: "medium", value: "500", tailwind: "font-medium" },
  { name: "semibold", value: "600", tailwind: "font-semibold" },
  { name: "bold", value: "700", tailwind: "font-medium" },
  { name: "extrabold", value: "800", tailwind: "font-extrabold" },
  { name: "black", value: "900", tailwind: "font-black" },
];

// Z-index scale
const zIndexTokens = [
  { name: "0", value: "0", tailwind: "z-0" },
  { name: "10", value: "10", tailwind: "z-10" },
  { name: "20", value: "20", tailwind: "z-20" },
  { name: "30", value: "30", tailwind: "z-30" },
  { name: "40", value: "40", tailwind: "z-40" },
  { name: "50", value: "50", tailwind: "z-50" },
];

// Breakpoints
const breakpointTokens = [
  { name: "sm", value: "640px", description: "Small screens, mobile landscape" },
  { name: "md", value: "768px", description: "Medium screens, tablets" },
  { name: "lg", value: "1024px", description: "Large screens, laptops" },
  { name: "xl", value: "1280px", description: "Extra large screens, desktops" },
  { name: "2xl", value: "1536px", description: "2X large screens, large desktops" },
];

// Animation durations
const animationTokens = [
  { name: "75", value: "75ms", tailwind: "duration-75" },
  { name: "100", value: "100ms", tailwind: "duration-100" },
  { name: "150", value: "150ms", tailwind: "duration-150" },
  { name: "200", value: "200ms", tailwind: "duration-200" },
  { name: "300", value: "300ms", tailwind: "duration-300" },
  { name: "500", value: "500ms", tailwind: "duration-500" },
  { name: "700", value: "700ms", tailwind: "duration-700" },
  { name: "1000", value: "1000ms", tailwind: "duration-1000" },
];

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={handleCopy}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono"
        >
          {copied ? <Check className="h-3 w-3 inline text-primary" /> : label}
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="text-xs">
        Click to copy
      </TooltipContent>
    </Tooltip>
  );
}

export default function TokensPage() {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <TooltipProvider delayDuration={300}>
      <div className="space-y-8">
          {/* Hero */}
          <div className="space-y-4">
            <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
              Design Tokens
            </h1>
            <p className="text-lg text-muted-foreground">
              Foundation values for spacing, typography, borders, shadows, and more.
              Click any value to copy the Tailwind class.
            </p>
          </div>

          {/* Search */}
          <div className="sticky top-14 z-10 bg-background/95 backdrop-blur -mx-4 px-4 py-4 border-b">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search tokens..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <Tabs defaultValue="spacing" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
              <TabsTrigger value="spacing">Spacing</TabsTrigger>
              <TabsTrigger value="radius">Radius</TabsTrigger>
              <TabsTrigger value="shadows">Shadows</TabsTrigger>
              <TabsTrigger value="typography">Typography</TabsTrigger>
              <TabsTrigger value="weights">Weights</TabsTrigger>
              <TabsTrigger value="z-index">Z-Index</TabsTrigger>
              <TabsTrigger value="breakpoints">Breakpoints</TabsTrigger>
              <TabsTrigger value="animation">Animation</TabsTrigger>
            </TabsList>

            {/* Spacing */}
            <TabsContent value="spacing" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Spacing Scale</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {spacingTokens
                      .filter(t =>
                        !searchQuery ||
                        t.name.includes(searchQuery) ||
                        t.value.includes(searchQuery) ||
                        t.tailwind.includes(searchQuery)
                      )
                      .map((token) => (
                      <div key={token.name} className="flex items-center gap-4 py-2 border-b last:border-0">
                        <div className="w-16 text-sm font-medium">{token.name}</div>
                        <div
                          className="bg-primary h-4 rounded-sm"
                          style={{ width: token.value === "0px" ? "2px" : token.value }}
                        />
                        <div className="flex-1" />
                        <CopyButton text={token.tailwind.split(",")[0]} label={token.value} />
                        <CopyButton text={token.tailwind.split(",")[0]} label={token.tailwind.split(",")[0]} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Border Radius */}
            <TabsContent value="radius" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Border Radius Scale</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {radiusTokens
                      .filter(t =>
                        !searchQuery ||
                        t.name.includes(searchQuery) ||
                        t.value.includes(searchQuery) ||
                        t.tailwind.includes(searchQuery)
                      )
                      .map((token) => (
                      <div key={token.name} className="flex flex-col items-center gap-3 p-4 border rounded-lg">
                        <div
                          className="w-16 h-16 bg-primary"
                          style={{ borderRadius: token.value }}
                        />
                        <div className="text-center">
                          <div className="text-sm font-medium">{token.name}</div>
                          <CopyButton text={token.tailwind} label={token.value} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Shadows */}
            <TabsContent value="shadows" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Shadow Scale</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                    {shadowTokens
                      .filter(t =>
                        !searchQuery ||
                        t.name.includes(searchQuery) ||
                        t.tailwind.includes(searchQuery)
                      )
                      .map((token) => (
                      <div key={token.name} className="flex flex-col items-center gap-3 p-4">
                        <div
                          className="w-20 h-20 bg-card border rounded-lg"
                          style={{ boxShadow: token.value }}
                        />
                        <div className="text-center">
                          <div className="text-sm font-medium">{token.name}</div>
                          <CopyButton text={token.tailwind} label={token.tailwind} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Typography */}
            <TabsContent value="typography" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Font Size Scale</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {fontSizeTokens
                      .filter(t =>
                        !searchQuery ||
                        t.name.includes(searchQuery) ||
                        t.size.includes(searchQuery) ||
                        t.tailwind.includes(searchQuery)
                      )
                      .map((token) => (
                      <div key={token.name} className="flex items-center gap-4 py-2 border-b last:border-0">
                        <div className="w-16 text-sm font-medium">{token.name}</div>
                        <div
                          className="flex-1 truncate"
                          style={{ fontSize: token.size, lineHeight: token.lineHeight }}
                        >
                          The quick brown fox
                        </div>
                        <CopyButton text={token.tailwind} label={`${token.size}/${token.lineHeight}`} />
                        <CopyButton text={token.tailwind} label={token.tailwind} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Font Weights */}
            <TabsContent value="weights" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Font Weight Scale</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {fontWeightTokens
                      .filter(t =>
                        !searchQuery ||
                        t.name.includes(searchQuery) ||
                        t.value.includes(searchQuery) ||
                        t.tailwind.includes(searchQuery)
                      )
                      .map((token) => (
                      <div key={token.name} className="flex items-center gap-4 py-2 border-b last:border-0">
                        <div className="w-24 text-sm font-medium">{token.name}</div>
                        <div
                          className="flex-1 text-lg"
                          style={{ fontWeight: parseInt(token.value) }}
                        >
                          The quick brown fox jumps over the lazy dog
                        </div>
                        <CopyButton text={token.tailwind} label={token.value} />
                        <CopyButton text={token.tailwind} label={token.tailwind} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Z-Index */}
            <TabsContent value="z-index" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Z-Index Scale</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {zIndexTokens
                      .filter(t =>
                        !searchQuery ||
                        t.name.includes(searchQuery) ||
                        t.tailwind.includes(searchQuery)
                      )
                      .map((token) => (
                      <div key={token.name} className="flex items-center gap-4 py-2 border-b last:border-0">
                        <div className="w-16 text-sm font-medium">{token.name}</div>
                        <div className="flex-1">
                          <div className="relative h-8">
                            {Array.from({ length: parseInt(token.name) / 10 + 1 }).map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-8 h-8 bg-primary/20 border border-primary rounded"
                                style={{ left: `${i * 8}px`, zIndex: i }}
                              />
                            ))}
                          </div>
                        </div>
                        <CopyButton text={token.tailwind} label={token.value} />
                        <CopyButton text={token.tailwind} label={token.tailwind} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Breakpoints */}
            <TabsContent value="breakpoints" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Responsive Breakpoints</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {breakpointTokens
                      .filter(t =>
                        !searchQuery ||
                        t.name.includes(searchQuery) ||
                        t.value.includes(searchQuery) ||
                        t.description.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map((token) => (
                      <div key={token.name} className="flex items-center gap-4 py-3 border-b last:border-0">
                        <div className="w-16">
                          <span className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs font-medium">
                            {token.name}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm">{token.description}</div>
                        </div>
                        <CopyButton text={`${token.name}:`} label={token.value} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Usage Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="overflow-x-auto rounded bg-muted p-4 text-sm">
                    <code>{`<div className="
  grid
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  xl:grid-cols-5
">
  {/* Content */}
</div>`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Animation */}
            <TabsContent value="animation" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Animation Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {animationTokens
                      .filter(t =>
                        !searchQuery ||
                        t.name.includes(searchQuery) ||
                        t.value.includes(searchQuery) ||
                        t.tailwind.includes(searchQuery)
                      )
                      .map((token) => (
                      <div key={token.name} className="flex items-center gap-4 py-2 border-b last:border-0">
                        <div className="w-16 text-sm font-medium">{token.name}</div>
                        <div className="flex-1 flex items-center gap-4">
                          <div
                            className="w-8 h-8 bg-primary rounded-md animate-pulse"
                            style={{ animationDuration: token.value }}
                          />
                          <div
                            className="w-16 h-2 bg-primary rounded-full"
                            style={{
                              animation: `progress ${token.value} ease-in-out infinite alternate`
                            }}
                          />
                        </div>
                        <CopyButton text={token.tailwind} label={token.value} />
                        <CopyButton text={token.tailwind} label={token.tailwind} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
      </div>

      <style jsx global>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </TooltipProvider>
  );
}
