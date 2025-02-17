import { useState, useEffect } from "react";
import DOMPurify from "dompurify"; // Import DOMPurify for security

type NavLink = {
  name: string;
  path: string;
};

type ConfigData = {
  brandName: string;
  logoPath: string;
  navLinks: NavLink[];
};

// Move fetch outside of useState to ensure Vite's HMR works correctly
const fetchConfig = async (): Promise<ConfigData> => {
  try {
    const response = await fetch("/profile.config.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch config: ${response.statusText}`);
    }
    const rawData: ConfigData = await response.json();

    // Sanitize user-controlled content before setting it in state
    return {
      brandName: DOMPurify.sanitize(rawData.brandName),
      logoPath: rawData.logoPath,
      navLinks: rawData.navLinks.map((link) => ({
        name: DOMPurify.sanitize(link.name),
        path: link.path
      }))
    };
  } catch (error) {
    console.error("Error loading config:", error);
    return {
      brandName: "Error",
      logoPath: "/vite.svg",
      navLinks: []
    };
  }
};

export function useConfig() {
  const [config, setConfig] = useState<ConfigData>({
    brandName: "Loading...",
    logoPath: "/vite.svg",
    navLinks: []
  });

  useEffect(() => {
    fetchConfig().then(setConfig);
  }, []);

  return config;
}
