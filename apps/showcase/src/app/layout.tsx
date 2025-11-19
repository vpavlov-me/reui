import type { Metadata } from "next";
import "./globals.css";

// PP Object Sans font configuration
// Add font files to src/fonts/ directory to enable custom fonts
// For now, falling back to system fonts

export const metadata: Metadata = {
  title: "Design System Showcase",
  description: "Multi-portal design system based on Shadcn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
