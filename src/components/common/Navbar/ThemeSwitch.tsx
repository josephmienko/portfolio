import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure Bootstrap Icons are imported

export function ThemeSwitch() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      className="theme-toggle-btn btn btn-outline-secondary"
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
    >
      <i className={`bi ${theme === 'light' ? 'bi-sun' : 'bi-sun-fill'}`}></i>
    </button>
  );
}
