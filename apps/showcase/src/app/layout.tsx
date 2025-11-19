import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ppObjectSans = localFont({
  src: [
    {
      path: "../../fonts/PPObjectSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/PPObjectSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/PPObjectSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pp-object-sans",
});

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
      <body className={`${ppObjectSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
