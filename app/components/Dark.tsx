"use client";
import React, { useState } from "react";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className="p-2 rounded-md border border-gray-300 dark:border-gray-700"
      onClick={toggleDarkMode}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
