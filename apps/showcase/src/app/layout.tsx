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
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
