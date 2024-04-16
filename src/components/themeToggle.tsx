import React from 'react';
import { useTheme, ThemeProvider } from "@/components/providers.ts"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="absolute top-4 right-4 px-4 py-2 bg-gray-700 text-white rounded">
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeToggle;