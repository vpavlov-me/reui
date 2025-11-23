"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

// Theme colors for favicon
const themeColors = {
  family: "#f97316", // Orange
  advisor: "#3b82f6", // Blue
  admin: "#8b5cf6", // Purple
  light: "#f97316", // Default orange
  dark: "#f97316", // Default orange
  system: "#f97316", // Default orange
};

function generateFaviconSvg(color: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="${color}"/>
    <path d="M9 8h8c2.761 0 5 2.239 5 5 0 2.063-1.248 3.833-3.029 4.598L22 24h-4l-2.5-5.5H13V24H9V8zm4 7h4c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1h-4v4z" fill="white"/>
  </svg>`;
}

export function DynamicFavicon() {
  const { theme } = useTheme();

  useEffect(() => {
    const updateFavicon = () => {
      // Get the current theme color
      const color = themeColors[theme as keyof typeof themeColors] || themeColors.light;

      // Generate SVG data URL
      const svgString = generateFaviconSvg(color);
      const dataUrl = `data:image/svg+xml,${encodeURIComponent(svgString)}`;

      // Update or create favicon link
      let link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = dataUrl;
      link.type = "image/svg+xml";
    };

    updateFavicon();
  }, [theme]);

  return null;
}
