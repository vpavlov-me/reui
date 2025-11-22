import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const ppObjectSans = localFont({
  src: [
    {
      path: "../fonts/PPObjectSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/PPObjectSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/PPObjectSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pp-object-sans",
});

export const metadata: Metadata = {
  title: "reui - Design System",
  description: "A modern React UI component library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ppObjectSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip Links for Accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-background focus:text-foreground focus:p-4 focus:rounded-md focus:border focus:shadow-lg"
          >
            Skip to main content
          </a>
          <a
            href="#navigation"
            className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-48 focus:bg-background focus:text-foreground focus:p-4 focus:rounded-md focus:border focus:shadow-lg"
          >
            Skip to navigation
          </a>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main id="main-content" className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
