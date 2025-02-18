type NavLink = {
  name: string;
  path: string;
};

type ConfigData = {
  brandName: string;
  logoPath: string;
  navLinks: NavLink[];
};

// Load variables from .env
const brandName = import.meta.env.VITE_BRAND_NAME || "Default Brand";
const logoPath = import.meta.env.VITE_LOGO_PATH || "/default-logo.png";

// Ensure non-null, non-empty string before splitting
const rawNavNames: string = import.meta.env.VITE_NAV_LINK_NAMES || "";
const rawNavPaths: string = import.meta.env.VITE_NAV_LINK_PATHS || "";

// Convert comma-separated strings to arrays
const navNames: string[] = rawNavNames.split(",").map((n) => n.trim());
const navPaths: string[] = rawNavPaths.split(",").map((p) => p.trim());

// Ensure both arrays have the same length before constructing JSON
const navLinks: NavLink[] = navNames.map((name: string, index: number): NavLink => ({
  name,
  path: navPaths[index] || "#", // Default to "#" if missing
}));

// Log to verify correct parsing
console.log("Parsed Navbar Config:", { brandName, logoPath, navLinks });

export function useConfig(): ConfigData {
  return { brandName, logoPath, navLinks };
}
