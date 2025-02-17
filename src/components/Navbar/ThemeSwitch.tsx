import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { safeSetItem, safeGetItem } from "../../util/storage"; // Import the utility functions

export function ThemeSwitch() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return safeGetItem<"light" | "dark">("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    safeSetItem("theme", theme); // Using the safe utility
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="theme-toggle-btn btn btn-outline-secondary"
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
    >
      <i className={`bi ${theme === "light" ? "bi-sun" : "bi-sun-fill"}`}></i>
    </button>
  );
}
